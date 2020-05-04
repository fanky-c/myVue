const chalk = require('chalk')
const msgPath = process.env.GIT_PARAMS
const msg = require('fs').readFileSync(msgPath, 'utf-8').trim()

/*
'build', // 构建
'ci', // ci
'chore', //  改变构建流程、或者增加依赖库、工具等
'docs', // 仅仅修改了文档，比如README, CHANGELOG, CONTRIBUTE等等
'feat', // 新增feature
'fix', // 修复bug
'add', // 新增文档
'update', // 更新内容
'perf', // 优化相关，比如提升性能、体验
'refactor', // 代码重构，没有加新功能或者修复bug
'revert', //  回滚到上一个版本
'style', //  仅仅修改了空格、格式缩进、逗号等等，不改变代码逻辑
'test' // 测试用例，包括单元测试、集成测试等
*/
const commitRE = /^(revert: )?(feat|fix|polish|docs|style|refactor|perf|test|workflow|ci|chore|types|build)(\(.+\))?: .{1,50}/

//不符合规范
if (!commitRE.test(msg)) {
  console.log()
  console.error(
    `    ${chalk.bgRed.white(' 错误: ')} ${chalk.red(`不合法的提交信息格式.`)}\n\n` +
    chalk.red(`  自动生成变更日志需要正确的提交消息格式。例如:\n\n`) +
    `    ${chalk.green(`feat: add 'comments' option`)}\n` +
    `    ${chalk.green(`fix: handle events on blur`)}\n\n` +
    chalk.red(`  你也可以使用命令行 ${chalk.cyan(`npm run commit`)} 来交互式生成提交消息.\n`)
  )
  process.exit(1)
}
