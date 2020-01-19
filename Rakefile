desc "Serve portfolYOU in dev mode: with theme gem and _config.dev.yml"
task :dev do
    sh 'gem', 'build', 'portfolyou-jekyll-theme.gemspec'
    cd 'docs/'
    sh 'bundle', 'install'
    sh 'bundle', 'exec', 'jekyll', 'serve', '-o', '--config', '_config.dev.yml'
end