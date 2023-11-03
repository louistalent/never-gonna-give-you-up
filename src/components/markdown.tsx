import React from 'react';
import styled from 'styled-components';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';

const mdParser = new MarkdownIt();

const Markdown = ({text}: {text: string}) => {
    return (
        <StyledView dangerouslySetInnerHTML={{__html: mdParser.render(text)}} />
    )
}

export const MarkdownEditor = ({text, onChange, className, style}: {text: string, className?: string, style?: React.CSSProperties, onChange: (text)=>void}) => {
    return (
        <StyledView>
    		<MdEditor className={className} view={{ menu: true, md: true, html: false}} style={{ minHeight: 100, ...style }} value={text} renderHTML={text => mdParser.render(text)} onChange={v=>onChange(v.text)} />
        </StyledView>
    )
}

const StyledView = styled.div`
    line-height: 1.5;
	h1, h2, h3, h4, h5, h6 {
		margin-top: 0;
		margin-bottom: 0;
		line-height: 1.5;
	}
	h1 {
		font-size: 24px;
	}
	h2 {
		font-size: 20px;
	}
	h3 {
		font-size: 18px;
	}
	h4 {
		font-size: 16px;
	}
	p {
		margin-top: 0;
		margin-bottom: 0;
	}
	ol {
		padding-left: 1.5em !important;
		margin-top: 0.5em !important;
		margin-bottom: 0.5em !important;
	}
	pre {
		padding: 0;
	}
	code {
		line-height: 1;
	}
	section {
		padding: 0;
	}
	.rc-md-editor {
		background-color: var(--light);
		border: 1px solid var(--border);
		color: var(--text);
		&.full {
			top: 64px;
		}
		.drop-wrap {
			background-color: var(--menu-back);
			border-color: var(--border);
			.list-item {
				color: var(--text);
				background-color: var(--light-primary);
				&:hover {
					background-color: var(--primary);
					color: #eee;
				}
			}
		}
		.rc-md-navigation {
			background-color: var(--light-back);
			border-bottom: 1px solid var(--border);
			.navigation-nav {
				color: var(--text);
			}
			.button {
				color: var(--text);
				&:hover {
					color: var(--gray-text);
				}
			}
		}
		.editor-container {
			section {
				background-color: var(--light);
			}
			>.section {
				border-right: 1px solid var(--border);
			}
			.input {
				background: var(--light);
				color: var(--text);
			}
			.custom-html-style {
				color: var(--text);
			}
		}
	}
	a {
		color: var(--text);
	}
	blockquote {
		color: var(--text);
		border-left: 6px solid var(--gray-text);
		background: none repeat scroll 0 0 var(--light-back);
		padding: 5px 8px 5px 30px;
		position: relative;
		margin: 16px 0;
	}
	pre, code {
		background-color: var(--back);
	}
	table {
		border: 1px solid var(--border);
		border-collapse: collapse;
		border-spacing: 0;
		box-sizing: border-box;
		tr {
			border: 1px solid var(--border);
			th, td {
				background-color: transparent;
				border: 1px solid var(--border);
			}
			th {
				font-weight: 700;
				padding: 10px 6px;
				word-break: break-word;
			}
			td {
				padding: 10px 15px;
				min-width: 60px;
				word-break: break-word;

			}
		}
		tbody {

		}
	}
`;

export default Markdown;