# Internet Freedom Hack
Currently in development at https://internetfreedomhack.netlify.com

Continuously deployed via Netlify.

Based on [Type Theme](https://rohanchandra.github.io/type-theme/)

---
## Development setup (macOS)
1. Install Ruby environment manager
```shell
brew install rbenv
```
2. Find the latest version
```shell
rbenv install —list
```
3. Install one of the Ruby versions
```shell
rbenv install 2.5.0
```
4. Run the following command and then follow instructions
```shell
rbenv init
```
5. Restart the terminal
6. Set your local ruby to the version you installed in step 3
```shell
rbenv local 2.5.0
```
7. Run the install bundler
```shell
gem install bundler
```
8. Install the dependencies listed in the Gemfile
```shell
bundler install
```
9. Start the server
```shell
jekyll serve
```
If this doesn't work try
```shell
bundle exec jekyll serve
```
