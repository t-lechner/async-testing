import { Rule } from "eslint";
import { CallExpression } from "estree";

class RuleContainer {
    hasDoneCallback: boolean;
    errorMessage = "Require done callback inside subscribe block.";
    get subscribeNode() {
        if (this.node.callee.type === 'MemberExpression') {
            return this.node.callee.property;
        }
    }
    constructor(public node: CallExpression & Rule.NodeParentExtension) {
    }

    rangeEquals(node) {
        return this.node.range === node.range;
    }

    static isSubscribeExpression(node: CallExpression & Rule.NodeParentExtension) {
        return node.callee.type === 'MemberExpression' &&
            node.callee.property.type === 'Identifier' &&
            node.callee.property.name === 'subscribe';
    }
}

export const doneInSubscribe: Rule.RuleModule = {
    meta: {
        type: "problem",
        docs: {
            description: "This rule should be used to secure flaky async test implementations. - It is required to do a done callback when subscribing inside a async test.",
            category: "async tests",
            url: "https://medium.com/angular-in-depth/how-to-test-observables-a00038c7faad"
        }
    },
    create: (context: Rule.RuleContext) => {
        let container: RuleContainer;
        return {
            CallExpression: (node) => {
                if (RuleContainer.isSubscribeExpression(node)) {
                    container = new RuleContainer(node)
                }
            },
            'CallExpression > Identifier[name="done"]': (node) => {
                if (container) {
                    container.hasDoneCallback = true;
                }
            },
            'CallExpression:exit': function(node:  CallExpression & Rule.NodeParentExtension) {
                if (container && container.rangeEquals(node) && !container.hasDoneCallback) {
                    context.report({
                        node: container.subscribeNode,
                        message: container.errorMessage
                    });
                    container = undefined;
                }
            }
        }
    },
};
