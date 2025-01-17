module.exports = {
  types: [
    { type: 'feat', section: 'Features' },
    { type: 'fix', section: 'Bug Fixes' },
    { type: 'test', section: 'Tests', hidden: true },
    { type: 'build', section: 'Build System', hidden: true },
    { type: 'ci', hidden: true },
    { type: 'chore', hidden: true },
    { type: 'docs', hidden: true },
    { type: 'style', hidden: true },
    { type: 'refactor', hidden: true },
    { type: 'perf', hidden: true },
  ],
  // TODO: Fix URLs.
  commitUrlFormat: 'URL/-/commit/{{hash}}',
  compareUrlFormat:
    'URL/compare?from={{previousTag}}&to={{currentTag}}',
  releaseCommitMessageFormat: 'chore(release): {{currentTag}} [ci skip]',
  path: '.',
};
