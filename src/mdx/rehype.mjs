import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { remarkRehypeWrap } from 'remark-rehype-wrap'
import { mdxAnnotations } from 'mdx-annotations'
import { toString } from 'mdast-util-to-string'
import { visit } from 'unist-util-visit'
import rehypeSlug from 'rehype-slug'
import shiki from 'shiki'

let highlighter

function rehypeShiki() {
	return async tree => {
		highlighter =
			highlighter ?? (await shiki.getHighlighter({ theme: 'css-variables' }))

		visit(tree, 'element', (node, _nodeIndex, parentNode) => {
			if (node.tagName === 'code' && parentNode.tagName === 'pre') {
				let language = node.properties.className?.[0]?.replace(/^language-/, '')

				if (!language) {
					return
				}

				let tokens = highlighter.codeToThemedTokens(
					node.children[0].value,
					language
				)

				node.children = []
				node.properties.highlightedCode = shiki.renderToHtml(tokens, {
					elements: {
						line: ({ children }) => `<span>${children}</span>`,
						code: ({ children }) => children,
						pre: ({ children }) => children,
					},
				})
			}
		})
	}
}

export const rehypePlugins = [
	mdxAnnotations.rehype,
	rehypeSlug,
	[rehypeAutolinkHeadings, { behavior: 'wrap', test: ['h2'] }],
	rehypeShiki,
	[
		remarkRehypeWrap,
		{
			transform: article => {
				article.children.splice(0, 1)
				let heading = article.children.find(n => n.tagName === 'h2')
				article.properties = { ...heading.properties, title: toString(heading) }
				heading.properties = {}
				return article
			},
			node: { tagName: 'article', type: 'element' },
			start: 'element[tagName=hr]',
		},
	],
]
