/**
* Copyright 2015 IBM Corp.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
**/

var q = require("Q");

module.exports = {
    
    
    ls: function(callback) {
        
        var d = q.defer();
      
        var exec = require('child_process').exec;
        exec('docker-machine ls', function (error, stdout, stderr) {
            
            if(error) {
                d.reject(stdout);
                return;
            }
                
            
            d.resolve(stdout);
            
        }); 
        
        // allow standard node callbacks
        d.promise.nodeify(callback);
        
        return d.promise;
    },
    
    create: function(machineName,options,callback) {
        
        var d = q.defer();
        
        var flags="";
        
        for (var key in options) {
            if (options.hasOwnProperty(key)) {
                flags += " --"+key+" "+ options[key];
            }
        }
        
        var command = 'docker-machine create '+flags+' '+machineName;
        
        console.log(command);
        
        var exec = require('child_process').exec;
        exec(command, function (error, stdout, stderr) {
            
            if(error) {
                d.reject(stdout);
                return;
            }
                
            module.exports.inspect(machineName).then(function(output){
                
                d.resolve(output);
                
            }).fail(function(err){ 
            
                d.reject(err);
            });
            
            
        }); 
        
        // allow standard node callbacks
        d.promise.nodeify(callback);
        
        return d.promise;
        
    },
    
    
    
    rm: function(machineName,callback) {
        
        var d = q.defer();
      
        var exec = require('child_process').exec;
        exec('docker-machine rm '+machineName, function (error, stdout, stderr) {
            
            if(error) {
                d.reject(stdout);
                return;
            }
                
            d.resolve(stdout);
            
        }); 
        
        // allow standard node callbacks
        d.promise.nodeify(callback);
        
        return d.promise;
    },
    
    
    active: function(machineName,callback) {
        
        var d = q.defer();
      
        var exec = require('child_process').exec;
        exec('docker-machine active '+machineName, function (error, stdout, stderr) {
            
            if(error) {
                d.reject(stdout);
                return;
            }
                
            d.resolve(stdout);
            
        }); 
        
        // allow standard node callbacks
        d.promise.nodeify(callback);
        
        return d.promise;
    },
    
    
    inspect: function(machineName,callback) {
        
        var d = q.defer();
      
        var exec = require('child_process').exec;
        exec('docker-machine inspect '+machineName, function (error, stdout, stderr) {
            
            if(error) {
                d.reject(stdout);
                return;
            }
            
            try {
                var machine = JSON.parse(stdout);
                
            } catch (e){
                d.reject(e);
            }
                
            d.resolve(machine);
            
        }); 
        
        // allow standard node callbacks
        d.promise.nodeify(callback);
        
        return d.promise;
    },
    
    
    
    regenerateCerts: function(machineName,options,callback) {
        
        var d = q.defer();
        
        var command = 'docker-machine regenerate-certs '+machineName;
        
        console.log(command);
        
        var exec = require('child_process').exec;
        exec(command, function (error, stdout, stderr) {
            
            if(error) {
                d.reject(stdout);
                return;
            }
                
            module.exports.inspect(machineName).then(function(output){
                
                d.resolve(output);
                
            }).fail(function(err){ 
            
                d.reject(err);
            });
            
            
        }); 
        
        // allow standard node callbacks
        d.promise.nodeify(callback);
        
        return d.promise;
        
    },
    
    
    
    
    kill: function(machineName,callback) {
        
        var d = q.defer();
      
        var exec = require('child_process').exec;
        exec('docker-machine kill '+machineName, function (error, stdout, stderr) {
            
            if(error) {
                d.reject(stdout);
                return;
            }
                
            d.resolve(stdout);
            
        }); 
        
        // allow standard node callbacks
        d.promise.nodeify(callback);
        
        return d.promise;
    },
    
    
    start: function(machineName,callback) {
        
        var d = q.defer();
      
        var exec = require('child_process').exec;
        exec('docker-machine start '+machineName, function (error, stdout, stderr) {
            
            if(error) {
                d.reject(stdout);
                return;
            }
                
            d.resolve(stdout);
            
        }); 
        
        // allow standard node callbacks
        d.promise.nodeify(callback);
        
        return d.promise;
    },
    
    
    
    stop: function(machineName,callback) {
        
        var d = q.defer();
      
        var exec = require('child_process').exec;
        exec('docker-machine stop '+machineName, function (error, stdout, stderr) {
            
            if(error) {
                d.reject(stdout);
                return;
            }
                
            d.resolve(stdout);
            
        }); 
        
        // allow standard node callbacks
        d.promise.nodeify(callback);
        
        return d.promise;
    },
    
    
    
    
    restart: function(machineName,callback) {
        
        var d = q.defer();
      
        var exec = require('child_process').exec;
        exec('docker-machine restart '+machineName, function (error, stdout, stderr) {
            
            if(error) {
                d.reject(stdout);
                return;
            }
                
            d.resolve(stdout);
            
        }); 
        
        // allow standard node callbacks
        d.promise.nodeify(callback);
        
        return d.promise;
    },
    
    
    
    upgrade: function(machineName,callback) {
        
        var d = q.defer();
      
        var exec = require('child_process').exec;
        exec('docker-machine upgrade '+machineName, function (error, stdout, stderr) {
            
            if(error) {
                d.reject(stdout);
                return;
            }
                
            d.resolve(stdout);
            
        }); 
        
        // allow standard node callbacks
        d.promise.nodeify(callback);
        
        return d.promise;
    },
    
    
    ssh: function(machineName, command, callback) {
        
        var d = q.defer();
      
        var exec = require('child_process').exec;
        exec('docker-machine ssh '+machineName+ ' '+command, function (error, stdout, stderr) {
            
            if(error) {
                d.reject(stdout);
                return;
            }
                
            d.resolve(stdout);
            
        }); 
        
        // allow standard node callbacks
        d.promise.nodeify(callback);
        
        return d.promise;
    },
    
    
    
    url: function(machineName,callback) {
        
        var d = q.defer();
      
        var exec = require('child_process').exec;
        exec('docker-machine url '+machineName, function (error, stdout, stderr) {
            
            if(error) {
                d.reject(stdout);
                return;
            }
                
            d.resolve(stdout);
            
        }); 
        
        // allow standard node callbacks
        d.promise.nodeify(callback);
        
        return d.promise;
    },
    
    
    
    ip: function(machineName,callback) {
        
        var d = q.defer();
      
        var exec = require('child_process').exec;
        exec('docker-machine ip '+machineName, function (error, stdout, stderr) {
            
            if(error) {
                d.reject(stdout);
                return;
            }
                
            d.resolve(stdout);
            
        }); 
        
        // allow standard node callbacks
        d.promise.nodeify(callback);
        
        return d.promise;
    }
    
};