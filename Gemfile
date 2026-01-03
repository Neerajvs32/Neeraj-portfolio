source "https://rubygems.org"

# Hello! This is your personal Jekyll Theme. This file is required to build your site with Jekyll.

# To learn more, read the documentation at https://jekyllrb.com/docs/installation/
gem "jekyll", "~> 4.4.1"

# This is the default theme for new Jekyll sites. You may change this to anything you like.
gem "minima", "~> 2.5"

# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
# gem "github-pages", group: :jekyll_plugins

# If you have any Jekyll plugins, add them here as a list.
# plugin "jekyll-feed", "~> 0.12"

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby (since `v0.1.x` is not compatible with `http_parser.rb` >= `v0.7.x`)
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]