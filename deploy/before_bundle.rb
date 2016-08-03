run "mkdir -p #{config.shared_path}/node_modules"
run "ln -s #{config.shared_path}/node_modules #{config.release_path}/node_modules"
