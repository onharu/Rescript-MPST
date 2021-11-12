// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var List = require("rescript/lib/js/list.js");
var Curry = require("rescript/lib/js/curry.js");
var Raw$RescriptMpst = require("./Raw.js");
var RawTransport$RescriptMpst = require("./RawTransport.js");

function lens_a(param) {
  return {
          get: (function (param) {
              return param[0];
            }),
          put: (function (param, a) {
              return [
                      a,
                      param[1],
                      param[2]
                    ];
            })
        };
}

function lens_b(param) {
  return {
          get: (function (param) {
              return param[1];
            }),
          put: (function (param, b) {
              return [
                      param[0],
                      b,
                      param[2]
                    ];
            })
        };
}

function lens_c(param) {
  return {
          get: (function (param) {
              return param[2];
            }),
          put: (function (param, c) {
              return [
                      param[0],
                      param[1],
                      c
                    ];
            })
        };
}

function alice(param) {
  return {
          role_label: (function (param) {
              return param.VAL;
            }),
          role_lens: lens_a(undefined)
        };
}

function bob(param) {
  return {
          role_label: (function (param) {
              return param.VAL;
            }),
          role_lens: lens_b(undefined)
        };
}

function carol(param) {
  return {
          role_label: (function (param) {
              return param.VAL;
            }),
          role_lens: lens_c(undefined)
        };
}

function hello(param) {
  return {
          label_closed: (function (param) {
              return param.VAL;
            }),
          label_open: (function (v) {
              return {
                      NAME: "hello",
                      VAL: v
                    };
            })
        };
}

function goodbye(param) {
  return {
          label_closed: (function (param) {
              return param.VAL;
            }),
          label_open: (function (v) {
              return {
                      NAME: "goodbye",
                      VAL: v
                    };
            })
        };
}

function list_match(param, param$1) {
  return Raw$RescriptMpst.assertfalse(undefined);
}

function hello_or_goodbye(param) {
  return {
          concat: (function (l, r) {
              return {
                      hd: {
                        NAME: "hello",
                        VAL: Raw$RescriptMpst.assertfalse(undefined)
                      },
                      tl: {
                        hd: {
                          NAME: "goodbye",
                          VAL: Raw$RescriptMpst.assertfalse(undefined)
                        },
                        tl: /* [] */0
                      }
                    };
            }),
          split: (function (lr) {
              return [
                      {
                        hd: {
                          NAME: "hello",
                          VAL: Raw$RescriptMpst.assertfalse(undefined)
                        },
                        tl: /* [] */0
                      },
                      {
                        hd: {
                          NAME: "goodbye",
                          VAL: Raw$RescriptMpst.assertfalse(undefined)
                        },
                        tl: /* [] */0
                      }
                    ];
            })
        };
}

function to_bob(disj) {
  return {
          concat: (function (l, r) {
              return List.map((function (v) {
                            return {
                                    NAME: "Bob",
                                    VAL: {
                                      __out_witness: v
                                    }
                                  };
                          }), Curry._2(Curry._1(disj, undefined).concat, List.map((function (param) {
                                    return param.VAL.__out_witness;
                                  }), l), List.map((function (param) {
                                    return param.VAL.__out_witness;
                                  }), r)));
            }),
          split: (function (lr) {
              var match = Curry._1(Curry._1(disj, undefined).split, List.map((function (param) {
                          return param.VAL.__out_witness;
                        }), lr));
              return [
                      List.map((function (v) {
                              return {
                                      NAME: "Bob",
                                      VAL: {
                                        __out_witness: v
                                      }
                                    };
                            }), match[0]),
                      List.map((function (v) {
                              return {
                                      NAME: "Bob",
                                      VAL: {
                                        __out_witness: v
                                      }
                                    };
                            }), match[1])
                    ];
            })
        };
}

function open_variant_to_tag($$var) {
  return Raw$RescriptMpst.destruct_polyvar(Curry._1($$var, Raw$RescriptMpst.dontknow(undefined)))[0];
}

function send(sess, role, label, v) {
  var roletag = open_variant_to_tag(role);
  var labeltag = open_variant_to_tag(label);
  RawTransport$RescriptMpst.raw_send(sess.mpchan, roletag, labeltag, v);
  return {
          dummy_witness: Raw$RescriptMpst.dontknow(undefined),
          mpchan: sess.mpchan
        };
}

function receive(sess, role) {
  var roletag = open_variant_to_tag(role);
  return RawTransport$RescriptMpst.raw_receive(sess.mpchan, roletag).then(function (param) {
              var cont_dummy_witness = Raw$RescriptMpst.dontknow(undefined);
              var cont_mpchan = sess.mpchan;
              var cont = {
                dummy_witness: cont_dummy_witness,
                mpchan: cont_mpchan
              };
              return Raw$RescriptMpst.make_polyvar(param[0], [
                          param[1],
                          cont
                        ]);
            });
}

function close(param) {
  
}

function $neg$neg$great(_from, _to, _label, _next) {
  return Raw$RescriptMpst.dontknow(undefined);
}

function finish(param) {
  return Raw$RescriptMpst.dontknow(undefined);
}

function choice_at(_alice, _disj, param, param$1) {
  return Raw$RescriptMpst.dontknow(undefined);
}

function extract(_g, _role) {
  return Raw$RescriptMpst.todo(undefined);
}

function g(param) {
  return choice_at(alice, to_bob(hello_or_goodbye), [
              alice,
              (Raw$RescriptMpst.dontknow(undefined), Raw$RescriptMpst.dontknow(undefined), Raw$RescriptMpst.dontknow(undefined))
            ], [
              alice,
              (Raw$RescriptMpst.dontknow(undefined), Raw$RescriptMpst.dontknow(undefined))
            ]);
}

function a(param) {
  g(undefined);
  var ch = Raw$RescriptMpst.todo(undefined);
  var ch1 = send(ch, (function (x) {
          return {
                  NAME: "Bob",
                  VAL: x
                };
        }), (function (x) {
          return {
                  NAME: "hello",
                  VAL: x
                };
        }), 123);
  return receive(ch1, (function (x) {
                  return {
                          NAME: "Carol",
                          VAL: x
                        };
                })).then(function (param) {
              
            });
}

function b(param) {
  g(undefined);
  var ch = Raw$RescriptMpst.todo(undefined);
  return receive(ch, (function (x) {
                  return {
                          NAME: "Alice",
                          VAL: x
                        };
                })).then(function (ret) {
              if (ret.NAME === "hello") {
                send(ret.VAL[1], (function (x) {
                        return {
                                NAME: "Carol",
                                VAL: x
                              };
                      }), (function (x) {
                        return {
                                NAME: "hello",
                                VAL: x
                              };
                      }), 123);
              } else {
                send(ret.VAL[1], (function (x) {
                        return {
                                NAME: "Carol",
                                VAL: x
                              };
                      }), (function (x) {
                        return {
                                NAME: "goodbye",
                                VAL: x
                              };
                      }), "foo");
              }
              
            });
}

function c(param) {
  g(undefined);
  var ch = Raw$RescriptMpst.todo(undefined);
  return receive(ch, (function (x) {
                  return {
                          NAME: "Bob",
                          VAL: x
                        };
                })).then(function (ret) {
              if (ret.NAME === "hello") {
                send(ret.VAL[1], (function (x) {
                        return {
                                NAME: "Alice",
                                VAL: x
                              };
                      }), (function (x) {
                        return {
                                NAME: "hello",
                                VAL: x
                              };
                      }), 123);
              } else {
                ret.VAL[1];
              }
              
            });
}

exports.lens_a = lens_a;
exports.lens_b = lens_b;
exports.lens_c = lens_c;
exports.alice = alice;
exports.bob = bob;
exports.carol = carol;
exports.hello = hello;
exports.goodbye = goodbye;
exports.list_match = list_match;
exports.hello_or_goodbye = hello_or_goodbye;
exports.to_bob = to_bob;
exports.open_variant_to_tag = open_variant_to_tag;
exports.send = send;
exports.receive = receive;
exports.close = close;
exports.$neg$neg$great = $neg$neg$great;
exports.finish = finish;
exports.choice_at = choice_at;
exports.extract = extract;
exports.g = g;
exports.a = a;
exports.b = b;
exports.c = c;
/* No side effect */
