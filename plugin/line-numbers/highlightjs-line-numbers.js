// jshint multistr:true

(function (w, d) {
    'use strict';

    const NUMBER_LINE_NAME = "hljs-line",
          DATA_ATTR_NAME = "data-line-number",
          DATA_ATTR_INDEX = "data-first-line",
          DATA_ATTR_OFF = "data-line-numbers",
          BREAK_LINE_REGEXP = /\r?\n/g;

    if (w.hljs) {
        w.hljs.initLineNumbersOnLoad = initLineNumbersOnLoad;
        w.hljs.lineNumbersBlock = lineNumbersBlock;
        w.hljs.lineNumbersValue = lineNumbersValue;

        addStyles();
    } else {
        w.console.error('highlight.js not detected!');
    }

    function addStyles () {
        var css = d.createElement('style');
        css.type = 'text/css';
        css.innerHTML = `
            .${NUMBER_LINE_NAME} {
                position: relative;
                margin-left: 3em !important;
            }
            .${NUMBER_LINE_NAME}:before {
                content: attr(${DATA_ATTR_NAME});
                position: absolute;
                width: 1.65em;
                left: -3em;
                opacity: .15;
                text-indent: 0;
                text-align: right;
            }`;
        d.getElementsByTagName('head')[0].appendChild(css);
    }

    function initLineNumbersOnLoad (options) {
        if (d.readyState === 'interactive' || d.readyState === 'complete') {
            documentReady(options);
        } else {
            w.addEventListener('DOMContentLoaded', function () {
                documentReady(options);
            });
        }
    }

    function documentReady (options) {
        try {
            d.querySelectorAll('code.hljs, code.nohighlight').forEach(block => {
                lineNumbersBlock(block, options);
            });
        } catch (e) {
            w.console.error('LineNumbers error: ', e);
        }
    }

    function lineNumbersBlock (element, options) {
        if (typeof element !== 'object') return;

        async(() => {
            element.innerHTML = lineNumbersInternal(element, options);
        });
    }

    function lineNumbersValue (value, options) {
        if (typeof value !== 'string') return;

        var element = document.createElement('code');
        element.innerHTML = value;

        return lineNumbersInternal(element, options);
    }

    function lineNumbersInternal (element, options) {
        // define options or set default
        options = options || {
            singleLine: false
        };

        // convert options
        var firstLineIndex = parseInt(getAttribute(element, DATA_ATTR_INDEX, 1));

        if (getAttribute(element, DATA_ATTR_OFF, "on") != "on") firstLineIndex = 0;

        duplicateMultilineNodes(element);

        return addLineNumbersBlockFor(element.innerHTML, !!options.singleLine ? 0 : firstLineIndex);
    }

    function getAttribute(element, attrName, fallback) {
        if (!element.hasAttribute(attrName) && element.parentNode && element.parentNode.tagName == "PRE")
            element = element.parentNode;

        return element.hasAttribute(attrName) ? element.getAttribute(attrName) : fallback;
    }

    function addLineNumbersBlockFor (inputHtml, firstLineIndex) {

        var lines = getLines(inputHtml);

        // if last line contains only carriage return remove it
        if (lines[lines.length-1].trim() === '') {
            lines.pop();
        }

        if (lines.length > 0 && firstLineIndex > 0) {
            var html = '';

            for (var i = 0, l = lines.length; i < l; i++) {
                html += `<div class="${NUMBER_LINE_NAME}" ${DATA_ATTR_NAME}="${firstLineIndex + i}" data-indentation="${getIndentation(lines[i])}">${lines[i].length > 0 ? lines[i] : ' '}</div>`;
            }

            return html;
        }

        return inputHtml;
    }

    function getIndentation(inputHtml) {
        var el = document.createElement("span"), m;
        el.innerHTML = inputHtml;

        return (m = /^\s+/.exec(el.textContent)) ? m[0].length : 0;
    }

    /**
     * Recursive method for fix multi-line elements implementation in highlight.js
     * Doing deep passage on child nodes.
     * @param {HTMLElement} element
     */
    function duplicateMultilineNodes (element) {
        var nodes = element.childNodes;
        for (var node in nodes) {
            if (nodes.hasOwnProperty(node)) {
                var child = nodes[node];
                if (getLinesCount(child.textContent) > 0) {
                    if (child.childNodes.length > 0) {
                        duplicateMultilineNodes(child);
                    } else {
                        duplicateMultilineNode(child.parentNode);
                    }
                }
            }
        }
    }

    /**
     * Method for fix multi-line elements implementation in highlight.js
     * @param {HTMLElement} element
     */
    function duplicateMultilineNode (element) {
        var className = element.className;

        if ( ! /hljs-/.test(className)) return;

        var lines = getLines(element.innerHTML);
        var result = "";

        for (var i = 0; i < lines.length; i++) {
            var lineText = lines[i].length > 0 ? lines[i] : ' ';
            result += `<span class="${className}">${lineText}</span>\n`;
        }

        element.innerHTML = result.trim();
    }

    function getLines (text) {
        if (text.length === 0) return [];
        return text.split(BREAK_LINE_REGEXP);
    }

    function getLinesCount (text) {
        return (text.trim().match(BREAK_LINE_REGEXP) || []).length;
    }

    function async (func) {
        w.setTimeout(func, 0);
    }

}(window, document));
