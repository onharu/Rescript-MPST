// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';


function raw_send(mpchan, role, label, v) {
  var ch = mpchan.channels[role];
  ch.postMessage([
        label,
        v
      ]);
  
}

function raw_receive(mpchan, role) {
  var ch = mpchan.channels[role];
  return new Promise((function (_resolve, _reject) {
                ch.onmessage = (function (_e) {
                    
                  });
                
              }));
}

exports.raw_send = raw_send;
exports.raw_receive = raw_receive;
/* No side effect */