
const regexReplacements = () => {
    return [
        {
            name: "space",
            regex: /[^\S\r\n]/g,
            code: '&nbsp;'
        },
        {
            name: "string-single",
            regex: /('([^']|'')*')/g,
            code: "string",
            multiple: true
        },
        {
            name: "string-double",
            regex: /("([^"]|"")*")/g,
            code: "string",
            multiple: true
        },
        {
            name: "array",
            regex: /\[.*?\]/g,
            code: ["[", "]"],
            multiple: true
        },
        {
            name: "function",
            regex: /\(.*?\)/g,
            code: ["(", ")"],
            multiple: true
        },
        {
            name: "number",
            regex: /(\d+)/g,
            code: "number",
            multiple: true
        },
        {
            name: "return",
            regex: /\r?\n/g,
            code: '<br />'
        },
        {
            name: "variable-const",
            regex: /const/gi,
            code: '<span class="variable">const</span>'
        },
        {
            name: "variable-let",
            regex: /let/gi,
            code: '<span class="variable">let</span>'
        },
        {
            name: "statement-return",
            regex: /return/gi,
            code: '<span class="statement">return</span>'
        },
        {
            name: "function-arrow",
            regex: /=>/gi,
            code: '<span class="function">=></span>'
        },
        {
            name: "function-brace-open",
            regex: /{/gi,
            code: '<span class="function">{</span>'
        },
        {
            name: "function-brace-close",
            regex: /}/gi,
            code: '<span class="function">}</span>'
        },
    ]
}

export default regexReplacements