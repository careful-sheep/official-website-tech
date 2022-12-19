module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        // 指定commit正文的前缀
        'type-enum': [2, 'always', ['feat', 'fix', 'revert']],
        // 指定commit的文本长度
        'subject-max-length': [1, 'always', 30]
    }
};
