# changing the module name
echo -n "Enter the name of your module (es6module) + [ENTER]: "
read moduleName
if [[ ! -z "${moduleName}" ]]; then
  find . -type f -not -path "*.git/*" -not -path "*node_modules*" -not -path "*starter.sh*" -exec sed -i "s/es6module/${moduleName}/g" {} \;
fi

# changing the username
echo -n "Enter your Github username (jonathanlurie) + [ENTER]: "
read githubUsername
if [[ ! -z "${githubUsername}" ]]; then
  find . -type f -not -path "*.git/*" -not -path "*node_modules*" -not -path "*starter.sh*" -exec sed -i "s/jonathanlurie/${githubUsername}/g" {} \;
fi

# reseting a few things
rm dist/* &> /dev/null&> /dev/null
rm -rf doc/* &> /dev/null
rm package-lock.json &> /dev/null
> readme.md &> /dev/null
> header.txt &> /dev/null
rm ./starter.sh &> /dev/null
