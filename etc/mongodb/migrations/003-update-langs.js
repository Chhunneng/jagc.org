db.language.remove({name: 'ruby1.9'});
db.solution.update({lng: 'ruby1.9'}, {$set: {lng: 'ruby2.0', path: '/usr/bin/ruby2.2' }}, {multi: true});
db.language.update({name: 'ruby2.0'}, {$set:{name: 'ruby2.0', path: '/usr/bin/ruby2.2'}}, {upsert : true});
db.language.update({ name: 'python3'}, {$set: {name: 'python3', path: '/usr/bin/python3.5'}}, {upsert:true});
db.language.update({ name: 'golfscript'}, {$set: {name: 'golfscript', path: '/usr/bin/golfscript.rb'}}, {upsert:true});
db.language.update({ name: 'befunge'}, {$set: {name: 'befunge', path: '/usr/bin/bef', args: ['-q']}}, {upsert:true});
db.language.update({ name: 'pyth'}, {$set: {name: 'pyth', path: '/usr/bin/pyth.py'}}, {upsert:true});
db.language.update({ name: 'cjam'}, {$set: {name: 'cjam', path: '/usr/bin/java', args : ['-jar', '/usr/bin/cjam-0.6.5.jar']}}, {upsert:true});
db.language.update({ name: 'julia'}, {$set: {name: 'julia', path: '/usr/bin/julia'}}, {upsert:true});
db.language.update({ name: 'lua'}, {$set: {name: 'lua', path: '/usr/bin/lua5.3'}}, {upsert:true});
