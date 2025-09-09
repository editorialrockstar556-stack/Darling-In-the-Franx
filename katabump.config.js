export default {
  files: ["package.json"],       // files to bump version
  tag: true,                     // create git tag on release
  commit: true,                  // commit bumped version
  changelog: "CHANGELOG.md",     // changelog file to update
  types: {                       // semantic commit types
    feat: "minor",
    fix: "patch",
    chore: false,
    docs: false,
    test: false
  }
};