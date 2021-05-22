module.exports = function({ types: t }) {
    return {
        visitor: {
            CallExpression(path, state) {
                let node = path.node.callee
                if(t.isMemberExpression(node) 
                    && t.isIdentifier(node.object) 
                    && node.object.name === 'console' 
                    && t.isIdentifier(node.property) 
                    && node.property.name === 'log' ){
                        path.parentPath.remove();
                }
            }
        }
    }
}