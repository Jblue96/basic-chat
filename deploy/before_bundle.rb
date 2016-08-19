require 'erb'

app_name = config.app
db_name = config.node['engineyard']['environment']['apps'].select{|a| a.name == app_name}.first['database_name']

environment = config.framework_env
dialect = case config.node['engineyard']['environment']['db_stack_name']
    when /mysql/ then "mysql"
    when /postgres/ then "postgres"
url = "#{dialect}://#{ENV['DB_USER']}:#{ENV['DB_PASSWORD']}@#{ENV['DB_HOST']}/#{db_name}"

template = File.read("#{config.release_path}/config/config.json.erb")
output = ERB.new(template).result
File.open("#{config.release_path}/config/config.json", "w") { |f| f.write(output) }
