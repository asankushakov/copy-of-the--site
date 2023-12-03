(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3714], {
        1183: function(e, t, r) {
            var i = r(185).Buffer,
                n = r(1390);
            ! function() {
                var t, u, b, m, y, v, g, _ = {
                        7160: function(e, t, r) {
                            t.bignum = r(711), t.define = r(495).define, t.base = r(853), t.constants = r(7335), t.decoders = r(6701), t.encoders = r(3418)
                        },
                        495: function(e, t, r) {
                            var i = r(7160),
                                n = r(3782);

                            function Entity(e, t) {
                                this.name = e, this.body = t, this.decoders = {}, this.encoders = {}
                            }
                            t.define = function(e, t) {
                                return new Entity(e, t)
                            }, Entity.prototype._createNamed = function(e) {
                                var t;
                                try {
                                    t = r(6144).runInThisContext("(function " + this.name + "(entity) {\n  this._initNamed(entity);\n})")
                                } catch (e) {
                                    t = function(e) {
                                        this._initNamed(e)
                                    }
                                }
                                return n(t, e), t.prototype._initNamed = function(t) {
                                    e.call(this, t)
                                }, new t(this)
                            }, Entity.prototype._getDecoder = function(e) {
                                return e = e || "der", this.decoders.hasOwnProperty(e) || (this.decoders[e] = this._createNamed(i.decoders[e])), this.decoders[e]
                            }, Entity.prototype.decode = function(e, t, r) {
                                return this._getDecoder(t).decode(e, r)
                            }, Entity.prototype._getEncoder = function(e) {
                                return e = e || "der", this.encoders.hasOwnProperty(e) || (this.encoders[e] = this._createNamed(i.encoders[e])), this.encoders[e]
                            }, Entity.prototype.encode = function(e, t, r) {
                                return this._getEncoder(t).encode(e, r)
                            }
                        },
                        6483: function(e, t, r) {
                            var i = r(3782),
                                n = r(853).Reporter,
                                u = r(4300).Buffer;

                            function DecoderBuffer(e, t) {
                                if (n.call(this, t), !u.isBuffer(e)) {
                                    this.error("Input not Buffer");
                                    return
                                }
                                this.base = e, this.offset = 0, this.length = e.length
                            }

                            function EncoderBuffer(e, t) {
                                if (Array.isArray(e)) this.length = 0, this.value = e.map(function(e) {
                                    return e instanceof EncoderBuffer || (e = new EncoderBuffer(e, t)), this.length += e.length, e
                                }, this);
                                else if ("number" == typeof e) {
                                    if (!(0 <= e && e <= 255)) return t.error("non-byte EncoderBuffer value");
                                    this.value = e, this.length = 1
                                } else if ("string" == typeof e) this.value = e, this.length = u.byteLength(e);
                                else {
                                    if (!u.isBuffer(e)) return t.error("Unsupported type: " + typeof e);
                                    this.value = e, this.length = e.length
                                }
                            }
                            i(DecoderBuffer, n), t.C = DecoderBuffer, DecoderBuffer.prototype.save = function() {
                                return {
                                    offset: this.offset,
                                    reporter: n.prototype.save.call(this)
                                }
                            }, DecoderBuffer.prototype.restore = function(e) {
                                var t = new DecoderBuffer(this.base);
                                return t.offset = e.offset, t.length = this.offset, this.offset = e.offset, n.prototype.restore.call(this, e.reporter), t
                            }, DecoderBuffer.prototype.isEmpty = function() {
                                return this.offset === this.length
                            }, DecoderBuffer.prototype.readUInt8 = function(e) {
                                return this.offset + 1 <= this.length ? this.base.readUInt8(this.offset++, !0) : this.error(e || "DecoderBuffer overrun")
                            }, DecoderBuffer.prototype.skip = function(e, t) {
                                if (!(this.offset + e <= this.length)) return this.error(t || "DecoderBuffer overrun");
                                var r = new DecoderBuffer(this.base);
                                return r._reporterState = this._reporterState, r.offset = this.offset, r.length = this.offset + e, this.offset += e, r
                            }, DecoderBuffer.prototype.raw = function(e) {
                                return this.base.slice(e ? e.offset : this.offset, this.length)
                            }, t.R = EncoderBuffer, EncoderBuffer.prototype.join = function(e, t) {
                                return e || (e = new u(this.length)), t || (t = 0), 0 === this.length || (Array.isArray(this.value) ? this.value.forEach(function(r) {
                                    r.join(e, t), t += r.length
                                }) : ("number" == typeof this.value ? e[t] = this.value : "string" == typeof this.value ? e.write(this.value, t) : u.isBuffer(this.value) && this.value.copy(e, t), t += this.length)), e
                            }
                        },
                        853: function(e, t, r) {
                            t.Reporter = r(1293).b, t.DecoderBuffer = r(6483).C, t.EncoderBuffer = r(6483).R, t.Node = r(9374)
                        },
                        9374: function(e, t, r) {
                            var i = r(853).Reporter,
                                n = r(853).EncoderBuffer,
                                u = r(853).DecoderBuffer,
                                b = r(3523),
                                m = ["seq", "seqof", "set", "setof", "objid", "bool", "gentime", "utctime", "null_", "enum", "int", "objDesc", "bitstr", "bmpstr", "charstr", "genstr", "graphstr", "ia5str", "iso646str", "numstr", "octstr", "printstr", "t61str", "unistr", "utf8str", "videostr"],
                                y = ["key", "obj", "use", "optional", "explicit", "implicit", "def", "choice", "any", "contains"].concat(m);

                            function Node(e, t) {
                                var r = {};
                                this._baseState = r, r.enc = e, r.parent = t || null, r.children = null, r.tag = null, r.args = null, r.reverseArgs = null, r.choice = null, r.optional = !1, r.any = !1, r.obj = !1, r.use = null, r.useDecoder = null, r.key = null, r.default = null, r.explicit = null, r.implicit = null, r.contains = null, r.parent || (r.children = [], this._wrap())
                            }
                            e.exports = Node;
                            var v = ["enc", "parent", "children", "tag", "args", "reverseArgs", "choice", "optional", "any", "obj", "use", "alteredUse", "key", "default", "explicit", "implicit", "contains"];
                            Node.prototype.clone = function() {
                                var e = this._baseState,
                                    t = {};
                                v.forEach(function(r) {
                                    t[r] = e[r]
                                });
                                var r = new this.constructor(t.parent);
                                return r._baseState = t, r
                            }, Node.prototype._wrap = function() {
                                var e = this._baseState;
                                y.forEach(function(t) {
                                    this[t] = function() {
                                        var r = new this.constructor(this);
                                        return e.children.push(r), r[t].apply(r, arguments)
                                    }
                                }, this)
                            }, Node.prototype._init = function(e) {
                                var t = this._baseState;
                                b(null === t.parent), e.call(this), t.children = t.children.filter(function(e) {
                                    return e._baseState.parent === this
                                }, this), b.equal(t.children.length, 1, "Root node can have only one child")
                            }, Node.prototype._useArgs = function(e) {
                                var t = this._baseState,
                                    r = e.filter(function(e) {
                                        return e instanceof this.constructor
                                    }, this);
                                e = e.filter(function(e) {
                                    return !(e instanceof this.constructor)
                                }, this), 0 !== r.length && (b(null === t.children), t.children = r, r.forEach(function(e) {
                                    e._baseState.parent = this
                                }, this)), 0 !== e.length && (b(null === t.args), t.args = e, t.reverseArgs = e.map(function(e) {
                                    if ("object" != typeof e || e.constructor !== Object) return e;
                                    var t = {};
                                    return Object.keys(e).forEach(function(r) {
                                        r == (0 | r) && (r |= 0), t[e[r]] = r
                                    }), t
                                }))
                            }, ["_peekTag", "_decodeTag", "_use", "_decodeStr", "_decodeObjid", "_decodeTime", "_decodeNull", "_decodeInt", "_decodeBool", "_decodeList", "_encodeComposite", "_encodeStr", "_encodeObjid", "_encodeTime", "_encodeNull", "_encodeInt", "_encodeBool"].forEach(function(e) {
                                Node.prototype[e] = function() {
                                    throw Error(e + " not implemented for encoding: " + this._baseState.enc)
                                }
                            }), m.forEach(function(e) {
                                Node.prototype[e] = function() {
                                    var t = this._baseState,
                                        r = Array.prototype.slice.call(arguments);
                                    return b(null === t.tag), t.tag = e, this._useArgs(r), this
                                }
                            }), Node.prototype.use = function(e) {
                                b(e);
                                var t = this._baseState;
                                return b(null === t.use), t.use = e, this
                            }, Node.prototype.optional = function() {
                                return this._baseState.optional = !0, this
                            }, Node.prototype.def = function(e) {
                                var t = this._baseState;
                                return b(null === t.default), t.default = e, t.optional = !0, this
                            }, Node.prototype.explicit = function(e) {
                                var t = this._baseState;
                                return b(null === t.explicit && null === t.implicit), t.explicit = e, this
                            }, Node.prototype.implicit = function(e) {
                                var t = this._baseState;
                                return b(null === t.explicit && null === t.implicit), t.implicit = e, this
                            }, Node.prototype.obj = function() {
                                var e = this._baseState,
                                    t = Array.prototype.slice.call(arguments);
                                return e.obj = !0, 0 !== t.length && this._useArgs(t), this
                            }, Node.prototype.key = function(e) {
                                var t = this._baseState;
                                return b(null === t.key), t.key = e, this
                            }, Node.prototype.any = function() {
                                return this._baseState.any = !0, this
                            }, Node.prototype.choice = function(e) {
                                var t = this._baseState;
                                return b(null === t.choice), t.choice = e, this._useArgs(Object.keys(e).map(function(t) {
                                    return e[t]
                                })), this
                            }, Node.prototype.contains = function(e) {
                                var t = this._baseState;
                                return b(null === t.use), t.contains = e, this
                            }, Node.prototype._decode = function(e, t) {
                                var r, i = this._baseState;
                                if (null === i.parent) return e.wrapResult(i.children[0]._decode(e, t));
                                var n = i.default,
                                    b = !0,
                                    m = null;
                                if (null !== i.key && (m = e.enterKey(i.key)), i.optional) {
                                    var y = null;
                                    if (null !== i.explicit ? y = i.explicit : null !== i.implicit ? y = i.implicit : null !== i.tag && (y = i.tag), null !== y || i.any) {
                                        if (b = this._peekTag(e, y, i.any), e.isError(b)) return b
                                    } else {
                                        var v = e.save();
                                        try {
                                            null === i.choice ? this._decodeGeneric(i.tag, e, t) : this._decodeChoice(e, t), b = !0
                                        } catch (e) {
                                            b = !1
                                        }
                                        e.restore(v)
                                    }
                                }
                                if (i.obj && b && (r = e.enterObject()), b) {
                                    if (null !== i.explicit) {
                                        var g = this._decodeTag(e, i.explicit);
                                        if (e.isError(g)) return g;
                                        e = g
                                    }
                                    var _ = e.offset;
                                    if (null === i.use && null === i.choice) {
                                        if (i.any) var v = e.save();
                                        var w = this._decodeTag(e, null !== i.implicit ? i.implicit : i.tag, i.any);
                                        if (e.isError(w)) return w;
                                        i.any ? n = e.raw(v) : e = w
                                    }
                                    if (t && t.track && null !== i.tag && t.track(e.path(), _, e.length, "tagged"), t && t.track && null !== i.tag && t.track(e.path(), e.offset, e.length, "content"), i.any || (n = null === i.choice ? this._decodeGeneric(i.tag, e, t) : this._decodeChoice(e, t)), e.isError(n)) return n;
                                    if (i.any || null !== i.choice || null === i.children || i.children.forEach(function(r) {
                                            r._decode(e, t)
                                        }), i.contains && ("octstr" === i.tag || "bitstr" === i.tag)) {
                                        var M = new u(n);
                                        n = this._getUse(i.contains, e._reporterState.obj)._decode(M, t)
                                    }
                                }
                                return i.obj && b && (n = e.leaveObject(r)), null !== i.key && (null !== n || !0 === b) ? e.leaveKey(m, i.key, n) : null !== m && e.exitKey(m), n
                            }, Node.prototype._decodeGeneric = function(e, t, r) {
                                var i = this._baseState;
                                if ("seq" === e || "set" === e) return null;
                                if ("seqof" === e || "setof" === e) return this._decodeList(t, e, i.args[0], r);
                                if (/str$/.test(e)) return this._decodeStr(t, e, r);
                                if ("objid" === e && i.args) return this._decodeObjid(t, i.args[0], i.args[1], r);
                                if ("objid" === e) return this._decodeObjid(t, null, null, r);
                                if ("gentime" === e || "utctime" === e) return this._decodeTime(t, e, r);
                                if ("null_" === e) return this._decodeNull(t, r);
                                if ("bool" === e) return this._decodeBool(t, r);
                                else if ("objDesc" === e) return this._decodeStr(t, e, r);
                                else if ("int" === e || "enum" === e) return this._decodeInt(t, i.args && i.args[0], r);
                                return null !== i.use ? this._getUse(i.use, t._reporterState.obj)._decode(t, r) : t.error("unknown tag: " + e)
                            }, Node.prototype._getUse = function(e, t) {
                                var r = this._baseState;
                                return r.useDecoder = this._use(e, t), b(null === r.useDecoder._baseState.parent), r.useDecoder = r.useDecoder._baseState.children[0], r.implicit !== r.useDecoder._baseState.implicit && (r.useDecoder = r.useDecoder.clone(), r.useDecoder._baseState.implicit = r.implicit), r.useDecoder
                            }, Node.prototype._decodeChoice = function(e, t) {
                                var r = this._baseState,
                                    i = null,
                                    n = !1;
                                return (Object.keys(r.choice).some(function(u) {
                                    var b = e.save(),
                                        m = r.choice[u];
                                    try {
                                        var y = m._decode(e, t);
                                        if (e.isError(y)) return !1;
                                        i = {
                                            type: u,
                                            value: y
                                        }, n = !0
                                    } catch (t) {
                                        return e.restore(b), !1
                                    }
                                    return !0
                                }, this), n) ? i : e.error("Choice not matched")
                            }, Node.prototype._createEncoderBuffer = function(e) {
                                return new n(e, this.reporter)
                            }, Node.prototype._encode = function(e, t, r) {
                                var i = this._baseState;
                                if (null === i.default || i.default !== e) {
                                    var n = this._encodeValue(e, t, r);
                                    if (void 0 !== n && !this._skipDefault(n, t, r)) return n
                                }
                            }, Node.prototype._encodeValue = function(e, t, r) {
                                var n, u = this._baseState;
                                if (null === u.parent) return u.children[0]._encode(e, t || new i);
                                var n = null;
                                if (this.reporter = t, u.optional && void 0 === e) {
                                    if (null === u.default) return;
                                    e = u.default
                                }
                                var b = null,
                                    m = !1;
                                if (u.any) n = this._createEncoderBuffer(e);
                                else if (u.choice) n = this._encodeChoice(e, t);
                                else if (u.contains) b = this._getUse(u.contains, r)._encode(e, t), m = !0;
                                else if (u.children) b = u.children.map(function(r) {
                                    if ("null_" === r._baseState.tag) return r._encode(null, t, e);
                                    if (null === r._baseState.key) return t.error("Child should have a key");
                                    var i = t.enterKey(r._baseState.key);
                                    if ("object" != typeof e) return t.error("Child expected, but input is not object");
                                    var n = r._encode(e[r._baseState.key], t, e);
                                    return t.leaveKey(i), n
                                }, this).filter(function(e) {
                                    return e
                                }), b = this._createEncoderBuffer(b);
                                else if ("seqof" === u.tag || "setof" === u.tag) {
                                    if (!(u.args && 1 === u.args.length)) return t.error("Too many args for : " + u.tag);
                                    if (!Array.isArray(e)) return t.error("seqof/setof, but data is not Array");
                                    var y = this.clone();
                                    y._baseState.implicit = null, b = this._createEncoderBuffer(e.map(function(r) {
                                        var i = this._baseState;
                                        return this._getUse(i.args[0], e)._encode(r, t)
                                    }, y))
                                } else null !== u.use ? n = this._getUse(u.use, r)._encode(e, t) : (b = this._encodePrimitive(u.tag, e), m = !0);
                                if (!u.any && null === u.choice) {
                                    var v = null !== u.implicit ? u.implicit : u.tag,
                                        g = null === u.implicit ? "universal" : "context";
                                    null === v ? null === u.use && t.error("Tag could be omitted only for .use()") : null === u.use && (n = this._encodeComposite(v, m, g, b))
                                }
                                return null !== u.explicit && (n = this._encodeComposite(u.explicit, !1, "context", n)), n
                            }, Node.prototype._encodeChoice = function(e, t) {
                                var r = this._baseState,
                                    i = r.choice[e.type];
                                return i || b(!1, e.type + " not found in " + JSON.stringify(Object.keys(r.choice))), i._encode(e.value, t)
                            }, Node.prototype._encodePrimitive = function(e, t) {
                                var r = this._baseState;
                                if (/str$/.test(e)) return this._encodeStr(t, e);
                                if ("objid" === e && r.args) return this._encodeObjid(t, r.reverseArgs[0], r.args[1]);
                                if ("objid" === e) return this._encodeObjid(t, null, null);
                                if ("gentime" === e || "utctime" === e) return this._encodeTime(t, e);
                                if ("null_" === e) return this._encodeNull();
                                if ("int" === e || "enum" === e) return this._encodeInt(t, r.args && r.reverseArgs[0]);
                                if ("bool" === e) return this._encodeBool(t);
                                else if ("objDesc" === e) return this._encodeStr(t, e);
                                else throw Error("Unsupported tag: " + e)
                            }, Node.prototype._isNumstr = function(e) {
                                return /^[0-9 ]*$/.test(e)
                            }, Node.prototype._isPrintstr = function(e) {
                                return /^[A-Za-z0-9 '\(\)\+,\-\.\/:=\?]*$/.test(e)
                            }
                        },
                        1293: function(e, t, r) {
                            var i = r(3782);

                            function Reporter(e) {
                                this._reporterState = {
                                    obj: null,
                                    path: [],
                                    options: e || {},
                                    errors: []
                                }
                            }

                            function ReporterError(e, t) {
                                this.path = e, this.rethrow(t)
                            }
                            t.b = Reporter, Reporter.prototype.isError = function(e) {
                                return e instanceof ReporterError
                            }, Reporter.prototype.save = function() {
                                var e = this._reporterState;
                                return {
                                    obj: e.obj,
                                    pathLen: e.path.length
                                }
                            }, Reporter.prototype.restore = function(e) {
                                var t = this._reporterState;
                                t.obj = e.obj, t.path = t.path.slice(0, e.pathLen)
                            }, Reporter.prototype.enterKey = function(e) {
                                return this._reporterState.path.push(e)
                            }, Reporter.prototype.exitKey = function(e) {
                                var t = this._reporterState;
                                t.path = t.path.slice(0, e - 1)
                            }, Reporter.prototype.leaveKey = function(e, t, r) {
                                var i = this._reporterState;
                                this.exitKey(e), null !== i.obj && (i.obj[t] = r)
                            }, Reporter.prototype.path = function() {
                                return this._reporterState.path.join("/")
                            }, Reporter.prototype.enterObject = function() {
                                var e = this._reporterState,
                                    t = e.obj;
                                return e.obj = {}, t
                            }, Reporter.prototype.leaveObject = function(e) {
                                var t = this._reporterState,
                                    r = t.obj;
                                return t.obj = e, r
                            }, Reporter.prototype.error = function(e) {
                                var t, r = this._reporterState,
                                    i = e instanceof ReporterError;
                                if (t = i ? e : new ReporterError(r.path.map(function(e) {
                                        return "[" + JSON.stringify(e) + "]"
                                    }).join(""), e.message || e, e.stack), !r.options.partial) throw t;
                                return i || r.errors.push(t), t
                            }, Reporter.prototype.wrapResult = function(e) {
                                var t = this._reporterState;
                                return t.options.partial ? {
                                    result: this.isError(e) ? null : e,
                                    errors: t.errors
                                } : e
                            }, i(ReporterError, Error), ReporterError.prototype.rethrow = function(e) {
                                if (this.message = e + " at: " + (this.path || "(shallow)"), Error.captureStackTrace && Error.captureStackTrace(this, ReporterError), !this.stack) try {
                                    throw Error(this.message)
                                } catch (e) {
                                    this.stack = e.stack
                                }
                                return this
                            }
                        },
                        9791: function(e, t, r) {
                            var i = r(7335);
                            t.tagClass = {
                                0: "universal",
                                1: "application",
                                2: "context",
                                3: "private"
                            }, t.tagClassByName = i._reverse(t.tagClass), t.tag = {
                                0: "end",
                                1: "bool",
                                2: "int",
                                3: "bitstr",
                                4: "octstr",
                                5: "null_",
                                6: "objid",
                                7: "objDesc",
                                8: "external",
                                9: "real",
                                10: "enum",
                                11: "embed",
                                12: "utf8str",
                                13: "relativeOid",
                                16: "seq",
                                17: "set",
                                18: "numstr",
                                19: "printstr",
                                20: "t61str",
                                21: "videostr",
                                22: "ia5str",
                                23: "utctime",
                                24: "gentime",
                                25: "graphstr",
                                26: "iso646str",
                                27: "genstr",
                                28: "unistr",
                                29: "charstr",
                                30: "bmpstr"
                            }, t.tagByName = i._reverse(t.tag)
                        },
                        7335: function(e, t, r) {
                            t._reverse = function(e) {
                                var t = {};
                                return Object.keys(e).forEach(function(r) {
                                    (0 | r) == r && (r |= 0), t[e[r]] = r
                                }), t
                            }, t.der = r(9791)
                        },
                        2259: function(e, t, r) {
                            var i = r(3782),
                                n = r(7160),
                                u = n.base,
                                b = n.bignum,
                                m = n.constants.der;

                            function DERDecoder(e) {
                                this.enc = "der", this.name = e.name, this.entity = e, this.tree = new DERNode, this.tree._init(e.body)
                            }

                            function DERNode(e) {
                                u.Node.call(this, "der", e)
                            }

                            function derDecodeTag(e, t) {
                                var r = e.readUInt8(t);
                                if (e.isError(r)) return r;
                                var i = m.tagClass[r >> 6],
                                    n = (32 & r) == 0;
                                if ((31 & r) == 31) {
                                    var u = r;
                                    for (r = 0;
                                        (128 & u) == 128;) {
                                        if (u = e.readUInt8(t), e.isError(u)) return u;
                                        r <<= 7, r |= 127 & u
                                    }
                                } else r &= 31;
                                var b = m.tag[r];
                                return {
                                    cls: i,
                                    primitive: n,
                                    tag: r,
                                    tagStr: b
                                }
                            }

                            function derDecodeLen(e, t, r) {
                                var i = e.readUInt8(r);
                                if (e.isError(i)) return i;
                                if (!t && 128 === i) return null;
                                if ((128 & i) == 0) return i;
                                var n = 127 & i;
                                if (n > 4) return e.error("length octect is too long");
                                i = 0;
                                for (var u = 0; u < n; u++) {
                                    i <<= 8;
                                    var b = e.readUInt8(r);
                                    if (e.isError(b)) return b;
                                    i |= b
                                }
                                return i
                            }
                            e.exports = DERDecoder, DERDecoder.prototype.decode = function(e, t) {
                                return e instanceof u.DecoderBuffer || (e = new u.DecoderBuffer(e, t)), this.tree._decode(e, t)
                            }, i(DERNode, u.Node), DERNode.prototype._peekTag = function(e, t, r) {
                                if (e.isEmpty()) return !1;
                                var i = e.save(),
                                    n = derDecodeTag(e, 'Failed to peek tag: "' + t + '"');
                                return e.isError(n) ? n : (e.restore(i), n.tag === t || n.tagStr === t || n.tagStr + "of" === t || r)
                            }, DERNode.prototype._decodeTag = function(e, t, r) {
                                var i = derDecodeTag(e, 'Failed to decode tag of "' + t + '"');
                                if (e.isError(i)) return i;
                                var n = derDecodeLen(e, i.primitive, 'Failed to get length of "' + t + '"');
                                if (e.isError(n)) return n;
                                if (!r && i.tag !== t && i.tagStr !== t && i.tagStr + "of" !== t) return e.error('Failed to match tag: "' + t + '"');
                                if (i.primitive || null !== n) return e.skip(n, 'Failed to match body of: "' + t + '"');
                                var u = e.save(),
                                    b = this._skipUntilEnd(e, 'Failed to skip indefinite length body: "' + this.tag + '"');
                                return e.isError(b) ? b : (n = e.offset - u.offset, e.restore(u), e.skip(n, 'Failed to match body of: "' + t + '"'))
                            }, DERNode.prototype._skipUntilEnd = function(e, t) {
                                for (;;) {
                                    var r, i = derDecodeTag(e, t);
                                    if (e.isError(i)) return i;
                                    var n = derDecodeLen(e, i.primitive, t);
                                    if (e.isError(n)) return n;
                                    if (r = i.primitive || null !== n ? e.skip(n) : this._skipUntilEnd(e, t), e.isError(r)) return r;
                                    if ("end" === i.tagStr) break
                                }
                            }, DERNode.prototype._decodeList = function(e, t, r, i) {
                                for (var n = []; !e.isEmpty();) {
                                    var u = this._peekTag(e, "end");
                                    if (e.isError(u)) return u;
                                    var b = r.decode(e, "der", i);
                                    if (e.isError(b) && u) break;
                                    n.push(b)
                                }
                                return n
                            }, DERNode.prototype._decodeStr = function(e, t) {
                                if ("bitstr" === t) {
                                    var r = e.readUInt8();
                                    return e.isError(r) ? r : {
                                        unused: r,
                                        data: e.raw()
                                    }
                                }
                                if ("bmpstr" === t) {
                                    var i = e.raw();
                                    if (i.length % 2 == 1) return e.error("Decoding of string type: bmpstr length mismatch");
                                    for (var n = "", u = 0; u < i.length / 2; u++) n += String.fromCharCode(i.readUInt16BE(2 * u));
                                    return n
                                }
                                if ("numstr" === t) {
                                    var b = e.raw().toString("ascii");
                                    return this._isNumstr(b) ? b : e.error("Decoding of string type: numstr unsupported characters")
                                }
                                if ("octstr" === t) return e.raw();
                                if ("objDesc" === t) return e.raw();
                                if ("printstr" === t) {
                                    var m = e.raw().toString("ascii");
                                    return this._isPrintstr(m) ? m : e.error("Decoding of string type: printstr unsupported characters")
                                }
                                if (/str$/.test(t)) return e.raw().toString();
                                else return e.error("Decoding of string type: " + t + " unsupported")
                            }, DERNode.prototype._decodeObjid = function(e, t, r) {
                                for (var i, n = [], u = 0; !e.isEmpty();) {
                                    var b = e.readUInt8();
                                    u <<= 7, u |= 127 & b, (128 & b) == 0 && (n.push(u), u = 0)
                                }
                                128 & b && n.push(u);
                                var m = n[0] / 40 | 0,
                                    y = n[0] % 40;
                                if (i = r ? n : [m, y].concat(n.slice(1)), t) {
                                    var v = t[i.join(" ")];
                                    void 0 === v && (v = t[i.join(".")]), void 0 !== v && (i = v)
                                }
                                return i
                            }, DERNode.prototype._decodeTime = function(e, t) {
                                var r = e.raw().toString();
                                if ("gentime" === t) var i = 0 | r.slice(0, 4),
                                    n = 0 | r.slice(4, 6),
                                    u = 0 | r.slice(6, 8),
                                    b = 0 | r.slice(8, 10),
                                    m = 0 | r.slice(10, 12),
                                    y = 0 | r.slice(12, 14);
                                else {
                                    if ("utctime" !== t) return e.error("Decoding " + t + " time is not supported yet");
                                    var i = 0 | r.slice(0, 2),
                                        n = 0 | r.slice(2, 4),
                                        u = 0 | r.slice(4, 6),
                                        b = 0 | r.slice(6, 8),
                                        m = 0 | r.slice(8, 10),
                                        y = 0 | r.slice(10, 12);
                                    i = i < 70 ? 2e3 + i : 1900 + i
                                }
                                return Date.UTC(i, n - 1, u, b, m, y, 0)
                            }, DERNode.prototype._decodeNull = function(e) {
                                return null
                            }, DERNode.prototype._decodeBool = function(e) {
                                var t = e.readUInt8();
                                return e.isError(t) ? t : 0 !== t
                            }, DERNode.prototype._decodeInt = function(e, t) {
                                var r = e.raw(),
                                    i = new b(r);
                                return t && (i = t[i.toString(10)] || i), i
                            }, DERNode.prototype._use = function(e, t) {
                                return "function" == typeof e && (e = e(t)), e._getDecoder("der").tree
                            }
                        },
                        6701: function(e, t, r) {
                            t.der = r(2259), t.pem = r(8527)
                        },
                        8527: function(e, t, r) {
                            var i = r(3782),
                                n = r(4300).Buffer,
                                u = r(2259);

                            function PEMDecoder(e) {
                                u.call(this, e), this.enc = "pem"
                            }
                            i(PEMDecoder, u), e.exports = PEMDecoder, PEMDecoder.prototype.decode = function(e, t) {
                                for (var r = e.toString().split(/[\r\n]+/g), i = t.label.toUpperCase(), b = /^-----(BEGIN|END) ([^-]+)-----$/, m = -1, y = -1, v = 0; v < r.length; v++) {
                                    var g = r[v].match(b);
                                    if (null !== g && g[2] === i) {
                                        if (-1 === m) {
                                            if ("BEGIN" !== g[1]) break;
                                            m = v
                                        } else {
                                            if ("END" !== g[1]) break;
                                            y = v;
                                            break
                                        }
                                    }
                                }
                                if (-1 === m || -1 === y) throw Error("PEM section not found for: " + i);
                                var _ = r.slice(m + 1, y).join("");
                                _.replace(/[^a-z0-9\+\/=]+/gi, "");
                                var w = new n(_, "base64");
                                return u.prototype.decode.call(this, w, t)
                            }
                        },
                        7804: function(e, t, r) {
                            var i = r(3782),
                                n = r(4300).Buffer,
                                u = r(7160),
                                b = u.base,
                                m = u.constants.der;

                            function DEREncoder(e) {
                                this.enc = "der", this.name = e.name, this.entity = e, this.tree = new DERNode, this.tree._init(e.body)
                            }

                            function DERNode(e) {
                                b.Node.call(this, "der", e)
                            }

                            function two(e) {
                                return e < 10 ? "0" + e : e
                            }
                            e.exports = DEREncoder, DEREncoder.prototype.encode = function(e, t) {
                                return this.tree._encode(e, t).join()
                            }, i(DERNode, b.Node), DERNode.prototype._encodeComposite = function(e, t, r, i) {
                                var u = function(e, t, r, i) {
                                    var n;
                                    if ("seqof" === e ? e = "seq" : "setof" === e && (e = "set"), m.tagByName.hasOwnProperty(e)) n = m.tagByName[e];
                                    else {
                                        if ("number" != typeof e || (0 | e) !== e) return i.error("Unknown tag: " + e);
                                        n = e
                                    }
                                    return n >= 31 ? i.error("Multi-octet tag encoding unsupported") : (t || (n |= 32), n |= m.tagClassByName[r || "universal"] << 6)
                                }(e, t, r, this.reporter);
                                if (i.length < 128) {
                                    var b = new n(2);
                                    return b[0] = u, b[1] = i.length, this._createEncoderBuffer([b, i])
                                }
                                for (var y = 1, v = i.length; v >= 256; v >>= 8) y++;
                                var b = new n(2 + y);
                                b[0] = u, b[1] = 128 | y;
                                for (var v = 1 + y, g = i.length; g > 0; v--, g >>= 8) b[v] = 255 & g;
                                return this._createEncoderBuffer([b, i])
                            }, DERNode.prototype._encodeStr = function(e, t) {
                                if ("bitstr" === t) return this._createEncoderBuffer([0 | e.unused, e.data]);
                                if ("bmpstr" === t) {
                                    for (var r = new n(2 * e.length), i = 0; i < e.length; i++) r.writeUInt16BE(e.charCodeAt(i), 2 * i);
                                    return this._createEncoderBuffer(r)
                                }
                                return "numstr" === t ? this._isNumstr(e) ? this._createEncoderBuffer(e) : this.reporter.error("Encoding of string type: numstr supports only digits and space") : "printstr" === t ? this._isPrintstr(e) ? this._createEncoderBuffer(e) : this.reporter.error("Encoding of string type: printstr supports only latin upper and lower case letters, digits, space, apostrophe, left and rigth parenthesis, plus sign, comma, hyphen, dot, slash, colon, equal sign, question mark") : /str$/.test(t) ? this._createEncoderBuffer(e) : "objDesc" === t ? this._createEncoderBuffer(e) : this.reporter.error("Encoding of string type: " + t + " unsupported")
                            }, DERNode.prototype._encodeObjid = function(e, t, r) {
                                if ("string" == typeof e) {
                                    if (!t) return this.reporter.error("string objid given, but no values map found");
                                    if (!t.hasOwnProperty(e)) return this.reporter.error("objid not found in values map");
                                    e = t[e].split(/[\s\.]+/g);
                                    for (var i = 0; i < e.length; i++) e[i] |= 0
                                } else if (Array.isArray(e)) {
                                    e = e.slice();
                                    for (var i = 0; i < e.length; i++) e[i] |= 0
                                }
                                if (!Array.isArray(e)) return this.reporter.error("objid() should be either array or string, got: " + JSON.stringify(e));
                                if (!r) {
                                    if (e[1] >= 40) return this.reporter.error("Second objid identifier OOB");
                                    e.splice(0, 2, 40 * e[0] + e[1])
                                }
                                for (var u = 0, i = 0; i < e.length; i++) {
                                    var b = e[i];
                                    for (u++; b >= 128; b >>= 7) u++
                                }
                                for (var m = new n(u), y = m.length - 1, i = e.length - 1; i >= 0; i--) {
                                    var b = e[i];
                                    for (m[y--] = 127 & b;
                                        (b >>= 7) > 0;) m[y--] = 128 | 127 & b
                                }
                                return this._createEncoderBuffer(m)
                            }, DERNode.prototype._encodeTime = function(e, t) {
                                var r, i = new Date(e);
                                return "gentime" === t ? r = [two(i.getFullYear()), two(i.getUTCMonth() + 1), two(i.getUTCDate()), two(i.getUTCHours()), two(i.getUTCMinutes()), two(i.getUTCSeconds()), "Z"].join("") : "utctime" === t ? r = [two(i.getFullYear() % 100), two(i.getUTCMonth() + 1), two(i.getUTCDate()), two(i.getUTCHours()), two(i.getUTCMinutes()), two(i.getUTCSeconds()), "Z"].join("") : this.reporter.error("Encoding " + t + " time is not supported yet"), this._encodeStr(r, "octstr")
                            }, DERNode.prototype._encodeNull = function() {
                                return this._createEncoderBuffer("")
                            }, DERNode.prototype._encodeInt = function(e, t) {
                                if ("string" == typeof e) {
                                    if (!t) return this.reporter.error("String int or enum given, but no values map");
                                    if (!t.hasOwnProperty(e)) return this.reporter.error("Values map doesn't contain: " + JSON.stringify(e));
                                    e = t[e]
                                }
                                if ("number" != typeof e && !n.isBuffer(e)) {
                                    var r = e.toArray();
                                    !e.sign && 128 & r[0] && r.unshift(0), e = new n(r)
                                }
                                if (n.isBuffer(e)) {
                                    var i = e.length;
                                    0 === e.length && i++;
                                    var u = new n(i);
                                    return e.copy(u), 0 === e.length && (u[0] = 0), this._createEncoderBuffer(u)
                                }
                                if (e < 128) return this._createEncoderBuffer(e);
                                if (e < 256) return this._createEncoderBuffer([0, e]);
                                for (var i = 1, b = e; b >= 256; b >>= 8) i++;
                                for (var u = Array(i), b = u.length - 1; b >= 0; b--) u[b] = 255 & e, e >>= 8;
                                return 128 & u[0] && u.unshift(0), this._createEncoderBuffer(new n(u))
                            }, DERNode.prototype._encodeBool = function(e) {
                                return this._createEncoderBuffer(e ? 255 : 0)
                            }, DERNode.prototype._use = function(e, t) {
                                return "function" == typeof e && (e = e(t)), e._getEncoder("der").tree
                            }, DERNode.prototype._skipDefault = function(e, t, r) {
                                var i, n = this._baseState;
                                if (null === n.default) return !1;
                                var u = e.join();
                                if (void 0 === n.defaultBuffer && (n.defaultBuffer = this._encodeValue(n.default, t, r).join()), u.length !== n.defaultBuffer.length) return !1;
                                for (i = 0; i < u.length; i++)
                                    if (u[i] !== n.defaultBuffer[i]) return !1;
                                return !0
                            }
                        },
                        3418: function(e, t, r) {
                            t.der = r(7804), t.pem = r(1564)
                        },
                        1564: function(e, t, r) {
                            var i = r(3782),
                                n = r(7804);

                            function PEMEncoder(e) {
                                n.call(this, e), this.enc = "pem"
                            }
                            i(PEMEncoder, n), e.exports = PEMEncoder, PEMEncoder.prototype.encode = function(e, t) {
                                for (var r = n.prototype.encode.call(this, e).toString("base64"), i = ["-----BEGIN " + t.label + "-----"], u = 0; u < r.length; u += 64) i.push(r.slice(u, u + 64));
                                return i.push("-----END " + t.label + "-----"), i.join("\n")
                            }
                        },
                        711: function(e, t, r) {
                            ! function(e, t) {
                                "use strict";

                                function assert(e, t) {
                                    if (!e) throw Error(t || "Assertion failed")
                                }

                                function inherits(e, t) {
                                    e.super_ = t;
                                    var TempCtor = function() {};
                                    TempCtor.prototype = t.prototype, e.prototype = new TempCtor, e.prototype.constructor = e
                                }

                                function BN(e, t, r) {
                                    if (BN.isBN(e)) return e;
                                    this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== e && (("le" === t || "be" === t) && (r = t, t = 10), this._init(e || 0, t || 10, r || "be"))
                                }
                                "object" == typeof e ? e.exports = BN : t.BN = BN, BN.BN = BN, BN.wordSize = 26;
                                try {
                                    i = r(4300).Buffer
                                } catch (e) {}

                                function parseHex(e, t, r) {
                                    for (var i = 0, n = Math.min(e.length, r), u = t; u < n; u++) {
                                        var b = e.charCodeAt(u) - 48;
                                        i <<= 4, b >= 49 && b <= 54 ? i |= b - 49 + 10 : b >= 17 && b <= 22 ? i |= b - 17 + 10 : i |= 15 & b
                                    }
                                    return i
                                }

                                function parseBase(e, t, r, i) {
                                    for (var n = 0, u = Math.min(e.length, r), b = t; b < u; b++) {
                                        var m = e.charCodeAt(b) - 48;
                                        n *= i, m >= 49 ? n += m - 49 + 10 : m >= 17 ? n += m - 17 + 10 : n += m
                                    }
                                    return n
                                }
                                BN.isBN = function(e) {
                                    return e instanceof BN || null !== e && "object" == typeof e && e.constructor.wordSize === BN.wordSize && Array.isArray(e.words)
                                }, BN.max = function(e, t) {
                                    return e.cmp(t) > 0 ? e : t
                                }, BN.min = function(e, t) {
                                    return 0 > e.cmp(t) ? e : t
                                }, BN.prototype._init = function(e, t, r) {
                                    if ("number" == typeof e) return this._initNumber(e, t, r);
                                    if ("object" == typeof e) return this._initArray(e, t, r);
                                    "hex" === t && (t = 16), assert(t === (0 | t) && t >= 2 && t <= 36);
                                    var i = 0;
                                    "-" === (e = e.toString().replace(/\s+/g, ""))[0] && i++, 16 === t ? this._parseHex(e, i) : this._parseBase(e, t, i), "-" === e[0] && (this.negative = 1), this.strip(), "le" === r && this._initArray(this.toArray(), t, r)
                                }, BN.prototype._initNumber = function(e, t, r) {
                                    e < 0 && (this.negative = 1, e = -e), e < 67108864 ? (this.words = [67108863 & e], this.length = 1) : e < 4503599627370496 ? (this.words = [67108863 & e, e / 67108864 & 67108863], this.length = 2) : (assert(e < 9007199254740992), this.words = [67108863 & e, e / 67108864 & 67108863, 1], this.length = 3), "le" === r && this._initArray(this.toArray(), t, r)
                                }, BN.prototype._initArray = function(e, t, r) {
                                    if (assert("number" == typeof e.length), e.length <= 0) return this.words = [0], this.length = 1, this;
                                    this.length = Math.ceil(e.length / 3), this.words = Array(this.length);
                                    for (var i, n, u = 0; u < this.length; u++) this.words[u] = 0;
                                    var b = 0;
                                    if ("be" === r)
                                        for (u = e.length - 1, i = 0; u >= 0; u -= 3) n = e[u] | e[u - 1] << 8 | e[u - 2] << 16, this.words[i] |= n << b & 67108863, this.words[i + 1] = n >>> 26 - b & 67108863, (b += 24) >= 26 && (b -= 26, i++);
                                    else if ("le" === r)
                                        for (u = 0, i = 0; u < e.length; u += 3) n = e[u] | e[u + 1] << 8 | e[u + 2] << 16, this.words[i] |= n << b & 67108863, this.words[i + 1] = n >>> 26 - b & 67108863, (b += 24) >= 26 && (b -= 26, i++);
                                    return this.strip()
                                }, BN.prototype._parseHex = function(e, t) {
                                    this.length = Math.ceil((e.length - t) / 6), this.words = Array(this.length);
                                    for (var r, i, n = 0; n < this.length; n++) this.words[n] = 0;
                                    var u = 0;
                                    for (n = e.length - 6, r = 0; n >= t; n -= 6) i = parseHex(e, n, n + 6), this.words[r] |= i << u & 67108863, this.words[r + 1] |= i >>> 26 - u & 4194303, (u += 24) >= 26 && (u -= 26, r++);
                                    n + 6 !== t && (i = parseHex(e, t, n + 6), this.words[r] |= i << u & 67108863, this.words[r + 1] |= i >>> 26 - u & 4194303), this.strip()
                                }, BN.prototype._parseBase = function(e, t, r) {
                                    this.words = [0], this.length = 1;
                                    for (var i = 0, n = 1; n <= 67108863; n *= t) i++;
                                    i--, n = n / t | 0;
                                    for (var u = e.length - r, b = u % i, m = Math.min(u, u - b) + r, y = 0, v = r; v < m; v += i) y = parseBase(e, v, v + i, t), this.imuln(n), this.words[0] + y < 67108864 ? this.words[0] += y : this._iaddn(y);
                                    if (0 !== b) {
                                        var g = 1;
                                        for (y = parseBase(e, v, e.length, t), v = 0; v < b; v++) g *= t;
                                        this.imuln(g), this.words[0] + y < 67108864 ? this.words[0] += y : this._iaddn(y)
                                    }
                                }, BN.prototype.copy = function(e) {
                                    e.words = Array(this.length);
                                    for (var t = 0; t < this.length; t++) e.words[t] = this.words[t];
                                    e.length = this.length, e.negative = this.negative, e.red = this.red
                                }, BN.prototype.clone = function() {
                                    var e = new BN(null);
                                    return this.copy(e), e
                                }, BN.prototype._expand = function(e) {
                                    for (; this.length < e;) this.words[this.length++] = 0;
                                    return this
                                }, BN.prototype.strip = function() {
                                    for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
                                    return this._normSign()
                                }, BN.prototype._normSign = function() {
                                    return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
                                }, BN.prototype.inspect = function() {
                                    return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                                };
                                var i, n = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                                    u = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                                    b = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

                                function smallMulTo(e, t, r) {
                                    r.negative = t.negative ^ e.negative;
                                    var i = e.length + t.length | 0;
                                    r.length = i, i = i - 1 | 0;
                                    var n = 0 | e.words[0],
                                        u = 0 | t.words[0],
                                        b = n * u,
                                        m = 67108863 & b,
                                        y = b / 67108864 | 0;
                                    r.words[0] = m;
                                    for (var v = 1; v < i; v++) {
                                        for (var g = y >>> 26, _ = 67108863 & y, w = Math.min(v, t.length - 1), M = Math.max(0, v - e.length + 1); M <= w; M++) {
                                            var S = v - M | 0;
                                            g += (b = (n = 0 | e.words[S]) * (u = 0 | t.words[M]) + _) / 67108864 | 0, _ = 67108863 & b
                                        }
                                        r.words[v] = 0 | _, y = 0 | g
                                    }
                                    return 0 !== y ? r.words[v] = 0 | y : r.length--, r.strip()
                                }
                                BN.prototype.toString = function(e, t) {
                                    if (t = 0 | t || 1, 16 === (e = e || 10) || "hex" === e) {
                                        r = "";
                                        for (var r, i = 0, m = 0, y = 0; y < this.length; y++) {
                                            var v = this.words[y],
                                                g = ((v << i | m) & 16777215).toString(16);
                                            r = 0 != (m = v >>> 24 - i & 16777215) || y !== this.length - 1 ? n[6 - g.length] + g + r : g + r, (i += 2) >= 26 && (i -= 26, y--)
                                        }
                                        for (0 !== m && (r = m.toString(16) + r); r.length % t != 0;) r = "0" + r;
                                        return 0 !== this.negative && (r = "-" + r), r
                                    }
                                    if (e === (0 | e) && e >= 2 && e <= 36) {
                                        var _ = u[e],
                                            w = b[e];
                                        r = "";
                                        var M = this.clone();
                                        for (M.negative = 0; !M.isZero();) {
                                            var S = M.modn(w).toString(e);
                                            r = (M = M.idivn(w)).isZero() ? S + r : n[_ - S.length] + S + r
                                        }
                                        for (this.isZero() && (r = "0" + r); r.length % t != 0;) r = "0" + r;
                                        return 0 !== this.negative && (r = "-" + r), r
                                    }
                                    assert(!1, "Base should be between 2 and 36")
                                }, BN.prototype.toNumber = function() {
                                    var e = this.words[0];
                                    return 2 === this.length ? e += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? e += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && assert(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -e : e
                                }, BN.prototype.toJSON = function() {
                                    return this.toString(16)
                                }, BN.prototype.toBuffer = function(e, t) {
                                    return assert(void 0 !== i), this.toArrayLike(i, e, t)
                                }, BN.prototype.toArray = function(e, t) {
                                    return this.toArrayLike(Array, e, t)
                                }, BN.prototype.toArrayLike = function(e, t, r) {
                                    var i, n, u = this.byteLength(),
                                        b = r || Math.max(1, u);
                                    assert(u <= b, "byte array longer than desired length"), assert(b > 0, "Requested array length <= 0"), this.strip();
                                    var m = new e(b),
                                        y = this.clone();
                                    if ("le" === t) {
                                        for (n = 0; !y.isZero(); n++) i = y.andln(255), y.iushrn(8), m[n] = i;
                                        for (; n < b; n++) m[n] = 0
                                    } else {
                                        for (n = 0; n < b - u; n++) m[n] = 0;
                                        for (n = 0; !y.isZero(); n++) i = y.andln(255), y.iushrn(8), m[b - n - 1] = i
                                    }
                                    return m
                                }, Math.clz32 ? BN.prototype._countBits = function(e) {
                                    return 32 - Math.clz32(e)
                                } : BN.prototype._countBits = function(e) {
                                    var t = e,
                                        r = 0;
                                    return t >= 4096 && (r += 13, t >>>= 13), t >= 64 && (r += 7, t >>>= 7), t >= 8 && (r += 4, t >>>= 4), t >= 2 && (r += 2, t >>>= 2), r + t
                                }, BN.prototype._zeroBits = function(e) {
                                    if (0 === e) return 26;
                                    var t = e,
                                        r = 0;
                                    return (8191 & t) == 0 && (r += 13, t >>>= 13), (127 & t) == 0 && (r += 7, t >>>= 7), (15 & t) == 0 && (r += 4, t >>>= 4), (3 & t) == 0 && (r += 2, t >>>= 2), (1 & t) == 0 && r++, r
                                }, BN.prototype.bitLength = function() {
                                    var e = this.words[this.length - 1],
                                        t = this._countBits(e);
                                    return (this.length - 1) * 26 + t
                                }, BN.prototype.zeroBits = function() {
                                    if (this.isZero()) return 0;
                                    for (var e = 0, t = 0; t < this.length; t++) {
                                        var r = this._zeroBits(this.words[t]);
                                        if (e += r, 26 !== r) break
                                    }
                                    return e
                                }, BN.prototype.byteLength = function() {
                                    return Math.ceil(this.bitLength() / 8)
                                }, BN.prototype.toTwos = function(e) {
                                    return 0 !== this.negative ? this.abs().inotn(e).iaddn(1) : this.clone()
                                }, BN.prototype.fromTwos = function(e) {
                                    return this.testn(e - 1) ? this.notn(e).iaddn(1).ineg() : this.clone()
                                }, BN.prototype.isNeg = function() {
                                    return 0 !== this.negative
                                }, BN.prototype.neg = function() {
                                    return this.clone().ineg()
                                }, BN.prototype.ineg = function() {
                                    return this.isZero() || (this.negative ^= 1), this
                                }, BN.prototype.iuor = function(e) {
                                    for (; this.length < e.length;) this.words[this.length++] = 0;
                                    for (var t = 0; t < e.length; t++) this.words[t] = this.words[t] | e.words[t];
                                    return this.strip()
                                }, BN.prototype.ior = function(e) {
                                    return assert((this.negative | e.negative) == 0), this.iuor(e)
                                }, BN.prototype.or = function(e) {
                                    return this.length > e.length ? this.clone().ior(e) : e.clone().ior(this)
                                }, BN.prototype.uor = function(e) {
                                    return this.length > e.length ? this.clone().iuor(e) : e.clone().iuor(this)
                                }, BN.prototype.iuand = function(e) {
                                    var t;
                                    t = this.length > e.length ? e : this;
                                    for (var r = 0; r < t.length; r++) this.words[r] = this.words[r] & e.words[r];
                                    return this.length = t.length, this.strip()
                                }, BN.prototype.iand = function(e) {
                                    return assert((this.negative | e.negative) == 0), this.iuand(e)
                                }, BN.prototype.and = function(e) {
                                    return this.length > e.length ? this.clone().iand(e) : e.clone().iand(this)
                                }, BN.prototype.uand = function(e) {
                                    return this.length > e.length ? this.clone().iuand(e) : e.clone().iuand(this)
                                }, BN.prototype.iuxor = function(e) {
                                    this.length > e.length ? (t = this, r = e) : (t = e, r = this);
                                    for (var t, r, i = 0; i < r.length; i++) this.words[i] = t.words[i] ^ r.words[i];
                                    if (this !== t)
                                        for (; i < t.length; i++) this.words[i] = t.words[i];
                                    return this.length = t.length, this.strip()
                                }, BN.prototype.ixor = function(e) {
                                    return assert((this.negative | e.negative) == 0), this.iuxor(e)
                                }, BN.prototype.xor = function(e) {
                                    return this.length > e.length ? this.clone().ixor(e) : e.clone().ixor(this)
                                }, BN.prototype.uxor = function(e) {
                                    return this.length > e.length ? this.clone().iuxor(e) : e.clone().iuxor(this)
                                }, BN.prototype.inotn = function(e) {
                                    assert("number" == typeof e && e >= 0);
                                    var t = 0 | Math.ceil(e / 26),
                                        r = e % 26;
                                    this._expand(t), r > 0 && t--;
                                    for (var i = 0; i < t; i++) this.words[i] = 67108863 & ~this.words[i];
                                    return r > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - r), this.strip()
                                }, BN.prototype.notn = function(e) {
                                    return this.clone().inotn(e)
                                }, BN.prototype.setn = function(e, t) {
                                    assert("number" == typeof e && e >= 0);
                                    var r = e / 26 | 0,
                                        i = e % 26;
                                    return this._expand(r + 1), t ? this.words[r] = this.words[r] | 1 << i : this.words[r] = this.words[r] & ~(1 << i), this.strip()
                                }, BN.prototype.iadd = function(e) {
                                    if (0 !== this.negative && 0 === e.negative) return this.negative = 0, t = this.isub(e), this.negative ^= 1, this._normSign();
                                    if (0 === this.negative && 0 !== e.negative) return e.negative = 0, t = this.isub(e), e.negative = 1, t._normSign();
                                    this.length > e.length ? (r = this, i = e) : (r = e, i = this);
                                    for (var t, r, i, n = 0, u = 0; u < i.length; u++) t = (0 | r.words[u]) + (0 | i.words[u]) + n, this.words[u] = 67108863 & t, n = t >>> 26;
                                    for (; 0 !== n && u < r.length; u++) t = (0 | r.words[u]) + n, this.words[u] = 67108863 & t, n = t >>> 26;
                                    if (this.length = r.length, 0 !== n) this.words[this.length] = n, this.length++;
                                    else if (r !== this)
                                        for (; u < r.length; u++) this.words[u] = r.words[u];
                                    return this
                                }, BN.prototype.add = function(e) {
                                    var t;
                                    return 0 !== e.negative && 0 === this.negative ? (e.negative = 0, t = this.sub(e), e.negative ^= 1, t) : 0 === e.negative && 0 !== this.negative ? (this.negative = 0, t = e.sub(this), this.negative = 1, t) : this.length > e.length ? this.clone().iadd(e) : e.clone().iadd(this)
                                }, BN.prototype.isub = function(e) {
                                    if (0 !== e.negative) {
                                        e.negative = 0;
                                        var t, r, i = this.iadd(e);
                                        return e.negative = 1, i._normSign()
                                    }
                                    if (0 !== this.negative) return this.negative = 0, this.iadd(e), this.negative = 1, this._normSign();
                                    var n = this.cmp(e);
                                    if (0 === n) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                                    n > 0 ? (t = this, r = e) : (t = e, r = this);
                                    for (var u = 0, b = 0; b < r.length; b++) u = (i = (0 | t.words[b]) - (0 | r.words[b]) + u) >> 26, this.words[b] = 67108863 & i;
                                    for (; 0 !== u && b < t.length; b++) u = (i = (0 | t.words[b]) + u) >> 26, this.words[b] = 67108863 & i;
                                    if (0 === u && b < t.length && t !== this)
                                        for (; b < t.length; b++) this.words[b] = t.words[b];
                                    return this.length = Math.max(this.length, b), t !== this && (this.negative = 1), this.strip()
                                }, BN.prototype.sub = function(e) {
                                    return this.clone().isub(e)
                                };
                                var o = function(e, t, r) {
                                    var i, n, u, b = e.words,
                                        m = t.words,
                                        y = r.words,
                                        v = 0,
                                        g = 0 | b[0],
                                        _ = 8191 & g,
                                        w = g >>> 13,
                                        M = 0 | b[1],
                                        S = 8191 & M,
                                        B = M >>> 13,
                                        E = 0 | b[2],
                                        k = 8191 & E,
                                        A = E >>> 13,
                                        N = 0 | b[3],
                                        R = 8191 & N,
                                        P = N >>> 13,
                                        x = 0 | b[4],
                                        I = 8191 & x,
                                        C = x >>> 13,
                                        D = 0 | b[5],
                                        T = 8191 & D,
                                        j = D >>> 13,
                                        O = 0 | b[6],
                                        H = 8191 & O,
                                        q = O >>> 13,
                                        L = 0 | b[7],
                                        z = 8191 & L,
                                        U = L >>> 13,
                                        K = 0 | b[8],
                                        F = 8191 & K,
                                        W = K >>> 13,
                                        V = 0 | b[9],
                                        G = 8191 & V,
                                        Z = V >>> 13,
                                        J = 0 | m[0],
                                        X = 8191 & J,
                                        Y = J >>> 13,
                                        $ = 0 | m[1],
                                        Q = 8191 & $,
                                        ee = $ >>> 13,
                                        et = 0 | m[2],
                                        er = 8191 & et,
                                        ei = et >>> 13,
                                        en = 0 | m[3],
                                        ea = 8191 & en,
                                        eo = en >>> 13,
                                        es = 0 | m[4],
                                        ef = 8191 & es,
                                        eh = es >>> 13,
                                        ed = 0 | m[5],
                                        ec = 8191 & ed,
                                        eu = ed >>> 13,
                                        el = 0 | m[6],
                                        ep = 8191 & el,
                                        eb = el >>> 13,
                                        em = 0 | m[7],
                                        ey = 8191 & em,
                                        ev = em >>> 13,
                                        eg = 0 | m[8],
                                        e_ = 8191 & eg,
                                        ew = eg >>> 13,
                                        eM = 0 | m[9],
                                        eS = 8191 & eM,
                                        eB = eM >>> 13;
                                    r.negative = e.negative ^ t.negative, r.length = 19;
                                    var eE = (v + (i = Math.imul(_, X)) | 0) + ((8191 & (n = (n = Math.imul(_, Y)) + Math.imul(w, X) | 0)) << 13) | 0;
                                    v = ((u = Math.imul(w, Y)) + (n >>> 13) | 0) + (eE >>> 26) | 0, eE &= 67108863, i = Math.imul(S, X), n = (n = Math.imul(S, Y)) + Math.imul(B, X) | 0, u = Math.imul(B, Y);
                                    var ek = (v + (i = i + Math.imul(_, Q) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(_, ee) | 0) + Math.imul(w, Q) | 0)) << 13) | 0;
                                    v = ((u = u + Math.imul(w, ee) | 0) + (n >>> 13) | 0) + (ek >>> 26) | 0, ek &= 67108863, i = Math.imul(k, X), n = (n = Math.imul(k, Y)) + Math.imul(A, X) | 0, u = Math.imul(A, Y), i = i + Math.imul(S, Q) | 0, n = (n = n + Math.imul(S, ee) | 0) + Math.imul(B, Q) | 0, u = u + Math.imul(B, ee) | 0;
                                    var eA = (v + (i = i + Math.imul(_, er) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(_, ei) | 0) + Math.imul(w, er) | 0)) << 13) | 0;
                                    v = ((u = u + Math.imul(w, ei) | 0) + (n >>> 13) | 0) + (eA >>> 26) | 0, eA &= 67108863, i = Math.imul(R, X), n = (n = Math.imul(R, Y)) + Math.imul(P, X) | 0, u = Math.imul(P, Y), i = i + Math.imul(k, Q) | 0, n = (n = n + Math.imul(k, ee) | 0) + Math.imul(A, Q) | 0, u = u + Math.imul(A, ee) | 0, i = i + Math.imul(S, er) | 0, n = (n = n + Math.imul(S, ei) | 0) + Math.imul(B, er) | 0, u = u + Math.imul(B, ei) | 0;
                                    var eN = (v + (i = i + Math.imul(_, ea) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(_, eo) | 0) + Math.imul(w, ea) | 0)) << 13) | 0;
                                    v = ((u = u + Math.imul(w, eo) | 0) + (n >>> 13) | 0) + (eN >>> 26) | 0, eN &= 67108863, i = Math.imul(I, X), n = (n = Math.imul(I, Y)) + Math.imul(C, X) | 0, u = Math.imul(C, Y), i = i + Math.imul(R, Q) | 0, n = (n = n + Math.imul(R, ee) | 0) + Math.imul(P, Q) | 0, u = u + Math.imul(P, ee) | 0, i = i + Math.imul(k, er) | 0, n = (n = n + Math.imul(k, ei) | 0) + Math.imul(A, er) | 0, u = u + Math.imul(A, ei) | 0, i = i + Math.imul(S, ea) | 0, n = (n = n + Math.imul(S, eo) | 0) + Math.imul(B, ea) | 0, u = u + Math.imul(B, eo) | 0;
                                    var eR = (v + (i = i + Math.imul(_, ef) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(_, eh) | 0) + Math.imul(w, ef) | 0)) << 13) | 0;
                                    v = ((u = u + Math.imul(w, eh) | 0) + (n >>> 13) | 0) + (eR >>> 26) | 0, eR &= 67108863, i = Math.imul(T, X), n = (n = Math.imul(T, Y)) + Math.imul(j, X) | 0, u = Math.imul(j, Y), i = i + Math.imul(I, Q) | 0, n = (n = n + Math.imul(I, ee) | 0) + Math.imul(C, Q) | 0, u = u + Math.imul(C, ee) | 0, i = i + Math.imul(R, er) | 0, n = (n = n + Math.imul(R, ei) | 0) + Math.imul(P, er) | 0, u = u + Math.imul(P, ei) | 0, i = i + Math.imul(k, ea) | 0, n = (n = n + Math.imul(k, eo) | 0) + Math.imul(A, ea) | 0, u = u + Math.imul(A, eo) | 0, i = i + Math.imul(S, ef) | 0, n = (n = n + Math.imul(S, eh) | 0) + Math.imul(B, ef) | 0, u = u + Math.imul(B, eh) | 0;
                                    var eP = (v + (i = i + Math.imul(_, ec) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(_, eu) | 0) + Math.imul(w, ec) | 0)) << 13) | 0;
                                    v = ((u = u + Math.imul(w, eu) | 0) + (n >>> 13) | 0) + (eP >>> 26) | 0, eP &= 67108863, i = Math.imul(H, X), n = (n = Math.imul(H, Y)) + Math.imul(q, X) | 0, u = Math.imul(q, Y), i = i + Math.imul(T, Q) | 0, n = (n = n + Math.imul(T, ee) | 0) + Math.imul(j, Q) | 0, u = u + Math.imul(j, ee) | 0, i = i + Math.imul(I, er) | 0, n = (n = n + Math.imul(I, ei) | 0) + Math.imul(C, er) | 0, u = u + Math.imul(C, ei) | 0, i = i + Math.imul(R, ea) | 0, n = (n = n + Math.imul(R, eo) | 0) + Math.imul(P, ea) | 0, u = u + Math.imul(P, eo) | 0, i = i + Math.imul(k, ef) | 0, n = (n = n + Math.imul(k, eh) | 0) + Math.imul(A, ef) | 0, u = u + Math.imul(A, eh) | 0, i = i + Math.imul(S, ec) | 0, n = (n = n + Math.imul(S, eu) | 0) + Math.imul(B, ec) | 0, u = u + Math.imul(B, eu) | 0;
                                    var ex = (v + (i = i + Math.imul(_, ep) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(_, eb) | 0) + Math.imul(w, ep) | 0)) << 13) | 0;
                                    v = ((u = u + Math.imul(w, eb) | 0) + (n >>> 13) | 0) + (ex >>> 26) | 0, ex &= 67108863, i = Math.imul(z, X), n = (n = Math.imul(z, Y)) + Math.imul(U, X) | 0, u = Math.imul(U, Y), i = i + Math.imul(H, Q) | 0, n = (n = n + Math.imul(H, ee) | 0) + Math.imul(q, Q) | 0, u = u + Math.imul(q, ee) | 0, i = i + Math.imul(T, er) | 0, n = (n = n + Math.imul(T, ei) | 0) + Math.imul(j, er) | 0, u = u + Math.imul(j, ei) | 0, i = i + Math.imul(I, ea) | 0, n = (n = n + Math.imul(I, eo) | 0) + Math.imul(C, ea) | 0, u = u + Math.imul(C, eo) | 0, i = i + Math.imul(R, ef) | 0, n = (n = n + Math.imul(R, eh) | 0) + Math.imul(P, ef) | 0, u = u + Math.imul(P, eh) | 0, i = i + Math.imul(k, ec) | 0, n = (n = n + Math.imul(k, eu) | 0) + Math.imul(A, ec) | 0, u = u + Math.imul(A, eu) | 0, i = i + Math.imul(S, ep) | 0, n = (n = n + Math.imul(S, eb) | 0) + Math.imul(B, ep) | 0, u = u + Math.imul(B, eb) | 0;
                                    var eI = (v + (i = i + Math.imul(_, ey) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(_, ev) | 0) + Math.imul(w, ey) | 0)) << 13) | 0;
                                    v = ((u = u + Math.imul(w, ev) | 0) + (n >>> 13) | 0) + (eI >>> 26) | 0, eI &= 67108863, i = Math.imul(F, X), n = (n = Math.imul(F, Y)) + Math.imul(W, X) | 0, u = Math.imul(W, Y), i = i + Math.imul(z, Q) | 0, n = (n = n + Math.imul(z, ee) | 0) + Math.imul(U, Q) | 0, u = u + Math.imul(U, ee) | 0, i = i + Math.imul(H, er) | 0, n = (n = n + Math.imul(H, ei) | 0) + Math.imul(q, er) | 0, u = u + Math.imul(q, ei) | 0, i = i + Math.imul(T, ea) | 0, n = (n = n + Math.imul(T, eo) | 0) + Math.imul(j, ea) | 0, u = u + Math.imul(j, eo) | 0, i = i + Math.imul(I, ef) | 0, n = (n = n + Math.imul(I, eh) | 0) + Math.imul(C, ef) | 0, u = u + Math.imul(C, eh) | 0, i = i + Math.imul(R, ec) | 0, n = (n = n + Math.imul(R, eu) | 0) + Math.imul(P, ec) | 0, u = u + Math.imul(P, eu) | 0, i = i + Math.imul(k, ep) | 0, n = (n = n + Math.imul(k, eb) | 0) + Math.imul(A, ep) | 0, u = u + Math.imul(A, eb) | 0, i = i + Math.imul(S, ey) | 0, n = (n = n + Math.imul(S, ev) | 0) + Math.imul(B, ey) | 0, u = u + Math.imul(B, ev) | 0;
                                    var eC = (v + (i = i + Math.imul(_, e_) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(_, ew) | 0) + Math.imul(w, e_) | 0)) << 13) | 0;
                                    v = ((u = u + Math.imul(w, ew) | 0) + (n >>> 13) | 0) + (eC >>> 26) | 0, eC &= 67108863, i = Math.imul(G, X), n = (n = Math.imul(G, Y)) + Math.imul(Z, X) | 0, u = Math.imul(Z, Y), i = i + Math.imul(F, Q) | 0, n = (n = n + Math.imul(F, ee) | 0) + Math.imul(W, Q) | 0, u = u + Math.imul(W, ee) | 0, i = i + Math.imul(z, er) | 0, n = (n = n + Math.imul(z, ei) | 0) + Math.imul(U, er) | 0, u = u + Math.imul(U, ei) | 0, i = i + Math.imul(H, ea) | 0, n = (n = n + Math.imul(H, eo) | 0) + Math.imul(q, ea) | 0, u = u + Math.imul(q, eo) | 0, i = i + Math.imul(T, ef) | 0, n = (n = n + Math.imul(T, eh) | 0) + Math.imul(j, ef) | 0, u = u + Math.imul(j, eh) | 0, i = i + Math.imul(I, ec) | 0, n = (n = n + Math.imul(I, eu) | 0) + Math.imul(C, ec) | 0, u = u + Math.imul(C, eu) | 0, i = i + Math.imul(R, ep) | 0, n = (n = n + Math.imul(R, eb) | 0) + Math.imul(P, ep) | 0, u = u + Math.imul(P, eb) | 0, i = i + Math.imul(k, ey) | 0, n = (n = n + Math.imul(k, ev) | 0) + Math.imul(A, ey) | 0, u = u + Math.imul(A, ev) | 0, i = i + Math.imul(S, e_) | 0, n = (n = n + Math.imul(S, ew) | 0) + Math.imul(B, e_) | 0, u = u + Math.imul(B, ew) | 0;
                                    var eD = (v + (i = i + Math.imul(_, eS) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(_, eB) | 0) + Math.imul(w, eS) | 0)) << 13) | 0;
                                    v = ((u = u + Math.imul(w, eB) | 0) + (n >>> 13) | 0) + (eD >>> 26) | 0, eD &= 67108863, i = Math.imul(G, Q), n = (n = Math.imul(G, ee)) + Math.imul(Z, Q) | 0, u = Math.imul(Z, ee), i = i + Math.imul(F, er) | 0, n = (n = n + Math.imul(F, ei) | 0) + Math.imul(W, er) | 0, u = u + Math.imul(W, ei) | 0, i = i + Math.imul(z, ea) | 0, n = (n = n + Math.imul(z, eo) | 0) + Math.imul(U, ea) | 0, u = u + Math.imul(U, eo) | 0, i = i + Math.imul(H, ef) | 0, n = (n = n + Math.imul(H, eh) | 0) + Math.imul(q, ef) | 0, u = u + Math.imul(q, eh) | 0, i = i + Math.imul(T, ec) | 0, n = (n = n + Math.imul(T, eu) | 0) + Math.imul(j, ec) | 0, u = u + Math.imul(j, eu) | 0, i = i + Math.imul(I, ep) | 0, n = (n = n + Math.imul(I, eb) | 0) + Math.imul(C, ep) | 0, u = u + Math.imul(C, eb) | 0, i = i + Math.imul(R, ey) | 0, n = (n = n + Math.imul(R, ev) | 0) + Math.imul(P, ey) | 0, u = u + Math.imul(P, ev) | 0, i = i + Math.imul(k, e_) | 0, n = (n = n + Math.imul(k, ew) | 0) + Math.imul(A, e_) | 0, u = u + Math.imul(A, ew) | 0;
                                    var eT = (v + (i = i + Math.imul(S, eS) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(S, eB) | 0) + Math.imul(B, eS) | 0)) << 13) | 0;
                                    v = ((u = u + Math.imul(B, eB) | 0) + (n >>> 13) | 0) + (eT >>> 26) | 0, eT &= 67108863, i = Math.imul(G, er), n = (n = Math.imul(G, ei)) + Math.imul(Z, er) | 0, u = Math.imul(Z, ei), i = i + Math.imul(F, ea) | 0, n = (n = n + Math.imul(F, eo) | 0) + Math.imul(W, ea) | 0, u = u + Math.imul(W, eo) | 0, i = i + Math.imul(z, ef) | 0, n = (n = n + Math.imul(z, eh) | 0) + Math.imul(U, ef) | 0, u = u + Math.imul(U, eh) | 0, i = i + Math.imul(H, ec) | 0, n = (n = n + Math.imul(H, eu) | 0) + Math.imul(q, ec) | 0, u = u + Math.imul(q, eu) | 0, i = i + Math.imul(T, ep) | 0, n = (n = n + Math.imul(T, eb) | 0) + Math.imul(j, ep) | 0, u = u + Math.imul(j, eb) | 0, i = i + Math.imul(I, ey) | 0, n = (n = n + Math.imul(I, ev) | 0) + Math.imul(C, ey) | 0, u = u + Math.imul(C, ev) | 0, i = i + Math.imul(R, e_) | 0, n = (n = n + Math.imul(R, ew) | 0) + Math.imul(P, e_) | 0, u = u + Math.imul(P, ew) | 0;
                                    var ej = (v + (i = i + Math.imul(k, eS) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(k, eB) | 0) + Math.imul(A, eS) | 0)) << 13) | 0;
                                    v = ((u = u + Math.imul(A, eB) | 0) + (n >>> 13) | 0) + (ej >>> 26) | 0, ej &= 67108863, i = Math.imul(G, ea), n = (n = Math.imul(G, eo)) + Math.imul(Z, ea) | 0, u = Math.imul(Z, eo), i = i + Math.imul(F, ef) | 0, n = (n = n + Math.imul(F, eh) | 0) + Math.imul(W, ef) | 0, u = u + Math.imul(W, eh) | 0, i = i + Math.imul(z, ec) | 0, n = (n = n + Math.imul(z, eu) | 0) + Math.imul(U, ec) | 0, u = u + Math.imul(U, eu) | 0, i = i + Math.imul(H, ep) | 0, n = (n = n + Math.imul(H, eb) | 0) + Math.imul(q, ep) | 0, u = u + Math.imul(q, eb) | 0, i = i + Math.imul(T, ey) | 0, n = (n = n + Math.imul(T, ev) | 0) + Math.imul(j, ey) | 0, u = u + Math.imul(j, ev) | 0, i = i + Math.imul(I, e_) | 0, n = (n = n + Math.imul(I, ew) | 0) + Math.imul(C, e_) | 0, u = u + Math.imul(C, ew) | 0;
                                    var eO = (v + (i = i + Math.imul(R, eS) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(R, eB) | 0) + Math.imul(P, eS) | 0)) << 13) | 0;
                                    v = ((u = u + Math.imul(P, eB) | 0) + (n >>> 13) | 0) + (eO >>> 26) | 0, eO &= 67108863, i = Math.imul(G, ef), n = (n = Math.imul(G, eh)) + Math.imul(Z, ef) | 0, u = Math.imul(Z, eh), i = i + Math.imul(F, ec) | 0, n = (n = n + Math.imul(F, eu) | 0) + Math.imul(W, ec) | 0, u = u + Math.imul(W, eu) | 0, i = i + Math.imul(z, ep) | 0, n = (n = n + Math.imul(z, eb) | 0) + Math.imul(U, ep) | 0, u = u + Math.imul(U, eb) | 0, i = i + Math.imul(H, ey) | 0, n = (n = n + Math.imul(H, ev) | 0) + Math.imul(q, ey) | 0, u = u + Math.imul(q, ev) | 0, i = i + Math.imul(T, e_) | 0, n = (n = n + Math.imul(T, ew) | 0) + Math.imul(j, e_) | 0, u = u + Math.imul(j, ew) | 0;
                                    var eH = (v + (i = i + Math.imul(I, eS) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(I, eB) | 0) + Math.imul(C, eS) | 0)) << 13) | 0;
                                    v = ((u = u + Math.imul(C, eB) | 0) + (n >>> 13) | 0) + (eH >>> 26) | 0, eH &= 67108863, i = Math.imul(G, ec), n = (n = Math.imul(G, eu)) + Math.imul(Z, ec) | 0, u = Math.imul(Z, eu), i = i + Math.imul(F, ep) | 0, n = (n = n + Math.imul(F, eb) | 0) + Math.imul(W, ep) | 0, u = u + Math.imul(W, eb) | 0, i = i + Math.imul(z, ey) | 0, n = (n = n + Math.imul(z, ev) | 0) + Math.imul(U, ey) | 0, u = u + Math.imul(U, ev) | 0, i = i + Math.imul(H, e_) | 0, n = (n = n + Math.imul(H, ew) | 0) + Math.imul(q, e_) | 0, u = u + Math.imul(q, ew) | 0;
                                    var eq = (v + (i = i + Math.imul(T, eS) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(T, eB) | 0) + Math.imul(j, eS) | 0)) << 13) | 0;
                                    v = ((u = u + Math.imul(j, eB) | 0) + (n >>> 13) | 0) + (eq >>> 26) | 0, eq &= 67108863, i = Math.imul(G, ep), n = (n = Math.imul(G, eb)) + Math.imul(Z, ep) | 0, u = Math.imul(Z, eb), i = i + Math.imul(F, ey) | 0, n = (n = n + Math.imul(F, ev) | 0) + Math.imul(W, ey) | 0, u = u + Math.imul(W, ev) | 0, i = i + Math.imul(z, e_) | 0, n = (n = n + Math.imul(z, ew) | 0) + Math.imul(U, e_) | 0, u = u + Math.imul(U, ew) | 0;
                                    var eL = (v + (i = i + Math.imul(H, eS) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(H, eB) | 0) + Math.imul(q, eS) | 0)) << 13) | 0;
                                    v = ((u = u + Math.imul(q, eB) | 0) + (n >>> 13) | 0) + (eL >>> 26) | 0, eL &= 67108863, i = Math.imul(G, ey), n = (n = Math.imul(G, ev)) + Math.imul(Z, ey) | 0, u = Math.imul(Z, ev), i = i + Math.imul(F, e_) | 0, n = (n = n + Math.imul(F, ew) | 0) + Math.imul(W, e_) | 0, u = u + Math.imul(W, ew) | 0;
                                    var ez = (v + (i = i + Math.imul(z, eS) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(z, eB) | 0) + Math.imul(U, eS) | 0)) << 13) | 0;
                                    v = ((u = u + Math.imul(U, eB) | 0) + (n >>> 13) | 0) + (ez >>> 26) | 0, ez &= 67108863, i = Math.imul(G, e_), n = (n = Math.imul(G, ew)) + Math.imul(Z, e_) | 0, u = Math.imul(Z, ew);
                                    var eU = (v + (i = i + Math.imul(F, eS) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(F, eB) | 0) + Math.imul(W, eS) | 0)) << 13) | 0;
                                    v = ((u = u + Math.imul(W, eB) | 0) + (n >>> 13) | 0) + (eU >>> 26) | 0, eU &= 67108863;
                                    var eK = (v + (i = Math.imul(G, eS)) | 0) + ((8191 & (n = (n = Math.imul(G, eB)) + Math.imul(Z, eS) | 0)) << 13) | 0;
                                    return v = ((u = Math.imul(Z, eB)) + (n >>> 13) | 0) + (eK >>> 26) | 0, eK &= 67108863, y[0] = eE, y[1] = ek, y[2] = eA, y[3] = eN, y[4] = eR, y[5] = eP, y[6] = ex, y[7] = eI, y[8] = eC, y[9] = eD, y[10] = eT, y[11] = ej, y[12] = eO, y[13] = eH, y[14] = eq, y[15] = eL, y[16] = ez, y[17] = eU, y[18] = eK, 0 !== v && (y[19] = v, r.length++), r
                                };

                                function jumboMulTo(e, t, r) {
                                    return (new FFTM).mulp(e, t, r)
                                }

                                function FFTM(e, t) {
                                    this.x = e, this.y = t
                                }
                                Math.imul || (o = smallMulTo), BN.prototype.mulTo = function(e, t) {
                                    var r = this.length + e.length;
                                    return 10 === this.length && 10 === e.length ? o(this, e, t) : r < 63 ? smallMulTo(this, e, t) : r < 1024 ? function(e, t, r) {
                                        r.negative = t.negative ^ e.negative, r.length = e.length + t.length;
                                        for (var i = 0, n = 0, u = 0; u < r.length - 1; u++) {
                                            var b = n;
                                            n = 0;
                                            for (var m = 67108863 & i, y = Math.min(u, t.length - 1), v = Math.max(0, u - e.length + 1); v <= y; v++) {
                                                var g = u - v,
                                                    _ = (0 | e.words[g]) * (0 | t.words[v]),
                                                    w = 67108863 & _;
                                                b = b + (_ / 67108864 | 0) | 0, m = 67108863 & (w = w + m | 0), n += (b = b + (w >>> 26) | 0) >>> 26, b &= 67108863
                                            }
                                            r.words[u] = m, i = b, b = n
                                        }
                                        return 0 !== i ? r.words[u] = i : r.length--, r.strip()
                                    }(this, e, t) : jumboMulTo(this, e, t)
                                }, FFTM.prototype.makeRBT = function(e) {
                                    for (var t = Array(e), r = BN.prototype._countBits(e) - 1, i = 0; i < e; i++) t[i] = this.revBin(i, r, e);
                                    return t
                                }, FFTM.prototype.revBin = function(e, t, r) {
                                    if (0 === e || e === r - 1) return e;
                                    for (var i = 0, n = 0; n < t; n++) i |= (1 & e) << t - n - 1, e >>= 1;
                                    return i
                                }, FFTM.prototype.permute = function(e, t, r, i, n, u) {
                                    for (var b = 0; b < u; b++) i[b] = t[e[b]], n[b] = r[e[b]]
                                }, FFTM.prototype.transform = function(e, t, r, i, n, u) {
                                    this.permute(u, e, t, r, i, n);
                                    for (var b = 1; b < n; b <<= 1)
                                        for (var m = b << 1, y = Math.cos(2 * Math.PI / m), v = Math.sin(2 * Math.PI / m), g = 0; g < n; g += m)
                                            for (var _ = y, w = v, M = 0; M < b; M++) {
                                                var S = r[g + M],
                                                    B = i[g + M],
                                                    E = r[g + M + b],
                                                    k = i[g + M + b],
                                                    A = _ * E - w * k;
                                                k = _ * k + w * E, E = A, r[g + M] = S + E, i[g + M] = B + k, r[g + M + b] = S - E, i[g + M + b] = B - k, M !== m && (A = y * _ - v * w, w = y * w + v * _, _ = A)
                                            }
                                }, FFTM.prototype.guessLen13b = function(e, t) {
                                    var r = 1 | Math.max(t, e),
                                        i = 1 & r,
                                        n = 0;
                                    for (r = r / 2 | 0; r; r >>>= 1) n++;
                                    return 1 << n + 1 + i
                                }, FFTM.prototype.conjugate = function(e, t, r) {
                                    if (!(r <= 1))
                                        for (var i = 0; i < r / 2; i++) {
                                            var n = e[i];
                                            e[i] = e[r - i - 1], e[r - i - 1] = n, n = t[i], t[i] = -t[r - i - 1], t[r - i - 1] = -n
                                        }
                                }, FFTM.prototype.normalize13b = function(e, t) {
                                    for (var r = 0, i = 0; i < t / 2; i++) {
                                        var n = 8192 * Math.round(e[2 * i + 1] / t) + Math.round(e[2 * i] / t) + r;
                                        e[i] = 67108863 & n, r = n < 67108864 ? 0 : n / 67108864 | 0
                                    }
                                    return e
                                }, FFTM.prototype.convert13b = function(e, t, r, i) {
                                    for (var n = 0, u = 0; u < t; u++) n += 0 | e[u], r[2 * u] = 8191 & n, n >>>= 13, r[2 * u + 1] = 8191 & n, n >>>= 13;
                                    for (u = 2 * t; u < i; ++u) r[u] = 0;
                                    assert(0 === n), assert((-8192 & n) == 0)
                                }, FFTM.prototype.stub = function(e) {
                                    for (var t = Array(e), r = 0; r < e; r++) t[r] = 0;
                                    return t
                                }, FFTM.prototype.mulp = function(e, t, r) {
                                    var i = 2 * this.guessLen13b(e.length, t.length),
                                        n = this.makeRBT(i),
                                        u = this.stub(i),
                                        b = Array(i),
                                        m = Array(i),
                                        y = Array(i),
                                        v = Array(i),
                                        g = Array(i),
                                        _ = Array(i),
                                        w = r.words;
                                    w.length = i, this.convert13b(e.words, e.length, b, i), this.convert13b(t.words, t.length, v, i), this.transform(b, u, m, y, i, n), this.transform(v, u, g, _, i, n);
                                    for (var M = 0; M < i; M++) {
                                        var S = m[M] * g[M] - y[M] * _[M];
                                        y[M] = m[M] * _[M] + y[M] * g[M], m[M] = S
                                    }
                                    return this.conjugate(m, y, i), this.transform(m, y, w, u, i, n), this.conjugate(w, u, i), this.normalize13b(w, i), r.negative = e.negative ^ t.negative, r.length = e.length + t.length, r.strip()
                                }, BN.prototype.mul = function(e) {
                                    var t = new BN(null);
                                    return t.words = Array(this.length + e.length), this.mulTo(e, t)
                                }, BN.prototype.mulf = function(e) {
                                    var t = new BN(null);
                                    return t.words = Array(this.length + e.length), jumboMulTo(this, e, t)
                                }, BN.prototype.imul = function(e) {
                                    return this.clone().mulTo(e, this)
                                }, BN.prototype.imuln = function(e) {
                                    assert("number" == typeof e), assert(e < 67108864);
                                    for (var t = 0, r = 0; r < this.length; r++) {
                                        var i = (0 | this.words[r]) * e,
                                            n = (67108863 & i) + (67108863 & t);
                                        t >>= 26, t += (i / 67108864 | 0) + (n >>> 26), this.words[r] = 67108863 & n
                                    }
                                    return 0 !== t && (this.words[r] = t, this.length++), this
                                }, BN.prototype.muln = function(e) {
                                    return this.clone().imuln(e)
                                }, BN.prototype.sqr = function() {
                                    return this.mul(this)
                                }, BN.prototype.isqr = function() {
                                    return this.imul(this.clone())
                                }, BN.prototype.pow = function(e) {
                                    var t = function(e) {
                                        for (var t = Array(e.bitLength()), r = 0; r < t.length; r++) {
                                            var i = r / 26 | 0,
                                                n = r % 26;
                                            t[r] = (e.words[i] & 1 << n) >>> n
                                        }
                                        return t
                                    }(e);
                                    if (0 === t.length) return new BN(1);
                                    for (var r = this, i = 0; i < t.length && 0 === t[i]; i++, r = r.sqr());
                                    if (++i < t.length)
                                        for (var n = r.sqr(); i < t.length; i++, n = n.sqr()) 0 !== t[i] && (r = r.mul(n));
                                    return r
                                }, BN.prototype.iushln = function(e) {
                                    assert("number" == typeof e && e >= 0);
                                    var t, r = e % 26,
                                        i = (e - r) / 26,
                                        n = 67108863 >>> 26 - r << 26 - r;
                                    if (0 !== r) {
                                        var u = 0;
                                        for (t = 0; t < this.length; t++) {
                                            var b = this.words[t] & n,
                                                m = (0 | this.words[t]) - b << r;
                                            this.words[t] = m | u, u = b >>> 26 - r
                                        }
                                        u && (this.words[t] = u, this.length++)
                                    }
                                    if (0 !== i) {
                                        for (t = this.length - 1; t >= 0; t--) this.words[t + i] = this.words[t];
                                        for (t = 0; t < i; t++) this.words[t] = 0;
                                        this.length += i
                                    }
                                    return this.strip()
                                }, BN.prototype.ishln = function(e) {
                                    return assert(0 === this.negative), this.iushln(e)
                                }, BN.prototype.iushrn = function(e, t, r) {
                                    assert("number" == typeof e && e >= 0), i = t ? (t - t % 26) / 26 : 0;
                                    var i, n = e % 26,
                                        u = Math.min((e - n) / 26, this.length),
                                        b = 67108863 ^ 67108863 >>> n << n;
                                    if (i -= u, i = Math.max(0, i), r) {
                                        for (var m = 0; m < u; m++) r.words[m] = this.words[m];
                                        r.length = u
                                    }
                                    if (0 === u);
                                    else if (this.length > u)
                                        for (this.length -= u, m = 0; m < this.length; m++) this.words[m] = this.words[m + u];
                                    else this.words[0] = 0, this.length = 1;
                                    var y = 0;
                                    for (m = this.length - 1; m >= 0 && (0 !== y || m >= i); m--) {
                                        var v = 0 | this.words[m];
                                        this.words[m] = y << 26 - n | v >>> n, y = v & b
                                    }
                                    return r && 0 !== y && (r.words[r.length++] = y), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip()
                                }, BN.prototype.ishrn = function(e, t, r) {
                                    return assert(0 === this.negative), this.iushrn(e, t, r)
                                }, BN.prototype.shln = function(e) {
                                    return this.clone().ishln(e)
                                }, BN.prototype.ushln = function(e) {
                                    return this.clone().iushln(e)
                                }, BN.prototype.shrn = function(e) {
                                    return this.clone().ishrn(e)
                                }, BN.prototype.ushrn = function(e) {
                                    return this.clone().iushrn(e)
                                }, BN.prototype.testn = function(e) {
                                    assert("number" == typeof e && e >= 0);
                                    var t = e % 26,
                                        r = (e - t) / 26;
                                    return !(this.length <= r) && !!(this.words[r] & 1 << t)
                                }, BN.prototype.imaskn = function(e) {
                                    assert("number" == typeof e && e >= 0);
                                    var t = e % 26,
                                        r = (e - t) / 26;
                                    return (assert(0 === this.negative, "imaskn works only with positive numbers"), this.length <= r) ? this : (0 !== t && r++, this.length = Math.min(r, this.length), 0 !== t && (this.words[this.length - 1] &= 67108863 ^ 67108863 >>> t << t), this.strip())
                                }, BN.prototype.maskn = function(e) {
                                    return this.clone().imaskn(e)
                                }, BN.prototype.iaddn = function(e) {
                                    return (assert("number" == typeof e), assert(e < 67108864), e < 0) ? this.isubn(-e) : 0 !== this.negative ? (1 === this.length && (0 | this.words[0]) < e ? (this.words[0] = e - (0 | this.words[0]), this.negative = 0) : (this.negative = 0, this.isubn(e), this.negative = 1), this) : this._iaddn(e)
                                }, BN.prototype._iaddn = function(e) {
                                    this.words[0] += e;
                                    for (var t = 0; t < this.length && this.words[t] >= 67108864; t++) this.words[t] -= 67108864, t === this.length - 1 ? this.words[t + 1] = 1 : this.words[t + 1]++;
                                    return this.length = Math.max(this.length, t + 1), this
                                }, BN.prototype.isubn = function(e) {
                                    if (assert("number" == typeof e), assert(e < 67108864), e < 0) return this.iaddn(-e);
                                    if (0 !== this.negative) return this.negative = 0, this.iaddn(e), this.negative = 1, this;
                                    if (this.words[0] -= e, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                                    else
                                        for (var t = 0; t < this.length && this.words[t] < 0; t++) this.words[t] += 67108864, this.words[t + 1] -= 1;
                                    return this.strip()
                                }, BN.prototype.addn = function(e) {
                                    return this.clone().iaddn(e)
                                }, BN.prototype.subn = function(e) {
                                    return this.clone().isubn(e)
                                }, BN.prototype.iabs = function() {
                                    return this.negative = 0, this
                                }, BN.prototype.abs = function() {
                                    return this.clone().iabs()
                                }, BN.prototype._ishlnsubmul = function(e, t, r) {
                                    var i, n, u = e.length + r;
                                    this._expand(u);
                                    var b = 0;
                                    for (i = 0; i < e.length; i++) {
                                        n = (0 | this.words[i + r]) + b;
                                        var m = (0 | e.words[i]) * t;
                                        n -= 67108863 & m, b = (n >> 26) - (m / 67108864 | 0), this.words[i + r] = 67108863 & n
                                    }
                                    for (; i < this.length - r; i++) b = (n = (0 | this.words[i + r]) + b) >> 26, this.words[i + r] = 67108863 & n;
                                    if (0 === b) return this.strip();
                                    for (assert(-1 === b), b = 0, i = 0; i < this.length; i++) b = (n = -(0 | this.words[i]) + b) >> 26, this.words[i] = 67108863 & n;
                                    return this.negative = 1, this.strip()
                                }, BN.prototype._wordDiv = function(e, t) {
                                    var r, i = this.length - e.length,
                                        n = this.clone(),
                                        u = e,
                                        b = 0 | u.words[u.length - 1];
                                    0 != (i = 26 - this._countBits(b)) && (u = u.ushln(i), n.iushln(i), b = 0 | u.words[u.length - 1]);
                                    var m = n.length - u.length;
                                    if ("mod" !== t) {
                                        (r = new BN(null)).length = m + 1, r.words = Array(r.length);
                                        for (var y = 0; y < r.length; y++) r.words[y] = 0
                                    }
                                    var v = n.clone()._ishlnsubmul(u, 1, m);
                                    0 === v.negative && (n = v, r && (r.words[m] = 1));
                                    for (var g = m - 1; g >= 0; g--) {
                                        var _ = (0 | n.words[u.length + g]) * 67108864 + (0 | n.words[u.length + g - 1]);
                                        for (_ = Math.min(_ / b | 0, 67108863), n._ishlnsubmul(u, _, g); 0 !== n.negative;) _--, n.negative = 0, n._ishlnsubmul(u, 1, g), n.isZero() || (n.negative ^= 1);
                                        r && (r.words[g] = _)
                                    }
                                    return r && r.strip(), n.strip(), "div" !== t && 0 !== i && n.iushrn(i), {
                                        div: r || null,
                                        mod: n
                                    }
                                }, BN.prototype.divmod = function(e, t, r) {
                                    var i, n, u;
                                    return (assert(!e.isZero()), this.isZero()) ? {
                                        div: new BN(0),
                                        mod: new BN(0)
                                    } : 0 !== this.negative && 0 === e.negative ? (u = this.neg().divmod(e, t), "mod" !== t && (i = u.div.neg()), "div" !== t && (n = u.mod.neg(), r && 0 !== n.negative && n.iadd(e)), {
                                        div: i,
                                        mod: n
                                    }) : 0 === this.negative && 0 !== e.negative ? (u = this.divmod(e.neg(), t), "mod" !== t && (i = u.div.neg()), {
                                        div: i,
                                        mod: u.mod
                                    }) : (this.negative & e.negative) != 0 ? (u = this.neg().divmod(e.neg(), t), "div" !== t && (n = u.mod.neg(), r && 0 !== n.negative && n.isub(e)), {
                                        div: u.div,
                                        mod: n
                                    }) : e.length > this.length || 0 > this.cmp(e) ? {
                                        div: new BN(0),
                                        mod: this
                                    } : 1 === e.length ? "div" === t ? {
                                        div: this.divn(e.words[0]),
                                        mod: null
                                    } : "mod" === t ? {
                                        div: null,
                                        mod: new BN(this.modn(e.words[0]))
                                    } : {
                                        div: this.divn(e.words[0]),
                                        mod: new BN(this.modn(e.words[0]))
                                    } : this._wordDiv(e, t)
                                }, BN.prototype.div = function(e) {
                                    return this.divmod(e, "div", !1).div
                                }, BN.prototype.mod = function(e) {
                                    return this.divmod(e, "mod", !1).mod
                                }, BN.prototype.umod = function(e) {
                                    return this.divmod(e, "mod", !0).mod
                                }, BN.prototype.divRound = function(e) {
                                    var t = this.divmod(e);
                                    if (t.mod.isZero()) return t.div;
                                    var r = 0 !== t.div.negative ? t.mod.isub(e) : t.mod,
                                        i = e.ushrn(1),
                                        n = e.andln(1),
                                        u = r.cmp(i);
                                    return u < 0 || 1 === n && 0 === u ? t.div : 0 !== t.div.negative ? t.div.isubn(1) : t.div.iaddn(1)
                                }, BN.prototype.modn = function(e) {
                                    assert(e <= 67108863);
                                    for (var t = 67108864 % e, r = 0, i = this.length - 1; i >= 0; i--) r = (t * r + (0 | this.words[i])) % e;
                                    return r
                                }, BN.prototype.idivn = function(e) {
                                    assert(e <= 67108863);
                                    for (var t = 0, r = this.length - 1; r >= 0; r--) {
                                        var i = (0 | this.words[r]) + 67108864 * t;
                                        this.words[r] = i / e | 0, t = i % e
                                    }
                                    return this.strip()
                                }, BN.prototype.divn = function(e) {
                                    return this.clone().idivn(e)
                                }, BN.prototype.egcd = function(e) {
                                    assert(0 === e.negative), assert(!e.isZero());
                                    var t = this,
                                        r = e.clone();
                                    t = 0 !== t.negative ? t.umod(e) : t.clone();
                                    for (var i = new BN(1), n = new BN(0), u = new BN(0), b = new BN(1), m = 0; t.isEven() && r.isEven();) t.iushrn(1), r.iushrn(1), ++m;
                                    for (var y = r.clone(), v = t.clone(); !t.isZero();) {
                                        for (var g = 0, _ = 1;
                                            (t.words[0] & _) == 0 && g < 26; ++g, _ <<= 1);
                                        if (g > 0)
                                            for (t.iushrn(g); g-- > 0;)(i.isOdd() || n.isOdd()) && (i.iadd(y), n.isub(v)), i.iushrn(1), n.iushrn(1);
                                        for (var w = 0, M = 1;
                                            (r.words[0] & M) == 0 && w < 26; ++w, M <<= 1);
                                        if (w > 0)
                                            for (r.iushrn(w); w-- > 0;)(u.isOdd() || b.isOdd()) && (u.iadd(y), b.isub(v)), u.iushrn(1), b.iushrn(1);
                                        t.cmp(r) >= 0 ? (t.isub(r), i.isub(u), n.isub(b)) : (r.isub(t), u.isub(i), b.isub(n))
                                    }
                                    return {
                                        a: u,
                                        b: b,
                                        gcd: r.iushln(m)
                                    }
                                }, BN.prototype._invmp = function(e) {
                                    assert(0 === e.negative), assert(!e.isZero());
                                    var t, r = this,
                                        i = e.clone();
                                    r = 0 !== r.negative ? r.umod(e) : r.clone();
                                    for (var n = new BN(1), u = new BN(0), b = i.clone(); r.cmpn(1) > 0 && i.cmpn(1) > 0;) {
                                        for (var m = 0, y = 1;
                                            (r.words[0] & y) == 0 && m < 26; ++m, y <<= 1);
                                        if (m > 0)
                                            for (r.iushrn(m); m-- > 0;) n.isOdd() && n.iadd(b), n.iushrn(1);
                                        for (var v = 0, g = 1;
                                            (i.words[0] & g) == 0 && v < 26; ++v, g <<= 1);
                                        if (v > 0)
                                            for (i.iushrn(v); v-- > 0;) u.isOdd() && u.iadd(b), u.iushrn(1);
                                        r.cmp(i) >= 0 ? (r.isub(i), n.isub(u)) : (i.isub(r), u.isub(n))
                                    }
                                    return 0 > (t = 0 === r.cmpn(1) ? n : u).cmpn(0) && t.iadd(e), t
                                }, BN.prototype.gcd = function(e) {
                                    if (this.isZero()) return e.abs();
                                    if (e.isZero()) return this.abs();
                                    var t = this.clone(),
                                        r = e.clone();
                                    t.negative = 0, r.negative = 0;
                                    for (var i = 0; t.isEven() && r.isEven(); i++) t.iushrn(1), r.iushrn(1);
                                    for (;;) {
                                        for (; t.isEven();) t.iushrn(1);
                                        for (; r.isEven();) r.iushrn(1);
                                        var n = t.cmp(r);
                                        if (n < 0) {
                                            var u = t;
                                            t = r, r = u
                                        } else if (0 === n || 0 === r.cmpn(1)) break;
                                        t.isub(r)
                                    }
                                    return r.iushln(i)
                                }, BN.prototype.invm = function(e) {
                                    return this.egcd(e).a.umod(e)
                                }, BN.prototype.isEven = function() {
                                    return (1 & this.words[0]) == 0
                                }, BN.prototype.isOdd = function() {
                                    return (1 & this.words[0]) == 1
                                }, BN.prototype.andln = function(e) {
                                    return this.words[0] & e
                                }, BN.prototype.bincn = function(e) {
                                    assert("number" == typeof e);
                                    var t = e % 26,
                                        r = (e - t) / 26,
                                        i = 1 << t;
                                    if (this.length <= r) return this._expand(r + 1), this.words[r] |= i, this;
                                    for (var n = i, u = r; 0 !== n && u < this.length; u++) {
                                        var b = 0 | this.words[u];
                                        b += n, n = b >>> 26, b &= 67108863, this.words[u] = b
                                    }
                                    return 0 !== n && (this.words[u] = n, this.length++), this
                                }, BN.prototype.isZero = function() {
                                    return 1 === this.length && 0 === this.words[0]
                                }, BN.prototype.cmpn = function(e) {
                                    var t, r = e < 0;
                                    if (0 !== this.negative && !r) return -1;
                                    if (0 === this.negative && r) return 1;
                                    if (this.strip(), this.length > 1) t = 1;
                                    else {
                                        r && (e = -e), assert(e <= 67108863, "Number is too big");
                                        var i = 0 | this.words[0];
                                        t = i === e ? 0 : i < e ? -1 : 1
                                    }
                                    return 0 !== this.negative ? 0 | -t : t
                                }, BN.prototype.cmp = function(e) {
                                    if (0 !== this.negative && 0 === e.negative) return -1;
                                    if (0 === this.negative && 0 !== e.negative) return 1;
                                    var t = this.ucmp(e);
                                    return 0 !== this.negative ? 0 | -t : t
                                }, BN.prototype.ucmp = function(e) {
                                    if (this.length > e.length) return 1;
                                    if (this.length < e.length) return -1;
                                    for (var t = 0, r = this.length - 1; r >= 0; r--) {
                                        var i = 0 | this.words[r],
                                            n = 0 | e.words[r];
                                        if (i !== n) {
                                            i < n ? t = -1 : i > n && (t = 1);
                                            break
                                        }
                                    }
                                    return t
                                }, BN.prototype.gtn = function(e) {
                                    return 1 === this.cmpn(e)
                                }, BN.prototype.gt = function(e) {
                                    return 1 === this.cmp(e)
                                }, BN.prototype.gten = function(e) {
                                    return this.cmpn(e) >= 0
                                }, BN.prototype.gte = function(e) {
                                    return this.cmp(e) >= 0
                                }, BN.prototype.ltn = function(e) {
                                    return -1 === this.cmpn(e)
                                }, BN.prototype.lt = function(e) {
                                    return -1 === this.cmp(e)
                                }, BN.prototype.lten = function(e) {
                                    return 0 >= this.cmpn(e)
                                }, BN.prototype.lte = function(e) {
                                    return 0 >= this.cmp(e)
                                }, BN.prototype.eqn = function(e) {
                                    return 0 === this.cmpn(e)
                                }, BN.prototype.eq = function(e) {
                                    return 0 === this.cmp(e)
                                }, BN.red = function(e) {
                                    return new Red(e)
                                }, BN.prototype.toRed = function(e) {
                                    return assert(!this.red, "Already a number in reduction context"), assert(0 === this.negative, "red works only with positives"), e.convertTo(this)._forceRed(e)
                                }, BN.prototype.fromRed = function() {
                                    return assert(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                                }, BN.prototype._forceRed = function(e) {
                                    return this.red = e, this
                                }, BN.prototype.forceRed = function(e) {
                                    return assert(!this.red, "Already a number in reduction context"), this._forceRed(e)
                                }, BN.prototype.redAdd = function(e) {
                                    return assert(this.red, "redAdd works only with red numbers"), this.red.add(this, e)
                                }, BN.prototype.redIAdd = function(e) {
                                    return assert(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, e)
                                }, BN.prototype.redSub = function(e) {
                                    return assert(this.red, "redSub works only with red numbers"), this.red.sub(this, e)
                                }, BN.prototype.redISub = function(e) {
                                    return assert(this.red, "redISub works only with red numbers"), this.red.isub(this, e)
                                }, BN.prototype.redShl = function(e) {
                                    return assert(this.red, "redShl works only with red numbers"), this.red.shl(this, e)
                                }, BN.prototype.redMul = function(e) {
                                    return assert(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.mul(this, e)
                                }, BN.prototype.redIMul = function(e) {
                                    return assert(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.imul(this, e)
                                }, BN.prototype.redSqr = function() {
                                    return assert(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                                }, BN.prototype.redISqr = function() {
                                    return assert(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                                }, BN.prototype.redSqrt = function() {
                                    return assert(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                                }, BN.prototype.redInvm = function() {
                                    return assert(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                                }, BN.prototype.redNeg = function() {
                                    return assert(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                                }, BN.prototype.redPow = function(e) {
                                    return assert(this.red && !e.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, e)
                                };
                                var m = {
                                    k256: null,
                                    p224: null,
                                    p192: null,
                                    p25519: null
                                };

                                function MPrime(e, t) {
                                    this.name = e, this.p = new BN(t, 16), this.n = this.p.bitLength(), this.k = new BN(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                                }

                                function K256() {
                                    MPrime.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                                }

                                function P224() {
                                    MPrime.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                                }

                                function P192() {
                                    MPrime.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                                }

                                function P25519() {
                                    MPrime.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                                }

                                function Red(e) {
                                    if ("string" == typeof e) {
                                        var t = BN._prime(e);
                                        this.m = t.p, this.prime = t
                                    } else assert(e.gtn(1), "modulus must be greater than 1"), this.m = e, this.prime = null
                                }

                                function Mont(e) {
                                    Red.call(this, e), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new BN(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                                }
                                MPrime.prototype._tmp = function() {
                                    var e = new BN(null);
                                    return e.words = Array(Math.ceil(this.n / 13)), e
                                }, MPrime.prototype.ireduce = function(e) {
                                    var t, r = e;
                                    do this.split(r, this.tmp), t = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength(); while (t > this.n);
                                    var i = t < this.n ? -1 : r.ucmp(this.p);
                                    return 0 === i ? (r.words[0] = 0, r.length = 1) : i > 0 ? r.isub(this.p) : void 0 !== r.strip ? r.strip() : r._strip(), r
                                }, MPrime.prototype.split = function(e, t) {
                                    e.iushrn(this.n, 0, t)
                                }, MPrime.prototype.imulK = function(e) {
                                    return e.imul(this.k)
                                }, inherits(K256, MPrime), K256.prototype.split = function(e, t) {
                                    for (var r = Math.min(e.length, 9), i = 0; i < r; i++) t.words[i] = e.words[i];
                                    if (t.length = r, e.length <= 9) {
                                        e.words[0] = 0, e.length = 1;
                                        return
                                    }
                                    var n = e.words[9];
                                    for (i = 10, t.words[t.length++] = 4194303 & n; i < e.length; i++) {
                                        var u = 0 | e.words[i];
                                        e.words[i - 10] = (4194303 & u) << 4 | n >>> 22, n = u
                                    }
                                    n >>>= 22, e.words[i - 10] = n, 0 === n && e.length > 10 ? e.length -= 10 : e.length -= 9
                                }, K256.prototype.imulK = function(e) {
                                    e.words[e.length] = 0, e.words[e.length + 1] = 0, e.length += 2;
                                    for (var t = 0, r = 0; r < e.length; r++) {
                                        var i = 0 | e.words[r];
                                        t += 977 * i, e.words[r] = 67108863 & t, t = 64 * i + (t / 67108864 | 0)
                                    }
                                    return 0 === e.words[e.length - 1] && (e.length--, 0 === e.words[e.length - 1] && e.length--), e
                                }, inherits(P224, MPrime), inherits(P192, MPrime), inherits(P25519, MPrime), P25519.prototype.imulK = function(e) {
                                    for (var t = 0, r = 0; r < e.length; r++) {
                                        var i = (0 | e.words[r]) * 19 + t,
                                            n = 67108863 & i;
                                        i >>>= 26, e.words[r] = n, t = i
                                    }
                                    return 0 !== t && (e.words[e.length++] = t), e
                                }, BN._prime = function(e) {
                                    var t;
                                    if (m[e]) return m[e];
                                    if ("k256" === e) t = new K256;
                                    else if ("p224" === e) t = new P224;
                                    else if ("p192" === e) t = new P192;
                                    else if ("p25519" === e) t = new P25519;
                                    else throw Error("Unknown prime " + e);
                                    return m[e] = t, t
                                }, Red.prototype._verify1 = function(e) {
                                    assert(0 === e.negative, "red works only with positives"), assert(e.red, "red works only with red numbers")
                                }, Red.prototype._verify2 = function(e, t) {
                                    assert((e.negative | t.negative) == 0, "red works only with positives"), assert(e.red && e.red === t.red, "red works only with red numbers")
                                }, Red.prototype.imod = function(e) {
                                    return this.prime ? this.prime.ireduce(e)._forceRed(this) : e.umod(this.m)._forceRed(this)
                                }, Red.prototype.neg = function(e) {
                                    return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this)
                                }, Red.prototype.add = function(e, t) {
                                    this._verify2(e, t);
                                    var r = e.add(t);
                                    return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this)
                                }, Red.prototype.iadd = function(e, t) {
                                    this._verify2(e, t);
                                    var r = e.iadd(t);
                                    return r.cmp(this.m) >= 0 && r.isub(this.m), r
                                }, Red.prototype.sub = function(e, t) {
                                    this._verify2(e, t);
                                    var r = e.sub(t);
                                    return 0 > r.cmpn(0) && r.iadd(this.m), r._forceRed(this)
                                }, Red.prototype.isub = function(e, t) {
                                    this._verify2(e, t);
                                    var r = e.isub(t);
                                    return 0 > r.cmpn(0) && r.iadd(this.m), r
                                }, Red.prototype.shl = function(e, t) {
                                    return this._verify1(e), this.imod(e.ushln(t))
                                }, Red.prototype.imul = function(e, t) {
                                    return this._verify2(e, t), this.imod(e.imul(t))
                                }, Red.prototype.mul = function(e, t) {
                                    return this._verify2(e, t), this.imod(e.mul(t))
                                }, Red.prototype.isqr = function(e) {
                                    return this.imul(e, e.clone())
                                }, Red.prototype.sqr = function(e) {
                                    return this.mul(e, e)
                                }, Red.prototype.sqrt = function(e) {
                                    if (e.isZero()) return e.clone();
                                    var t = this.m.andln(3);
                                    if (assert(t % 2 == 1), 3 === t) {
                                        var r = this.m.add(new BN(1)).iushrn(2);
                                        return this.pow(e, r)
                                    }
                                    for (var i = this.m.subn(1), n = 0; !i.isZero() && 0 === i.andln(1);) n++, i.iushrn(1);
                                    assert(!i.isZero());
                                    var u = new BN(1).toRed(this),
                                        b = u.redNeg(),
                                        m = this.m.subn(1).iushrn(1),
                                        y = this.m.bitLength();
                                    for (y = new BN(2 * y * y).toRed(this); 0 !== this.pow(y, m).cmp(b);) y.redIAdd(b);
                                    for (var v = this.pow(y, i), g = this.pow(e, i.addn(1).iushrn(1)), _ = this.pow(e, i), w = n; 0 !== _.cmp(u);) {
                                        for (var M = _, S = 0; 0 !== M.cmp(u); S++) M = M.redSqr();
                                        assert(S < w);
                                        var B = this.pow(v, new BN(1).iushln(w - S - 1));
                                        g = g.redMul(B), v = B.redSqr(), _ = _.redMul(v), w = S
                                    }
                                    return g
                                }, Red.prototype.invm = function(e) {
                                    var t = e._invmp(this.m);
                                    return 0 !== t.negative ? (t.negative = 0, this.imod(t).redNeg()) : this.imod(t)
                                }, Red.prototype.pow = function(e, t) {
                                    if (t.isZero()) return new BN(1).toRed(this);
                                    if (0 === t.cmpn(1)) return e.clone();
                                    var r = Array(16);
                                    r[0] = new BN(1).toRed(this), r[1] = e;
                                    for (var i = 2; i < r.length; i++) r[i] = this.mul(r[i - 1], e);
                                    var n = r[0],
                                        u = 0,
                                        b = 0,
                                        m = t.bitLength() % 26;
                                    for (0 === m && (m = 26), i = t.length - 1; i >= 0; i--) {
                                        for (var y = t.words[i], v = m - 1; v >= 0; v--) {
                                            var g = y >> v & 1;
                                            if (n !== r[0] && (n = this.sqr(n)), 0 === g && 0 === u) {
                                                b = 0;
                                                continue
                                            }
                                            u <<= 1, u |= g, (4 == ++b || 0 === i && 0 === v) && (n = this.mul(n, r[u]), b = 0, u = 0)
                                        }
                                        m = 26
                                    }
                                    return n
                                }, Red.prototype.convertTo = function(e) {
                                    var t = e.umod(this.m);
                                    return t === e ? t.clone() : t
                                }, Red.prototype.convertFrom = function(e) {
                                    var t = e.clone();
                                    return t.red = null, t
                                }, BN.mont = function(e) {
                                    return new Mont(e)
                                }, inherits(Mont, Red), Mont.prototype.convertTo = function(e) {
                                    return this.imod(e.ushln(this.shift))
                                }, Mont.prototype.convertFrom = function(e) {
                                    var t = this.imod(e.mul(this.rinv));
                                    return t.red = null, t
                                }, Mont.prototype.imul = function(e, t) {
                                    if (e.isZero() || t.isZero()) return e.words[0] = 0, e.length = 1, e;
                                    var r = e.imul(t),
                                        i = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                                        n = r.isub(i).iushrn(this.shift),
                                        u = n;
                                    return n.cmp(this.m) >= 0 ? u = n.isub(this.m) : 0 > n.cmpn(0) && (u = n.iadd(this.m)), u._forceRed(this)
                                }, Mont.prototype.mul = function(e, t) {
                                    if (e.isZero() || t.isZero()) return new BN(0)._forceRed(this);
                                    var r = e.mul(t),
                                        i = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                                        n = r.isub(i).iushrn(this.shift),
                                        u = n;
                                    return n.cmp(this.m) >= 0 ? u = n.isub(this.m) : 0 > n.cmpn(0) && (u = n.iadd(this.m)), u._forceRed(this)
                                }, Mont.prototype.invm = function(e) {
                                    return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this)
                                }
                            }(e = r.nmd(e), this)
                        },
                        1670: function(e, t, r) {
                            ! function(e, t) {
                                "use strict";

                                function assert(e, t) {
                                    if (!e) throw Error(t || "Assertion failed")
                                }

                                function inherits(e, t) {
                                    e.super_ = t;
                                    var TempCtor = function() {};
                                    TempCtor.prototype = t.prototype, e.prototype = new TempCtor, e.prototype.constructor = e
                                }

                                function BN(e, t, r) {
                                    if (BN.isBN(e)) return e;
                                    this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== e && (("le" === t || "be" === t) && (r = t, t = 10), this._init(e || 0, t || 10, r || "be"))
                                }
                                "object" == typeof e ? e.exports = BN : t.BN = BN, BN.BN = BN, BN.wordSize = 26;
                                try {
                                    i = r(4300).Buffer
                                } catch (e) {}

                                function parseHex(e, t, r) {
                                    for (var i = 0, n = Math.min(e.length, r), u = 0, b = t; b < n; b++) {
                                        var m, y = e.charCodeAt(b) - 48;
                                        i <<= 4, i |= m = y >= 49 && y <= 54 ? y - 49 + 10 : y >= 17 && y <= 22 ? y - 17 + 10 : y, u |= m
                                    }
                                    return assert(!(240 & u), "Invalid character in " + e), i
                                }

                                function parseBase(e, t, r, i) {
                                    for (var n = 0, u = 0, b = Math.min(e.length, r), m = t; m < b; m++) {
                                        var y = e.charCodeAt(m) - 48;
                                        n *= i, u = y >= 49 ? y - 49 + 10 : y >= 17 ? y - 17 + 10 : y, assert(y >= 0 && u < i, "Invalid character"), n += u
                                    }
                                    return n
                                }

                                function move(e, t) {
                                    e.words = t.words, e.length = t.length, e.negative = t.negative, e.red = t.red
                                }

                                function inspect() {
                                    return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                                }
                                BN.isBN = function(e) {
                                    return e instanceof BN || null !== e && "object" == typeof e && e.constructor.wordSize === BN.wordSize && Array.isArray(e.words)
                                }, BN.max = function(e, t) {
                                    return e.cmp(t) > 0 ? e : t
                                }, BN.min = function(e, t) {
                                    return 0 > e.cmp(t) ? e : t
                                }, BN.prototype._init = function(e, t, r) {
                                    if ("number" == typeof e) return this._initNumber(e, t, r);
                                    if ("object" == typeof e) return this._initArray(e, t, r);
                                    "hex" === t && (t = 16), assert(t === (0 | t) && t >= 2 && t <= 36);
                                    var i = 0;
                                    "-" === (e = e.toString().replace(/\s+/g, ""))[0] && i++, 16 === t ? this._parseHex(e, i) : this._parseBase(e, t, i), "-" === e[0] && (this.negative = 1), this._strip(), "le" === r && this._initArray(this.toArray(), t, r)
                                }, BN.prototype._initNumber = function(e, t, r) {
                                    e < 0 && (this.negative = 1, e = -e), e < 67108864 ? (this.words = [67108863 & e], this.length = 1) : e < 4503599627370496 ? (this.words = [67108863 & e, e / 67108864 & 67108863], this.length = 2) : (assert(e < 9007199254740992), this.words = [67108863 & e, e / 67108864 & 67108863, 1], this.length = 3), "le" === r && this._initArray(this.toArray(), t, r)
                                }, BN.prototype._initArray = function(e, t, r) {
                                    if (assert("number" == typeof e.length), e.length <= 0) return this.words = [0], this.length = 1, this;
                                    this.length = Math.ceil(e.length / 3), this.words = Array(this.length);
                                    for (var i, n, u = 0; u < this.length; u++) this.words[u] = 0;
                                    var b = 0;
                                    if ("be" === r)
                                        for (u = e.length - 1, i = 0; u >= 0; u -= 3) n = e[u] | e[u - 1] << 8 | e[u - 2] << 16, this.words[i] |= n << b & 67108863, this.words[i + 1] = n >>> 26 - b & 67108863, (b += 24) >= 26 && (b -= 26, i++);
                                    else if ("le" === r)
                                        for (u = 0, i = 0; u < e.length; u += 3) n = e[u] | e[u + 1] << 8 | e[u + 2] << 16, this.words[i] |= n << b & 67108863, this.words[i + 1] = n >>> 26 - b & 67108863, (b += 24) >= 26 && (b -= 26, i++);
                                    return this._strip()
                                }, BN.prototype._parseHex = function(e, t) {
                                    this.length = Math.ceil((e.length - t) / 6), this.words = Array(this.length);
                                    for (var r, i, n = 0; n < this.length; n++) this.words[n] = 0;
                                    var u = 0;
                                    for (n = e.length - 6, r = 0; n >= t; n -= 6) i = parseHex(e, n, n + 6), this.words[r] |= i << u & 67108863, this.words[r + 1] |= i >>> 26 - u & 4194303, (u += 24) >= 26 && (u -= 26, r++);
                                    n + 6 !== t && (i = parseHex(e, t, n + 6), this.words[r] |= i << u & 67108863, this.words[r + 1] |= i >>> 26 - u & 4194303), this._strip()
                                }, BN.prototype._parseBase = function(e, t, r) {
                                    this.words = [0], this.length = 1;
                                    for (var i = 0, n = 1; n <= 67108863; n *= t) i++;
                                    i--, n = n / t | 0;
                                    for (var u = e.length - r, b = u % i, m = Math.min(u, u - b) + r, y = 0, v = r; v < m; v += i) y = parseBase(e, v, v + i, t), this.imuln(n), this.words[0] + y < 67108864 ? this.words[0] += y : this._iaddn(y);
                                    if (0 !== b) {
                                        var g = 1;
                                        for (y = parseBase(e, v, e.length, t), v = 0; v < b; v++) g *= t;
                                        this.imuln(g), this.words[0] + y < 67108864 ? this.words[0] += y : this._iaddn(y)
                                    }
                                }, BN.prototype.copy = function(e) {
                                    e.words = Array(this.length);
                                    for (var t = 0; t < this.length; t++) e.words[t] = this.words[t];
                                    e.length = this.length, e.negative = this.negative, e.red = this.red
                                }, BN.prototype._move = function(e) {
                                    move(e, this)
                                }, BN.prototype.clone = function() {
                                    var e = new BN(null);
                                    return this.copy(e), e
                                }, BN.prototype._expand = function(e) {
                                    for (; this.length < e;) this.words[this.length++] = 0;
                                    return this
                                }, BN.prototype._strip = function() {
                                    for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
                                    return this._normSign()
                                }, BN.prototype._normSign = function() {
                                    return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
                                }, "undefined" != typeof Symbol && "function" == typeof Symbol.for ? BN.prototype[Symbol.for("nodejs.util.inspect.custom")] = inspect : BN.prototype.inspect = inspect;
                                var i, n = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                                    u = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                                    b = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

                                function smallMulTo(e, t, r) {
                                    r.negative = t.negative ^ e.negative;
                                    var i = e.length + t.length | 0;
                                    r.length = i, i = i - 1 | 0;
                                    var n = 0 | e.words[0],
                                        u = 0 | t.words[0],
                                        b = n * u,
                                        m = 67108863 & b,
                                        y = b / 67108864 | 0;
                                    r.words[0] = m;
                                    for (var v = 1; v < i; v++) {
                                        for (var g = y >>> 26, _ = 67108863 & y, w = Math.min(v, t.length - 1), M = Math.max(0, v - e.length + 1); M <= w; M++) {
                                            var S = v - M | 0;
                                            g += (b = (n = 0 | e.words[S]) * (u = 0 | t.words[M]) + _) / 67108864 | 0, _ = 67108863 & b
                                        }
                                        r.words[v] = 0 | _, y = 0 | g
                                    }
                                    return 0 !== y ? r.words[v] = 0 | y : r.length--, r._strip()
                                }
                                BN.prototype.toString = function(e, t) {
                                    if (t = 0 | t || 1, 16 === (e = e || 10) || "hex" === e) {
                                        r = "";
                                        for (var r, i = 0, m = 0, y = 0; y < this.length; y++) {
                                            var v = this.words[y],
                                                g = ((v << i | m) & 16777215).toString(16);
                                            r = 0 != (m = v >>> 24 - i & 16777215) || y !== this.length - 1 ? n[6 - g.length] + g + r : g + r, (i += 2) >= 26 && (i -= 26, y--)
                                        }
                                        for (0 !== m && (r = m.toString(16) + r); r.length % t != 0;) r = "0" + r;
                                        return 0 !== this.negative && (r = "-" + r), r
                                    }
                                    if (e === (0 | e) && e >= 2 && e <= 36) {
                                        var _ = u[e],
                                            w = b[e];
                                        r = "";
                                        var M = this.clone();
                                        for (M.negative = 0; !M.isZero();) {
                                            var S = M.modrn(w).toString(e);
                                            r = (M = M.idivn(w)).isZero() ? S + r : n[_ - S.length] + S + r
                                        }
                                        for (this.isZero() && (r = "0" + r); r.length % t != 0;) r = "0" + r;
                                        return 0 !== this.negative && (r = "-" + r), r
                                    }
                                    assert(!1, "Base should be between 2 and 36")
                                }, BN.prototype.toNumber = function() {
                                    var e = this.words[0];
                                    return 2 === this.length ? e += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? e += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && assert(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -e : e
                                }, BN.prototype.toJSON = function() {
                                    return this.toString(16, 2)
                                }, i && (BN.prototype.toBuffer = function(e, t) {
                                    return this.toArrayLike(i, e, t)
                                }), BN.prototype.toArray = function(e, t) {
                                    return this.toArrayLike(Array, e, t)
                                }, BN.prototype.toArrayLike = function(e, t, r) {
                                    this._strip();
                                    var i = this.byteLength(),
                                        n = r || Math.max(1, i);
                                    assert(i <= n, "byte array longer than desired length"), assert(n > 0, "Requested array length <= 0");
                                    var u = e.allocUnsafe ? e.allocUnsafe(n) : new e(n);
                                    return this["_toArrayLike" + ("le" === t ? "LE" : "BE")](u, i), u
                                }, BN.prototype._toArrayLikeLE = function(e, t) {
                                    for (var r = 0, i = 0, n = 0, u = 0; n < this.length; n++) {
                                        var b = this.words[n] << u | i;
                                        e[r++] = 255 & b, r < e.length && (e[r++] = b >> 8 & 255), r < e.length && (e[r++] = b >> 16 & 255), 6 === u ? (r < e.length && (e[r++] = b >> 24 & 255), i = 0, u = 0) : (i = b >>> 24, u += 2)
                                    }
                                    if (r < e.length)
                                        for (e[r++] = i; r < e.length;) e[r++] = 0
                                }, BN.prototype._toArrayLikeBE = function(e, t) {
                                    for (var r = e.length - 1, i = 0, n = 0, u = 0; n < this.length; n++) {
                                        var b = this.words[n] << u | i;
                                        e[r--] = 255 & b, r >= 0 && (e[r--] = b >> 8 & 255), r >= 0 && (e[r--] = b >> 16 & 255), 6 === u ? (r >= 0 && (e[r--] = b >> 24 & 255), i = 0, u = 0) : (i = b >>> 24, u += 2)
                                    }
                                    if (r >= 0)
                                        for (e[r--] = i; r >= 0;) e[r--] = 0
                                }, Math.clz32 ? BN.prototype._countBits = function(e) {
                                    return 32 - Math.clz32(e)
                                } : BN.prototype._countBits = function(e) {
                                    var t = e,
                                        r = 0;
                                    return t >= 4096 && (r += 13, t >>>= 13), t >= 64 && (r += 7, t >>>= 7), t >= 8 && (r += 4, t >>>= 4), t >= 2 && (r += 2, t >>>= 2), r + t
                                }, BN.prototype._zeroBits = function(e) {
                                    if (0 === e) return 26;
                                    var t = e,
                                        r = 0;
                                    return (8191 & t) == 0 && (r += 13, t >>>= 13), (127 & t) == 0 && (r += 7, t >>>= 7), (15 & t) == 0 && (r += 4, t >>>= 4), (3 & t) == 0 && (r += 2, t >>>= 2), (1 & t) == 0 && r++, r
                                }, BN.prototype.bitLength = function() {
                                    var e = this.words[this.length - 1],
                                        t = this._countBits(e);
                                    return (this.length - 1) * 26 + t
                                }, BN.prototype.zeroBits = function() {
                                    if (this.isZero()) return 0;
                                    for (var e = 0, t = 0; t < this.length; t++) {
                                        var r = this._zeroBits(this.words[t]);
                                        if (e += r, 26 !== r) break
                                    }
                                    return e
                                }, BN.prototype.byteLength = function() {
                                    return Math.ceil(this.bitLength() / 8)
                                }, BN.prototype.toTwos = function(e) {
                                    return 0 !== this.negative ? this.abs().inotn(e).iaddn(1) : this.clone()
                                }, BN.prototype.fromTwos = function(e) {
                                    return this.testn(e - 1) ? this.notn(e).iaddn(1).ineg() : this.clone()
                                }, BN.prototype.isNeg = function() {
                                    return 0 !== this.negative
                                }, BN.prototype.neg = function() {
                                    return this.clone().ineg()
                                }, BN.prototype.ineg = function() {
                                    return this.isZero() || (this.negative ^= 1), this
                                }, BN.prototype.iuor = function(e) {
                                    for (; this.length < e.length;) this.words[this.length++] = 0;
                                    for (var t = 0; t < e.length; t++) this.words[t] = this.words[t] | e.words[t];
                                    return this._strip()
                                }, BN.prototype.ior = function(e) {
                                    return assert((this.negative | e.negative) == 0), this.iuor(e)
                                }, BN.prototype.or = function(e) {
                                    return this.length > e.length ? this.clone().ior(e) : e.clone().ior(this)
                                }, BN.prototype.uor = function(e) {
                                    return this.length > e.length ? this.clone().iuor(e) : e.clone().iuor(this)
                                }, BN.prototype.iuand = function(e) {
                                    var t;
                                    t = this.length > e.length ? e : this;
                                    for (var r = 0; r < t.length; r++) this.words[r] = this.words[r] & e.words[r];
                                    return this.length = t.length, this._strip()
                                }, BN.prototype.iand = function(e) {
                                    return assert((this.negative | e.negative) == 0), this.iuand(e)
                                }, BN.prototype.and = function(e) {
                                    return this.length > e.length ? this.clone().iand(e) : e.clone().iand(this)
                                }, BN.prototype.uand = function(e) {
                                    return this.length > e.length ? this.clone().iuand(e) : e.clone().iuand(this)
                                }, BN.prototype.iuxor = function(e) {
                                    this.length > e.length ? (t = this, r = e) : (t = e, r = this);
                                    for (var t, r, i = 0; i < r.length; i++) this.words[i] = t.words[i] ^ r.words[i];
                                    if (this !== t)
                                        for (; i < t.length; i++) this.words[i] = t.words[i];
                                    return this.length = t.length, this._strip()
                                }, BN.prototype.ixor = function(e) {
                                    return assert((this.negative | e.negative) == 0), this.iuxor(e)
                                }, BN.prototype.xor = function(e) {
                                    return this.length > e.length ? this.clone().ixor(e) : e.clone().ixor(this)
                                }, BN.prototype.uxor = function(e) {
                                    return this.length > e.length ? this.clone().iuxor(e) : e.clone().iuxor(this)
                                }, BN.prototype.inotn = function(e) {
                                    assert("number" == typeof e && e >= 0);
                                    var t = 0 | Math.ceil(e / 26),
                                        r = e % 26;
                                    this._expand(t), r > 0 && t--;
                                    for (var i = 0; i < t; i++) this.words[i] = 67108863 & ~this.words[i];
                                    return r > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - r), this._strip()
                                }, BN.prototype.notn = function(e) {
                                    return this.clone().inotn(e)
                                }, BN.prototype.setn = function(e, t) {
                                    assert("number" == typeof e && e >= 0);
                                    var r = e / 26 | 0,
                                        i = e % 26;
                                    return this._expand(r + 1), t ? this.words[r] = this.words[r] | 1 << i : this.words[r] = this.words[r] & ~(1 << i), this._strip()
                                }, BN.prototype.iadd = function(e) {
                                    if (0 !== this.negative && 0 === e.negative) return this.negative = 0, t = this.isub(e), this.negative ^= 1, this._normSign();
                                    if (0 === this.negative && 0 !== e.negative) return e.negative = 0, t = this.isub(e), e.negative = 1, t._normSign();
                                    this.length > e.length ? (r = this, i = e) : (r = e, i = this);
                                    for (var t, r, i, n = 0, u = 0; u < i.length; u++) t = (0 | r.words[u]) + (0 | i.words[u]) + n, this.words[u] = 67108863 & t, n = t >>> 26;
                                    for (; 0 !== n && u < r.length; u++) t = (0 | r.words[u]) + n, this.words[u] = 67108863 & t, n = t >>> 26;
                                    if (this.length = r.length, 0 !== n) this.words[this.length] = n, this.length++;
                                    else if (r !== this)
                                        for (; u < r.length; u++) this.words[u] = r.words[u];
                                    return this
                                }, BN.prototype.add = function(e) {
                                    var t;
                                    return 0 !== e.negative && 0 === this.negative ? (e.negative = 0, t = this.sub(e), e.negative ^= 1, t) : 0 === e.negative && 0 !== this.negative ? (this.negative = 0, t = e.sub(this), this.negative = 1, t) : this.length > e.length ? this.clone().iadd(e) : e.clone().iadd(this)
                                }, BN.prototype.isub = function(e) {
                                    if (0 !== e.negative) {
                                        e.negative = 0;
                                        var t, r, i = this.iadd(e);
                                        return e.negative = 1, i._normSign()
                                    }
                                    if (0 !== this.negative) return this.negative = 0, this.iadd(e), this.negative = 1, this._normSign();
                                    var n = this.cmp(e);
                                    if (0 === n) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                                    n > 0 ? (t = this, r = e) : (t = e, r = this);
                                    for (var u = 0, b = 0; b < r.length; b++) u = (i = (0 | t.words[b]) - (0 | r.words[b]) + u) >> 26, this.words[b] = 67108863 & i;
                                    for (; 0 !== u && b < t.length; b++) u = (i = (0 | t.words[b]) + u) >> 26, this.words[b] = 67108863 & i;
                                    if (0 === u && b < t.length && t !== this)
                                        for (; b < t.length; b++) this.words[b] = t.words[b];
                                    return this.length = Math.max(this.length, b), t !== this && (this.negative = 1), this._strip()
                                }, BN.prototype.sub = function(e) {
                                    return this.clone().isub(e)
                                };
                                var h = function(e, t, r) {
                                    var i, n, u, b = e.words,
                                        m = t.words,
                                        y = r.words,
                                        v = 0,
                                        g = 0 | b[0],
                                        _ = 8191 & g,
                                        w = g >>> 13,
                                        M = 0 | b[1],
                                        S = 8191 & M,
                                        B = M >>> 13,
                                        E = 0 | b[2],
                                        k = 8191 & E,
                                        A = E >>> 13,
                                        N = 0 | b[3],
                                        R = 8191 & N,
                                        P = N >>> 13,
                                        x = 0 | b[4],
                                        I = 8191 & x,
                                        C = x >>> 13,
                                        D = 0 | b[5],
                                        T = 8191 & D,
                                        j = D >>> 13,
                                        O = 0 | b[6],
                                        H = 8191 & O,
                                        q = O >>> 13,
                                        L = 0 | b[7],
                                        z = 8191 & L,
                                        U = L >>> 13,
                                        K = 0 | b[8],
                                        F = 8191 & K,
                                        W = K >>> 13,
                                        V = 0 | b[9],
                                        G = 8191 & V,
                                        Z = V >>> 13,
                                        J = 0 | m[0],
                                        X = 8191 & J,
                                        Y = J >>> 13,
                                        $ = 0 | m[1],
                                        Q = 8191 & $,
                                        ee = $ >>> 13,
                                        et = 0 | m[2],
                                        er = 8191 & et,
                                        ei = et >>> 13,
                                        en = 0 | m[3],
                                        ea = 8191 & en,
                                        eo = en >>> 13,
                                        es = 0 | m[4],
                                        ef = 8191 & es,
                                        eh = es >>> 13,
                                        ed = 0 | m[5],
                                        ec = 8191 & ed,
                                        eu = ed >>> 13,
                                        el = 0 | m[6],
                                        ep = 8191 & el,
                                        eb = el >>> 13,
                                        em = 0 | m[7],
                                        ey = 8191 & em,
                                        ev = em >>> 13,
                                        eg = 0 | m[8],
                                        e_ = 8191 & eg,
                                        ew = eg >>> 13,
                                        eM = 0 | m[9],
                                        eS = 8191 & eM,
                                        eB = eM >>> 13;
                                    r.negative = e.negative ^ t.negative, r.length = 19;
                                    var eE = (v + (i = Math.imul(_, X)) | 0) + ((8191 & (n = (n = Math.imul(_, Y)) + Math.imul(w, X) | 0)) << 13) | 0;
                                    v = ((u = Math.imul(w, Y)) + (n >>> 13) | 0) + (eE >>> 26) | 0, eE &= 67108863, i = Math.imul(S, X), n = (n = Math.imul(S, Y)) + Math.imul(B, X) | 0, u = Math.imul(B, Y);
                                    var ek = (v + (i = i + Math.imul(_, Q) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(_, ee) | 0) + Math.imul(w, Q) | 0)) << 13) | 0;
                                    v = ((u = u + Math.imul(w, ee) | 0) + (n >>> 13) | 0) + (ek >>> 26) | 0, ek &= 67108863, i = Math.imul(k, X), n = (n = Math.imul(k, Y)) + Math.imul(A, X) | 0, u = Math.imul(A, Y), i = i + Math.imul(S, Q) | 0, n = (n = n + Math.imul(S, ee) | 0) + Math.imul(B, Q) | 0, u = u + Math.imul(B, ee) | 0;
                                    var eA = (v + (i = i + Math.imul(_, er) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(_, ei) | 0) + Math.imul(w, er) | 0)) << 13) | 0;
                                    v = ((u = u + Math.imul(w, ei) | 0) + (n >>> 13) | 0) + (eA >>> 26) | 0, eA &= 67108863, i = Math.imul(R, X), n = (n = Math.imul(R, Y)) + Math.imul(P, X) | 0, u = Math.imul(P, Y), i = i + Math.imul(k, Q) | 0, n = (n = n + Math.imul(k, ee) | 0) + Math.imul(A, Q) | 0, u = u + Math.imul(A, ee) | 0, i = i + Math.imul(S, er) | 0, n = (n = n + Math.imul(S, ei) | 0) + Math.imul(B, er) | 0, u = u + Math.imul(B, ei) | 0;
                                    var eN = (v + (i = i + Math.imul(_, ea) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(_, eo) | 0) + Math.imul(w, ea) | 0)) << 13) | 0;
                                    v = ((u = u + Math.imul(w, eo) | 0) + (n >>> 13) | 0) + (eN >>> 26) | 0, eN &= 67108863, i = Math.imul(I, X), n = (n = Math.imul(I, Y)) + Math.imul(C, X) | 0, u = Math.imul(C, Y), i = i + Math.imul(R, Q) | 0, n = (n = n + Math.imul(R, ee) | 0) + Math.imul(P, Q) | 0, u = u + Math.imul(P, ee) | 0, i = i + Math.imul(k, er) | 0, n = (n = n + Math.imul(k, ei) | 0) + Math.imul(A, er) | 0, u = u + Math.imul(A, ei) | 0, i = i + Math.imul(S, ea) | 0, n = (n = n + Math.imul(S, eo) | 0) + Math.imul(B, ea) | 0, u = u + Math.imul(B, eo) | 0;
                                    var eR = (v + (i = i + Math.imul(_, ef) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(_, eh) | 0) + Math.imul(w, ef) | 0)) << 13) | 0;
                                    v = ((u = u + Math.imul(w, eh) | 0) + (n >>> 13) | 0) + (eR >>> 26) | 0, eR &= 67108863, i = Math.imul(T, X), n = (n = Math.imul(T, Y)) + Math.imul(j, X) | 0, u = Math.imul(j, Y), i = i + Math.imul(I, Q) | 0, n = (n = n + Math.imul(I, ee) | 0) + Math.imul(C, Q) | 0, u = u + Math.imul(C, ee) | 0, i = i + Math.imul(R, er) | 0, n = (n = n + Math.imul(R, ei) | 0) + Math.imul(P, er) | 0, u = u + Math.imul(P, ei) | 0, i = i + Math.imul(k, ea) | 0, n = (n = n + Math.imul(k, eo) | 0) + Math.imul(A, ea) | 0, u = u + Math.imul(A, eo) | 0, i = i + Math.imul(S, ef) | 0, n = (n = n + Math.imul(S, eh) | 0) + Math.imul(B, ef) | 0, u = u + Math.imul(B, eh) | 0;
                                    var eP = (v + (i = i + Math.imul(_, ec) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(_, eu) | 0) + Math.imul(w, ec) | 0)) << 13) | 0;
                                    v = ((u = u + Math.imul(w, eu) | 0) + (n >>> 13) | 0) + (eP >>> 26) | 0, eP &= 67108863, i = Math.imul(H, X), n = (n = Math.imul(H, Y)) + Math.imul(q, X) | 0, u = Math.imul(q, Y), i = i + Math.imul(T, Q) | 0, n = (n = n + Math.imul(T, ee) | 0) + Math.imul(j, Q) | 0, u = u + Math.imul(j, ee) | 0, i = i + Math.imul(I, er) | 0, n = (n = n + Math.imul(I, ei) | 0) + Math.imul(C, er) | 0, u = u + Math.imul(C, ei) | 0, i = i + Math.imul(R, ea) | 0, n = (n = n + Math.imul(R, eo) | 0) + Math.imul(P, ea) | 0, u = u + Math.imul(P, eo) | 0, i = i + Math.imul(k, ef) | 0, n = (n = n + Math.imul(k, eh) | 0) + Math.imul(A, ef) | 0, u = u + Math.imul(A, eh) | 0, i = i + Math.imul(S, ec) | 0, n = (n = n + Math.imul(S, eu) | 0) + Math.imul(B, ec) | 0, u = u + Math.imul(B, eu) | 0;
                                    var ex = (v + (i = i + Math.imul(_, ep) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(_, eb) | 0) + Math.imul(w, ep) | 0)) << 13) | 0;
                                    v = ((u = u + Math.imul(w, eb) | 0) + (n >>> 13) | 0) + (ex >>> 26) | 0, ex &= 67108863, i = Math.imul(z, X), n = (n = Math.imul(z, Y)) + Math.imul(U, X) | 0, u = Math.imul(U, Y), i = i + Math.imul(H, Q) | 0, n = (n = n + Math.imul(H, ee) | 0) + Math.imul(q, Q) | 0, u = u + Math.imul(q, ee) | 0, i = i + Math.imul(T, er) | 0, n = (n = n + Math.imul(T, ei) | 0) + Math.imul(j, er) | 0, u = u + Math.imul(j, ei) | 0, i = i + Math.imul(I, ea) | 0, n = (n = n + Math.imul(I, eo) | 0) + Math.imul(C, ea) | 0, u = u + Math.imul(C, eo) | 0, i = i + Math.imul(R, ef) | 0, n = (n = n + Math.imul(R, eh) | 0) + Math.imul(P, ef) | 0, u = u + Math.imul(P, eh) | 0, i = i + Math.imul(k, ec) | 0, n = (n = n + Math.imul(k, eu) | 0) + Math.imul(A, ec) | 0, u = u + Math.imul(A, eu) | 0, i = i + Math.imul(S, ep) | 0, n = (n = n + Math.imul(S, eb) | 0) + Math.imul(B, ep) | 0, u = u + Math.imul(B, eb) | 0;
                                    var eI = (v + (i = i + Math.imul(_, ey) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(_, ev) | 0) + Math.imul(w, ey) | 0)) << 13) | 0;
                                    v = ((u = u + Math.imul(w, ev) | 0) + (n >>> 13) | 0) + (eI >>> 26) | 0, eI &= 67108863, i = Math.imul(F, X), n = (n = Math.imul(F, Y)) + Math.imul(W, X) | 0, u = Math.imul(W, Y), i = i + Math.imul(z, Q) | 0, n = (n = n + Math.imul(z, ee) | 0) + Math.imul(U, Q) | 0, u = u + Math.imul(U, ee) | 0, i = i + Math.imul(H, er) | 0, n = (n = n + Math.imul(H, ei) | 0) + Math.imul(q, er) | 0, u = u + Math.imul(q, ei) | 0, i = i + Math.imul(T, ea) | 0, n = (n = n + Math.imul(T, eo) | 0) + Math.imul(j, ea) | 0, u = u + Math.imul(j, eo) | 0, i = i + Math.imul(I, ef) | 0, n = (n = n + Math.imul(I, eh) | 0) + Math.imul(C, ef) | 0, u = u + Math.imul(C, eh) | 0, i = i + Math.imul(R, ec) | 0, n = (n = n + Math.imul(R, eu) | 0) + Math.imul(P, ec) | 0, u = u + Math.imul(P, eu) | 0, i = i + Math.imul(k, ep) | 0, n = (n = n + Math.imul(k, eb) | 0) + Math.imul(A, ep) | 0, u = u + Math.imul(A, eb) | 0, i = i + Math.imul(S, ey) | 0, n = (n = n + Math.imul(S, ev) | 0) + Math.imul(B, ey) | 0, u = u + Math.imul(B, ev) | 0;
                                    var eC = (v + (i = i + Math.imul(_, e_) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(_, ew) | 0) + Math.imul(w, e_) | 0)) << 13) | 0;
                                    v = ((u = u + Math.imul(w, ew) | 0) + (n >>> 13) | 0) + (eC >>> 26) | 0, eC &= 67108863, i = Math.imul(G, X), n = (n = Math.imul(G, Y)) + Math.imul(Z, X) | 0, u = Math.imul(Z, Y), i = i + Math.imul(F, Q) | 0, n = (n = n + Math.imul(F, ee) | 0) + Math.imul(W, Q) | 0, u = u + Math.imul(W, ee) | 0, i = i + Math.imul(z, er) | 0, n = (n = n + Math.imul(z, ei) | 0) + Math.imul(U, er) | 0, u = u + Math.imul(U, ei) | 0, i = i + Math.imul(H, ea) | 0, n = (n = n + Math.imul(H, eo) | 0) + Math.imul(q, ea) | 0, u = u + Math.imul(q, eo) | 0, i = i + Math.imul(T, ef) | 0, n = (n = n + Math.imul(T, eh) | 0) + Math.imul(j, ef) | 0, u = u + Math.imul(j, eh) | 0, i = i + Math.imul(I, ec) | 0, n = (n = n + Math.imul(I, eu) | 0) + Math.imul(C, ec) | 0, u = u + Math.imul(C, eu) | 0, i = i + Math.imul(R, ep) | 0, n = (n = n + Math.imul(R, eb) | 0) + Math.imul(P, ep) | 0, u = u + Math.imul(P, eb) | 0, i = i + Math.imul(k, ey) | 0, n = (n = n + Math.imul(k, ev) | 0) + Math.imul(A, ey) | 0, u = u + Math.imul(A, ev) | 0, i = i + Math.imul(S, e_) | 0, n = (n = n + Math.imul(S, ew) | 0) + Math.imul(B, e_) | 0, u = u + Math.imul(B, ew) | 0;
                                    var eD = (v + (i = i + Math.imul(_, eS) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(_, eB) | 0) + Math.imul(w, eS) | 0)) << 13) | 0;
                                    v = ((u = u + Math.imul(w, eB) | 0) + (n >>> 13) | 0) + (eD >>> 26) | 0, eD &= 67108863, i = Math.imul(G, Q), n = (n = Math.imul(G, ee)) + Math.imul(Z, Q) | 0, u = Math.imul(Z, ee), i = i + Math.imul(F, er) | 0, n = (n = n + Math.imul(F, ei) | 0) + Math.imul(W, er) | 0, u = u + Math.imul(W, ei) | 0, i = i + Math.imul(z, ea) | 0, n = (n = n + Math.imul(z, eo) | 0) + Math.imul(U, ea) | 0, u = u + Math.imul(U, eo) | 0, i = i + Math.imul(H, ef) | 0, n = (n = n + Math.imul(H, eh) | 0) + Math.imul(q, ef) | 0, u = u + Math.imul(q, eh) | 0, i = i + Math.imul(T, ec) | 0, n = (n = n + Math.imul(T, eu) | 0) + Math.imul(j, ec) | 0, u = u + Math.imul(j, eu) | 0, i = i + Math.imul(I, ep) | 0, n = (n = n + Math.imul(I, eb) | 0) + Math.imul(C, ep) | 0, u = u + Math.imul(C, eb) | 0, i = i + Math.imul(R, ey) | 0, n = (n = n + Math.imul(R, ev) | 0) + Math.imul(P, ey) | 0, u = u + Math.imul(P, ev) | 0, i = i + Math.imul(k, e_) | 0, n = (n = n + Math.imul(k, ew) | 0) + Math.imul(A, e_) | 0, u = u + Math.imul(A, ew) | 0;
                                    var eT = (v + (i = i + Math.imul(S, eS) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(S, eB) | 0) + Math.imul(B, eS) | 0)) << 13) | 0;
                                    v = ((u = u + Math.imul(B, eB) | 0) + (n >>> 13) | 0) + (eT >>> 26) | 0, eT &= 67108863, i = Math.imul(G, er), n = (n = Math.imul(G, ei)) + Math.imul(Z, er) | 0, u = Math.imul(Z, ei), i = i + Math.imul(F, ea) | 0, n = (n = n + Math.imul(F, eo) | 0) + Math.imul(W, ea) | 0, u = u + Math.imul(W, eo) | 0, i = i + Math.imul(z, ef) | 0, n = (n = n + Math.imul(z, eh) | 0) + Math.imul(U, ef) | 0, u = u + Math.imul(U, eh) | 0, i = i + Math.imul(H, ec) | 0, n = (n = n + Math.imul(H, eu) | 0) + Math.imul(q, ec) | 0, u = u + Math.imul(q, eu) | 0, i = i + Math.imul(T, ep) | 0, n = (n = n + Math.imul(T, eb) | 0) + Math.imul(j, ep) | 0, u = u + Math.imul(j, eb) | 0, i = i + Math.imul(I, ey) | 0, n = (n = n + Math.imul(I, ev) | 0) + Math.imul(C, ey) | 0, u = u + Math.imul(C, ev) | 0, i = i + Math.imul(R, e_) | 0, n = (n = n + Math.imul(R, ew) | 0) + Math.imul(P, e_) | 0, u = u + Math.imul(P, ew) | 0;
                                    var ej = (v + (i = i + Math.imul(k, eS) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(k, eB) | 0) + Math.imul(A, eS) | 0)) << 13) | 0;
                                    v = ((u = u + Math.imul(A, eB) | 0) + (n >>> 13) | 0) + (ej >>> 26) | 0, ej &= 67108863, i = Math.imul(G, ea), n = (n = Math.imul(G, eo)) + Math.imul(Z, ea) | 0, u = Math.imul(Z, eo), i = i + Math.imul(F, ef) | 0, n = (n = n + Math.imul(F, eh) | 0) + Math.imul(W, ef) | 0, u = u + Math.imul(W, eh) | 0, i = i + Math.imul(z, ec) | 0, n = (n = n + Math.imul(z, eu) | 0) + Math.imul(U, ec) | 0, u = u + Math.imul(U, eu) | 0, i = i + Math.imul(H, ep) | 0, n = (n = n + Math.imul(H, eb) | 0) + Math.imul(q, ep) | 0, u = u + Math.imul(q, eb) | 0, i = i + Math.imul(T, ey) | 0, n = (n = n + Math.imul(T, ev) | 0) + Math.imul(j, ey) | 0, u = u + Math.imul(j, ev) | 0, i = i + Math.imul(I, e_) | 0, n = (n = n + Math.imul(I, ew) | 0) + Math.imul(C, e_) | 0, u = u + Math.imul(C, ew) | 0;
                                    var eO = (v + (i = i + Math.imul(R, eS) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(R, eB) | 0) + Math.imul(P, eS) | 0)) << 13) | 0;
                                    v = ((u = u + Math.imul(P, eB) | 0) + (n >>> 13) | 0) + (eO >>> 26) | 0, eO &= 67108863, i = Math.imul(G, ef), n = (n = Math.imul(G, eh)) + Math.imul(Z, ef) | 0, u = Math.imul(Z, eh), i = i + Math.imul(F, ec) | 0, n = (n = n + Math.imul(F, eu) | 0) + Math.imul(W, ec) | 0, u = u + Math.imul(W, eu) | 0, i = i + Math.imul(z, ep) | 0, n = (n = n + Math.imul(z, eb) | 0) + Math.imul(U, ep) | 0, u = u + Math.imul(U, eb) | 0, i = i + Math.imul(H, ey) | 0, n = (n = n + Math.imul(H, ev) | 0) + Math.imul(q, ey) | 0, u = u + Math.imul(q, ev) | 0, i = i + Math.imul(T, e_) | 0, n = (n = n + Math.imul(T, ew) | 0) + Math.imul(j, e_) | 0, u = u + Math.imul(j, ew) | 0;
                                    var eH = (v + (i = i + Math.imul(I, eS) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(I, eB) | 0) + Math.imul(C, eS) | 0)) << 13) | 0;
                                    v = ((u = u + Math.imul(C, eB) | 0) + (n >>> 13) | 0) + (eH >>> 26) | 0, eH &= 67108863, i = Math.imul(G, ec), n = (n = Math.imul(G, eu)) + Math.imul(Z, ec) | 0, u = Math.imul(Z, eu), i = i + Math.imul(F, ep) | 0, n = (n = n + Math.imul(F, eb) | 0) + Math.imul(W, ep) | 0, u = u + Math.imul(W, eb) | 0, i = i + Math.imul(z, ey) | 0, n = (n = n + Math.imul(z, ev) | 0) + Math.imul(U, ey) | 0, u = u + Math.imul(U, ev) | 0, i = i + Math.imul(H, e_) | 0, n = (n = n + Math.imul(H, ew) | 0) + Math.imul(q, e_) | 0, u = u + Math.imul(q, ew) | 0;
                                    var eq = (v + (i = i + Math.imul(T, eS) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(T, eB) | 0) + Math.imul(j, eS) | 0)) << 13) | 0;
                                    v = ((u = u + Math.imul(j, eB) | 0) + (n >>> 13) | 0) + (eq >>> 26) | 0, eq &= 67108863, i = Math.imul(G, ep), n = (n = Math.imul(G, eb)) + Math.imul(Z, ep) | 0, u = Math.imul(Z, eb), i = i + Math.imul(F, ey) | 0, n = (n = n + Math.imul(F, ev) | 0) + Math.imul(W, ey) | 0, u = u + Math.imul(W, ev) | 0, i = i + Math.imul(z, e_) | 0, n = (n = n + Math.imul(z, ew) | 0) + Math.imul(U, e_) | 0, u = u + Math.imul(U, ew) | 0;
                                    var eL = (v + (i = i + Math.imul(H, eS) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(H, eB) | 0) + Math.imul(q, eS) | 0)) << 13) | 0;
                                    v = ((u = u + Math.imul(q, eB) | 0) + (n >>> 13) | 0) + (eL >>> 26) | 0, eL &= 67108863, i = Math.imul(G, ey), n = (n = Math.imul(G, ev)) + Math.imul(Z, ey) | 0, u = Math.imul(Z, ev), i = i + Math.imul(F, e_) | 0, n = (n = n + Math.imul(F, ew) | 0) + Math.imul(W, e_) | 0, u = u + Math.imul(W, ew) | 0;
                                    var ez = (v + (i = i + Math.imul(z, eS) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(z, eB) | 0) + Math.imul(U, eS) | 0)) << 13) | 0;
                                    v = ((u = u + Math.imul(U, eB) | 0) + (n >>> 13) | 0) + (ez >>> 26) | 0, ez &= 67108863, i = Math.imul(G, e_), n = (n = Math.imul(G, ew)) + Math.imul(Z, e_) | 0, u = Math.imul(Z, ew);
                                    var eU = (v + (i = i + Math.imul(F, eS) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(F, eB) | 0) + Math.imul(W, eS) | 0)) << 13) | 0;
                                    v = ((u = u + Math.imul(W, eB) | 0) + (n >>> 13) | 0) + (eU >>> 26) | 0, eU &= 67108863;
                                    var eK = (v + (i = Math.imul(G, eS)) | 0) + ((8191 & (n = (n = Math.imul(G, eB)) + Math.imul(Z, eS) | 0)) << 13) | 0;
                                    return v = ((u = Math.imul(Z, eB)) + (n >>> 13) | 0) + (eK >>> 26) | 0, eK &= 67108863, y[0] = eE, y[1] = ek, y[2] = eA, y[3] = eN, y[4] = eR, y[5] = eP, y[6] = ex, y[7] = eI, y[8] = eC, y[9] = eD, y[10] = eT, y[11] = ej, y[12] = eO, y[13] = eH, y[14] = eq, y[15] = eL, y[16] = ez, y[17] = eU, y[18] = eK, 0 !== v && (y[19] = v, r.length++), r
                                };

                                function bigMulTo(e, t, r) {
                                    r.negative = t.negative ^ e.negative, r.length = e.length + t.length;
                                    for (var i = 0, n = 0, u = 0; u < r.length - 1; u++) {
                                        var b = n;
                                        n = 0;
                                        for (var m = 67108863 & i, y = Math.min(u, t.length - 1), v = Math.max(0, u - e.length + 1); v <= y; v++) {
                                            var g = u - v,
                                                _ = (0 | e.words[g]) * (0 | t.words[v]),
                                                w = 67108863 & _;
                                            b = b + (_ / 67108864 | 0) | 0, m = 67108863 & (w = w + m | 0), n += (b = b + (w >>> 26) | 0) >>> 26, b &= 67108863
                                        }
                                        r.words[u] = m, i = b, b = n
                                    }
                                    return 0 !== i ? r.words[u] = i : r.length--, r._strip()
                                }

                                function FFTM(e, t) {
                                    this.x = e, this.y = t
                                }
                                Math.imul || (h = smallMulTo), BN.prototype.mulTo = function(e, t) {
                                    var r, i = this.length + e.length;
                                    return 10 === this.length && 10 === e.length ? h(this, e, t) : i < 63 ? smallMulTo(this, e, t) : bigMulTo(this, e, t)
                                }, FFTM.prototype.makeRBT = function(e) {
                                    for (var t = Array(e), r = BN.prototype._countBits(e) - 1, i = 0; i < e; i++) t[i] = this.revBin(i, r, e);
                                    return t
                                }, FFTM.prototype.revBin = function(e, t, r) {
                                    if (0 === e || e === r - 1) return e;
                                    for (var i = 0, n = 0; n < t; n++) i |= (1 & e) << t - n - 1, e >>= 1;
                                    return i
                                }, FFTM.prototype.permute = function(e, t, r, i, n, u) {
                                    for (var b = 0; b < u; b++) i[b] = t[e[b]], n[b] = r[e[b]]
                                }, FFTM.prototype.transform = function(e, t, r, i, n, u) {
                                    this.permute(u, e, t, r, i, n);
                                    for (var b = 1; b < n; b <<= 1)
                                        for (var m = b << 1, y = Math.cos(2 * Math.PI / m), v = Math.sin(2 * Math.PI / m), g = 0; g < n; g += m)
                                            for (var _ = y, w = v, M = 0; M < b; M++) {
                                                var S = r[g + M],
                                                    B = i[g + M],
                                                    E = r[g + M + b],
                                                    k = i[g + M + b],
                                                    A = _ * E - w * k;
                                                k = _ * k + w * E, E = A, r[g + M] = S + E, i[g + M] = B + k, r[g + M + b] = S - E, i[g + M + b] = B - k, M !== m && (A = y * _ - v * w, w = y * w + v * _, _ = A)
                                            }
                                }, FFTM.prototype.guessLen13b = function(e, t) {
                                    var r = 1 | Math.max(t, e),
                                        i = 1 & r,
                                        n = 0;
                                    for (r = r / 2 | 0; r; r >>>= 1) n++;
                                    return 1 << n + 1 + i
                                }, FFTM.prototype.conjugate = function(e, t, r) {
                                    if (!(r <= 1))
                                        for (var i = 0; i < r / 2; i++) {
                                            var n = e[i];
                                            e[i] = e[r - i - 1], e[r - i - 1] = n, n = t[i], t[i] = -t[r - i - 1], t[r - i - 1] = -n
                                        }
                                }, FFTM.prototype.normalize13b = function(e, t) {
                                    for (var r = 0, i = 0; i < t / 2; i++) {
                                        var n = 8192 * Math.round(e[2 * i + 1] / t) + Math.round(e[2 * i] / t) + r;
                                        e[i] = 67108863 & n, r = n < 67108864 ? 0 : n / 67108864 | 0
                                    }
                                    return e
                                }, FFTM.prototype.convert13b = function(e, t, r, i) {
                                    for (var n = 0, u = 0; u < t; u++) n += 0 | e[u], r[2 * u] = 8191 & n, n >>>= 13, r[2 * u + 1] = 8191 & n, n >>>= 13;
                                    for (u = 2 * t; u < i; ++u) r[u] = 0;
                                    assert(0 === n), assert((-8192 & n) == 0)
                                }, FFTM.prototype.stub = function(e) {
                                    for (var t = Array(e), r = 0; r < e; r++) t[r] = 0;
                                    return t
                                }, FFTM.prototype.mulp = function(e, t, r) {
                                    var i = 2 * this.guessLen13b(e.length, t.length),
                                        n = this.makeRBT(i),
                                        u = this.stub(i),
                                        b = Array(i),
                                        m = Array(i),
                                        y = Array(i),
                                        v = Array(i),
                                        g = Array(i),
                                        _ = Array(i),
                                        w = r.words;
                                    w.length = i, this.convert13b(e.words, e.length, b, i), this.convert13b(t.words, t.length, v, i), this.transform(b, u, m, y, i, n), this.transform(v, u, g, _, i, n);
                                    for (var M = 0; M < i; M++) {
                                        var S = m[M] * g[M] - y[M] * _[M];
                                        y[M] = m[M] * _[M] + y[M] * g[M], m[M] = S
                                    }
                                    return this.conjugate(m, y, i), this.transform(m, y, w, u, i, n), this.conjugate(w, u, i), this.normalize13b(w, i), r.negative = e.negative ^ t.negative, r.length = e.length + t.length, r._strip()
                                }, BN.prototype.mul = function(e) {
                                    var t = new BN(null);
                                    return t.words = Array(this.length + e.length), this.mulTo(e, t)
                                }, BN.prototype.mulf = function(e) {
                                    var t = new BN(null);
                                    return t.words = Array(this.length + e.length), bigMulTo(this, e, t)
                                }, BN.prototype.imul = function(e) {
                                    return this.clone().mulTo(e, this)
                                }, BN.prototype.imuln = function(e) {
                                    var t = e < 0;
                                    t && (e = -e), assert("number" == typeof e), assert(e < 67108864);
                                    for (var r = 0, i = 0; i < this.length; i++) {
                                        var n = (0 | this.words[i]) * e,
                                            u = (67108863 & n) + (67108863 & r);
                                        r >>= 26, r += (n / 67108864 | 0) + (u >>> 26), this.words[i] = 67108863 & u
                                    }
                                    return 0 !== r && (this.words[i] = r, this.length++), t ? this.ineg() : this
                                }, BN.prototype.muln = function(e) {
                                    return this.clone().imuln(e)
                                }, BN.prototype.sqr = function() {
                                    return this.mul(this)
                                }, BN.prototype.isqr = function() {
                                    return this.imul(this.clone())
                                }, BN.prototype.pow = function(e) {
                                    var t = function(e) {
                                        for (var t = Array(e.bitLength()), r = 0; r < t.length; r++) {
                                            var i = r / 26 | 0,
                                                n = r % 26;
                                            t[r] = e.words[i] >>> n & 1
                                        }
                                        return t
                                    }(e);
                                    if (0 === t.length) return new BN(1);
                                    for (var r = this, i = 0; i < t.length && 0 === t[i]; i++, r = r.sqr());
                                    if (++i < t.length)
                                        for (var n = r.sqr(); i < t.length; i++, n = n.sqr()) 0 !== t[i] && (r = r.mul(n));
                                    return r
                                }, BN.prototype.iushln = function(e) {
                                    assert("number" == typeof e && e >= 0);
                                    var t, r = e % 26,
                                        i = (e - r) / 26,
                                        n = 67108863 >>> 26 - r << 26 - r;
                                    if (0 !== r) {
                                        var u = 0;
                                        for (t = 0; t < this.length; t++) {
                                            var b = this.words[t] & n,
                                                m = (0 | this.words[t]) - b << r;
                                            this.words[t] = m | u, u = b >>> 26 - r
                                        }
                                        u && (this.words[t] = u, this.length++)
                                    }
                                    if (0 !== i) {
                                        for (t = this.length - 1; t >= 0; t--) this.words[t + i] = this.words[t];
                                        for (t = 0; t < i; t++) this.words[t] = 0;
                                        this.length += i
                                    }
                                    return this._strip()
                                }, BN.prototype.ishln = function(e) {
                                    return assert(0 === this.negative), this.iushln(e)
                                }, BN.prototype.iushrn = function(e, t, r) {
                                    assert("number" == typeof e && e >= 0), i = t ? (t - t % 26) / 26 : 0;
                                    var i, n = e % 26,
                                        u = Math.min((e - n) / 26, this.length),
                                        b = 67108863 ^ 67108863 >>> n << n;
                                    if (i -= u, i = Math.max(0, i), r) {
                                        for (var m = 0; m < u; m++) r.words[m] = this.words[m];
                                        r.length = u
                                    }
                                    if (0 === u);
                                    else if (this.length > u)
                                        for (this.length -= u, m = 0; m < this.length; m++) this.words[m] = this.words[m + u];
                                    else this.words[0] = 0, this.length = 1;
                                    var y = 0;
                                    for (m = this.length - 1; m >= 0 && (0 !== y || m >= i); m--) {
                                        var v = 0 | this.words[m];
                                        this.words[m] = y << 26 - n | v >>> n, y = v & b
                                    }
                                    return r && 0 !== y && (r.words[r.length++] = y), 0 === this.length && (this.words[0] = 0, this.length = 1), this._strip()
                                }, BN.prototype.ishrn = function(e, t, r) {
                                    return assert(0 === this.negative), this.iushrn(e, t, r)
                                }, BN.prototype.shln = function(e) {
                                    return this.clone().ishln(e)
                                }, BN.prototype.ushln = function(e) {
                                    return this.clone().iushln(e)
                                }, BN.prototype.shrn = function(e) {
                                    return this.clone().ishrn(e)
                                }, BN.prototype.ushrn = function(e) {
                                    return this.clone().iushrn(e)
                                }, BN.prototype.testn = function(e) {
                                    assert("number" == typeof e && e >= 0);
                                    var t = e % 26,
                                        r = (e - t) / 26;
                                    return !(this.length <= r) && !!(this.words[r] & 1 << t)
                                }, BN.prototype.imaskn = function(e) {
                                    assert("number" == typeof e && e >= 0);
                                    var t = e % 26,
                                        r = (e - t) / 26;
                                    return (assert(0 === this.negative, "imaskn works only with positive numbers"), this.length <= r) ? this : (0 !== t && r++, this.length = Math.min(r, this.length), 0 !== t && (this.words[this.length - 1] &= 67108863 ^ 67108863 >>> t << t), this._strip())
                                }, BN.prototype.maskn = function(e) {
                                    return this.clone().imaskn(e)
                                }, BN.prototype.iaddn = function(e) {
                                    return (assert("number" == typeof e), assert(e < 67108864), e < 0) ? this.isubn(-e) : 0 !== this.negative ? (1 === this.length && (0 | this.words[0]) <= e ? (this.words[0] = e - (0 | this.words[0]), this.negative = 0) : (this.negative = 0, this.isubn(e), this.negative = 1), this) : this._iaddn(e)
                                }, BN.prototype._iaddn = function(e) {
                                    this.words[0] += e;
                                    for (var t = 0; t < this.length && this.words[t] >= 67108864; t++) this.words[t] -= 67108864, t === this.length - 1 ? this.words[t + 1] = 1 : this.words[t + 1]++;
                                    return this.length = Math.max(this.length, t + 1), this
                                }, BN.prototype.isubn = function(e) {
                                    if (assert("number" == typeof e), assert(e < 67108864), e < 0) return this.iaddn(-e);
                                    if (0 !== this.negative) return this.negative = 0, this.iaddn(e), this.negative = 1, this;
                                    if (this.words[0] -= e, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                                    else
                                        for (var t = 0; t < this.length && this.words[t] < 0; t++) this.words[t] += 67108864, this.words[t + 1] -= 1;
                                    return this._strip()
                                }, BN.prototype.addn = function(e) {
                                    return this.clone().iaddn(e)
                                }, BN.prototype.subn = function(e) {
                                    return this.clone().isubn(e)
                                }, BN.prototype.iabs = function() {
                                    return this.negative = 0, this
                                }, BN.prototype.abs = function() {
                                    return this.clone().iabs()
                                }, BN.prototype._ishlnsubmul = function(e, t, r) {
                                    var i, n, u = e.length + r;
                                    this._expand(u);
                                    var b = 0;
                                    for (i = 0; i < e.length; i++) {
                                        n = (0 | this.words[i + r]) + b;
                                        var m = (0 | e.words[i]) * t;
                                        n -= 67108863 & m, b = (n >> 26) - (m / 67108864 | 0), this.words[i + r] = 67108863 & n
                                    }
                                    for (; i < this.length - r; i++) b = (n = (0 | this.words[i + r]) + b) >> 26, this.words[i + r] = 67108863 & n;
                                    if (0 === b) return this._strip();
                                    for (assert(-1 === b), b = 0, i = 0; i < this.length; i++) b = (n = -(0 | this.words[i]) + b) >> 26, this.words[i] = 67108863 & n;
                                    return this.negative = 1, this._strip()
                                }, BN.prototype._wordDiv = function(e, t) {
                                    var r, i = this.length - e.length,
                                        n = this.clone(),
                                        u = e,
                                        b = 0 | u.words[u.length - 1];
                                    0 != (i = 26 - this._countBits(b)) && (u = u.ushln(i), n.iushln(i), b = 0 | u.words[u.length - 1]);
                                    var m = n.length - u.length;
                                    if ("mod" !== t) {
                                        (r = new BN(null)).length = m + 1, r.words = Array(r.length);
                                        for (var y = 0; y < r.length; y++) r.words[y] = 0
                                    }
                                    var v = n.clone()._ishlnsubmul(u, 1, m);
                                    0 === v.negative && (n = v, r && (r.words[m] = 1));
                                    for (var g = m - 1; g >= 0; g--) {
                                        var _ = (0 | n.words[u.length + g]) * 67108864 + (0 | n.words[u.length + g - 1]);
                                        for (_ = Math.min(_ / b | 0, 67108863), n._ishlnsubmul(u, _, g); 0 !== n.negative;) _--, n.negative = 0, n._ishlnsubmul(u, 1, g), n.isZero() || (n.negative ^= 1);
                                        r && (r.words[g] = _)
                                    }
                                    return r && r._strip(), n._strip(), "div" !== t && 0 !== i && n.iushrn(i), {
                                        div: r || null,
                                        mod: n
                                    }
                                }, BN.prototype.divmod = function(e, t, r) {
                                    var i, n, u;
                                    return (assert(!e.isZero()), this.isZero()) ? {
                                        div: new BN(0),
                                        mod: new BN(0)
                                    } : 0 !== this.negative && 0 === e.negative ? (u = this.neg().divmod(e, t), "mod" !== t && (i = u.div.neg()), "div" !== t && (n = u.mod.neg(), r && 0 !== n.negative && n.iadd(e)), {
                                        div: i,
                                        mod: n
                                    }) : 0 === this.negative && 0 !== e.negative ? (u = this.divmod(e.neg(), t), "mod" !== t && (i = u.div.neg()), {
                                        div: i,
                                        mod: u.mod
                                    }) : (this.negative & e.negative) != 0 ? (u = this.neg().divmod(e.neg(), t), "div" !== t && (n = u.mod.neg(), r && 0 !== n.negative && n.isub(e)), {
                                        div: u.div,
                                        mod: n
                                    }) : e.length > this.length || 0 > this.cmp(e) ? {
                                        div: new BN(0),
                                        mod: this
                                    } : 1 === e.length ? "div" === t ? {
                                        div: this.divn(e.words[0]),
                                        mod: null
                                    } : "mod" === t ? {
                                        div: null,
                                        mod: new BN(this.modrn(e.words[0]))
                                    } : {
                                        div: this.divn(e.words[0]),
                                        mod: new BN(this.modrn(e.words[0]))
                                    } : this._wordDiv(e, t)
                                }, BN.prototype.div = function(e) {
                                    return this.divmod(e, "div", !1).div
                                }, BN.prototype.mod = function(e) {
                                    return this.divmod(e, "mod", !1).mod
                                }, BN.prototype.umod = function(e) {
                                    return this.divmod(e, "mod", !0).mod
                                }, BN.prototype.divRound = function(e) {
                                    var t = this.divmod(e);
                                    if (t.mod.isZero()) return t.div;
                                    var r = 0 !== t.div.negative ? t.mod.isub(e) : t.mod,
                                        i = e.ushrn(1),
                                        n = e.andln(1),
                                        u = r.cmp(i);
                                    return u < 0 || 1 === n && 0 === u ? t.div : 0 !== t.div.negative ? t.div.isubn(1) : t.div.iaddn(1)
                                }, BN.prototype.modrn = function(e) {
                                    var t = e < 0;
                                    t && (e = -e), assert(e <= 67108863);
                                    for (var r = 67108864 % e, i = 0, n = this.length - 1; n >= 0; n--) i = (r * i + (0 | this.words[n])) % e;
                                    return t ? -i : i
                                }, BN.prototype.modn = function(e) {
                                    return this.modrn(e)
                                }, BN.prototype.idivn = function(e) {
                                    var t = e < 0;
                                    t && (e = -e), assert(e <= 67108863);
                                    for (var r = 0, i = this.length - 1; i >= 0; i--) {
                                        var n = (0 | this.words[i]) + 67108864 * r;
                                        this.words[i] = n / e | 0, r = n % e
                                    }
                                    return this._strip(), t ? this.ineg() : this
                                }, BN.prototype.divn = function(e) {
                                    return this.clone().idivn(e)
                                }, BN.prototype.egcd = function(e) {
                                    assert(0 === e.negative), assert(!e.isZero());
                                    var t = this,
                                        r = e.clone();
                                    t = 0 !== t.negative ? t.umod(e) : t.clone();
                                    for (var i = new BN(1), n = new BN(0), u = new BN(0), b = new BN(1), m = 0; t.isEven() && r.isEven();) t.iushrn(1), r.iushrn(1), ++m;
                                    for (var y = r.clone(), v = t.clone(); !t.isZero();) {
                                        for (var g = 0, _ = 1;
                                            (t.words[0] & _) == 0 && g < 26; ++g, _ <<= 1);
                                        if (g > 0)
                                            for (t.iushrn(g); g-- > 0;)(i.isOdd() || n.isOdd()) && (i.iadd(y), n.isub(v)), i.iushrn(1), n.iushrn(1);
                                        for (var w = 0, M = 1;
                                            (r.words[0] & M) == 0 && w < 26; ++w, M <<= 1);
                                        if (w > 0)
                                            for (r.iushrn(w); w-- > 0;)(u.isOdd() || b.isOdd()) && (u.iadd(y), b.isub(v)), u.iushrn(1), b.iushrn(1);
                                        t.cmp(r) >= 0 ? (t.isub(r), i.isub(u), n.isub(b)) : (r.isub(t), u.isub(i), b.isub(n))
                                    }
                                    return {
                                        a: u,
                                        b: b,
                                        gcd: r.iushln(m)
                                    }
                                }, BN.prototype._invmp = function(e) {
                                    assert(0 === e.negative), assert(!e.isZero());
                                    var t, r = this,
                                        i = e.clone();
                                    r = 0 !== r.negative ? r.umod(e) : r.clone();
                                    for (var n = new BN(1), u = new BN(0), b = i.clone(); r.cmpn(1) > 0 && i.cmpn(1) > 0;) {
                                        for (var m = 0, y = 1;
                                            (r.words[0] & y) == 0 && m < 26; ++m, y <<= 1);
                                        if (m > 0)
                                            for (r.iushrn(m); m-- > 0;) n.isOdd() && n.iadd(b), n.iushrn(1);
                                        for (var v = 0, g = 1;
                                            (i.words[0] & g) == 0 && v < 26; ++v, g <<= 1);
                                        if (v > 0)
                                            for (i.iushrn(v); v-- > 0;) u.isOdd() && u.iadd(b), u.iushrn(1);
                                        r.cmp(i) >= 0 ? (r.isub(i), n.isub(u)) : (i.isub(r), u.isub(n))
                                    }
                                    return 0 > (t = 0 === r.cmpn(1) ? n : u).cmpn(0) && t.iadd(e), t
                                }, BN.prototype.gcd = function(e) {
                                    if (this.isZero()) return e.abs();
                                    if (e.isZero()) return this.abs();
                                    var t = this.clone(),
                                        r = e.clone();
                                    t.negative = 0, r.negative = 0;
                                    for (var i = 0; t.isEven() && r.isEven(); i++) t.iushrn(1), r.iushrn(1);
                                    for (;;) {
                                        for (; t.isEven();) t.iushrn(1);
                                        for (; r.isEven();) r.iushrn(1);
                                        var n = t.cmp(r);
                                        if (n < 0) {
                                            var u = t;
                                            t = r, r = u
                                        } else if (0 === n || 0 === r.cmpn(1)) break;
                                        t.isub(r)
                                    }
                                    return r.iushln(i)
                                }, BN.prototype.invm = function(e) {
                                    return this.egcd(e).a.umod(e)
                                }, BN.prototype.isEven = function() {
                                    return (1 & this.words[0]) == 0
                                }, BN.prototype.isOdd = function() {
                                    return (1 & this.words[0]) == 1
                                }, BN.prototype.andln = function(e) {
                                    return this.words[0] & e
                                }, BN.prototype.bincn = function(e) {
                                    assert("number" == typeof e);
                                    var t = e % 26,
                                        r = (e - t) / 26,
                                        i = 1 << t;
                                    if (this.length <= r) return this._expand(r + 1), this.words[r] |= i, this;
                                    for (var n = i, u = r; 0 !== n && u < this.length; u++) {
                                        var b = 0 | this.words[u];
                                        b += n, n = b >>> 26, b &= 67108863, this.words[u] = b
                                    }
                                    return 0 !== n && (this.words[u] = n, this.length++), this
                                }, BN.prototype.isZero = function() {
                                    return 1 === this.length && 0 === this.words[0]
                                }, BN.prototype.cmpn = function(e) {
                                    var t, r = e < 0;
                                    if (0 !== this.negative && !r) return -1;
                                    if (0 === this.negative && r) return 1;
                                    if (this._strip(), this.length > 1) t = 1;
                                    else {
                                        r && (e = -e), assert(e <= 67108863, "Number is too big");
                                        var i = 0 | this.words[0];
                                        t = i === e ? 0 : i < e ? -1 : 1
                                    }
                                    return 0 !== this.negative ? 0 | -t : t
                                }, BN.prototype.cmp = function(e) {
                                    if (0 !== this.negative && 0 === e.negative) return -1;
                                    if (0 === this.negative && 0 !== e.negative) return 1;
                                    var t = this.ucmp(e);
                                    return 0 !== this.negative ? 0 | -t : t
                                }, BN.prototype.ucmp = function(e) {
                                    if (this.length > e.length) return 1;
                                    if (this.length < e.length) return -1;
                                    for (var t = 0, r = this.length - 1; r >= 0; r--) {
                                        var i = 0 | this.words[r],
                                            n = 0 | e.words[r];
                                        if (i !== n) {
                                            i < n ? t = -1 : i > n && (t = 1);
                                            break
                                        }
                                    }
                                    return t
                                }, BN.prototype.gtn = function(e) {
                                    return 1 === this.cmpn(e)
                                }, BN.prototype.gt = function(e) {
                                    return 1 === this.cmp(e)
                                }, BN.prototype.gten = function(e) {
                                    return this.cmpn(e) >= 0
                                }, BN.prototype.gte = function(e) {
                                    return this.cmp(e) >= 0
                                }, BN.prototype.ltn = function(e) {
                                    return -1 === this.cmpn(e)
                                }, BN.prototype.lt = function(e) {
                                    return -1 === this.cmp(e)
                                }, BN.prototype.lten = function(e) {
                                    return 0 >= this.cmpn(e)
                                }, BN.prototype.lte = function(e) {
                                    return 0 >= this.cmp(e)
                                }, BN.prototype.eqn = function(e) {
                                    return 0 === this.cmpn(e)
                                }, BN.prototype.eq = function(e) {
                                    return 0 === this.cmp(e)
                                }, BN.red = function(e) {
                                    return new Red(e)
                                }, BN.prototype.toRed = function(e) {
                                    return assert(!this.red, "Already a number in reduction context"), assert(0 === this.negative, "red works only with positives"), e.convertTo(this)._forceRed(e)
                                }, BN.prototype.fromRed = function() {
                                    return assert(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                                }, BN.prototype._forceRed = function(e) {
                                    return this.red = e, this
                                }, BN.prototype.forceRed = function(e) {
                                    return assert(!this.red, "Already a number in reduction context"), this._forceRed(e)
                                }, BN.prototype.redAdd = function(e) {
                                    return assert(this.red, "redAdd works only with red numbers"), this.red.add(this, e)
                                }, BN.prototype.redIAdd = function(e) {
                                    return assert(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, e)
                                }, BN.prototype.redSub = function(e) {
                                    return assert(this.red, "redSub works only with red numbers"), this.red.sub(this, e)
                                }, BN.prototype.redISub = function(e) {
                                    return assert(this.red, "redISub works only with red numbers"), this.red.isub(this, e)
                                }, BN.prototype.redShl = function(e) {
                                    return assert(this.red, "redShl works only with red numbers"), this.red.shl(this, e)
                                }, BN.prototype.redMul = function(e) {
                                    return assert(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.mul(this, e)
                                }, BN.prototype.redIMul = function(e) {
                                    return assert(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.imul(this, e)
                                }, BN.prototype.redSqr = function() {
                                    return assert(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                                }, BN.prototype.redISqr = function() {
                                    return assert(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                                }, BN.prototype.redSqrt = function() {
                                    return assert(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                                }, BN.prototype.redInvm = function() {
                                    return assert(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                                }, BN.prototype.redNeg = function() {
                                    return assert(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                                }, BN.prototype.redPow = function(e) {
                                    return assert(this.red && !e.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, e)
                                };
                                var m = {
                                    k256: null,
                                    p224: null,
                                    p192: null,
                                    p25519: null
                                };

                                function MPrime(e, t) {
                                    this.name = e, this.p = new BN(t, 16), this.n = this.p.bitLength(), this.k = new BN(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                                }

                                function K256() {
                                    MPrime.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                                }

                                function P224() {
                                    MPrime.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                                }

                                function P192() {
                                    MPrime.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                                }

                                function P25519() {
                                    MPrime.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                                }

                                function Red(e) {
                                    if ("string" == typeof e) {
                                        var t = BN._prime(e);
                                        this.m = t.p, this.prime = t
                                    } else assert(e.gtn(1), "modulus must be greater than 1"), this.m = e, this.prime = null
                                }

                                function Mont(e) {
                                    Red.call(this, e), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new BN(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                                }
                                MPrime.prototype._tmp = function() {
                                    var e = new BN(null);
                                    return e.words = Array(Math.ceil(this.n / 13)), e
                                }, MPrime.prototype.ireduce = function(e) {
                                    var t, r = e;
                                    do this.split(r, this.tmp), t = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength(); while (t > this.n);
                                    var i = t < this.n ? -1 : r.ucmp(this.p);
                                    return 0 === i ? (r.words[0] = 0, r.length = 1) : i > 0 ? r.isub(this.p) : void 0 !== r.strip ? r.strip() : r._strip(), r
                                }, MPrime.prototype.split = function(e, t) {
                                    e.iushrn(this.n, 0, t)
                                }, MPrime.prototype.imulK = function(e) {
                                    return e.imul(this.k)
                                }, inherits(K256, MPrime), K256.prototype.split = function(e, t) {
                                    for (var r = Math.min(e.length, 9), i = 0; i < r; i++) t.words[i] = e.words[i];
                                    if (t.length = r, e.length <= 9) {
                                        e.words[0] = 0, e.length = 1;
                                        return
                                    }
                                    var n = e.words[9];
                                    for (i = 10, t.words[t.length++] = 4194303 & n; i < e.length; i++) {
                                        var u = 0 | e.words[i];
                                        e.words[i - 10] = (4194303 & u) << 4 | n >>> 22, n = u
                                    }
                                    n >>>= 22, e.words[i - 10] = n, 0 === n && e.length > 10 ? e.length -= 10 : e.length -= 9
                                }, K256.prototype.imulK = function(e) {
                                    e.words[e.length] = 0, e.words[e.length + 1] = 0, e.length += 2;
                                    for (var t = 0, r = 0; r < e.length; r++) {
                                        var i = 0 | e.words[r];
                                        t += 977 * i, e.words[r] = 67108863 & t, t = 64 * i + (t / 67108864 | 0)
                                    }
                                    return 0 === e.words[e.length - 1] && (e.length--, 0 === e.words[e.length - 1] && e.length--), e
                                }, inherits(P224, MPrime), inherits(P192, MPrime), inherits(P25519, MPrime), P25519.prototype.imulK = function(e) {
                                    for (var t = 0, r = 0; r < e.length; r++) {
                                        var i = (0 | e.words[r]) * 19 + t,
                                            n = 67108863 & i;
                                        i >>>= 26, e.words[r] = n, t = i
                                    }
                                    return 0 !== t && (e.words[e.length++] = t), e
                                }, BN._prime = function(e) {
                                    var t;
                                    if (m[e]) return m[e];
                                    if ("k256" === e) t = new K256;
                                    else if ("p224" === e) t = new P224;
                                    else if ("p192" === e) t = new P192;
                                    else if ("p25519" === e) t = new P25519;
                                    else throw Error("Unknown prime " + e);
                                    return m[e] = t, t
                                }, Red.prototype._verify1 = function(e) {
                                    assert(0 === e.negative, "red works only with positives"), assert(e.red, "red works only with red numbers")
                                }, Red.prototype._verify2 = function(e, t) {
                                    assert((e.negative | t.negative) == 0, "red works only with positives"), assert(e.red && e.red === t.red, "red works only with red numbers")
                                }, Red.prototype.imod = function(e) {
                                    return this.prime ? this.prime.ireduce(e)._forceRed(this) : (move(e, e.umod(this.m)._forceRed(this)), e)
                                }, Red.prototype.neg = function(e) {
                                    return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this)
                                }, Red.prototype.add = function(e, t) {
                                    this._verify2(e, t);
                                    var r = e.add(t);
                                    return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this)
                                }, Red.prototype.iadd = function(e, t) {
                                    this._verify2(e, t);
                                    var r = e.iadd(t);
                                    return r.cmp(this.m) >= 0 && r.isub(this.m), r
                                }, Red.prototype.sub = function(e, t) {
                                    this._verify2(e, t);
                                    var r = e.sub(t);
                                    return 0 > r.cmpn(0) && r.iadd(this.m), r._forceRed(this)
                                }, Red.prototype.isub = function(e, t) {
                                    this._verify2(e, t);
                                    var r = e.isub(t);
                                    return 0 > r.cmpn(0) && r.iadd(this.m), r
                                }, Red.prototype.shl = function(e, t) {
                                    return this._verify1(e), this.imod(e.ushln(t))
                                }, Red.prototype.imul = function(e, t) {
                                    return this._verify2(e, t), this.imod(e.imul(t))
                                }, Red.prototype.mul = function(e, t) {
                                    return this._verify2(e, t), this.imod(e.mul(t))
                                }, Red.prototype.isqr = function(e) {
                                    return this.imul(e, e.clone())
                                }, Red.prototype.sqr = function(e) {
                                    return this.mul(e, e)
                                }, Red.prototype.sqrt = function(e) {
                                    if (e.isZero()) return e.clone();
                                    var t = this.m.andln(3);
                                    if (assert(t % 2 == 1), 3 === t) {
                                        var r = this.m.add(new BN(1)).iushrn(2);
                                        return this.pow(e, r)
                                    }
                                    for (var i = this.m.subn(1), n = 0; !i.isZero() && 0 === i.andln(1);) n++, i.iushrn(1);
                                    assert(!i.isZero());
                                    var u = new BN(1).toRed(this),
                                        b = u.redNeg(),
                                        m = this.m.subn(1).iushrn(1),
                                        y = this.m.bitLength();
                                    for (y = new BN(2 * y * y).toRed(this); 0 !== this.pow(y, m).cmp(b);) y.redIAdd(b);
                                    for (var v = this.pow(y, i), g = this.pow(e, i.addn(1).iushrn(1)), _ = this.pow(e, i), w = n; 0 !== _.cmp(u);) {
                                        for (var M = _, S = 0; 0 !== M.cmp(u); S++) M = M.redSqr();
                                        assert(S < w);
                                        var B = this.pow(v, new BN(1).iushln(w - S - 1));
                                        g = g.redMul(B), v = B.redSqr(), _ = _.redMul(v), w = S
                                    }
                                    return g
                                }, Red.prototype.invm = function(e) {
                                    var t = e._invmp(this.m);
                                    return 0 !== t.negative ? (t.negative = 0, this.imod(t).redNeg()) : this.imod(t)
                                }, Red.prototype.pow = function(e, t) {
                                    if (t.isZero()) return new BN(1).toRed(this);
                                    if (0 === t.cmpn(1)) return e.clone();
                                    var r = Array(16);
                                    r[0] = new BN(1).toRed(this), r[1] = e;
                                    for (var i = 2; i < r.length; i++) r[i] = this.mul(r[i - 1], e);
                                    var n = r[0],
                                        u = 0,
                                        b = 0,
                                        m = t.bitLength() % 26;
                                    for (0 === m && (m = 26), i = t.length - 1; i >= 0; i--) {
                                        for (var y = t.words[i], v = m - 1; v >= 0; v--) {
                                            var g = y >> v & 1;
                                            if (n !== r[0] && (n = this.sqr(n)), 0 === g && 0 === u) {
                                                b = 0;
                                                continue
                                            }
                                            u <<= 1, u |= g, (4 == ++b || 0 === i && 0 === v) && (n = this.mul(n, r[u]), b = 0, u = 0)
                                        }
                                        m = 26
                                    }
                                    return n
                                }, Red.prototype.convertTo = function(e) {
                                    var t = e.umod(this.m);
                                    return t === e ? t.clone() : t
                                }, Red.prototype.convertFrom = function(e) {
                                    var t = e.clone();
                                    return t.red = null, t
                                }, BN.mont = function(e) {
                                    return new Mont(e)
                                }, inherits(Mont, Red), Mont.prototype.convertTo = function(e) {
                                    return this.imod(e.ushln(this.shift))
                                }, Mont.prototype.convertFrom = function(e) {
                                    var t = this.imod(e.mul(this.rinv));
                                    return t.red = null, t
                                }, Mont.prototype.imul = function(e, t) {
                                    if (e.isZero() || t.isZero()) return e.words[0] = 0, e.length = 1, e;
                                    var r = e.imul(t),
                                        i = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                                        n = r.isub(i).iushrn(this.shift),
                                        u = n;
                                    return n.cmp(this.m) >= 0 ? u = n.isub(this.m) : 0 > n.cmpn(0) && (u = n.iadd(this.m)), u._forceRed(this)
                                }, Mont.prototype.mul = function(e, t) {
                                    if (e.isZero() || t.isZero()) return new BN(0)._forceRed(this);
                                    var r = e.mul(t),
                                        i = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                                        n = r.isub(i).iushrn(this.shift),
                                        u = n;
                                    return n.cmp(this.m) >= 0 ? u = n.isub(this.m) : 0 > n.cmpn(0) && (u = n.iadd(this.m)), u._forceRed(this)
                                }, Mont.prototype.invm = function(e) {
                                    return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this)
                                }
                            }(e = r.nmd(e), this)
                        },
                        3500: function(e, t, r) {
                            var i;

                            function Rand(e) {
                                this.rand = e
                            }
                            if (e.exports = function(e) {
                                    return i || (i = new Rand(null)), i.generate(e)
                                }, e.exports.Rand = Rand, Rand.prototype.generate = function(e) {
                                    return this._rand(e)
                                }, Rand.prototype._rand = function(e) {
                                    if (this.rand.getBytes) return this.rand.getBytes(e);
                                    for (var t = new Uint8Array(e), r = 0; r < t.length; r++) t[r] = this.rand.getByte();
                                    return t
                                }, "object" == typeof self) self.crypto && self.crypto.getRandomValues ? Rand.prototype._rand = function(e) {
                                var t = new Uint8Array(e);
                                return self.crypto.getRandomValues(t), t
                            } : self.msCrypto && self.msCrypto.getRandomValues ? Rand.prototype._rand = function(e) {
                                var t = new Uint8Array(e);
                                return self.msCrypto.getRandomValues(t), t
                            } : "object" == typeof window && (Rand.prototype._rand = function() {
                                throw Error("Not implemented yet")
                            });
                            else try {
                                var n = r(6113);
                                if ("function" != typeof n.randomBytes) throw Error("Not supported");
                                Rand.prototype._rand = function(e) {
                                    return n.randomBytes(e)
                                }
                            } catch (e) {}
                        },
                        1387: function(e, t, r) {
                            var i = r(6911).Buffer;

                            function asUInt32Array(e) {
                                i.isBuffer(e) || (e = i.from(e));
                                for (var t = e.length / 4 | 0, r = Array(t), n = 0; n < t; n++) r[n] = e.readUInt32BE(4 * n);
                                return r
                            }

                            function scrubVec(e) {
                                for (; 0 < e.length; e++) e[0] = 0
                            }

                            function cryptBlock(e, t, r, i, n) {
                                for (var u, b, m, y, v = r[0], g = r[1], _ = r[2], w = r[3], M = e[0] ^ t[0], S = e[1] ^ t[1], B = e[2] ^ t[2], E = e[3] ^ t[3], k = 4, A = 1; A < n; A++) u = v[M >>> 24] ^ g[S >>> 16 & 255] ^ _[B >>> 8 & 255] ^ w[255 & E] ^ t[k++], b = v[S >>> 24] ^ g[B >>> 16 & 255] ^ _[E >>> 8 & 255] ^ w[255 & M] ^ t[k++], m = v[B >>> 24] ^ g[E >>> 16 & 255] ^ _[M >>> 8 & 255] ^ w[255 & S] ^ t[k++], y = v[E >>> 24] ^ g[M >>> 16 & 255] ^ _[S >>> 8 & 255] ^ w[255 & B] ^ t[k++], M = u, S = b, B = m, E = y;
                                return u = (i[M >>> 24] << 24 | i[S >>> 16 & 255] << 16 | i[B >>> 8 & 255] << 8 | i[255 & E]) ^ t[k++], b = (i[S >>> 24] << 24 | i[B >>> 16 & 255] << 16 | i[E >>> 8 & 255] << 8 | i[255 & M]) ^ t[k++], [u >>>= 0, b >>>= 0, m = ((i[B >>> 24] << 24 | i[E >>> 16 & 255] << 16 | i[M >>> 8 & 255] << 8 | i[255 & S]) ^ t[k++]) >>> 0, y = ((i[E >>> 24] << 24 | i[M >>> 16 & 255] << 16 | i[S >>> 8 & 255] << 8 | i[255 & B]) ^ t[k++]) >>> 0]
                            }
                            var n = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
                                u = function() {
                                    for (var e = Array(256), t = 0; t < 256; t++) t < 128 ? e[t] = t << 1 : e[t] = t << 1 ^ 283;
                                    for (var r = [], i = [], n = [
                                            [],
                                            [],
                                            [],
                                            []
                                        ], u = [
                                            [],
                                            [],
                                            [],
                                            []
                                        ], b = 0, m = 0, y = 0; y < 256; ++y) {
                                        var v = m ^ m << 1 ^ m << 2 ^ m << 3 ^ m << 4;
                                        v = v >>> 8 ^ 255 & v ^ 99, r[b] = v, i[v] = b;
                                        var g = e[b],
                                            _ = e[g],
                                            w = e[_],
                                            M = 257 * e[v] ^ 16843008 * v;
                                        n[0][b] = M << 24 | M >>> 8, n[1][b] = M << 16 | M >>> 16, n[2][b] = M << 8 | M >>> 24, n[3][b] = M, M = 16843009 * w ^ 65537 * _ ^ 257 * g ^ 16843008 * b, u[0][v] = M << 24 | M >>> 8, u[1][v] = M << 16 | M >>> 16, u[2][v] = M << 8 | M >>> 24, u[3][v] = M, 0 === b ? b = m = 1 : (b = g ^ e[e[e[w ^ g]]], m ^= e[e[m]])
                                    }
                                    return {
                                        SBOX: r,
                                        INV_SBOX: i,
                                        SUB_MIX: n,
                                        INV_SUB_MIX: u
                                    }
                                }();

                            function AES(e) {
                                this._key = asUInt32Array(e), this._reset()
                            }
                            AES.blockSize = 16, AES.keySize = 32, AES.prototype.blockSize = AES.blockSize, AES.prototype.keySize = AES.keySize, AES.prototype._reset = function() {
                                for (var e = this._key, t = e.length, r = t + 6, i = (r + 1) * 4, b = [], m = 0; m < t; m++) b[m] = e[m];
                                for (m = t; m < i; m++) {
                                    var y = b[m - 1];
                                    m % t == 0 ? (y = y << 8 | y >>> 24, y = (u.SBOX[y >>> 24] << 24 | u.SBOX[y >>> 16 & 255] << 16 | u.SBOX[y >>> 8 & 255] << 8 | u.SBOX[255 & y]) ^ n[m / t | 0] << 24) : t > 6 && m % t == 4 && (y = u.SBOX[y >>> 24] << 24 | u.SBOX[y >>> 16 & 255] << 16 | u.SBOX[y >>> 8 & 255] << 8 | u.SBOX[255 & y]), b[m] = b[m - t] ^ y
                                }
                                for (var v = [], g = 0; g < i; g++) {
                                    var _ = i - g,
                                        w = b[_ - (g % 4 ? 0 : 4)];
                                    g < 4 || _ <= 4 ? v[g] = w : v[g] = u.INV_SUB_MIX[0][u.SBOX[w >>> 24]] ^ u.INV_SUB_MIX[1][u.SBOX[w >>> 16 & 255]] ^ u.INV_SUB_MIX[2][u.SBOX[w >>> 8 & 255]] ^ u.INV_SUB_MIX[3][u.SBOX[255 & w]]
                                }
                                this._nRounds = r, this._keySchedule = b, this._invKeySchedule = v
                            }, AES.prototype.encryptBlockRaw = function(e) {
                                return cryptBlock(e = asUInt32Array(e), this._keySchedule, u.SUB_MIX, u.SBOX, this._nRounds)
                            }, AES.prototype.encryptBlock = function(e) {
                                var t = this.encryptBlockRaw(e),
                                    r = i.allocUnsafe(16);
                                return r.writeUInt32BE(t[0], 0), r.writeUInt32BE(t[1], 4), r.writeUInt32BE(t[2], 8), r.writeUInt32BE(t[3], 12), r
                            }, AES.prototype.decryptBlock = function(e) {
                                var t = (e = asUInt32Array(e))[1];
                                e[1] = e[3], e[3] = t;
                                var r = cryptBlock(e, this._invKeySchedule, u.INV_SUB_MIX, u.INV_SBOX, this._nRounds),
                                    n = i.allocUnsafe(16);
                                return n.writeUInt32BE(r[0], 0), n.writeUInt32BE(r[3], 4), n.writeUInt32BE(r[2], 8), n.writeUInt32BE(r[1], 12), n
                            }, AES.prototype.scrub = function() {
                                scrubVec(this._keySchedule), scrubVec(this._invKeySchedule), scrubVec(this._key)
                            }, e.exports.AES = AES
                        },
                        6624: function(e, t, r) {
                            var i = r(1387),
                                n = r(6911).Buffer,
                                u = r(1043),
                                b = r(3782),
                                m = r(7225),
                                y = r(4734),
                                v = r(598);

                            function StreamCipher(e, t, r, b) {
                                u.call(this);
                                var y = n.alloc(4, 0);
                                this._cipher = new i.AES(t);
                                var g = this._cipher.encryptBlock(y);
                                this._ghash = new m(g), r = function(e, t, r) {
                                    if (12 === t.length) return e._finID = n.concat([t, n.from([0, 0, 0, 1])]), n.concat([t, n.from([0, 0, 0, 2])]);
                                    var i = new m(r),
                                        u = t.length,
                                        b = u % 16;
                                    i.update(t), b && (b = 16 - b, i.update(n.alloc(b, 0))), i.update(n.alloc(8, 0));
                                    var y = n.alloc(8);
                                    y.writeUIntBE(8 * u, 0, 8), i.update(y), e._finID = i.state;
                                    var g = n.from(e._finID);
                                    return v(g), g
                                }(this, r, g), this._prev = n.from(r), this._cache = n.allocUnsafe(0), this._secCache = n.allocUnsafe(0), this._decrypt = b, this._alen = 0, this._len = 0, this._mode = e, this._authTag = null, this._called = !1
                            }
                            b(StreamCipher, u), StreamCipher.prototype._update = function(e) {
                                if (!this._called && this._alen) {
                                    var t = 16 - this._alen % 16;
                                    t < 16 && (t = n.alloc(t, 0), this._ghash.update(t))
                                }
                                this._called = !0;
                                var r = this._mode.encrypt(this, e);
                                return this._decrypt ? this._ghash.update(e) : this._ghash.update(r), this._len += e.length, r
                            }, StreamCipher.prototype._final = function() {
                                if (this._decrypt && !this._authTag) throw Error("Unsupported state or unable to authenticate data");
                                var e = y(this._ghash.final(8 * this._alen, 8 * this._len), this._cipher.encryptBlock(this._finID));
                                if (this._decrypt && function(e, t) {
                                        var r = 0;
                                        e.length !== t.length && r++;
                                        for (var i = Math.min(e.length, t.length), n = 0; n < i; ++n) r += e[n] ^ t[n];
                                        return r
                                    }(e, this._authTag)) throw Error("Unsupported state or unable to authenticate data");
                                this._authTag = e, this._cipher.scrub()
                            }, StreamCipher.prototype.getAuthTag = function() {
                                if (this._decrypt || !n.isBuffer(this._authTag)) throw Error("Attempting to get auth tag in unsupported state");
                                return this._authTag
                            }, StreamCipher.prototype.setAuthTag = function(e) {
                                if (!this._decrypt) throw Error("Attempting to set auth tag in unsupported state");
                                this._authTag = e
                            }, StreamCipher.prototype.setAAD = function(e) {
                                if (this._called) throw Error("Attempting to set AAD in unsupported state");
                                this._ghash.update(e), this._alen += e.length
                            }, e.exports = StreamCipher
                        },
                        6594: function(e, t, r) {
                            var i = r(2),
                                n = r(2598),
                                u = r(5866);
                            t.createCipher = t.Cipher = i.createCipher, t.createCipheriv = t.Cipheriv = i.createCipheriv, t.createDecipher = t.Decipher = n.createDecipher, t.createDecipheriv = t.Decipheriv = n.createDecipheriv, t.listCiphers = t.getCiphers = function() {
                                return Object.keys(u)
                            }
                        },
                        2598: function(e, t, r) {
                            var i = r(6624),
                                n = r(6911).Buffer,
                                u = r(6370),
                                b = r(126),
                                m = r(1043),
                                y = r(1387),
                                v = r(8368);

                            function Decipher(e, t, r) {
                                m.call(this), this._cache = new Splitter, this._last = void 0, this._cipher = new y.AES(t), this._prev = n.from(r), this._mode = e, this._autopadding = !0
                            }

                            function Splitter() {
                                this.cache = n.allocUnsafe(0)
                            }

                            function createDecipheriv(e, t, r) {
                                var m = u[e.toLowerCase()];
                                if (!m) throw TypeError("invalid suite type");
                                if ("string" == typeof r && (r = n.from(r)), "GCM" !== m.mode && r.length !== m.iv) throw TypeError("invalid iv length " + r.length);
                                if ("string" == typeof t && (t = n.from(t)), t.length !== m.key / 8) throw TypeError("invalid key length " + t.length);
                                return "stream" === m.type ? new b(m.module, t, r, !0) : "auth" === m.type ? new i(m.module, t, r, !0) : new Decipher(m.module, t, r)
                            }
                            r(3782)(Decipher, m), Decipher.prototype._update = function(e) {
                                this._cache.add(e);
                                for (var t, r, i = []; t = this._cache.get(this._autopadding);) r = this._mode.decrypt(this, t), i.push(r);
                                return n.concat(i)
                            }, Decipher.prototype._final = function() {
                                var e = this._cache.flush();
                                if (this._autopadding) return function(e) {
                                    var t = e[15];
                                    if (t < 1 || t > 16) throw Error("unable to decrypt data");
                                    for (var r = -1; ++r < t;)
                                        if (e[r + (16 - t)] !== t) throw Error("unable to decrypt data");
                                    if (16 !== t) return e.slice(0, 16 - t)
                                }(this._mode.decrypt(this, e));
                                if (e) throw Error("data not multiple of block length")
                            }, Decipher.prototype.setAutoPadding = function(e) {
                                return this._autopadding = !!e, this
                            }, Splitter.prototype.add = function(e) {
                                this.cache = n.concat([this.cache, e])
                            }, Splitter.prototype.get = function(e) {
                                var t;
                                if (e) {
                                    if (this.cache.length > 16) return t = this.cache.slice(0, 16), this.cache = this.cache.slice(16), t
                                } else if (this.cache.length >= 16) return t = this.cache.slice(0, 16), this.cache = this.cache.slice(16), t;
                                return null
                            }, Splitter.prototype.flush = function() {
                                if (this.cache.length) return this.cache
                            }, t.createDecipher = function(e, t) {
                                var r = u[e.toLowerCase()];
                                if (!r) throw TypeError("invalid suite type");
                                var i = v(t, !1, r.key, r.iv);
                                return createDecipheriv(e, i.key, i.iv)
                            }, t.createDecipheriv = createDecipheriv
                        },
                        2: function(e, t, r) {
                            var i = r(6370),
                                n = r(6624),
                                u = r(6911).Buffer,
                                b = r(126),
                                m = r(1043),
                                y = r(1387),
                                v = r(8368);

                            function Cipher(e, t, r) {
                                m.call(this), this._cache = new Splitter, this._cipher = new y.AES(t), this._prev = u.from(r), this._mode = e, this._autopadding = !0
                            }
                            r(3782)(Cipher, m), Cipher.prototype._update = function(e) {
                                this._cache.add(e);
                                for (var t, r, i = []; t = this._cache.get();) r = this._mode.encrypt(this, t), i.push(r);
                                return u.concat(i)
                            };
                            var g = u.alloc(16, 16);

                            function Splitter() {
                                this.cache = u.allocUnsafe(0)
                            }

                            function createCipheriv(e, t, r) {
                                var m = i[e.toLowerCase()];
                                if (!m) throw TypeError("invalid suite type");
                                if ("string" == typeof t && (t = u.from(t)), t.length !== m.key / 8) throw TypeError("invalid key length " + t.length);
                                if ("string" == typeof r && (r = u.from(r)), "GCM" !== m.mode && r.length !== m.iv) throw TypeError("invalid iv length " + r.length);
                                return "stream" === m.type ? new b(m.module, t, r) : "auth" === m.type ? new n(m.module, t, r) : new Cipher(m.module, t, r)
                            }
                            Cipher.prototype._final = function() {
                                var e = this._cache.flush();
                                if (this._autopadding) return e = this._mode.encrypt(this, e), this._cipher.scrub(), e;
                                if (!e.equals(g)) throw this._cipher.scrub(), Error("data not multiple of block length")
                            }, Cipher.prototype.setAutoPadding = function(e) {
                                return this._autopadding = !!e, this
                            }, Splitter.prototype.add = function(e) {
                                this.cache = u.concat([this.cache, e])
                            }, Splitter.prototype.get = function() {
                                if (this.cache.length > 15) {
                                    var e = this.cache.slice(0, 16);
                                    return this.cache = this.cache.slice(16), e
                                }
                                return null
                            }, Splitter.prototype.flush = function() {
                                for (var e = 16 - this.cache.length, t = u.allocUnsafe(e), r = -1; ++r < e;) t.writeUInt8(e, r);
                                return u.concat([this.cache, t])
                            }, t.createCipheriv = createCipheriv, t.createCipher = function(e, t) {
                                var r = i[e.toLowerCase()];
                                if (!r) throw TypeError("invalid suite type");
                                var n = v(t, !1, r.key, r.iv);
                                return createCipheriv(e, n.key, n.iv)
                            }
                        },
                        7225: function(e, t, r) {
                            var i = r(6911).Buffer,
                                n = i.alloc(16, 0);

                            function fromArray(e) {
                                var t = i.allocUnsafe(16);
                                return t.writeUInt32BE(e[0] >>> 0, 0), t.writeUInt32BE(e[1] >>> 0, 4), t.writeUInt32BE(e[2] >>> 0, 8), t.writeUInt32BE(e[3] >>> 0, 12), t
                            }

                            function GHASH(e) {
                                this.h = e, this.state = i.alloc(16, 0), this.cache = i.allocUnsafe(0)
                            }
                            GHASH.prototype.ghash = function(e) {
                                for (var t = -1; ++t < e.length;) this.state[t] ^= e[t];
                                this._multiply()
                            }, GHASH.prototype._multiply = function() {
                                for (var e, t, r, i = [(e = this.h).readUInt32BE(0), e.readUInt32BE(4), e.readUInt32BE(8), e.readUInt32BE(12)], n = [0, 0, 0, 0], u = -1; ++u < 128;) {
                                    for ((this.state[~~(u / 8)] & 1 << 7 - u % 8) != 0 && (n[0] ^= i[0], n[1] ^= i[1], n[2] ^= i[2], n[3] ^= i[3]), r = (1 & i[3]) != 0, t = 3; t > 0; t--) i[t] = i[t] >>> 1 | (1 & i[t - 1]) << 31;
                                    i[0] = i[0] >>> 1, r && (i[0] = -520093696 ^ i[0])
                                }
                                this.state = fromArray(n)
                            }, GHASH.prototype.update = function(e) {
                                var t;
                                for (this.cache = i.concat([this.cache, e]); this.cache.length >= 16;) t = this.cache.slice(0, 16), this.cache = this.cache.slice(16), this.ghash(t)
                            }, GHASH.prototype.final = function(e, t) {
                                return this.cache.length && this.ghash(i.concat([this.cache, n], 16)), this.ghash(fromArray([0, e, 0, t])), this.state
                            }, e.exports = GHASH
                        },
                        598: function(e) {
                            e.exports = function(e) {
                                for (var t, r = e.length; r--;)
                                    if (255 === (t = e.readUInt8(r))) e.writeUInt8(0, r);
                                    else {
                                        t++, e.writeUInt8(t, r);
                                        break
                                    }
                            }
                        },
                        9825: function(e, t, r) {
                            var i = r(4734);
                            t.encrypt = function(e, t) {
                                var r = i(t, e._prev);
                                return e._prev = e._cipher.encryptBlock(r), e._prev
                            }, t.decrypt = function(e, t) {
                                var r = e._prev;
                                return e._prev = t, i(e._cipher.decryptBlock(t), r)
                            }
                        },
                        321: function(e, t, r) {
                            var i = r(6911).Buffer,
                                n = r(4734);

                            function encryptStart(e, t, r) {
                                var u = t.length,
                                    b = n(t, e._cache);
                                return e._cache = e._cache.slice(u), e._prev = i.concat([e._prev, r ? t : b]), b
                            }
                            t.encrypt = function(e, t, r) {
                                for (var n, u = i.allocUnsafe(0); t.length;)
                                    if (0 === e._cache.length && (e._cache = e._cipher.encryptBlock(e._prev), e._prev = i.allocUnsafe(0)), e._cache.length <= t.length) n = e._cache.length, u = i.concat([u, encryptStart(e, t.slice(0, n), r)]), t = t.slice(n);
                                    else {
                                        u = i.concat([u, encryptStart(e, t, r)]);
                                        break
                                    } return u
                            }
                        },
                        3147: function(e, t, r) {
                            var i = r(6911).Buffer;
                            t.encrypt = function(e, t, r) {
                                for (var n = t.length, u = i.allocUnsafe(n), b = -1; ++b < n;) u[b] = function(e, t, r) {
                                    for (var n, u, b, m = -1, y = 0; ++m < 8;) n = e._cipher.encryptBlock(e._prev), u = t & 1 << 7 - m ? 128 : 0, y += (128 & (b = n[0] ^ u)) >> m % 8, e._prev = function(e, t) {
                                        var r = e.length,
                                            n = -1,
                                            u = i.allocUnsafe(e.length);
                                        for (e = i.concat([e, i.from([t])]); ++n < r;) u[n] = e[n] << 1 | e[n + 1] >> 7;
                                        return u
                                    }(e._prev, r ? u : b);
                                    return y
                                }(e, t[b], r);
                                return u
                            }
                        },
                        2430: function(e, t, r) {
                            var i = r(6911).Buffer;
                            t.encrypt = function(e, t, r) {
                                for (var n = t.length, u = i.allocUnsafe(n), b = -1; ++b < n;) u[b] = function(e, t, r) {
                                    var n = e._cipher.encryptBlock(e._prev)[0] ^ t;
                                    return e._prev = i.concat([e._prev.slice(1), i.from([r ? t : n])]), n
                                }(e, t[b], r);
                                return u
                            }
                        },
                        3361: function(e, t, r) {
                            var i = r(4734),
                                n = r(6911).Buffer,
                                u = r(598);
                            t.encrypt = function(e, t) {
                                var r = Math.ceil(t.length / 16),
                                    b = e._cache.length;
                                e._cache = n.concat([e._cache, n.allocUnsafe(16 * r)]);
                                for (var m = 0; m < r; m++) {
                                    var y = function(e) {
                                            var t = e._cipher.encryptBlockRaw(e._prev);
                                            return u(e._prev), t
                                        }(e),
                                        v = b + 16 * m;
                                    e._cache.writeUInt32BE(y[0], v + 0), e._cache.writeUInt32BE(y[1], v + 4), e._cache.writeUInt32BE(y[2], v + 8), e._cache.writeUInt32BE(y[3], v + 12)
                                }
                                var g = e._cache.slice(0, t.length);
                                return e._cache = e._cache.slice(t.length), i(t, g)
                            }
                        },
                        1590: function(e, t) {
                            t.encrypt = function(e, t) {
                                return e._cipher.encryptBlock(t)
                            }, t.decrypt = function(e, t) {
                                return e._cipher.decryptBlock(t)
                            }
                        },
                        6370: function(e, t, r) {
                            var i = {
                                    ECB: r(1590),
                                    CBC: r(9825),
                                    CFB: r(321),
                                    CFB8: r(2430),
                                    CFB1: r(3147),
                                    OFB: r(3412),
                                    CTR: r(3361),
                                    GCM: r(3361)
                                },
                                n = r(5866);
                            for (var u in n) n[u].module = i[n[u].mode];
                            e.exports = n
                        },
                        3412: function(e, t, r) {
                            var n = r(4734);
                            t.encrypt = function(e, t) {
                                for (; e._cache.length < t.length;) e._cache = i.concat([e._cache, (e._prev = e._cipher.encryptBlock(e._prev), e._prev)]);
                                var r = e._cache.slice(0, t.length);
                                return e._cache = e._cache.slice(t.length), n(t, r)
                            }
                        },
                        126: function(e, t, r) {
                            var i = r(1387),
                                n = r(6911).Buffer,
                                u = r(1043);

                            function StreamCipher(e, t, r, b) {
                                u.call(this), this._cipher = new i.AES(t), this._prev = n.from(r), this._cache = n.allocUnsafe(0), this._secCache = n.allocUnsafe(0), this._decrypt = b, this._mode = e
                            }
                            r(3782)(StreamCipher, u), StreamCipher.prototype._update = function(e) {
                                return this._mode.encrypt(this, e, this._decrypt)
                            }, StreamCipher.prototype._final = function() {
                                this._cipher.scrub()
                            }, e.exports = StreamCipher
                        },
                        8996: function(e, t, r) {
                            var i = r(5238),
                                n = r(6594),
                                u = r(6370),
                                b = r(6280),
                                m = r(8368);

                            function createCipheriv(e, t, r) {
                                if (u[e = e.toLowerCase()]) return n.createCipheriv(e, t, r);
                                if (b[e]) return new i({
                                    key: t,
                                    iv: r,
                                    mode: e
                                });
                                throw TypeError("invalid suite type")
                            }

                            function createDecipheriv(e, t, r) {
                                if (u[e = e.toLowerCase()]) return n.createDecipheriv(e, t, r);
                                if (b[e]) return new i({
                                    key: t,
                                    iv: r,
                                    mode: e,
                                    decrypt: !0
                                });
                                throw TypeError("invalid suite type")
                            }
                            t.createCipher = t.Cipher = function(e, t) {
                                if (u[e = e.toLowerCase()]) r = u[e].key, i = u[e].iv;
                                else if (b[e]) r = 8 * b[e].key, i = b[e].iv;
                                else throw TypeError("invalid suite type");
                                var r, i, n = m(t, !1, r, i);
                                return createCipheriv(e, n.key, n.iv)
                            }, t.createCipheriv = t.Cipheriv = createCipheriv, t.createDecipher = t.Decipher = function(e, t) {
                                if (u[e = e.toLowerCase()]) r = u[e].key, i = u[e].iv;
                                else if (b[e]) r = 8 * b[e].key, i = b[e].iv;
                                else throw TypeError("invalid suite type");
                                var r, i, n = m(t, !1, r, i);
                                return createDecipheriv(e, n.key, n.iv)
                            }, t.createDecipheriv = t.Decipheriv = createDecipheriv, t.listCiphers = t.getCiphers = function() {
                                return Object.keys(b).concat(n.getCiphers())
                            }
                        },
                        5238: function(e, t, r) {
                            var i = r(1043),
                                n = r(9536),
                                u = r(3782),
                                b = r(6911).Buffer,
                                m = {
                                    "des-ede3-cbc": n.CBC.instantiate(n.EDE),
                                    "des-ede3": n.EDE,
                                    "des-ede-cbc": n.CBC.instantiate(n.EDE),
                                    "des-ede": n.EDE,
                                    "des-cbc": n.CBC.instantiate(n.DES),
                                    "des-ecb": n.DES
                                };

                            function DES(e) {
                                i.call(this);
                                var t, r = e.mode.toLowerCase(),
                                    n = m[r];
                                t = e.decrypt ? "decrypt" : "encrypt";
                                var u = e.key;
                                b.isBuffer(u) || (u = b.from(u)), ("des-ede" === r || "des-ede-cbc" === r) && (u = b.concat([u, u.slice(0, 8)]));
                                var y = e.iv;
                                b.isBuffer(y) || (y = b.from(y)), this._des = n.create({
                                    key: u,
                                    iv: y,
                                    type: t
                                })
                            }
                            m.des = m["des-cbc"], m.des3 = m["des-ede3-cbc"], e.exports = DES, u(DES, i), DES.prototype._update = function(e) {
                                return b.from(this._des.update(e))
                            }, DES.prototype._final = function() {
                                return b.from(this._des.final())
                            }
                        },
                        6280: function(e, t) {
                            t["des-ecb"] = {
                                key: 8,
                                iv: 0
                            }, t["des-cbc"] = t.des = {
                                key: 8,
                                iv: 8
                            }, t["des-ede3-cbc"] = t.des3 = {
                                key: 24,
                                iv: 8
                            }, t["des-ede3"] = {
                                key: 24,
                                iv: 0
                            }, t["des-ede-cbc"] = {
                                key: 16,
                                iv: 8
                            }, t["des-ede"] = {
                                key: 16,
                                iv: 0
                            }
                        },
                        7166: function(e, t, r) {
                            var n = r(711),
                                u = r(7223);

                            function crt(e, t) {
                                var r, u = {
                                        blinder: (r = getr(t)).toRed(n.mont(t.modulus)).redPow(new n(t.publicExponent)).fromRed(),
                                        unblinder: r.invm(t.modulus)
                                    },
                                    b = t.modulus.byteLength();
                                n.mont(t.modulus);
                                var m = new n(e).mul(u.blinder).umod(t.modulus),
                                    y = m.toRed(n.mont(t.prime1)),
                                    v = m.toRed(n.mont(t.prime2)),
                                    g = t.coefficient,
                                    _ = t.prime1,
                                    w = t.prime2,
                                    M = y.redPow(t.exponent1),
                                    S = v.redPow(t.exponent2);
                                M = M.fromRed(), S = S.fromRed();
                                var B = M.isub(S).imul(g).umod(_);
                                return B.imul(w), S.iadd(B), new i(S.imul(u.unblinder).umod(t.modulus).toArray(!1, b))
                            }

                            function getr(e) {
                                for (var t = e.modulus.byteLength(), r = new n(u(t)); r.cmp(e.modulus) >= 0 || !r.umod(e.prime1) || !r.umod(e.prime2);) r = new n(u(t));
                                return r
                            }
                            e.exports = crt, crt.getr = getr
                        },
                        9276: function(e, t, r) {
                            e.exports = r(2908)
                        },
                        4078: function(e, t, r) {
                            var i = r(6911).Buffer,
                                n = r(9739),
                                u = r(3726),
                                b = r(3782),
                                m = r(9807),
                                y = r(4013),
                                v = r(2908);

                            function Sign(e) {
                                u.Writable.call(this);
                                var t = v[e];
                                if (!t) throw Error("Unknown message digest");
                                this._hashType = t.hash, this._hash = n(t.hash), this._tag = t.id, this._signType = t.sign
                            }

                            function Verify(e) {
                                u.Writable.call(this);
                                var t = v[e];
                                if (!t) throw Error("Unknown message digest");
                                this._hash = n(t.hash), this._tag = t.id, this._signType = t.sign
                            }

                            function createSign(e) {
                                return new Sign(e)
                            }

                            function createVerify(e) {
                                return new Verify(e)
                            }
                            Object.keys(v).forEach(function(e) {
                                v[e].id = i.from(v[e].id, "hex"), v[e.toLowerCase()] = v[e]
                            }), b(Sign, u.Writable), Sign.prototype._write = function(e, t, r) {
                                this._hash.update(e), r()
                            }, Sign.prototype.update = function(e, t) {
                                return "string" == typeof e && (e = i.from(e, t)), this._hash.update(e), this
                            }, Sign.prototype.sign = function(e, t) {
                                this.end();
                                var r = m(this._hash.digest(), e, this._hashType, this._signType, this._tag);
                                return t ? r.toString(t) : r
                            }, b(Verify, u.Writable), Verify.prototype._write = function(e, t, r) {
                                this._hash.update(e), r()
                            }, Verify.prototype.update = function(e, t) {
                                return "string" == typeof e && (e = i.from(e, t)), this._hash.update(e), this
                            }, Verify.prototype.verify = function(e, t, r) {
                                return "string" == typeof t && (t = i.from(t, r)), this.end(), y(t, this._hash.digest(), e, this._signType, this._tag)
                            }, e.exports = {
                                Sign: createSign,
                                Verify: createVerify,
                                createSign: createSign,
                                createVerify: createVerify
                            }
                        },
                        9807: function(e, t, r) {
                            var i = r(6911).Buffer,
                                n = r(4873),
                                u = r(7166),
                                b = r(949).ec,
                                m = r(1670),
                                y = r(9902),
                                v = r(9267);

                            function getKey(e, t, r, u) {
                                if ((e = i.from(e.toArray())).length < t.byteLength()) {
                                    var b = i.alloc(t.byteLength() - e.length);
                                    e = i.concat([b, e])
                                }
                                var m = r.length,
                                    y = function(e, t) {
                                        e = (e = bits2int(e, t)).mod(t);
                                        var r = i.from(e.toArray());
                                        if (r.length < t.byteLength()) {
                                            var n = i.alloc(t.byteLength() - r.length);
                                            r = i.concat([n, r])
                                        }
                                        return r
                                    }(r, t),
                                    v = i.alloc(m);
                                v.fill(1);
                                var g = i.alloc(m);
                                return g = n(u, g).update(v).update(i.from([0])).update(e).update(y).digest(), v = n(u, g).update(v).digest(), g = n(u, g).update(v).update(i.from([1])).update(e).update(y).digest(), v = n(u, g).update(v).digest(), {
                                    k: g,
                                    v: v
                                }
                            }

                            function bits2int(e, t) {
                                var r = new m(e),
                                    i = (e.length << 3) - t.bitLength();
                                return i > 0 && r.ishrn(i), r
                            }

                            function makeKey(e, t, r) {
                                var u, b;
                                do {
                                    for (u = i.alloc(0); 8 * u.length < e.bitLength();) t.v = n(r, t.k).update(t.v).digest(), u = i.concat([u, t.v]);
                                    b = bits2int(u, e), t.k = n(r, t.k).update(t.v).update(i.from([0])).digest(), t.v = n(r, t.k).update(t.v).digest()
                                } while (-1 !== b.cmp(e));
                                return b
                            }
                            e.exports = function(e, t, r, n, g) {
                                var _ = y(t);
                                if (_.curve) {
                                    if ("ecdsa" !== n && "ecdsa/rsa" !== n) throw Error("wrong private key type");
                                    return function(e, t) {
                                        var r = v[t.curve.join(".")];
                                        if (!r) throw Error("unknown curve " + t.curve.join("."));
                                        var n = new b(r).keyFromPrivate(t.privateKey).sign(e);
                                        return i.from(n.toDER())
                                    }(e, _)
                                }
                                if ("dsa" === _.type) {
                                    if ("dsa" !== n) throw Error("wrong private key type");
                                    return function(e, t, r) {
                                        for (var n, u, b, y, v, g = t.params.priv_key, _ = t.params.p, w = t.params.q, M = t.params.g, S = new m(0), B = bits2int(e, w).mod(w), E = !1, k = getKey(g, w, e, r); !1 === E;) n = v = makeKey(w, k, r), S = M.toRed(m.mont(_)).redPow(n).fromRed().mod(w), 0 === (E = v.invm(w).imul(B.add(g.mul(S))).mod(w)).cmpn(0) && (E = !1, S = new m(0));
                                        return u = S, b = E, u = u.toArray(), b = b.toArray(), 128 & u[0] && (u = [0].concat(u)), 128 & b[0] && (b = [0].concat(b)), y = (y = [48, u.length + b.length + 4, 2, u.length]).concat(u, [2, b.length], b), i.from(y)
                                    }(e, _, r)
                                }
                                if ("rsa" !== n && "ecdsa/rsa" !== n) throw Error("wrong private key type");
                                e = i.concat([g, e]);
                                for (var w = _.modulus.byteLength(), M = [0, 1]; e.length + M.length + 1 < w;) M.push(255);
                                M.push(0);
                                for (var S = -1; ++S < e.length;) M.push(e[S]);
                                return u(M, _)
                            }, e.exports.getKey = getKey, e.exports.makeKey = makeKey
                        },
                        4013: function(e, t, r) {
                            var i = r(6911).Buffer,
                                n = r(1670),
                                u = r(949).ec,
                                b = r(9902),
                                m = r(9267);

                            function checkValue(e, t) {
                                if (0 >= e.cmpn(0) || e.cmp(t) >= t) throw Error("invalid sig")
                            }
                            e.exports = function(e, t, r, y, v) {
                                var g, _, w, M, S, B, E, k, A, N, R, P = b(r);
                                if ("ec" === P.type) {
                                    if ("ecdsa" !== y && "ecdsa/rsa" !== y) throw Error("wrong public key type");
                                    return function(e, t, r) {
                                        var i = m[r.data.algorithm.curve.join(".")];
                                        if (!i) throw Error("unknown curve " + r.data.algorithm.curve.join("."));
                                        var n = new u(i),
                                            b = r.data.subjectPrivateKey.data;
                                        return n.verify(t, e, b)
                                    }(e, t, P)
                                }
                                if ("dsa" === P.type) {
                                    if ("dsa" !== y) throw Error("wrong public key type");
                                    return g = e, _ = t, w = P.data.p, M = P.data.q, S = P.data.g, B = P.data.pub_key, k = (E = b.signature.decode(g, "der")).s, A = E.r, checkValue(k, M), checkValue(A, M), N = n.mont(w), R = k.invm(M), 0 === S.toRed(N).redPow(new n(_).mul(R).mod(M)).fromRed().mul(B.toRed(N).redPow(A.mul(R).mod(M)).fromRed()).mod(w).mod(M).cmp(A)
                                }
                                if ("rsa" !== y && "ecdsa/rsa" !== y) throw Error("wrong public key type");
                                t = i.concat([v, t]);
                                for (var x = P.modulus.byteLength(), I = [1], C = 0; t.length + I.length + 2 < x;) I.push(255), C++;
                                I.push(0);
                                for (var D = -1; ++D < t.length;) I.push(t[D]);
                                I = i.from(I);
                                var T = n.mont(P.modulus);
                                e = (e = new n(e).toRed(T)).redPow(new n(P.publicExponent));
                                var j = C < 8 ? 1 : 0;
                                for (x = Math.min((e = i.from(e.fromRed().toArray())).length, I.length), e.length !== I.length && (j = 1), D = -1; ++D < x;) j |= e[D] ^ I[D];
                                return 0 === j
                            }
                        },
                        4734: function(e) {
                            e.exports = function(e, t) {
                                for (var r = Math.min(e.length, t.length), n = new i(r), u = 0; u < r; ++u) n[u] = e[u] ^ t[u];
                                return n
                            }
                        },
                        1043: function(e, t, r) {
                            var i = r(6911).Buffer,
                                n = r(2781).Transform,
                                u = r(1576).StringDecoder;

                            function CipherBase(e) {
                                n.call(this), this.hashMode = "string" == typeof e, this.hashMode ? this[e] = this._finalOrDigest : this.final = this._finalOrDigest, this._final && (this.__final = this._final, this._final = null), this._decoder = null, this._encoding = null
                            }
                            r(3782)(CipherBase, n), CipherBase.prototype.update = function(e, t, r) {
                                "string" == typeof e && (e = i.from(e, t));
                                var n = this._update(e);
                                return this.hashMode ? this : (r && (n = this._toString(n, r)), n)
                            }, CipherBase.prototype.setAutoPadding = function() {}, CipherBase.prototype.getAuthTag = function() {
                                throw Error("trying to get auth tag in unsupported state")
                            }, CipherBase.prototype.setAuthTag = function() {
                                throw Error("trying to set auth tag in unsupported state")
                            }, CipherBase.prototype.setAAD = function() {
                                throw Error("trying to set aad in unsupported state")
                            }, CipherBase.prototype._transform = function(e, t, r) {
                                var i;
                                try {
                                    this.hashMode ? this._update(e) : this.push(this._update(e))
                                } catch (e) {
                                    i = e
                                } finally {
                                    r(i)
                                }
                            }, CipherBase.prototype._flush = function(e) {
                                var t;
                                try {
                                    this.push(this.__final())
                                } catch (e) {
                                    t = e
                                }
                                e(t)
                            }, CipherBase.prototype._finalOrDigest = function(e) {
                                var t = this.__final() || i.alloc(0);
                                return e && (t = this._toString(t, e, !0)), t
                            }, CipherBase.prototype._toString = function(e, t, r) {
                                if (this._decoder || (this._decoder = new u(t), this._encoding = t), this._encoding !== t) throw Error("can't switch encodings");
                                var i = this._decoder.write(e);
                                return r && (i += this._decoder.end()), i
                            }, e.exports = CipherBase
                        },
                        9942: function(e, t, r) {
                            var n = r(949),
                                u = r(711);
                            e.exports = function(e) {
                                return new ECDH(e)
                            };
                            var b = {
                                secp256k1: {
                                    name: "secp256k1",
                                    byteLength: 32
                                },
                                secp224r1: {
                                    name: "p224",
                                    byteLength: 28
                                },
                                prime256v1: {
                                    name: "p256",
                                    byteLength: 32
                                },
                                prime192v1: {
                                    name: "p192",
                                    byteLength: 24
                                },
                                ed25519: {
                                    name: "ed25519",
                                    byteLength: 32
                                },
                                secp384r1: {
                                    name: "p384",
                                    byteLength: 48
                                },
                                secp521r1: {
                                    name: "p521",
                                    byteLength: 66
                                }
                            };

                            function ECDH(e) {
                                this.curveType = b[e], this.curveType || (this.curveType = {
                                    name: e
                                }), this.curve = new n.ec(this.curveType.name), this.keys = void 0
                            }

                            function formatReturnValue(e, t, r) {
                                Array.isArray(e) || (e = e.toArray());
                                var n = new i(e);
                                if (r && n.length < r) {
                                    var u = new i(r - n.length);
                                    u.fill(0), n = i.concat([u, n])
                                }
                                return t ? n.toString(t) : n
                            }
                            b.p224 = b.secp224r1, b.p256 = b.secp256r1 = b.prime256v1, b.p192 = b.secp192r1 = b.prime192v1, b.p384 = b.secp384r1, b.p521 = b.secp521r1, ECDH.prototype.generateKeys = function(e, t) {
                                return this.keys = this.curve.genKeyPair(), this.getPublicKey(e, t)
                            }, ECDH.prototype.computeSecret = function(e, t, r) {
                                return t = t || "utf8", i.isBuffer(e) || (e = new i(e, t)), formatReturnValue(this.curve.keyFromPublic(e).getPublic().mul(this.keys.getPrivate()).getX(), r, this.curveType.byteLength)
                            }, ECDH.prototype.getPublicKey = function(e, t) {
                                var r = this.keys.getPublic("compressed" === t, !0);
                                return "hybrid" === t && (r[r.length - 1] % 2 ? r[0] = 7 : r[0] = 6), formatReturnValue(r, e)
                            }, ECDH.prototype.getPrivateKey = function(e) {
                                return formatReturnValue(this.keys.getPrivate(), e)
                            }, ECDH.prototype.setPublicKey = function(e, t) {
                                return t = t || "utf8", i.isBuffer(e) || (e = new i(e, t)), this.keys._importPublic(e), this
                            }, ECDH.prototype.setPrivateKey = function(e, t) {
                                t = t || "utf8", i.isBuffer(e) || (e = new i(e, t));
                                var r = new u(e);
                                return r = r.toString(16), this.keys = this.curve.genKeyPair(), this.keys._importPrivate(r), this
                            }
                        },
                        9739: function(e, t, r) {
                            "use strict";
                            var i = r(3782),
                                n = r(3533),
                                u = r(3225),
                                b = r(4371),
                                m = r(1043);

                            function Hash(e) {
                                m.call(this, "digest"), this._hash = e
                            }
                            i(Hash, m), Hash.prototype._update = function(e) {
                                this._hash.update(e)
                            }, Hash.prototype._final = function() {
                                return this._hash.digest()
                            }, e.exports = function(e) {
                                return "md5" === (e = e.toLowerCase()) ? new n : "rmd160" === e || "ripemd160" === e ? new u : new Hash(b(e))
                            }
                        },
                        450: function(e, t, r) {
                            var i = r(3533);
                            e.exports = function(e) {
                                return (new i).update(e).digest()
                            }
                        },
                        4873: function(e, t, r) {
                            "use strict";
                            var i = r(3782),
                                n = r(8119),
                                u = r(1043),
                                b = r(6911).Buffer,
                                m = r(450),
                                y = r(3225),
                                v = r(4371),
                                g = b.alloc(128);

                            function Hmac(e, t) {
                                u.call(this, "digest"), "string" == typeof t && (t = b.from(t));
                                var r = "sha512" === e || "sha384" === e ? 128 : 64;
                                this._alg = e, this._key = t, t.length > r ? t = ("rmd160" === e ? new y : v(e)).update(t).digest() : t.length < r && (t = b.concat([t, g], r));
                                for (var i = this._ipad = b.allocUnsafe(r), n = this._opad = b.allocUnsafe(r), m = 0; m < r; m++) i[m] = 54 ^ t[m], n[m] = 92 ^ t[m];
                                this._hash = "rmd160" === e ? new y : v(e), this._hash.update(i)
                            }
                            i(Hmac, u), Hmac.prototype._update = function(e) {
                                this._hash.update(e)
                            }, Hmac.prototype._final = function() {
                                var e = this._hash.digest();
                                return ("rmd160" === this._alg ? new y : v(this._alg)).update(this._opad).update(e).digest()
                            }, e.exports = function(e, t) {
                                return "rmd160" === (e = e.toLowerCase()) || "ripemd160" === e ? new Hmac("rmd160", t) : "md5" === e ? new n(m, t) : new Hmac(e, t)
                            }
                        },
                        8119: function(e, t, r) {
                            "use strict";
                            var i = r(3782),
                                n = r(6911).Buffer,
                                u = r(1043),
                                b = n.alloc(128);

                            function Hmac(e, t) {
                                u.call(this, "digest"), "string" == typeof t && (t = n.from(t)), this._alg = e, this._key = t, t.length > 64 ? t = e(t) : t.length < 64 && (t = n.concat([t, b], 64));
                                for (var r = this._ipad = n.allocUnsafe(64), i = this._opad = n.allocUnsafe(64), m = 0; m < 64; m++) r[m] = 54 ^ t[m], i[m] = 92 ^ t[m];
                                this._hash = [r]
                            }
                            i(Hmac, u), Hmac.prototype._update = function(e) {
                                this._hash.push(e)
                            }, Hmac.prototype._final = function() {
                                var e = this._alg(n.concat(this._hash));
                                return this._alg(n.concat([this._opad, e]))
                            }, e.exports = Hmac
                        },
                        9536: function(e, t, r) {
                            "use strict";
                            t.utils = r(5334), t.Cipher = r(9876), t.DES = r(1016), t.CBC = r(8641), t.EDE = r(6159)
                        },
                        8641: function(e, t, r) {
                            "use strict";
                            var i = r(3523),
                                n = r(3782),
                                u = {};

                            function CBCState(e) {
                                i.equal(e.length, 8, "Invalid IV length"), this.iv = Array(8);
                                for (var t = 0; t < this.iv.length; t++) this.iv[t] = e[t]
                            }
                            t.instantiate = function(e) {
                                function CBC(t) {
                                    e.call(this, t), this._cbcInit()
                                }
                                n(CBC, e);
                                for (var t = Object.keys(u), r = 0; r < t.length; r++) {
                                    var i = t[r];
                                    CBC.prototype[i] = u[i]
                                }
                                return CBC.create = function(e) {
                                    return new CBC(e)
                                }, CBC
                            }, u._cbcInit = function() {
                                var e = new CBCState(this.options.iv);
                                this._cbcState = e
                            }, u._update = function(e, t, r, i) {
                                var n = this._cbcState,
                                    u = this.constructor.super_.prototype,
                                    b = n.iv;
                                if ("encrypt" === this.type) {
                                    for (var m = 0; m < this.blockSize; m++) b[m] ^= e[t + m];
                                    u._update.call(this, b, 0, r, i);
                                    for (var m = 0; m < this.blockSize; m++) b[m] = r[i + m]
                                } else {
                                    u._update.call(this, e, t, r, i);
                                    for (var m = 0; m < this.blockSize; m++) r[i + m] ^= b[m];
                                    for (var m = 0; m < this.blockSize; m++) b[m] = e[t + m]
                                }
                            }
                        },
                        9876: function(e, t, r) {
                            "use strict";
                            var i = r(3523);

                            function Cipher(e) {
                                this.options = e, this.type = this.options.type, this.blockSize = 8, this._init(), this.buffer = Array(this.blockSize), this.bufferOff = 0
                            }
                            e.exports = Cipher, Cipher.prototype._init = function() {}, Cipher.prototype.update = function(e) {
                                return 0 === e.length ? [] : "decrypt" === this.type ? this._updateDecrypt(e) : this._updateEncrypt(e)
                            }, Cipher.prototype._buffer = function(e, t) {
                                for (var r = Math.min(this.buffer.length - this.bufferOff, e.length - t), i = 0; i < r; i++) this.buffer[this.bufferOff + i] = e[t + i];
                                return this.bufferOff += r, r
                            }, Cipher.prototype._flushBuffer = function(e, t) {
                                return this._update(this.buffer, 0, e, t), this.bufferOff = 0, this.blockSize
                            }, Cipher.prototype._updateEncrypt = function(e) {
                                var t = 0,
                                    r = 0,
                                    i = Array(((this.bufferOff + e.length) / this.blockSize | 0) * this.blockSize);
                                0 !== this.bufferOff && (t += this._buffer(e, t), this.bufferOff === this.buffer.length && (r += this._flushBuffer(i, r)));
                                for (var n = e.length - (e.length - t) % this.blockSize; t < n; t += this.blockSize) this._update(e, t, i, r), r += this.blockSize;
                                for (; t < e.length; t++, this.bufferOff++) this.buffer[this.bufferOff] = e[t];
                                return i
                            }, Cipher.prototype._updateDecrypt = function(e) {
                                for (var t = 0, r = 0, i = Math.ceil((this.bufferOff + e.length) / this.blockSize) - 1, n = Array(i * this.blockSize); i > 0; i--) t += this._buffer(e, t), r += this._flushBuffer(n, r);
                                return t += this._buffer(e, t), n
                            }, Cipher.prototype.final = function(e) {
                                var t, r;
                                return (e && (t = this.update(e)), r = "encrypt" === this.type ? this._finalEncrypt() : this._finalDecrypt(), t) ? t.concat(r) : r
                            }, Cipher.prototype._pad = function(e, t) {
                                if (0 === t) return !1;
                                for (; t < e.length;) e[t++] = 0;
                                return !0
                            }, Cipher.prototype._finalEncrypt = function() {
                                if (!this._pad(this.buffer, this.bufferOff)) return [];
                                var e = Array(this.blockSize);
                                return this._update(this.buffer, 0, e, 0), e
                            }, Cipher.prototype._unpad = function(e) {
                                return e
                            }, Cipher.prototype._finalDecrypt = function() {
                                i.equal(this.bufferOff, this.blockSize, "Not enough data to decrypt");
                                var e = Array(this.blockSize);
                                return this._flushBuffer(e, 0), this._unpad(e)
                            }
                        },
                        1016: function(e, t, r) {
                            "use strict";
                            var i = r(3523),
                                n = r(3782),
                                u = r(5334),
                                b = r(9876);

                            function DESState() {
                                this.tmp = [, , ], this.keys = null
                            }

                            function DES(e) {
                                b.call(this, e);
                                var t = new DESState;
                                this._desState = t, this.deriveKeys(t, e.key)
                            }
                            n(DES, b), e.exports = DES, DES.create = function(e) {
                                return new DES(e)
                            };
                            var m = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];
                            DES.prototype.deriveKeys = function(e, t) {
                                e.keys = Array(32), i.equal(t.length, this.blockSize, "Invalid key length");
                                var r = u.readUInt32BE(t, 0),
                                    n = u.readUInt32BE(t, 4);
                                u.pc1(r, n, e.tmp, 0), r = e.tmp[0], n = e.tmp[1];
                                for (var b = 0; b < e.keys.length; b += 2) {
                                    var y = m[b >>> 1];
                                    r = u.r28shl(r, y), n = u.r28shl(n, y), u.pc2(r, n, e.keys, b)
                                }
                            }, DES.prototype._update = function(e, t, r, i) {
                                var n = this._desState,
                                    b = u.readUInt32BE(e, t),
                                    m = u.readUInt32BE(e, t + 4);
                                u.ip(b, m, n.tmp, 0), b = n.tmp[0], m = n.tmp[1], "encrypt" === this.type ? this._encrypt(n, b, m, n.tmp, 0) : this._decrypt(n, b, m, n.tmp, 0), b = n.tmp[0], m = n.tmp[1], u.writeUInt32BE(r, b, i), u.writeUInt32BE(r, m, i + 4)
                            }, DES.prototype._pad = function(e, t) {
                                for (var r = e.length - t, i = t; i < e.length; i++) e[i] = r;
                                return !0
                            }, DES.prototype._unpad = function(e) {
                                for (var t = e[e.length - 1], r = e.length - t; r < e.length; r++) i.equal(e[r], t);
                                return e.slice(0, e.length - t)
                            }, DES.prototype._encrypt = function(e, t, r, i, n) {
                                for (var b = t, m = r, y = 0; y < e.keys.length; y += 2) {
                                    var v = e.keys[y],
                                        g = e.keys[y + 1];
                                    u.expand(m, e.tmp, 0), v ^= e.tmp[0], g ^= e.tmp[1];
                                    var _ = u.substitute(v, g),
                                        w = u.permute(_),
                                        M = m;
                                    m = (b ^ w) >>> 0, b = M
                                }
                                u.rip(m, b, i, n)
                            }, DES.prototype._decrypt = function(e, t, r, i, n) {
                                for (var b = r, m = t, y = e.keys.length - 2; y >= 0; y -= 2) {
                                    var v = e.keys[y],
                                        g = e.keys[y + 1];
                                    u.expand(b, e.tmp, 0), v ^= e.tmp[0], g ^= e.tmp[1];
                                    var _ = u.substitute(v, g),
                                        w = u.permute(_),
                                        M = b;
                                    b = (m ^ w) >>> 0, m = M
                                }
                                u.rip(b, m, i, n)
                            }
                        },
                        6159: function(e, t, r) {
                            "use strict";
                            var i = r(3523),
                                n = r(3782),
                                u = r(9876),
                                b = r(1016);

                            function EDEState(e, t) {
                                i.equal(t.length, 24, "Invalid key length");
                                var r = t.slice(0, 8),
                                    n = t.slice(8, 16),
                                    u = t.slice(16, 24);
                                "encrypt" === e ? this.ciphers = [b.create({
                                    type: "encrypt",
                                    key: r
                                }), b.create({
                                    type: "decrypt",
                                    key: n
                                }), b.create({
                                    type: "encrypt",
                                    key: u
                                })] : this.ciphers = [b.create({
                                    type: "decrypt",
                                    key: u
                                }), b.create({
                                    type: "encrypt",
                                    key: n
                                }), b.create({
                                    type: "decrypt",
                                    key: r
                                })]
                            }

                            function EDE(e) {
                                u.call(this, e);
                                var t = new EDEState(this.type, this.options.key);
                                this._edeState = t
                            }
                            n(EDE, u), e.exports = EDE, EDE.create = function(e) {
                                return new EDE(e)
                            }, EDE.prototype._update = function(e, t, r, i) {
                                var n = this._edeState;
                                n.ciphers[0]._update(e, t, r, i), n.ciphers[1]._update(r, i, r, i), n.ciphers[2]._update(r, i, r, i)
                            }, EDE.prototype._pad = b.prototype._pad, EDE.prototype._unpad = b.prototype._unpad
                        },
                        5334: function(e, t) {
                            "use strict";
                            t.readUInt32BE = function(e, t) {
                                return (e[0 + t] << 24 | e[1 + t] << 16 | e[2 + t] << 8 | e[3 + t]) >>> 0
                            }, t.writeUInt32BE = function(e, t, r) {
                                e[0 + r] = t >>> 24, e[1 + r] = t >>> 16 & 255, e[2 + r] = t >>> 8 & 255, e[3 + r] = 255 & t
                            }, t.ip = function(e, t, r, i) {
                                for (var n = 0, u = 0, b = 6; b >= 0; b -= 2) {
                                    for (var m = 0; m <= 24; m += 8) n <<= 1, n |= t >>> m + b & 1;
                                    for (var m = 0; m <= 24; m += 8) n <<= 1, n |= e >>> m + b & 1
                                }
                                for (var b = 6; b >= 0; b -= 2) {
                                    for (var m = 1; m <= 25; m += 8) u <<= 1, u |= t >>> m + b & 1;
                                    for (var m = 1; m <= 25; m += 8) u <<= 1, u |= e >>> m + b & 1
                                }
                                r[i + 0] = n >>> 0, r[i + 1] = u >>> 0
                            }, t.rip = function(e, t, r, i) {
                                for (var n = 0, u = 0, b = 0; b < 4; b++)
                                    for (var m = 24; m >= 0; m -= 8) n <<= 1, n |= t >>> m + b & 1, n <<= 1, n |= e >>> m + b & 1;
                                for (var b = 4; b < 8; b++)
                                    for (var m = 24; m >= 0; m -= 8) u <<= 1, u |= t >>> m + b & 1, u <<= 1, u |= e >>> m + b & 1;
                                r[i + 0] = n >>> 0, r[i + 1] = u >>> 0
                            }, t.pc1 = function(e, t, r, i) {
                                for (var n = 0, u = 0, b = 7; b >= 5; b--) {
                                    for (var m = 0; m <= 24; m += 8) n <<= 1, n |= t >> m + b & 1;
                                    for (var m = 0; m <= 24; m += 8) n <<= 1, n |= e >> m + b & 1
                                }
                                for (var m = 0; m <= 24; m += 8) n <<= 1, n |= t >> m + b & 1;
                                for (var b = 1; b <= 3; b++) {
                                    for (var m = 0; m <= 24; m += 8) u <<= 1, u |= t >> m + b & 1;
                                    for (var m = 0; m <= 24; m += 8) u <<= 1, u |= e >> m + b & 1
                                }
                                for (var m = 0; m <= 24; m += 8) u <<= 1, u |= e >> m + b & 1;
                                r[i + 0] = n >>> 0, r[i + 1] = u >>> 0
                            }, t.r28shl = function(e, t) {
                                return e << t & 268435455 | e >>> 28 - t
                            };
                            var r = [14, 11, 17, 4, 27, 23, 25, 0, 13, 22, 7, 18, 5, 9, 16, 24, 2, 20, 12, 21, 1, 8, 15, 26, 15, 4, 25, 19, 9, 1, 26, 16, 5, 11, 23, 8, 12, 7, 17, 0, 22, 3, 10, 14, 6, 20, 27, 24];
                            t.pc2 = function(e, t, i, n) {
                                for (var u = 0, b = 0, m = r.length >>> 1, y = 0; y < m; y++) u <<= 1, u |= e >>> r[y] & 1;
                                for (var y = m; y < r.length; y++) b <<= 1, b |= t >>> r[y] & 1;
                                i[n + 0] = u >>> 0, i[n + 1] = b >>> 0
                            }, t.expand = function(e, t, r) {
                                var i = 0,
                                    n = 0;
                                i = (1 & e) << 5 | e >>> 27;
                                for (var u = 23; u >= 15; u -= 4) i <<= 6, i |= e >>> u & 63;
                                for (var u = 11; u >= 3; u -= 4) n |= e >>> u & 63, n <<= 6;
                                n |= (31 & e) << 1 | e >>> 31, t[r + 0] = i >>> 0, t[r + 1] = n >>> 0
                            };
                            var i = [14, 0, 4, 15, 13, 7, 1, 4, 2, 14, 15, 2, 11, 13, 8, 1, 3, 10, 10, 6, 6, 12, 12, 11, 5, 9, 9, 5, 0, 3, 7, 8, 4, 15, 1, 12, 14, 8, 8, 2, 13, 4, 6, 9, 2, 1, 11, 7, 15, 5, 12, 11, 9, 3, 7, 14, 3, 10, 10, 0, 5, 6, 0, 13, 15, 3, 1, 13, 8, 4, 14, 7, 6, 15, 11, 2, 3, 8, 4, 14, 9, 12, 7, 0, 2, 1, 13, 10, 12, 6, 0, 9, 5, 11, 10, 5, 0, 13, 14, 8, 7, 10, 11, 1, 10, 3, 4, 15, 13, 4, 1, 2, 5, 11, 8, 6, 12, 7, 6, 12, 9, 0, 3, 5, 2, 14, 15, 9, 10, 13, 0, 7, 9, 0, 14, 9, 6, 3, 3, 4, 15, 6, 5, 10, 1, 2, 13, 8, 12, 5, 7, 14, 11, 12, 4, 11, 2, 15, 8, 1, 13, 1, 6, 10, 4, 13, 9, 0, 8, 6, 15, 9, 3, 8, 0, 7, 11, 4, 1, 15, 2, 14, 12, 3, 5, 11, 10, 5, 14, 2, 7, 12, 7, 13, 13, 8, 14, 11, 3, 5, 0, 6, 6, 15, 9, 0, 10, 3, 1, 4, 2, 7, 8, 2, 5, 12, 11, 1, 12, 10, 4, 14, 15, 9, 10, 3, 6, 15, 9, 0, 0, 6, 12, 10, 11, 1, 7, 13, 13, 8, 15, 9, 1, 4, 3, 5, 14, 11, 5, 12, 2, 7, 8, 2, 4, 14, 2, 14, 12, 11, 4, 2, 1, 12, 7, 4, 10, 7, 11, 13, 6, 1, 8, 5, 5, 0, 3, 15, 15, 10, 13, 3, 0, 9, 14, 8, 9, 6, 4, 11, 2, 8, 1, 12, 11, 7, 10, 1, 13, 14, 7, 2, 8, 13, 15, 6, 9, 15, 12, 0, 5, 9, 6, 10, 3, 4, 0, 5, 14, 3, 12, 10, 1, 15, 10, 4, 15, 2, 9, 7, 2, 12, 6, 9, 8, 5, 0, 6, 13, 1, 3, 13, 4, 14, 14, 0, 7, 11, 5, 3, 11, 8, 9, 4, 14, 3, 15, 2, 5, 12, 2, 9, 8, 5, 12, 15, 3, 10, 7, 11, 0, 14, 4, 1, 10, 7, 1, 6, 13, 0, 11, 8, 6, 13, 4, 13, 11, 0, 2, 11, 14, 7, 15, 4, 0, 9, 8, 1, 13, 10, 3, 14, 12, 3, 9, 5, 7, 12, 5, 2, 10, 15, 6, 8, 1, 6, 1, 6, 4, 11, 11, 13, 13, 8, 12, 1, 3, 4, 7, 10, 14, 7, 10, 9, 15, 5, 6, 0, 8, 15, 0, 14, 5, 2, 9, 3, 2, 12, 13, 1, 2, 15, 8, 13, 4, 8, 6, 10, 15, 3, 11, 7, 1, 4, 10, 12, 9, 5, 3, 6, 14, 11, 5, 0, 0, 14, 12, 9, 7, 2, 7, 2, 11, 1, 4, 14, 1, 7, 9, 4, 12, 10, 14, 8, 2, 13, 0, 15, 6, 12, 10, 9, 13, 0, 15, 3, 3, 5, 5, 6, 8, 11];
                            t.substitute = function(e, t) {
                                for (var r = 0, n = 0; n < 4; n++) {
                                    var u = e >>> 18 - 6 * n & 63,
                                        b = i[64 * n + u];
                                    r <<= 4, r |= b
                                }
                                for (var n = 0; n < 4; n++) {
                                    var u = t >>> 18 - 6 * n & 63,
                                        b = i[256 + 64 * n + u];
                                    r <<= 4, r |= b
                                }
                                return r >>> 0
                            };
                            var n = [16, 25, 12, 11, 3, 20, 4, 15, 31, 17, 9, 6, 27, 14, 1, 22, 30, 24, 8, 18, 0, 5, 29, 23, 13, 19, 2, 26, 10, 21, 28, 7];
                            t.permute = function(e) {
                                for (var t = 0, r = 0; r < n.length; r++) t <<= 1, t |= e >>> n[r] & 1;
                                return t >>> 0
                            }, t.padSplit = function(e, t, r) {
                                for (var i = e.toString(2); i.length < t;) i = "0" + i;
                                for (var n = [], u = 0; u < t; u += r) n.push(i.slice(u, u + r));
                                return n.join(" ")
                            }
                        },
                        6587: function(e, t, r) {
                            var n = r(296),
                                u = r(7992),
                                b = r(373),
                                m = {
                                    binary: !0,
                                    hex: !0,
                                    base64: !0
                                };
                            t.DiffieHellmanGroup = t.createDiffieHellmanGroup = t.getDiffieHellman = function(e) {
                                var t = new i(u[e].prime, "hex"),
                                    r = new i(u[e].gen, "hex");
                                return new b(t, r)
                            }, t.createDiffieHellman = t.DiffieHellman = function createDiffieHellman(e, t, r, u) {
                                return i.isBuffer(t) || void 0 === m[t] ? createDiffieHellman(e, "binary", t, r) : (t = t || "binary", u = u || "binary", r = r || new i([2]), i.isBuffer(r) || (r = new i(r, u)), "number" == typeof e) ? new b(n(e, r), r, !0) : (i.isBuffer(e) || (e = new i(e, t)), new b(e, r, !0))
                            }
                        },
                        373: function(e, t, r) {
                            var n = r(711),
                                u = new(r(1354)),
                                b = new n(24),
                                m = new n(11),
                                y = new n(10),
                                v = new n(3),
                                g = new n(7),
                                _ = r(296),
                                w = r(7223);

                            function setPublicKey(e, t) {
                                return t = t || "utf8", i.isBuffer(e) || (e = new i(e, t)), this._pub = new n(e), this
                            }

                            function setPrivateKey(e, t) {
                                return t = t || "utf8", i.isBuffer(e) || (e = new i(e, t)), this._priv = new n(e), this
                            }
                            e.exports = DH;
                            var M = {};

                            function DH(e, t, r) {
                                this.setGenerator(t), this.__prime = new n(e), this._prime = n.mont(this.__prime), this._primeLen = e.length, this._pub = void 0, this._priv = void 0, this._primeCode = void 0, r ? (this.setPublicKey = setPublicKey, this.setPrivateKey = setPrivateKey) : this._primeCode = 8
                            }

                            function formatReturnValue(e, t) {
                                var r = new i(e.toArray());
                                return t ? r.toString(t) : r
                            }
                            Object.defineProperty(DH.prototype, "verifyError", {
                                enumerable: !0,
                                get: function() {
                                    return "number" != typeof this._primeCode && (this._primeCode = function(e, t) {
                                        var r, i = t.toString("hex"),
                                            n = [i, e.toString(16)].join("_");
                                        if (n in M) return M[n];
                                        var w = 0;
                                        if (e.isEven() || !_.simpleSieve || !_.fermatTest(e) || !u.test(e)) return w += 1, "02" === i || "05" === i ? w += 8 : w += 4, M[n] = w, w;
                                        switch (u.test(e.shrn(1)) || (w += 2), i) {
                                            case "02":
                                                e.mod(b).cmp(m) && (w += 8);
                                                break;
                                            case "05":
                                                (r = e.mod(y)).cmp(v) && r.cmp(g) && (w += 8);
                                                break;
                                            default:
                                                w += 4
                                        }
                                        return M[n] = w, w
                                    }(this.__prime, this.__gen)), this._primeCode
                                }
                            }), DH.prototype.generateKeys = function() {
                                return this._priv || (this._priv = new n(w(this._primeLen))), this._pub = this._gen.toRed(this._prime).redPow(this._priv).fromRed(), this.getPublicKey()
                            }, DH.prototype.computeSecret = function(e) {
                                var t = (e = (e = new n(e)).toRed(this._prime)).redPow(this._priv).fromRed(),
                                    r = new i(t.toArray()),
                                    u = this.getPrime();
                                if (r.length < u.length) {
                                    var b = new i(u.length - r.length);
                                    b.fill(0), r = i.concat([b, r])
                                }
                                return r
                            }, DH.prototype.getPublicKey = function(e) {
                                return formatReturnValue(this._pub, e)
                            }, DH.prototype.getPrivateKey = function(e) {
                                return formatReturnValue(this._priv, e)
                            }, DH.prototype.getPrime = function(e) {
                                return formatReturnValue(this.__prime, e)
                            }, DH.prototype.getGenerator = function(e) {
                                return formatReturnValue(this._gen, e)
                            }, DH.prototype.setGenerator = function(e, t) {
                                return t = t || "utf8", i.isBuffer(e) || (e = new i(e, t)), this.__gen = e, this._gen = new n(e), this
                            }
                        },
                        296: function(e, t, r) {
                            var i = r(7223);
                            e.exports = findPrime, findPrime.simpleSieve = simpleSieve, findPrime.fermatTest = fermatTest;
                            var n = r(711),
                                u = new n(24),
                                b = new(r(1354)),
                                m = new n(1),
                                y = new n(2),
                                v = new n(5);
                            new n(16), new n(8);
                            var g = new n(10),
                                _ = new n(3);
                            new n(7);
                            var w = new n(11),
                                M = new n(4);
                            new n(12);
                            var S = null;

                            function simpleSieve(e) {
                                for (var t = function() {
                                        if (null !== S) return S;
                                        var e = [];
                                        e[0] = 2;
                                        for (var t = 1, r = 3; r < 1048576; r += 2) {
                                            for (var i = Math.ceil(Math.sqrt(r)), n = 0; n < t && e[n] <= i && r % e[n] != 0; n++);
                                            t !== n && e[n] <= i || (e[t++] = r)
                                        }
                                        return S = e, e
                                    }(), r = 0; r < t.length; r++)
                                    if (0 === e.modn(t[r])) {
                                        if (0 !== e.cmpn(t[r])) return !1;
                                        break
                                    } return !0
                            }

                            function fermatTest(e) {
                                var t = n.mont(e);
                                return 0 === y.toRed(t).redPow(e.subn(1)).fromRed().cmpn(1)
                            }

                            function findPrime(e, t) {
                                var r, S;
                                if (e < 16) return new n(2 === t || 5 === t ? [140, 123] : [140, 39]);
                                for (t = new n(t);;) {
                                    for (r = new n(i(Math.ceil(e / 8))); r.bitLength() > e;) r.ishrn(1);
                                    if (r.isEven() && r.iadd(m), r.testn(1) || r.iadd(y), t.cmp(y)) {
                                        if (!t.cmp(v))
                                            for (; r.mod(g).cmp(_);) r.iadd(M)
                                    } else
                                        for (; r.mod(u).cmp(w);) r.iadd(M);
                                    if (simpleSieve(S = r.shrn(1)) && simpleSieve(r) && fermatTest(S) && fermatTest(r) && b.test(S) && b.test(r)) return r
                                }
                            }
                        },
                        949: function(e, t, r) {
                            "use strict";
                            t.version = r(2531).i8, t.utils = r(4401), t.rand = r(3500), t.curve = r(9359), t.curves = r(6226), t.ec = r(4088), t.eddsa = r(8511)
                        },
                        2727: function(e, t, r) {
                            "use strict";
                            var i = r(711),
                                n = r(4401),
                                u = n.getNAF,
                                b = n.getJSF,
                                m = n.assert;

                            function BaseCurve(e, t) {
                                this.type = e, this.p = new i(t.p, 16), this.red = t.prime ? i.red(t.prime) : i.mont(this.p), this.zero = new i(0).toRed(this.red), this.one = new i(1).toRed(this.red), this.two = new i(2).toRed(this.red), this.n = t.n && new i(t.n, 16), this.g = t.g && this.pointFromJSON(t.g, t.gRed), this._wnafT1 = [, , , , ], this._wnafT2 = [, , , , ], this._wnafT3 = [, , , , ], this._wnafT4 = [, , , , ], this._bitLength = this.n ? this.n.bitLength() : 0;
                                var r = this.n && this.p.div(this.n);
                                !r || r.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red))
                            }

                            function BasePoint(e, t) {
                                this.curve = e, this.type = t, this.precomputed = null
                            }
                            e.exports = BaseCurve, BaseCurve.prototype.point = function() {
                                throw Error("Not implemented")
                            }, BaseCurve.prototype.validate = function() {
                                throw Error("Not implemented")
                            }, BaseCurve.prototype._fixedNafMul = function(e, t) {
                                m(e.precomputed);
                                var r = e._getDoubles(),
                                    i = u(t, 1, this._bitLength),
                                    n = (1 << r.step + 1) - (r.step % 2 == 0 ? 2 : 1);
                                n /= 3;
                                for (var b = [], y = 0; y < i.length; y += r.step) {
                                    for (var v = 0, t = y + r.step - 1; t >= y; t--) v = (v << 1) + i[t];
                                    b.push(v)
                                }
                                for (var g = this.jpoint(null, null, null), _ = this.jpoint(null, null, null), w = n; w > 0; w--) {
                                    for (var y = 0; y < b.length; y++) {
                                        var v = b[y];
                                        v === w ? _ = _.mixedAdd(r.points[y]) : v === -w && (_ = _.mixedAdd(r.points[y].neg()))
                                    }
                                    g = g.add(_)
                                }
                                return g.toP()
                            }, BaseCurve.prototype._wnafMul = function(e, t) {
                                var r = 4,
                                    i = e._getNAFPoints(r);
                                r = i.wnd;
                                for (var n = i.points, b = u(t, r, this._bitLength), y = this.jpoint(null, null, null), v = b.length - 1; v >= 0; v--) {
                                    for (var t = 0; v >= 0 && 0 === b[v]; v--) t++;
                                    if (v >= 0 && t++, y = y.dblp(t), v < 0) break;
                                    var g = b[v];
                                    m(0 !== g), y = "affine" === e.type ? g > 0 ? y.mixedAdd(n[g - 1 >> 1]) : y.mixedAdd(n[-g - 1 >> 1].neg()) : g > 0 ? y.add(n[g - 1 >> 1]) : y.add(n[-g - 1 >> 1].neg())
                                }
                                return "affine" === e.type ? y.toP() : y
                            }, BaseCurve.prototype._wnafMulAdd = function(e, t, r, i, n) {
                                for (var m = this._wnafT1, y = this._wnafT2, v = this._wnafT3, g = 0, _ = 0; _ < i; _++) {
                                    var w = t[_],
                                        M = w._getNAFPoints(e);
                                    m[_] = M.wnd, y[_] = M.points
                                }
                                for (var _ = i - 1; _ >= 1; _ -= 2) {
                                    var S = _ - 1,
                                        B = _;
                                    if (1 !== m[S] || 1 !== m[B]) {
                                        v[S] = u(r[S], m[S], this._bitLength), v[B] = u(r[B], m[B], this._bitLength), g = Math.max(v[S].length, g), g = Math.max(v[B].length, g);
                                        continue
                                    }
                                    var E = [t[S], null, null, t[B]];
                                    0 === t[S].y.cmp(t[B].y) ? (E[1] = t[S].add(t[B]), E[2] = t[S].toJ().mixedAdd(t[B].neg())) : 0 === t[S].y.cmp(t[B].y.redNeg()) ? (E[1] = t[S].toJ().mixedAdd(t[B]), E[2] = t[S].add(t[B].neg())) : (E[1] = t[S].toJ().mixedAdd(t[B]), E[2] = t[S].toJ().mixedAdd(t[B].neg()));
                                    var k = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                                        A = b(r[S], r[B]);
                                    g = Math.max(A[0].length, g), v[S] = Array(g), v[B] = Array(g);
                                    for (var N = 0; N < g; N++) {
                                        var R = 0 | A[0][N],
                                            P = 0 | A[1][N];
                                        v[S][N] = k[(R + 1) * 3 + (P + 1)], v[B][N] = 0, y[S] = E
                                    }
                                }
                                for (var x = this.jpoint(null, null, null), I = this._wnafT4, _ = g; _ >= 0; _--) {
                                    for (var C = 0; _ >= 0;) {
                                        for (var D = !0, N = 0; N < i; N++) I[N] = 0 | v[N][_], 0 !== I[N] && (D = !1);
                                        if (!D) break;
                                        C++, _--
                                    }
                                    if (_ >= 0 && C++, x = x.dblp(C), _ < 0) break;
                                    for (var N = 0; N < i; N++) {
                                        var w, T = I[N];
                                        0 !== T && (T > 0 ? w = y[N][T - 1 >> 1] : T < 0 && (w = y[N][-T - 1 >> 1].neg()), x = "affine" === w.type ? x.mixedAdd(w) : x.add(w))
                                    }
                                }
                                for (var _ = 0; _ < i; _++) y[_] = null;
                                return n ? x : x.toP()
                            }, BaseCurve.BasePoint = BasePoint, BasePoint.prototype.eq = function() {
                                throw Error("Not implemented")
                            }, BasePoint.prototype.validate = function() {
                                return this.curve.validate(this)
                            }, BaseCurve.prototype.decodePoint = function(e, t) {
                                e = n.toArray(e, t);
                                var r = this.p.byteLength();
                                if ((4 === e[0] || 6 === e[0] || 7 === e[0]) && e.length - 1 == 2 * r) return 6 === e[0] ? m(e[e.length - 1] % 2 == 0) : 7 === e[0] && m(e[e.length - 1] % 2 == 1), this.point(e.slice(1, 1 + r), e.slice(1 + r, 1 + 2 * r));
                                if ((2 === e[0] || 3 === e[0]) && e.length - 1 === r) return this.pointFromX(e.slice(1, 1 + r), 3 === e[0]);
                                throw Error("Unknown point format")
                            }, BasePoint.prototype.encodeCompressed = function(e) {
                                return this.encode(e, !0)
                            }, BasePoint.prototype._encode = function(e) {
                                var t = this.curve.p.byteLength(),
                                    r = this.getX().toArray("be", t);
                                return e ? [this.getY().isEven() ? 2 : 3].concat(r) : [4].concat(r, this.getY().toArray("be", t))
                            }, BasePoint.prototype.encode = function(e, t) {
                                return n.encode(this._encode(t), e)
                            }, BasePoint.prototype.precompute = function(e) {
                                if (this.precomputed) return this;
                                var t = {
                                    doubles: null,
                                    naf: null,
                                    beta: null
                                };
                                return t.naf = this._getNAFPoints(8), t.doubles = this._getDoubles(4, e), t.beta = this._getBeta(), this.precomputed = t, this
                            }, BasePoint.prototype._hasDoubles = function(e) {
                                if (!this.precomputed) return !1;
                                var t = this.precomputed.doubles;
                                return !!t && t.points.length >= Math.ceil((e.bitLength() + 1) / t.step)
                            }, BasePoint.prototype._getDoubles = function(e, t) {
                                if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
                                for (var r = [this], i = this, n = 0; n < t; n += e) {
                                    for (var u = 0; u < e; u++) i = i.dbl();
                                    r.push(i)
                                }
                                return {
                                    step: e,
                                    points: r
                                }
                            }, BasePoint.prototype._getNAFPoints = function(e) {
                                if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
                                for (var t = [this], r = (1 << e) - 1, i = 1 === r ? null : this.dbl(), n = 1; n < r; n++) t[n] = t[n - 1].add(i);
                                return {
                                    wnd: e,
                                    points: t
                                }
                            }, BasePoint.prototype._getBeta = function() {
                                return null
                            }, BasePoint.prototype.dblp = function(e) {
                                for (var t = this, r = 0; r < e; r++) t = t.dbl();
                                return t
                            }
                        },
                        2705: function(e, t, r) {
                            "use strict";
                            var i = r(4401),
                                n = r(711),
                                u = r(3782),
                                b = r(2727),
                                m = i.assert;

                            function EdwardsCurve(e) {
                                this.twisted = (0 | e.a) != 1, this.mOneA = this.twisted && (0 | e.a) == -1, this.extended = this.mOneA, b.call(this, "edwards", e), this.a = new n(e.a, 16).umod(this.red.m), this.a = this.a.toRed(this.red), this.c = new n(e.c, 16).toRed(this.red), this.c2 = this.c.redSqr(), this.d = new n(e.d, 16).toRed(this.red), this.dd = this.d.redAdd(this.d), m(!this.twisted || 0 === this.c.fromRed().cmpn(1)), this.oneC = (0 | e.c) == 1
                            }

                            function Point(e, t, r, i, u) {
                                b.BasePoint.call(this, e, "projective"), null === t && null === r && null === i ? (this.x = this.curve.zero, this.y = this.curve.one, this.z = this.curve.one, this.t = this.curve.zero, this.zOne = !0) : (this.x = new n(t, 16), this.y = new n(r, 16), this.z = i ? new n(i, 16) : this.curve.one, this.t = u && new n(u, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)), this.zOne = this.z === this.curve.one, !this.curve.extended || this.t || (this.t = this.x.redMul(this.y), this.zOne || (this.t = this.t.redMul(this.z.redInvm()))))
                            }
                            u(EdwardsCurve, b), e.exports = EdwardsCurve, EdwardsCurve.prototype._mulA = function(e) {
                                return this.mOneA ? e.redNeg() : this.a.redMul(e)
                            }, EdwardsCurve.prototype._mulC = function(e) {
                                return this.oneC ? e : this.c.redMul(e)
                            }, EdwardsCurve.prototype.jpoint = function(e, t, r, i) {
                                return this.point(e, t, r, i)
                            }, EdwardsCurve.prototype.pointFromX = function(e, t) {
                                (e = new n(e, 16)).red || (e = e.toRed(this.red));
                                var r = e.redSqr(),
                                    i = this.c2.redSub(this.a.redMul(r)),
                                    u = this.one.redSub(this.c2.redMul(this.d).redMul(r)),
                                    b = i.redMul(u.redInvm()),
                                    m = b.redSqrt();
                                if (0 !== m.redSqr().redSub(b).cmp(this.zero)) throw Error("invalid point");
                                var y = m.fromRed().isOdd();
                                return (t && !y || !t && y) && (m = m.redNeg()), this.point(e, m)
                            }, EdwardsCurve.prototype.pointFromY = function(e, t) {
                                (e = new n(e, 16)).red || (e = e.toRed(this.red));
                                var r = e.redSqr(),
                                    i = r.redSub(this.c2),
                                    u = r.redMul(this.d).redMul(this.c2).redSub(this.a),
                                    b = i.redMul(u.redInvm());
                                if (0 === b.cmp(this.zero)) {
                                    if (!t) return this.point(this.zero, e);
                                    throw Error("invalid point")
                                }
                                var m = b.redSqrt();
                                if (0 !== m.redSqr().redSub(b).cmp(this.zero)) throw Error("invalid point");
                                return m.fromRed().isOdd() !== t && (m = m.redNeg()), this.point(m, e)
                            }, EdwardsCurve.prototype.validate = function(e) {
                                if (e.isInfinity()) return !0;
                                e.normalize();
                                var t = e.x.redSqr(),
                                    r = e.y.redSqr(),
                                    i = t.redMul(this.a).redAdd(r),
                                    n = this.c2.redMul(this.one.redAdd(this.d.redMul(t).redMul(r)));
                                return 0 === i.cmp(n)
                            }, u(Point, b.BasePoint), EdwardsCurve.prototype.pointFromJSON = function(e) {
                                return Point.fromJSON(this, e)
                            }, EdwardsCurve.prototype.point = function(e, t, r, i) {
                                return new Point(this, e, t, r, i)
                            }, Point.fromJSON = function(e, t) {
                                return new Point(e, t[0], t[1], t[2])
                            }, Point.prototype.inspect = function() {
                                return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
                            }, Point.prototype.isInfinity = function() {
                                return 0 === this.x.cmpn(0) && (0 === this.y.cmp(this.z) || this.zOne && 0 === this.y.cmp(this.curve.c))
                            }, Point.prototype._extDbl = function() {
                                var e = this.x.redSqr(),
                                    t = this.y.redSqr(),
                                    r = this.z.redSqr();
                                r = r.redIAdd(r);
                                var i = this.curve._mulA(e),
                                    n = this.x.redAdd(this.y).redSqr().redISub(e).redISub(t),
                                    u = i.redAdd(t),
                                    b = u.redSub(r),
                                    m = i.redSub(t),
                                    y = n.redMul(b),
                                    v = u.redMul(m),
                                    g = n.redMul(m),
                                    _ = b.redMul(u);
                                return this.curve.point(y, v, _, g)
                            }, Point.prototype._projDbl = function() {
                                var e, t, r, i = this.x.redAdd(this.y).redSqr(),
                                    n = this.x.redSqr(),
                                    u = this.y.redSqr();
                                if (this.curve.twisted) {
                                    var b = this.curve._mulA(n),
                                        m = b.redAdd(u);
                                    if (this.zOne) e = i.redSub(n).redSub(u).redMul(m.redSub(this.curve.two)), t = m.redMul(b.redSub(u)), r = m.redSqr().redSub(m).redSub(m);
                                    else {
                                        var y = this.z.redSqr(),
                                            v = m.redSub(y).redISub(y);
                                        e = i.redSub(n).redISub(u).redMul(v), t = m.redMul(b.redSub(u)), r = m.redMul(v)
                                    }
                                } else {
                                    var b = n.redAdd(u),
                                        y = this.curve._mulC(this.z).redSqr(),
                                        v = b.redSub(y).redSub(y);
                                    e = this.curve._mulC(i.redISub(b)).redMul(v), t = this.curve._mulC(b).redMul(n.redISub(u)), r = b.redMul(v)
                                }
                                return this.curve.point(e, t, r)
                            }, Point.prototype.dbl = function() {
                                return this.isInfinity() ? this : this.curve.extended ? this._extDbl() : this._projDbl()
                            }, Point.prototype._extAdd = function(e) {
                                var t = this.y.redSub(this.x).redMul(e.y.redSub(e.x)),
                                    r = this.y.redAdd(this.x).redMul(e.y.redAdd(e.x)),
                                    i = this.t.redMul(this.curve.dd).redMul(e.t),
                                    n = this.z.redMul(e.z.redAdd(e.z)),
                                    u = r.redSub(t),
                                    b = n.redSub(i),
                                    m = n.redAdd(i),
                                    y = r.redAdd(t),
                                    v = u.redMul(b),
                                    g = m.redMul(y),
                                    _ = u.redMul(y),
                                    w = b.redMul(m);
                                return this.curve.point(v, g, w, _)
                            }, Point.prototype._projAdd = function(e) {
                                var t, r, i = this.z.redMul(e.z),
                                    n = i.redSqr(),
                                    u = this.x.redMul(e.x),
                                    b = this.y.redMul(e.y),
                                    m = this.curve.d.redMul(u).redMul(b),
                                    y = n.redSub(m),
                                    v = n.redAdd(m),
                                    g = this.x.redAdd(this.y).redMul(e.x.redAdd(e.y)).redISub(u).redISub(b),
                                    _ = i.redMul(y).redMul(g);
                                return this.curve.twisted ? (t = i.redMul(v).redMul(b.redSub(this.curve._mulA(u))), r = y.redMul(v)) : (t = i.redMul(v).redMul(b.redSub(u)), r = this.curve._mulC(y).redMul(v)), this.curve.point(_, t, r)
                            }, Point.prototype.add = function(e) {
                                return this.isInfinity() ? e : e.isInfinity() ? this : this.curve.extended ? this._extAdd(e) : this._projAdd(e)
                            }, Point.prototype.mul = function(e) {
                                return this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve._wnafMul(this, e)
                            }, Point.prototype.mulAdd = function(e, t, r) {
                                return this.curve._wnafMulAdd(1, [this, t], [e, r], 2, !1)
                            }, Point.prototype.jmulAdd = function(e, t, r) {
                                return this.curve._wnafMulAdd(1, [this, t], [e, r], 2, !0)
                            }, Point.prototype.normalize = function() {
                                if (this.zOne) return this;
                                var e = this.z.redInvm();
                                return this.x = this.x.redMul(e), this.y = this.y.redMul(e), this.t && (this.t = this.t.redMul(e)), this.z = this.curve.one, this.zOne = !0, this
                            }, Point.prototype.neg = function() {
                                return this.curve.point(this.x.redNeg(), this.y, this.z, this.t && this.t.redNeg())
                            }, Point.prototype.getX = function() {
                                return this.normalize(), this.x.fromRed()
                            }, Point.prototype.getY = function() {
                                return this.normalize(), this.y.fromRed()
                            }, Point.prototype.eq = function(e) {
                                return this === e || 0 === this.getX().cmp(e.getX()) && 0 === this.getY().cmp(e.getY())
                            }, Point.prototype.eqXToP = function(e) {
                                var t = e.toRed(this.curve.red).redMul(this.z);
                                if (0 === this.x.cmp(t)) return !0;
                                for (var r = e.clone(), i = this.curve.redN.redMul(this.z);;) {
                                    if (r.iadd(this.curve.n), r.cmp(this.curve.p) >= 0) return !1;
                                    if (t.redIAdd(i), 0 === this.x.cmp(t)) return !0
                                }
                            }, Point.prototype.toP = Point.prototype.normalize, Point.prototype.mixedAdd = Point.prototype.add
                        },
                        9359: function(e, t, r) {
                            "use strict";
                            t.base = r(2727), t.short = r(4720), t.mont = r(6653), t.edwards = r(2705)
                        },
                        6653: function(e, t, r) {
                            "use strict";
                            var i = r(711),
                                n = r(3782),
                                u = r(2727),
                                b = r(4401);

                            function MontCurve(e) {
                                u.call(this, "mont", e), this.a = new i(e.a, 16).toRed(this.red), this.b = new i(e.b, 16).toRed(this.red), this.i4 = new i(4).toRed(this.red).redInvm(), this.two = new i(2).toRed(this.red), this.a24 = this.i4.redMul(this.a.redAdd(this.two))
                            }

                            function Point(e, t, r) {
                                u.BasePoint.call(this, e, "projective"), null === t && null === r ? (this.x = this.curve.one, this.z = this.curve.zero) : (this.x = new i(t, 16), this.z = new i(r, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)))
                            }
                            n(MontCurve, u), e.exports = MontCurve, MontCurve.prototype.validate = function(e) {
                                var t = e.normalize().x,
                                    r = t.redSqr(),
                                    i = r.redMul(t).redAdd(r.redMul(this.a)).redAdd(t);
                                return 0 === i.redSqrt().redSqr().cmp(i)
                            }, n(Point, u.BasePoint), MontCurve.prototype.decodePoint = function(e, t) {
                                return this.point(b.toArray(e, t), 1)
                            }, MontCurve.prototype.point = function(e, t) {
                                return new Point(this, e, t)
                            }, MontCurve.prototype.pointFromJSON = function(e) {
                                return Point.fromJSON(this, e)
                            }, Point.prototype.precompute = function() {}, Point.prototype._encode = function() {
                                return this.getX().toArray("be", this.curve.p.byteLength())
                            }, Point.fromJSON = function(e, t) {
                                return new Point(e, t[0], t[1] || e.one)
                            }, Point.prototype.inspect = function() {
                                return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
                            }, Point.prototype.isInfinity = function() {
                                return 0 === this.z.cmpn(0)
                            }, Point.prototype.dbl = function() {
                                var e = this.x.redAdd(this.z).redSqr(),
                                    t = this.x.redSub(this.z).redSqr(),
                                    r = e.redSub(t),
                                    i = e.redMul(t),
                                    n = r.redMul(t.redAdd(this.curve.a24.redMul(r)));
                                return this.curve.point(i, n)
                            }, Point.prototype.add = function() {
                                throw Error("Not supported on Montgomery curve")
                            }, Point.prototype.diffAdd = function(e, t) {
                                var r = this.x.redAdd(this.z),
                                    i = this.x.redSub(this.z),
                                    n = e.x.redAdd(e.z),
                                    u = e.x.redSub(e.z).redMul(r),
                                    b = n.redMul(i),
                                    m = t.z.redMul(u.redAdd(b).redSqr()),
                                    y = t.x.redMul(u.redISub(b).redSqr());
                                return this.curve.point(m, y)
                            }, Point.prototype.mul = function(e) {
                                for (var t = e.clone(), r = this, i = this.curve.point(null, null), n = []; 0 !== t.cmpn(0); t.iushrn(1)) n.push(t.andln(1));
                                for (var u = n.length - 1; u >= 0; u--) 0 === n[u] ? (r = r.diffAdd(i, this), i = i.dbl()) : (i = r.diffAdd(i, this), r = r.dbl());
                                return i
                            }, Point.prototype.mulAdd = function() {
                                throw Error("Not supported on Montgomery curve")
                            }, Point.prototype.jumlAdd = function() {
                                throw Error("Not supported on Montgomery curve")
                            }, Point.prototype.eq = function(e) {
                                return 0 === this.getX().cmp(e.getX())
                            }, Point.prototype.normalize = function() {
                                return this.x = this.x.redMul(this.z.redInvm()), this.z = this.curve.one, this
                            }, Point.prototype.getX = function() {
                                return this.normalize(), this.x.fromRed()
                            }
                        },
                        4720: function(e, t, r) {
                            "use strict";
                            var i = r(4401),
                                n = r(711),
                                u = r(3782),
                                b = r(2727),
                                m = i.assert;

                            function ShortCurve(e) {
                                b.call(this, "short", e), this.a = new n(e.a, 16).toRed(this.red), this.b = new n(e.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(e), this._endoWnafT1 = [, , , , ], this._endoWnafT2 = [, , , , ]
                            }

                            function Point(e, t, r, i) {
                                b.BasePoint.call(this, e, "affine"), null === t && null === r ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new n(t, 16), this.y = new n(r, 16), i && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1)
                            }

                            function JPoint(e, t, r, i) {
                                b.BasePoint.call(this, e, "jacobian"), null === t && null === r && null === i ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new n(0)) : (this.x = new n(t, 16), this.y = new n(r, 16), this.z = new n(i, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one
                            }
                            u(ShortCurve, b), e.exports = ShortCurve, ShortCurve.prototype._getEndomorphism = function(e) {
                                if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
                                    if (e.beta) t = new n(e.beta, 16).toRed(this.red);
                                    else {
                                        var t, r, i, u = this._getEndoRoots(this.p);
                                        t = (t = 0 > u[0].cmp(u[1]) ? u[0] : u[1]).toRed(this.red)
                                    }
                                    if (e.lambda) r = new n(e.lambda, 16);
                                    else {
                                        var b = this._getEndoRoots(this.n);
                                        0 === this.g.mul(b[0]).x.cmp(this.g.x.redMul(t)) ? r = b[0] : (r = b[1], m(0 === this.g.mul(r).x.cmp(this.g.x.redMul(t))))
                                    }
                                    return i = e.basis ? e.basis.map(function(e) {
                                        return {
                                            a: new n(e.a, 16),
                                            b: new n(e.b, 16)
                                        }
                                    }) : this._getEndoBasis(r), {
                                        beta: t,
                                        lambda: r,
                                        basis: i
                                    }
                                }
                            }, ShortCurve.prototype._getEndoRoots = function(e) {
                                var t = e === this.p ? this.red : n.mont(e),
                                    r = new n(2).toRed(t).redInvm(),
                                    i = r.redNeg(),
                                    u = new n(3).toRed(t).redNeg().redSqrt().redMul(r);
                                return [i.redAdd(u).fromRed(), i.redSub(u).fromRed()]
                            }, ShortCurve.prototype._getEndoBasis = function(e) {
                                for (var t, r, i, u, b, m, y, v, g, _ = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), w = e, M = this.n.clone(), S = new n(1), B = new n(0), E = new n(0), k = new n(1), A = 0; 0 !== w.cmpn(0);) {
                                    var N = M.div(w);
                                    v = M.sub(N.mul(w)), g = E.sub(N.mul(S));
                                    var R = k.sub(N.mul(B));
                                    if (!i && 0 > v.cmp(_)) t = y.neg(), r = S, i = v.neg(), u = g;
                                    else if (i && 2 == ++A) break;
                                    y = v, M = w, w = v, E = S, S = g, k = B, B = R
                                }
                                b = v.neg(), m = g;
                                var P = i.sqr().add(u.sqr());
                                return b.sqr().add(m.sqr()).cmp(P) >= 0 && (b = t, m = r), i.negative && (i = i.neg(), u = u.neg()), b.negative && (b = b.neg(), m = m.neg()), [{
                                    a: i,
                                    b: u
                                }, {
                                    a: b,
                                    b: m
                                }]
                            }, ShortCurve.prototype._endoSplit = function(e) {
                                var t = this.endo.basis,
                                    r = t[0],
                                    i = t[1],
                                    n = i.b.mul(e).divRound(this.n),
                                    u = r.b.neg().mul(e).divRound(this.n),
                                    b = n.mul(r.a),
                                    m = u.mul(i.a),
                                    y = n.mul(r.b),
                                    v = u.mul(i.b);
                                return {
                                    k1: e.sub(b).sub(m),
                                    k2: y.add(v).neg()
                                }
                            }, ShortCurve.prototype.pointFromX = function(e, t) {
                                (e = new n(e, 16)).red || (e = e.toRed(this.red));
                                var r = e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b),
                                    i = r.redSqrt();
                                if (0 !== i.redSqr().redSub(r).cmp(this.zero)) throw Error("invalid point");
                                var u = i.fromRed().isOdd();
                                return (t && !u || !t && u) && (i = i.redNeg()), this.point(e, i)
                            }, ShortCurve.prototype.validate = function(e) {
                                if (e.inf) return !0;
                                var t = e.x,
                                    r = e.y,
                                    i = this.a.redMul(t),
                                    n = t.redSqr().redMul(t).redIAdd(i).redIAdd(this.b);
                                return 0 === r.redSqr().redISub(n).cmpn(0)
                            }, ShortCurve.prototype._endoWnafMulAdd = function(e, t, r) {
                                for (var i = this._endoWnafT1, n = this._endoWnafT2, u = 0; u < e.length; u++) {
                                    var b = this._endoSplit(t[u]),
                                        m = e[u],
                                        y = m._getBeta();
                                    b.k1.negative && (b.k1.ineg(), m = m.neg(!0)), b.k2.negative && (b.k2.ineg(), y = y.neg(!0)), i[2 * u] = m, i[2 * u + 1] = y, n[2 * u] = b.k1, n[2 * u + 1] = b.k2
                                }
                                for (var v = this._wnafMulAdd(1, i, n, 2 * u, r), g = 0; g < 2 * u; g++) i[g] = null, n[g] = null;
                                return v
                            }, u(Point, b.BasePoint), ShortCurve.prototype.point = function(e, t, r) {
                                return new Point(this, e, t, r)
                            }, ShortCurve.prototype.pointFromJSON = function(e, t) {
                                return Point.fromJSON(this, e, t)
                            }, Point.prototype._getBeta = function() {
                                if (this.curve.endo) {
                                    var e = this.precomputed;
                                    if (e && e.beta) return e.beta;
                                    var t = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
                                    if (e) {
                                        var r = this.curve,
                                            endoMul = function(e) {
                                                return r.point(e.x.redMul(r.endo.beta), e.y)
                                            };
                                        e.beta = t, t.precomputed = {
                                            beta: null,
                                            naf: e.naf && {
                                                wnd: e.naf.wnd,
                                                points: e.naf.points.map(endoMul)
                                            },
                                            doubles: e.doubles && {
                                                step: e.doubles.step,
                                                points: e.doubles.points.map(endoMul)
                                            }
                                        }
                                    }
                                    return t
                                }
                            }, Point.prototype.toJSON = function() {
                                return this.precomputed ? [this.x, this.y, this.precomputed && {
                                    doubles: this.precomputed.doubles && {
                                        step: this.precomputed.doubles.step,
                                        points: this.precomputed.doubles.points.slice(1)
                                    },
                                    naf: this.precomputed.naf && {
                                        wnd: this.precomputed.naf.wnd,
                                        points: this.precomputed.naf.points.slice(1)
                                    }
                                }] : [this.x, this.y]
                            }, Point.fromJSON = function(e, t, r) {
                                "string" == typeof t && (t = JSON.parse(t));
                                var i = e.point(t[0], t[1], r);
                                if (!t[2]) return i;

                                function obj2point(t) {
                                    return e.point(t[0], t[1], r)
                                }
                                var n = t[2];
                                return i.precomputed = {
                                    beta: null,
                                    doubles: n.doubles && {
                                        step: n.doubles.step,
                                        points: [i].concat(n.doubles.points.map(obj2point))
                                    },
                                    naf: n.naf && {
                                        wnd: n.naf.wnd,
                                        points: [i].concat(n.naf.points.map(obj2point))
                                    }
                                }, i
                            }, Point.prototype.inspect = function() {
                                return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"
                            }, Point.prototype.isInfinity = function() {
                                return this.inf
                            }, Point.prototype.add = function(e) {
                                if (this.inf) return e;
                                if (e.inf) return this;
                                if (this.eq(e)) return this.dbl();
                                if (this.neg().eq(e) || 0 === this.x.cmp(e.x)) return this.curve.point(null, null);
                                var t = this.y.redSub(e.y);
                                0 !== t.cmpn(0) && (t = t.redMul(this.x.redSub(e.x).redInvm()));
                                var r = t.redSqr().redISub(this.x).redISub(e.x),
                                    i = t.redMul(this.x.redSub(r)).redISub(this.y);
                                return this.curve.point(r, i)
                            }, Point.prototype.dbl = function() {
                                if (this.inf) return this;
                                var e = this.y.redAdd(this.y);
                                if (0 === e.cmpn(0)) return this.curve.point(null, null);
                                var t = this.curve.a,
                                    r = this.x.redSqr(),
                                    i = e.redInvm(),
                                    n = r.redAdd(r).redIAdd(r).redIAdd(t).redMul(i),
                                    u = n.redSqr().redISub(this.x.redAdd(this.x)),
                                    b = n.redMul(this.x.redSub(u)).redISub(this.y);
                                return this.curve.point(u, b)
                            }, Point.prototype.getX = function() {
                                return this.x.fromRed()
                            }, Point.prototype.getY = function() {
                                return this.y.fromRed()
                            }, Point.prototype.mul = function(e) {
                                return (e = new n(e, 16), this.isInfinity()) ? this : this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [e]) : this.curve._wnafMul(this, e)
                            }, Point.prototype.mulAdd = function(e, t, r) {
                                var i = [this, t],
                                    n = [e, r];
                                return this.curve.endo ? this.curve._endoWnafMulAdd(i, n) : this.curve._wnafMulAdd(1, i, n, 2)
                            }, Point.prototype.jmulAdd = function(e, t, r) {
                                var i = [this, t],
                                    n = [e, r];
                                return this.curve.endo ? this.curve._endoWnafMulAdd(i, n, !0) : this.curve._wnafMulAdd(1, i, n, 2, !0)
                            }, Point.prototype.eq = function(e) {
                                return this === e || this.inf === e.inf && (this.inf || 0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y))
                            }, Point.prototype.neg = function(e) {
                                if (this.inf) return this;
                                var t = this.curve.point(this.x, this.y.redNeg());
                                if (e && this.precomputed) {
                                    var r = this.precomputed,
                                        negate = function(e) {
                                            return e.neg()
                                        };
                                    t.precomputed = {
                                        naf: r.naf && {
                                            wnd: r.naf.wnd,
                                            points: r.naf.points.map(negate)
                                        },
                                        doubles: r.doubles && {
                                            step: r.doubles.step,
                                            points: r.doubles.points.map(negate)
                                        }
                                    }
                                }
                                return t
                            }, Point.prototype.toJ = function() {
                                return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one)
                            }, u(JPoint, b.BasePoint), ShortCurve.prototype.jpoint = function(e, t, r) {
                                return new JPoint(this, e, t, r)
                            }, JPoint.prototype.toP = function() {
                                if (this.isInfinity()) return this.curve.point(null, null);
                                var e = this.z.redInvm(),
                                    t = e.redSqr(),
                                    r = this.x.redMul(t),
                                    i = this.y.redMul(t).redMul(e);
                                return this.curve.point(r, i)
                            }, JPoint.prototype.neg = function() {
                                return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
                            }, JPoint.prototype.add = function(e) {
                                if (this.isInfinity()) return e;
                                if (e.isInfinity()) return this;
                                var t = e.z.redSqr(),
                                    r = this.z.redSqr(),
                                    i = this.x.redMul(t),
                                    n = e.x.redMul(r),
                                    u = this.y.redMul(t.redMul(e.z)),
                                    b = e.y.redMul(r.redMul(this.z)),
                                    m = i.redSub(n),
                                    y = u.redSub(b);
                                if (0 === m.cmpn(0)) return 0 !== y.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
                                var v = m.redSqr(),
                                    g = v.redMul(m),
                                    _ = i.redMul(v),
                                    w = y.redSqr().redIAdd(g).redISub(_).redISub(_),
                                    M = y.redMul(_.redISub(w)).redISub(u.redMul(g)),
                                    S = this.z.redMul(e.z).redMul(m);
                                return this.curve.jpoint(w, M, S)
                            }, JPoint.prototype.mixedAdd = function(e) {
                                if (this.isInfinity()) return e.toJ();
                                if (e.isInfinity()) return this;
                                var t = this.z.redSqr(),
                                    r = this.x,
                                    i = e.x.redMul(t),
                                    n = this.y,
                                    u = e.y.redMul(t).redMul(this.z),
                                    b = r.redSub(i),
                                    m = n.redSub(u);
                                if (0 === b.cmpn(0)) return 0 !== m.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
                                var y = b.redSqr(),
                                    v = y.redMul(b),
                                    g = r.redMul(y),
                                    _ = m.redSqr().redIAdd(v).redISub(g).redISub(g),
                                    w = m.redMul(g.redISub(_)).redISub(n.redMul(v)),
                                    M = this.z.redMul(b);
                                return this.curve.jpoint(_, w, M)
                            }, JPoint.prototype.dblp = function(e) {
                                if (0 === e || this.isInfinity()) return this;
                                if (!e) return this.dbl();
                                if (this.curve.zeroA || this.curve.threeA) {
                                    for (var t = this, r = 0; r < e; r++) t = t.dbl();
                                    return t
                                }
                                for (var i = this.curve.a, n = this.curve.tinv, u = this.x, b = this.y, m = this.z, y = m.redSqr().redSqr(), v = b.redAdd(b), r = 0; r < e; r++) {
                                    var g = u.redSqr(),
                                        _ = v.redSqr(),
                                        w = _.redSqr(),
                                        M = g.redAdd(g).redIAdd(g).redIAdd(i.redMul(y)),
                                        S = u.redMul(_),
                                        B = M.redSqr().redISub(S.redAdd(S)),
                                        E = S.redISub(B),
                                        k = M.redMul(E);
                                    k = k.redIAdd(k).redISub(w);
                                    var A = v.redMul(m);
                                    r + 1 < e && (y = y.redMul(w)), u = B, m = A, v = k
                                }
                                return this.curve.jpoint(u, v.redMul(n), m)
                            }, JPoint.prototype.dbl = function() {
                                return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl()
                            }, JPoint.prototype._zeroDbl = function() {
                                if (this.zOne) {
                                    var e, t, r, i = this.x.redSqr(),
                                        n = this.y.redSqr(),
                                        u = n.redSqr(),
                                        b = this.x.redAdd(n).redSqr().redISub(i).redISub(u);
                                    b = b.redIAdd(b);
                                    var m = i.redAdd(i).redIAdd(i),
                                        y = m.redSqr().redISub(b).redISub(b),
                                        v = u.redIAdd(u);
                                    v = (v = v.redIAdd(v)).redIAdd(v), e = y, t = m.redMul(b.redISub(y)).redISub(v), r = this.y.redAdd(this.y)
                                } else {
                                    var g = this.x.redSqr(),
                                        _ = this.y.redSqr(),
                                        w = _.redSqr(),
                                        M = this.x.redAdd(_).redSqr().redISub(g).redISub(w);
                                    M = M.redIAdd(M);
                                    var S = g.redAdd(g).redIAdd(g),
                                        B = S.redSqr(),
                                        E = w.redIAdd(w);
                                    E = (E = E.redIAdd(E)).redIAdd(E), e = B.redISub(M).redISub(M), t = S.redMul(M.redISub(e)).redISub(E), r = (r = this.y.redMul(this.z)).redIAdd(r)
                                }
                                return this.curve.jpoint(e, t, r)
                            }, JPoint.prototype._threeDbl = function() {
                                if (this.zOne) {
                                    var e, t, r, i = this.x.redSqr(),
                                        n = this.y.redSqr(),
                                        u = n.redSqr(),
                                        b = this.x.redAdd(n).redSqr().redISub(i).redISub(u);
                                    b = b.redIAdd(b);
                                    var m = i.redAdd(i).redIAdd(i).redIAdd(this.curve.a),
                                        y = m.redSqr().redISub(b).redISub(b);
                                    e = y;
                                    var v = u.redIAdd(u);
                                    v = (v = v.redIAdd(v)).redIAdd(v), t = m.redMul(b.redISub(y)).redISub(v), r = this.y.redAdd(this.y)
                                } else {
                                    var g = this.z.redSqr(),
                                        _ = this.y.redSqr(),
                                        w = this.x.redMul(_),
                                        M = this.x.redSub(g).redMul(this.x.redAdd(g));
                                    M = M.redAdd(M).redIAdd(M);
                                    var S = w.redIAdd(w),
                                        B = (S = S.redIAdd(S)).redAdd(S);
                                    e = M.redSqr().redISub(B), r = this.y.redAdd(this.z).redSqr().redISub(_).redISub(g);
                                    var E = _.redSqr();
                                    E = (E = (E = E.redIAdd(E)).redIAdd(E)).redIAdd(E), t = M.redMul(S.redISub(e)).redISub(E)
                                }
                                return this.curve.jpoint(e, t, r)
                            }, JPoint.prototype._dbl = function() {
                                var e = this.curve.a,
                                    t = this.x,
                                    r = this.y,
                                    i = this.z,
                                    n = i.redSqr().redSqr(),
                                    u = t.redSqr(),
                                    b = r.redSqr(),
                                    m = u.redAdd(u).redIAdd(u).redIAdd(e.redMul(n)),
                                    y = t.redAdd(t),
                                    v = (y = y.redIAdd(y)).redMul(b),
                                    g = m.redSqr().redISub(v.redAdd(v)),
                                    _ = v.redISub(g),
                                    w = b.redSqr();
                                w = (w = (w = w.redIAdd(w)).redIAdd(w)).redIAdd(w);
                                var M = m.redMul(_).redISub(w),
                                    S = r.redAdd(r).redMul(i);
                                return this.curve.jpoint(g, M, S)
                            }, JPoint.prototype.trpl = function() {
                                if (!this.curve.zeroA) return this.dbl().add(this);
                                var e = this.x.redSqr(),
                                    t = this.y.redSqr(),
                                    r = this.z.redSqr(),
                                    i = t.redSqr(),
                                    n = e.redAdd(e).redIAdd(e),
                                    u = n.redSqr(),
                                    b = this.x.redAdd(t).redSqr().redISub(e).redISub(i),
                                    m = (b = (b = (b = b.redIAdd(b)).redAdd(b).redIAdd(b)).redISub(u)).redSqr(),
                                    y = i.redIAdd(i);
                                y = (y = (y = y.redIAdd(y)).redIAdd(y)).redIAdd(y);
                                var v = n.redIAdd(b).redSqr().redISub(u).redISub(m).redISub(y),
                                    g = t.redMul(v);
                                g = (g = g.redIAdd(g)).redIAdd(g);
                                var _ = this.x.redMul(m).redISub(g);
                                _ = (_ = _.redIAdd(_)).redIAdd(_);
                                var w = this.y.redMul(v.redMul(y.redISub(v)).redISub(b.redMul(m)));
                                w = (w = (w = w.redIAdd(w)).redIAdd(w)).redIAdd(w);
                                var M = this.z.redAdd(b).redSqr().redISub(r).redISub(m);
                                return this.curve.jpoint(_, w, M)
                            }, JPoint.prototype.mul = function(e, t) {
                                return e = new n(e, t), this.curve._wnafMul(this, e)
                            }, JPoint.prototype.eq = function(e) {
                                if ("affine" === e.type) return this.eq(e.toJ());
                                if (this === e) return !0;
                                var t = this.z.redSqr(),
                                    r = e.z.redSqr();
                                if (0 !== this.x.redMul(r).redISub(e.x.redMul(t)).cmpn(0)) return !1;
                                var i = t.redMul(this.z),
                                    n = r.redMul(e.z);
                                return 0 === this.y.redMul(n).redISub(e.y.redMul(i)).cmpn(0)
                            }, JPoint.prototype.eqXToP = function(e) {
                                var t = this.z.redSqr(),
                                    r = e.toRed(this.curve.red).redMul(t);
                                if (0 === this.x.cmp(r)) return !0;
                                for (var i = e.clone(), n = this.curve.redN.redMul(t);;) {
                                    if (i.iadd(this.curve.n), i.cmp(this.curve.p) >= 0) return !1;
                                    if (r.redIAdd(n), 0 === this.x.cmp(r)) return !0
                                }
                            }, JPoint.prototype.inspect = function() {
                                return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
                            }, JPoint.prototype.isInfinity = function() {
                                return 0 === this.z.cmpn(0)
                            }
                        },
                        6226: function(e, t, r) {
                            "use strict";
                            var i, n = r(7028),
                                u = r(9359),
                                b = r(4401).assert;

                            function PresetCurve(e) {
                                "short" === e.type ? this.curve = new u.short(e) : "edwards" === e.type ? this.curve = new u.edwards(e) : this.curve = new u.mont(e), this.g = this.curve.g, this.n = this.curve.n, this.hash = e.hash, b(this.g.validate(), "Invalid curve"), b(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O")
                            }

                            function defineCurve(e, r) {
                                Object.defineProperty(t, e, {
                                    configurable: !0,
                                    enumerable: !0,
                                    get: function() {
                                        var i = new PresetCurve(r);
                                        return Object.defineProperty(t, e, {
                                            configurable: !0,
                                            enumerable: !0,
                                            value: i
                                        }), i
                                    }
                                })
                            }
                            t.PresetCurve = PresetCurve, defineCurve("p192", {
                                type: "short",
                                prime: "p192",
                                p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
                                a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
                                b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
                                n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
                                hash: n.sha256,
                                gRed: !1,
                                g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]
                            }), defineCurve("p224", {
                                type: "short",
                                prime: "p224",
                                p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
                                a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
                                b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
                                n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
                                hash: n.sha256,
                                gRed: !1,
                                g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]
                            }), defineCurve("p256", {
                                type: "short",
                                prime: null,
                                p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
                                a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
                                b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
                                n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
                                hash: n.sha256,
                                gRed: !1,
                                g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]
                            }), defineCurve("p384", {
                                type: "short",
                                prime: null,
                                p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
                                a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
                                b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
                                n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
                                hash: n.sha384,
                                gRed: !1,
                                g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]
                            }), defineCurve("p521", {
                                type: "short",
                                prime: null,
                                p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
                                a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
                                b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
                                n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
                                hash: n.sha512,
                                gRed: !1,
                                g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]
                            }), defineCurve("curve25519", {
                                type: "mont",
                                prime: "p25519",
                                p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                                a: "76d06",
                                b: "1",
                                n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                                hash: n.sha256,
                                gRed: !1,
                                g: ["9"]
                            }), defineCurve("ed25519", {
                                type: "edwards",
                                prime: "p25519",
                                p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                                a: "-1",
                                c: "1",
                                d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
                                n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                                hash: n.sha256,
                                gRed: !1,
                                g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"]
                            });
                            try {
                                i = r(9702)
                            } catch (e) {
                                i = void 0
                            }
                            defineCurve("secp256k1", {
                                type: "short",
                                prime: "k256",
                                p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
                                a: "0",
                                b: "7",
                                n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
                                h: "1",
                                hash: n.sha256,
                                beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
                                lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
                                basis: [{
                                    a: "3086d221a7d46bcde86c90e49284eb15",
                                    b: "-e4437ed6010e88286f547fa90abfe4c3"
                                }, {
                                    a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
                                    b: "3086d221a7d46bcde86c90e49284eb15"
                                }],
                                gRed: !1,
                                g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", i]
                            })
                        },
                        4088: function(e, t, r) {
                            "use strict";
                            var i = r(711),
                                n = r(4910),
                                u = r(4401),
                                b = r(6226),
                                m = r(3500),
                                y = u.assert,
                                v = r(4724),
                                g = r(7526);

                            function EC(e) {
                                if (!(this instanceof EC)) return new EC(e);
                                "string" == typeof e && (y(b.hasOwnProperty(e), "Unknown curve " + e), e = b[e]), e instanceof b.PresetCurve && (e = {
                                    curve: e
                                }), this.curve = e.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = e.curve.g, this.g.precompute(e.curve.n.bitLength() + 1), this.hash = e.hash || e.curve.hash
                            }
                            e.exports = EC, EC.prototype.keyPair = function(e) {
                                return new v(this, e)
                            }, EC.prototype.keyFromPrivate = function(e, t) {
                                return v.fromPrivate(this, e, t)
                            }, EC.prototype.keyFromPublic = function(e, t) {
                                return v.fromPublic(this, e, t)
                            }, EC.prototype.genKeyPair = function(e) {
                                e || (e = {});
                                for (var t = new n({
                                        hash: this.hash,
                                        pers: e.pers,
                                        persEnc: e.persEnc || "utf8",
                                        entropy: e.entropy || m(this.hash.hmacStrength),
                                        entropyEnc: e.entropy && e.entropyEnc || "utf8",
                                        nonce: this.n.toArray()
                                    }), r = this.n.byteLength(), u = this.n.sub(new i(2));;) {
                                    var b = new i(t.generate(r));
                                    if (!(b.cmp(u) > 0)) return b.iaddn(1), this.keyFromPrivate(b)
                                }
                            }, EC.prototype._truncateToN = function(e, t) {
                                var r = 8 * e.byteLength() - this.n.bitLength();
                                return (r > 0 && (e = e.ushrn(r)), !t && e.cmp(this.n) >= 0) ? e.sub(this.n) : e
                            }, EC.prototype.sign = function(e, t, r, u) {
                                "object" == typeof r && (u = r, r = null), u || (u = {}), t = this.keyFromPrivate(t, r), e = this._truncateToN(new i(e, 16));
                                for (var b = this.n.byteLength(), m = t.getPrivate().toArray("be", b), y = e.toArray("be", b), v = new n({
                                        hash: this.hash,
                                        entropy: m,
                                        nonce: y,
                                        pers: u.pers,
                                        persEnc: u.persEnc || "utf8"
                                    }), _ = this.n.sub(new i(1)), w = 0;; w++) {
                                    var M = u.k ? u.k(w) : new i(v.generate(this.n.byteLength()));
                                    if (!(0 >= (M = this._truncateToN(M, !0)).cmpn(1) || M.cmp(_) >= 0)) {
                                        var S = this.g.mul(M);
                                        if (!S.isInfinity()) {
                                            var B = S.getX(),
                                                E = B.umod(this.n);
                                            if (0 !== E.cmpn(0)) {
                                                var k = M.invm(this.n).mul(E.mul(t.getPrivate()).iadd(e));
                                                if (0 !== (k = k.umod(this.n)).cmpn(0)) {
                                                    var A = (S.getY().isOdd() ? 1 : 0) | (0 !== B.cmp(E) ? 2 : 0);
                                                    return u.canonical && k.cmp(this.nh) > 0 && (k = this.n.sub(k), A ^= 1), new g({
                                                        r: E,
                                                        s: k,
                                                        recoveryParam: A
                                                    })
                                                }
                                            }
                                        }
                                    }
                                }
                            }, EC.prototype.verify = function(e, t, r, n) {
                                e = this._truncateToN(new i(e, 16)), r = this.keyFromPublic(r, n);
                                var u = (t = new g(t, "hex")).r,
                                    b = t.s;
                                if (0 > u.cmpn(1) || u.cmp(this.n) >= 0 || 0 > b.cmpn(1) || b.cmp(this.n) >= 0) return !1;
                                var m = b.invm(this.n),
                                    y = m.mul(e).umod(this.n),
                                    v = m.mul(u).umod(this.n);
                                if (!this.curve._maxwellTrick) {
                                    var _ = this.g.mulAdd(y, r.getPublic(), v);
                                    return !_.isInfinity() && 0 === _.getX().umod(this.n).cmp(u)
                                }
                                var _ = this.g.jmulAdd(y, r.getPublic(), v);
                                return !_.isInfinity() && _.eqXToP(u)
                            }, EC.prototype.recoverPubKey = function(e, t, r, n) {
                                y((3 & r) === r, "The recovery param is more than two bits"), t = new g(t, n);
                                var u = this.n,
                                    b = new i(e),
                                    m = t.r,
                                    v = t.s,
                                    _ = 1 & r,
                                    w = r >> 1;
                                if (m.cmp(this.curve.p.umod(this.curve.n)) >= 0 && w) throw Error("Unable to find sencond key candinate");
                                m = w ? this.curve.pointFromX(m.add(this.curve.n), _) : this.curve.pointFromX(m, _);
                                var M = t.r.invm(u),
                                    S = u.sub(b).mul(M).umod(u),
                                    B = v.mul(M).umod(u);
                                return this.g.mulAdd(S, m, B)
                            }, EC.prototype.getKeyRecoveryParam = function(e, t, r, i) {
                                if (null !== (t = new g(t, i)).recoveryParam) return t.recoveryParam;
                                for (var n, u = 0; u < 4; u++) {
                                    try {
                                        n = this.recoverPubKey(e, t, u)
                                    } catch (e) {
                                        continue
                                    }
                                    if (n.eq(r)) return u
                                }
                                throw Error("Unable to find valid recovery factor")
                            }
                        },
                        4724: function(e, t, r) {
                            "use strict";
                            var i = r(711),
                                n = r(4401).assert;

                            function KeyPair(e, t) {
                                this.ec = e, this.priv = null, this.pub = null, t.priv && this._importPrivate(t.priv, t.privEnc), t.pub && this._importPublic(t.pub, t.pubEnc)
                            }
                            e.exports = KeyPair, KeyPair.fromPublic = function(e, t, r) {
                                return t instanceof KeyPair ? t : new KeyPair(e, {
                                    pub: t,
                                    pubEnc: r
                                })
                            }, KeyPair.fromPrivate = function(e, t, r) {
                                return t instanceof KeyPair ? t : new KeyPair(e, {
                                    priv: t,
                                    privEnc: r
                                })
                            }, KeyPair.prototype.validate = function() {
                                var e = this.getPublic();
                                return e.isInfinity() ? {
                                    result: !1,
                                    reason: "Invalid public key"
                                } : e.validate() ? e.mul(this.ec.curve.n).isInfinity() ? {
                                    result: !0,
                                    reason: null
                                } : {
                                    result: !1,
                                    reason: "Public key * N != O"
                                } : {
                                    result: !1,
                                    reason: "Public key is not a point"
                                }
                            }, KeyPair.prototype.getPublic = function(e, t) {
                                return ("string" == typeof e && (t = e, e = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), t) ? this.pub.encode(t, e) : this.pub
                            }, KeyPair.prototype.getPrivate = function(e) {
                                return "hex" === e ? this.priv.toString(16, 2) : this.priv
                            }, KeyPair.prototype._importPrivate = function(e, t) {
                                this.priv = new i(e, t || 16), this.priv = this.priv.umod(this.ec.curve.n)
                            }, KeyPair.prototype._importPublic = function(e, t) {
                                if (e.x || e.y) {
                                    "mont" === this.ec.curve.type ? n(e.x, "Need x coordinate") : ("short" === this.ec.curve.type || "edwards" === this.ec.curve.type) && n(e.x && e.y, "Need both x and y coordinate"), this.pub = this.ec.curve.point(e.x, e.y);
                                    return
                                }
                                this.pub = this.ec.curve.decodePoint(e, t)
                            }, KeyPair.prototype.derive = function(e) {
                                return e.mul(this.priv).getX()
                            }, KeyPair.prototype.sign = function(e, t, r) {
                                return this.ec.sign(e, this, t, r)
                            }, KeyPair.prototype.verify = function(e, t) {
                                return this.ec.verify(e, t, this)
                            }, KeyPair.prototype.inspect = function() {
                                return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"
                            }
                        },
                        7526: function(e, t, r) {
                            "use strict";
                            var i = r(711),
                                n = r(4401),
                                u = n.assert;

                            function Signature(e, t) {
                                if (e instanceof Signature) return e;
                                this._importDER(e, t) || (u(e.r && e.s, "Signature without r or s"), this.r = new i(e.r, 16), this.s = new i(e.s, 16), void 0 === e.recoveryParam ? this.recoveryParam = null : this.recoveryParam = e.recoveryParam)
                            }

                            function Position() {
                                this.place = 0
                            }

                            function getLength(e, t) {
                                var r = e[t.place++];
                                if (!(128 & r)) return r;
                                var i = 15 & r;
                                if (0 === i || i > 4) return !1;
                                for (var n = 0, u = 0, b = t.place; u < i; u++, b++) n <<= 8, n |= e[b], n >>>= 0;
                                return !(n <= 127) && (t.place = b, n)
                            }

                            function rmPadding(e) {
                                for (var t = 0, r = e.length - 1; !e[t] && !(128 & e[t + 1]) && t < r;) t++;
                                return 0 === t ? e : e.slice(t)
                            }

                            function constructLength(e, t) {
                                if (t < 128) {
                                    e.push(t);
                                    return
                                }
                                var r = 1 + (Math.log(t) / Math.LN2 >>> 3);
                                for (e.push(128 | r); --r;) e.push(t >>> (r << 3) & 255);
                                e.push(t)
                            }
                            e.exports = Signature, Signature.prototype._importDER = function(e, t) {
                                e = n.toArray(e, t);
                                var r = new Position;
                                if (48 !== e[r.place++]) return !1;
                                var u = getLength(e, r);
                                if (!1 === u || u + r.place !== e.length || 2 !== e[r.place++]) return !1;
                                var b = getLength(e, r);
                                if (!1 === b) return !1;
                                var m = e.slice(r.place, b + r.place);
                                if (r.place += b, 2 !== e[r.place++]) return !1;
                                var y = getLength(e, r);
                                if (!1 === y || e.length !== y + r.place) return !1;
                                var v = e.slice(r.place, y + r.place);
                                if (0 === m[0]) {
                                    if (!(128 & m[1])) return !1;
                                    m = m.slice(1)
                                }
                                if (0 === v[0]) {
                                    if (!(128 & v[1])) return !1;
                                    v = v.slice(1)
                                }
                                return this.r = new i(m), this.s = new i(v), this.recoveryParam = null, !0
                            }, Signature.prototype.toDER = function(e) {
                                var t = this.r.toArray(),
                                    r = this.s.toArray();
                                for (128 & t[0] && (t = [0].concat(t)), 128 & r[0] && (r = [0].concat(r)), t = rmPadding(t), r = rmPadding(r); !r[0] && !(128 & r[1]);) r = r.slice(1);
                                var i = [2];
                                constructLength(i, t.length), (i = i.concat(t)).push(2), constructLength(i, r.length);
                                var u = i.concat(r),
                                    b = [48];
                                return constructLength(b, u.length), b = b.concat(u), n.encode(b, e)
                            }
                        },
                        8511: function(e, t, r) {
                            "use strict";
                            var i = r(7028),
                                n = r(6226),
                                u = r(4401),
                                b = u.assert,
                                m = u.parseBytes,
                                y = r(9917),
                                v = r(9314);

                            function EDDSA(e) {
                                if (b("ed25519" === e, "only tested with ed25519 so far"), !(this instanceof EDDSA)) return new EDDSA(e);
                                var e = n[e].curve;
                                this.curve = e, this.g = e.g, this.g.precompute(e.n.bitLength() + 1), this.pointClass = e.point().constructor, this.encodingLength = Math.ceil(e.n.bitLength() / 8), this.hash = i.sha512
                            }
                            e.exports = EDDSA, EDDSA.prototype.sign = function(e, t) {
                                e = m(e);
                                var r = this.keyFromSecret(t),
                                    i = this.hashInt(r.messagePrefix(), e),
                                    n = this.g.mul(i),
                                    u = this.encodePoint(n),
                                    b = this.hashInt(u, r.pubBytes(), e).mul(r.priv()),
                                    y = i.add(b).umod(this.curve.n);
                                return this.makeSignature({
                                    R: n,
                                    S: y,
                                    Rencoded: u
                                })
                            }, EDDSA.prototype.verify = function(e, t, r) {
                                e = m(e), t = this.makeSignature(t);
                                var i = this.keyFromPublic(r),
                                    n = this.hashInt(t.Rencoded(), i.pubBytes(), e),
                                    u = this.g.mul(t.S());
                                return t.R().add(i.pub().mul(n)).eq(u)
                            }, EDDSA.prototype.hashInt = function() {
                                for (var e = this.hash(), t = 0; t < arguments.length; t++) e.update(arguments[t]);
                                return u.intFromLE(e.digest()).umod(this.curve.n)
                            }, EDDSA.prototype.keyFromPublic = function(e) {
                                return y.fromPublic(this, e)
                            }, EDDSA.prototype.keyFromSecret = function(e) {
                                return y.fromSecret(this, e)
                            }, EDDSA.prototype.makeSignature = function(e) {
                                return e instanceof v ? e : new v(this, e)
                            }, EDDSA.prototype.encodePoint = function(e) {
                                var t = e.getY().toArray("le", this.encodingLength);
                                return t[this.encodingLength - 1] |= e.getX().isOdd() ? 128 : 0, t
                            }, EDDSA.prototype.decodePoint = function(e) {
                                var t = (e = u.parseBytes(e)).length - 1,
                                    r = e.slice(0, t).concat(-129 & e[t]),
                                    i = (128 & e[t]) != 0,
                                    n = u.intFromLE(r);
                                return this.curve.pointFromY(n, i)
                            }, EDDSA.prototype.encodeInt = function(e) {
                                return e.toArray("le", this.encodingLength)
                            }, EDDSA.prototype.decodeInt = function(e) {
                                return u.intFromLE(e)
                            }, EDDSA.prototype.isPoint = function(e) {
                                return e instanceof this.pointClass
                            }
                        },
                        9917: function(e, t, r) {
                            "use strict";
                            var i = r(4401),
                                n = i.assert,
                                u = i.parseBytes,
                                b = i.cachedProperty;

                            function KeyPair(e, t) {
                                this.eddsa = e, this._secret = u(t.secret), e.isPoint(t.pub) ? this._pub = t.pub : this._pubBytes = u(t.pub)
                            }
                            KeyPair.fromPublic = function(e, t) {
                                return t instanceof KeyPair ? t : new KeyPair(e, {
                                    pub: t
                                })
                            }, KeyPair.fromSecret = function(e, t) {
                                return t instanceof KeyPair ? t : new KeyPair(e, {
                                    secret: t
                                })
                            }, KeyPair.prototype.secret = function() {
                                return this._secret
                            }, b(KeyPair, "pubBytes", function() {
                                return this.eddsa.encodePoint(this.pub())
                            }), b(KeyPair, "pub", function() {
                                return this._pubBytes ? this.eddsa.decodePoint(this._pubBytes) : this.eddsa.g.mul(this.priv())
                            }), b(KeyPair, "privBytes", function() {
                                var e = this.eddsa,
                                    t = this.hash(),
                                    r = e.encodingLength - 1,
                                    i = t.slice(0, e.encodingLength);
                                return i[0] &= 248, i[r] &= 127, i[r] |= 64, i
                            }), b(KeyPair, "priv", function() {
                                return this.eddsa.decodeInt(this.privBytes())
                            }), b(KeyPair, "hash", function() {
                                return this.eddsa.hash().update(this.secret()).digest()
                            }), b(KeyPair, "messagePrefix", function() {
                                return this.hash().slice(this.eddsa.encodingLength)
                            }), KeyPair.prototype.sign = function(e) {
                                return n(this._secret, "KeyPair can only verify"), this.eddsa.sign(e, this)
                            }, KeyPair.prototype.verify = function(e, t) {
                                return this.eddsa.verify(e, t, this)
                            }, KeyPair.prototype.getSecret = function(e) {
                                return n(this._secret, "KeyPair is public only"), i.encode(this.secret(), e)
                            }, KeyPair.prototype.getPublic = function(e) {
                                return i.encode(this.pubBytes(), e)
                            }, e.exports = KeyPair
                        },
                        9314: function(e, t, r) {
                            "use strict";
                            var i = r(711),
                                n = r(4401),
                                u = n.assert,
                                b = n.cachedProperty,
                                m = n.parseBytes;

                            function Signature(e, t) {
                                this.eddsa = e, "object" != typeof t && (t = m(t)), Array.isArray(t) && (t = {
                                    R: t.slice(0, e.encodingLength),
                                    S: t.slice(e.encodingLength)
                                }), u(t.R && t.S, "Signature without R or S"), e.isPoint(t.R) && (this._R = t.R), t.S instanceof i && (this._S = t.S), this._Rencoded = Array.isArray(t.R) ? t.R : t.Rencoded, this._Sencoded = Array.isArray(t.S) ? t.S : t.Sencoded
                            }
                            b(Signature, "S", function() {
                                return this.eddsa.decodeInt(this.Sencoded())
                            }), b(Signature, "R", function() {
                                return this.eddsa.decodePoint(this.Rencoded())
                            }), b(Signature, "Rencoded", function() {
                                return this.eddsa.encodePoint(this.R())
                            }), b(Signature, "Sencoded", function() {
                                return this.eddsa.encodeInt(this.S())
                            }), Signature.prototype.toBytes = function() {
                                return this.Rencoded().concat(this.Sencoded())
                            }, Signature.prototype.toHex = function() {
                                return n.encode(this.toBytes(), "hex").toUpperCase()
                            }, e.exports = Signature
                        },
                        9702: function(e) {
                            e.exports = {
                                doubles: {
                                    step: 4,
                                    points: [
                                        ["e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a", "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"],
                                        ["8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508", "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"],
                                        ["175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739", "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"],
                                        ["363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640", "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"],
                                        ["8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c", "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"],
                                        ["723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda", "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"],
                                        ["eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa", "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"],
                                        ["100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0", "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"],
                                        ["e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d", "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"],
                                        ["feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d", "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"],
                                        ["da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1", "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"],
                                        ["53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0", "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"],
                                        ["8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047", "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"],
                                        ["385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862", "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"],
                                        ["6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7", "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"],
                                        ["3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd", "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"],
                                        ["85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83", "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"],
                                        ["948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a", "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"],
                                        ["6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8", "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"],
                                        ["e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d", "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"],
                                        ["e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725", "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"],
                                        ["213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754", "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"],
                                        ["4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c", "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"],
                                        ["fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6", "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"],
                                        ["76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39", "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"],
                                        ["c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891", "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"],
                                        ["d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b", "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"],
                                        ["b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03", "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"],
                                        ["e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d", "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"],
                                        ["a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070", "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"],
                                        ["90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4", "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"],
                                        ["8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da", "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"],
                                        ["e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11", "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"],
                                        ["8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e", "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"],
                                        ["e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41", "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"],
                                        ["b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef", "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"],
                                        ["d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8", "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"],
                                        ["324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d", "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"],
                                        ["4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96", "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"],
                                        ["9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd", "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"],
                                        ["6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5", "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"],
                                        ["a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266", "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"],
                                        ["7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71", "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"],
                                        ["928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac", "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"],
                                        ["85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751", "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"],
                                        ["ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e", "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"],
                                        ["827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241", "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"],
                                        ["eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3", "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"],
                                        ["e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f", "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"],
                                        ["1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19", "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"],
                                        ["146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be", "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"],
                                        ["fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9", "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"],
                                        ["da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2", "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"],
                                        ["a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13", "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"],
                                        ["174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c", "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"],
                                        ["959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba", "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"],
                                        ["d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151", "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"],
                                        ["64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073", "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"],
                                        ["8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458", "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"],
                                        ["13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b", "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"],
                                        ["bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366", "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"],
                                        ["8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa", "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"],
                                        ["8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0", "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"],
                                        ["dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787", "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"],
                                        ["f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e", "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"]
                                    ]
                                },
                                naf: {
                                    wnd: 7,
                                    points: [
                                        ["f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9", "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"],
                                        ["2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4", "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"],
                                        ["5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc", "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"],
                                        ["acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe", "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"],
                                        ["774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb", "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"],
                                        ["f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8", "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"],
                                        ["d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e", "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"],
                                        ["defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34", "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"],
                                        ["2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c", "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"],
                                        ["352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5", "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"],
                                        ["2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f", "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"],
                                        ["9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714", "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"],
                                        ["daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729", "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"],
                                        ["c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db", "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"],
                                        ["6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4", "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"],
                                        ["1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5", "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"],
                                        ["605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479", "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"],
                                        ["62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d", "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"],
                                        ["80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f", "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"],
                                        ["7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb", "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"],
                                        ["d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9", "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"],
                                        ["49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963", "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"],
                                        ["77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74", "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"],
                                        ["f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530", "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"],
                                        ["463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b", "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"],
                                        ["f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247", "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"],
                                        ["caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1", "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"],
                                        ["2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120", "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"],
                                        ["7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435", "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"],
                                        ["754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18", "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"],
                                        ["e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8", "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"],
                                        ["186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb", "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"],
                                        ["df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f", "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"],
                                        ["5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143", "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"],
                                        ["290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba", "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"],
                                        ["af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45", "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"],
                                        ["766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a", "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"],
                                        ["59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e", "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"],
                                        ["f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8", "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"],
                                        ["7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c", "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"],
                                        ["948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519", "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"],
                                        ["7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab", "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"],
                                        ["3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca", "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"],
                                        ["d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf", "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"],
                                        ["1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610", "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"],
                                        ["733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4", "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"],
                                        ["15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c", "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"],
                                        ["a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940", "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"],
                                        ["e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980", "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"],
                                        ["311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3", "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"],
                                        ["34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf", "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"],
                                        ["f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63", "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"],
                                        ["d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448", "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"],
                                        ["32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf", "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"],
                                        ["7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5", "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"],
                                        ["ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6", "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"],
                                        ["16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5", "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"],
                                        ["eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99", "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"],
                                        ["78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51", "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"],
                                        ["494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5", "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"],
                                        ["a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5", "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"],
                                        ["c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997", "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"],
                                        ["841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881", "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"],
                                        ["5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5", "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"],
                                        ["36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66", "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"],
                                        ["336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726", "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"],
                                        ["8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede", "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"],
                                        ["1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94", "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"],
                                        ["85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31", "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"],
                                        ["29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51", "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"],
                                        ["a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252", "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"],
                                        ["4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5", "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"],
                                        ["d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b", "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"],
                                        ["ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4", "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"],
                                        ["af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f", "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"],
                                        ["e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889", "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"],
                                        ["591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246", "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"],
                                        ["11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984", "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"],
                                        ["3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a", "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"],
                                        ["cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030", "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"],
                                        ["c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197", "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"],
                                        ["c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593", "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"],
                                        ["a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef", "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"],
                                        ["347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38", "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"],
                                        ["da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a", "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"],
                                        ["c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111", "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"],
                                        ["4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502", "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"],
                                        ["3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea", "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"],
                                        ["cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26", "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"],
                                        ["b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986", "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"],
                                        ["d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e", "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"],
                                        ["48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4", "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"],
                                        ["dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda", "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"],
                                        ["6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859", "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"],
                                        ["e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f", "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"],
                                        ["eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c", "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"],
                                        ["13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942", "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"],
                                        ["ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a", "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"],
                                        ["b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80", "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"],
                                        ["ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d", "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"],
                                        ["8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1", "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"],
                                        ["52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63", "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"],
                                        ["e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352", "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"],
                                        ["7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193", "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"],
                                        ["5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00", "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"],
                                        ["32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58", "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"],
                                        ["e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7", "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"],
                                        ["8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8", "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"],
                                        ["4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e", "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"],
                                        ["3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d", "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"],
                                        ["674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b", "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"],
                                        ["d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f", "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"],
                                        ["30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6", "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"],
                                        ["be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297", "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"],
                                        ["93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a", "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"],
                                        ["b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c", "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"],
                                        ["d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52", "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"],
                                        ["d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb", "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"],
                                        ["463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065", "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"],
                                        ["7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917", "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"],
                                        ["74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9", "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"],
                                        ["30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3", "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"],
                                        ["9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57", "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"],
                                        ["176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66", "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"],
                                        ["75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8", "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"],
                                        ["809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721", "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"],
                                        ["1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180", "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"]
                                    ]
                                }
                            }
                        },
                        4401: function(e, t, r) {
                            "use strict";
                            var i = r(711),
                                n = r(3523),
                                u = r(6545);
                            t.assert = n, t.toArray = u.toArray, t.zero2 = u.zero2, t.toHex = u.toHex, t.encode = u.encode, t.getNAF = function(e, t, r) {
                                var i = Array(Math.max(e.bitLength(), r) + 1);
                                i.fill(0);
                                for (var n = 1 << t + 1, u = e.clone(), b = 0; b < i.length; b++) {
                                    var m, y = u.andln(n - 1);
                                    u.isOdd() ? (m = y > (n >> 1) - 1 ? (n >> 1) - y : y, u.isubn(m)) : m = 0, i[b] = m, u.iushrn(1)
                                }
                                return i
                            }, t.getJSF = function(e, t) {
                                var r = [
                                    [],
                                    []
                                ];
                                e = e.clone(), t = t.clone();
                                for (var i = 0, n = 0; e.cmpn(-i) > 0 || t.cmpn(-n) > 0;) {
                                    var u, b, m = e.andln(3) + i & 3,
                                        y = t.andln(3) + n & 3;
                                    if (3 === m && (m = -1), 3 === y && (y = -1), (1 & m) == 0) u = 0;
                                    else {
                                        var v = e.andln(7) + i & 7;
                                        u = (3 === v || 5 === v) && 2 === y ? -m : m
                                    }
                                    if (r[0].push(u), (1 & y) == 0) b = 0;
                                    else {
                                        var v = t.andln(7) + n & 7;
                                        b = (3 === v || 5 === v) && 2 === m ? -y : y
                                    }
                                    r[1].push(b), 2 * i === u + 1 && (i = 1 - i), 2 * n === b + 1 && (n = 1 - n), e.iushrn(1), t.iushrn(1)
                                }
                                return r
                            }, t.cachedProperty = function(e, t, r) {
                                var i = "_" + t;
                                e.prototype[t] = function() {
                                    return void 0 !== this[i] ? this[i] : this[i] = r.call(this)
                                }
                            }, t.parseBytes = function(e) {
                                return "string" == typeof e ? t.toArray(e, "hex") : e
                            }, t.intFromLE = function(e) {
                                return new i(e, "hex", "le")
                            }
                        },
                        8368: function(e, t, r) {
                            var i = r(6911).Buffer,
                                n = r(3533);
                            e.exports = function(e, t, r, u) {
                                if (i.isBuffer(e) || (e = i.from(e, "binary")), t && (i.isBuffer(t) || (t = i.from(t, "binary")), 8 !== t.length)) throw RangeError("salt should be Buffer with 8 byte length");
                                for (var b = r / 8, m = i.alloc(b), y = i.alloc(u || 0), v = i.alloc(0); b > 0 || u > 0;) {
                                    var g = new n;
                                    g.update(v), g.update(e), t && g.update(t), v = g.digest();
                                    var _ = 0;
                                    if (b > 0) {
                                        var w = m.length - b;
                                        _ = Math.min(b, v.length), v.copy(m, w, 0, _), b -= _
                                    }
                                    if (_ < v.length && u > 0) {
                                        var M = y.length - u,
                                            S = Math.min(u, v.length - _);
                                        v.copy(y, M, _, _ + S), u -= S
                                    }
                                }
                                return v.fill(0), {
                                    key: m,
                                    iv: y
                                }
                            }
                        },
                        9029: function(e, t, r) {
                            "use strict";
                            var i = r(6911).Buffer,
                                n = r(3726).Transform;

                            function HashBase(e) {
                                n.call(this), this._block = i.allocUnsafe(e), this._blockSize = e, this._blockOffset = 0, this._length = [0, 0, 0, 0], this._finalized = !1
                            }
                            r(3782)(HashBase, n), HashBase.prototype._transform = function(e, t, r) {
                                var i = null;
                                try {
                                    this.update(e, t)
                                } catch (e) {
                                    i = e
                                }
                                r(i)
                            }, HashBase.prototype._flush = function(e) {
                                var t = null;
                                try {
                                    this.push(this.digest())
                                } catch (e) {
                                    t = e
                                }
                                e(t)
                            }, HashBase.prototype.update = function(e, t) {
                                if (function(e, t) {
                                        if (!i.isBuffer(e) && "string" != typeof e) throw TypeError(t + " must be a string or a buffer")
                                    }(e, "Data"), this._finalized) throw Error("Digest already called");
                                i.isBuffer(e) || (e = i.from(e, t));
                                for (var r = this._block, n = 0; this._blockOffset + e.length - n >= this._blockSize;) {
                                    for (var u = this._blockOffset; u < this._blockSize;) r[u++] = e[n++];
                                    this._update(), this._blockOffset = 0
                                }
                                for (; n < e.length;) r[this._blockOffset++] = e[n++];
                                for (var b = 0, m = 8 * e.length; m > 0; ++b) this._length[b] += m, (m = this._length[b] / 4294967296 | 0) > 0 && (this._length[b] -= 4294967296 * m);
                                return this
                            }, HashBase.prototype._update = function() {
                                throw Error("_update is not implemented")
                            }, HashBase.prototype.digest = function(e) {
                                if (this._finalized) throw Error("Digest already called");
                                this._finalized = !0;
                                var t = this._digest();
                                void 0 !== e && (t = t.toString(e)), this._block.fill(0), this._blockOffset = 0;
                                for (var r = 0; r < 4; ++r) this._length[r] = 0;
                                return t
                            }, HashBase.prototype._digest = function() {
                                throw Error("_digest is not implemented")
                            }, e.exports = HashBase
                        },
                        7028: function(e, t, r) {
                            t.utils = r(263), t.common = r(1330), t.sha = r(301), t.ripemd = r(3079), t.hmac = r(3092), t.sha1 = t.sha.sha1, t.sha256 = t.sha.sha256, t.sha224 = t.sha.sha224, t.sha384 = t.sha.sha384, t.sha512 = t.sha.sha512, t.ripemd160 = t.ripemd.ripemd160
                        },
                        1330: function(e, t, r) {
                            "use strict";
                            var i = r(263),
                                n = r(3523);

                            function BlockHash() {
                                this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32
                            }
                            t.BlockHash = BlockHash, BlockHash.prototype.update = function(e, t) {
                                if (e = i.toArray(e, t), this.pending ? this.pending = this.pending.concat(e) : this.pending = e, this.pendingTotal += e.length, this.pending.length >= this._delta8) {
                                    var r = (e = this.pending).length % this._delta8;
                                    this.pending = e.slice(e.length - r, e.length), 0 === this.pending.length && (this.pending = null), e = i.join32(e, 0, e.length - r, this.endian);
                                    for (var n = 0; n < e.length; n += this._delta32) this._update(e, n, n + this._delta32)
                                }
                                return this
                            }, BlockHash.prototype.digest = function(e) {
                                return this.update(this._pad()), n(null === this.pending), this._digest(e)
                            }, BlockHash.prototype._pad = function() {
                                var e = this.pendingTotal,
                                    t = this._delta8,
                                    r = t - (e + this.padLength) % t,
                                    i = Array(r + this.padLength);
                                i[0] = 128;
                                for (var n = 1; n < r; n++) i[n] = 0;
                                if (e <<= 3, "big" === this.endian) {
                                    for (var u = 8; u < this.padLength; u++) i[n++] = 0;
                                    i[n++] = 0, i[n++] = 0, i[n++] = 0, i[n++] = 0, i[n++] = e >>> 24 & 255, i[n++] = e >>> 16 & 255, i[n++] = e >>> 8 & 255, i[n++] = 255 & e
                                } else
                                    for (u = 8, i[n++] = 255 & e, i[n++] = e >>> 8 & 255, i[n++] = e >>> 16 & 255, i[n++] = e >>> 24 & 255, i[n++] = 0, i[n++] = 0, i[n++] = 0, i[n++] = 0; u < this.padLength; u++) i[n++] = 0;
                                return i
                            }
                        },
                        3092: function(e, t, r) {
                            "use strict";
                            var i = r(263),
                                n = r(3523);

                            function Hmac(e, t, r) {
                                if (!(this instanceof Hmac)) return new Hmac(e, t, r);
                                this.Hash = e, this.blockSize = e.blockSize / 8, this.outSize = e.outSize / 8, this.inner = null, this.outer = null, this._init(i.toArray(t, r))
                            }
                            e.exports = Hmac, Hmac.prototype._init = function(e) {
                                e.length > this.blockSize && (e = (new this.Hash).update(e).digest()), n(e.length <= this.blockSize);
                                for (var t = e.length; t < this.blockSize; t++) e.push(0);
                                for (t = 0; t < e.length; t++) e[t] ^= 54;
                                for (t = 0, this.inner = (new this.Hash).update(e); t < e.length; t++) e[t] ^= 106;
                                this.outer = (new this.Hash).update(e)
                            }, Hmac.prototype.update = function(e, t) {
                                return this.inner.update(e, t), this
                            }, Hmac.prototype.digest = function(e) {
                                return this.outer.update(this.inner.digest()), this.outer.digest(e)
                            }
                        },
                        3079: function(e, t, r) {
                            "use strict";
                            var i = r(263),
                                n = r(1330),
                                u = i.rotl32,
                                b = i.sum32,
                                m = i.sum32_3,
                                y = i.sum32_4,
                                v = n.BlockHash;

                            function RIPEMD160() {
                                if (!(this instanceof RIPEMD160)) return new RIPEMD160;
                                v.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.endian = "little"
                            }

                            function f(e, t, r, i) {
                                return e <= 15 ? t ^ r ^ i : e <= 31 ? t & r | ~t & i : e <= 47 ? (t | ~r) ^ i : e <= 63 ? t & i | r & ~i : t ^ (r | ~i)
                            }
                            i.inherits(RIPEMD160, v), t.ripemd160 = RIPEMD160, RIPEMD160.blockSize = 512, RIPEMD160.outSize = 160, RIPEMD160.hmacStrength = 192, RIPEMD160.padLength = 64, RIPEMD160.prototype._update = function(e, t) {
                                for (var r = this.h[0], i = this.h[1], n = this.h[2], v = this.h[3], S = this.h[4], B = r, E = i, k = n, A = v, N = S, R = 0; R < 80; R++) {
                                    var P, x, I = b(u(y(r, f(R, i, n, v), e[g[R] + t], (P = R) <= 15 ? 0 : P <= 31 ? 1518500249 : P <= 47 ? 1859775393 : P <= 63 ? 2400959708 : 2840853838), w[R]), S);
                                    r = S, S = v, v = u(n, 10), n = i, i = I, I = b(u(y(B, f(79 - R, E, k, A), e[_[R] + t], (x = R) <= 15 ? 1352829926 : x <= 31 ? 1548603684 : x <= 47 ? 1836072691 : x <= 63 ? 2053994217 : 0), M[R]), N), B = N, N = A, A = u(k, 10), k = E, E = I
                                }
                                I = m(this.h[1], n, A), this.h[1] = m(this.h[2], v, N), this.h[2] = m(this.h[3], S, B), this.h[3] = m(this.h[4], r, E), this.h[4] = m(this.h[0], i, k), this.h[0] = I
                            }, RIPEMD160.prototype._digest = function(e) {
                                return "hex" === e ? i.toHex32(this.h, "little") : i.split32(this.h, "little")
                            };
                            var g = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
                                _ = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
                                w = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
                                M = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]
                        },
                        301: function(e, t, r) {
                            "use strict";
                            t.sha1 = r(2742), t.sha224 = r(7105), t.sha256 = r(1525), t.sha384 = r(9948), t.sha512 = r(1319)
                        },
                        2742: function(e, t, r) {
                            "use strict";
                            var i = r(263),
                                n = r(1330),
                                u = r(2975),
                                b = i.rotl32,
                                m = i.sum32,
                                y = i.sum32_5,
                                v = u.ft_1,
                                g = n.BlockHash,
                                _ = [1518500249, 1859775393, 2400959708, 3395469782];

                            function SHA1() {
                                if (!(this instanceof SHA1)) return new SHA1;
                                g.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.W = Array(80)
                            }
                            i.inherits(SHA1, g), e.exports = SHA1, SHA1.blockSize = 512, SHA1.outSize = 160, SHA1.hmacStrength = 80, SHA1.padLength = 64, SHA1.prototype._update = function(e, t) {
                                for (var r = this.W, i = 0; i < 16; i++) r[i] = e[t + i];
                                for (; i < r.length; i++) r[i] = b(r[i - 3] ^ r[i - 8] ^ r[i - 14] ^ r[i - 16], 1);
                                var n = this.h[0],
                                    u = this.h[1],
                                    g = this.h[2],
                                    w = this.h[3],
                                    M = this.h[4];
                                for (i = 0; i < r.length; i++) {
                                    var S = ~~(i / 20),
                                        B = y(b(n, 5), v(S, u, g, w), M, r[i], _[S]);
                                    M = w, w = g, g = b(u, 30), u = n, n = B
                                }
                                this.h[0] = m(this.h[0], n), this.h[1] = m(this.h[1], u), this.h[2] = m(this.h[2], g), this.h[3] = m(this.h[3], w), this.h[4] = m(this.h[4], M)
                            }, SHA1.prototype._digest = function(e) {
                                return "hex" === e ? i.toHex32(this.h, "big") : i.split32(this.h, "big")
                            }
                        },
                        7105: function(e, t, r) {
                            "use strict";
                            var i = r(263),
                                n = r(1525);

                            function SHA224() {
                                if (!(this instanceof SHA224)) return new SHA224;
                                n.call(this), this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]
                            }
                            i.inherits(SHA224, n), e.exports = SHA224, SHA224.blockSize = 512, SHA224.outSize = 224, SHA224.hmacStrength = 192, SHA224.padLength = 64, SHA224.prototype._digest = function(e) {
                                return "hex" === e ? i.toHex32(this.h.slice(0, 7), "big") : i.split32(this.h.slice(0, 7), "big")
                            }
                        },
                        1525: function(e, t, r) {
                            "use strict";
                            var i = r(263),
                                n = r(1330),
                                u = r(2975),
                                b = r(3523),
                                m = i.sum32,
                                y = i.sum32_4,
                                v = i.sum32_5,
                                g = u.ch32,
                                _ = u.maj32,
                                w = u.s0_256,
                                M = u.s1_256,
                                S = u.g0_256,
                                B = u.g1_256,
                                E = n.BlockHash,
                                k = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];

                            function SHA256() {
                                if (!(this instanceof SHA256)) return new SHA256;
                                E.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = k, this.W = Array(64)
                            }
                            i.inherits(SHA256, E), e.exports = SHA256, SHA256.blockSize = 512, SHA256.outSize = 256, SHA256.hmacStrength = 192, SHA256.padLength = 64, SHA256.prototype._update = function(e, t) {
                                for (var r = this.W, i = 0; i < 16; i++) r[i] = e[t + i];
                                for (; i < r.length; i++) r[i] = y(B(r[i - 2]), r[i - 7], S(r[i - 15]), r[i - 16]);
                                var n = this.h[0],
                                    u = this.h[1],
                                    E = this.h[2],
                                    k = this.h[3],
                                    A = this.h[4],
                                    N = this.h[5],
                                    R = this.h[6],
                                    P = this.h[7];
                                for (b(this.k.length === r.length), i = 0; i < r.length; i++) {
                                    var x = v(P, M(A), g(A, N, R), this.k[i], r[i]),
                                        I = m(w(n), _(n, u, E));
                                    P = R, R = N, N = A, A = m(k, x), k = E, E = u, u = n, n = m(x, I)
                                }
                                this.h[0] = m(this.h[0], n), this.h[1] = m(this.h[1], u), this.h[2] = m(this.h[2], E), this.h[3] = m(this.h[3], k), this.h[4] = m(this.h[4], A), this.h[5] = m(this.h[5], N), this.h[6] = m(this.h[6], R), this.h[7] = m(this.h[7], P)
                            }, SHA256.prototype._digest = function(e) {
                                return "hex" === e ? i.toHex32(this.h, "big") : i.split32(this.h, "big")
                            }
                        },
                        9948: function(e, t, r) {
                            "use strict";
                            var i = r(263),
                                n = r(1319);

                            function SHA384() {
                                if (!(this instanceof SHA384)) return new SHA384;
                                n.call(this), this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428]
                            }
                            i.inherits(SHA384, n), e.exports = SHA384, SHA384.blockSize = 1024, SHA384.outSize = 384, SHA384.hmacStrength = 192, SHA384.padLength = 128, SHA384.prototype._digest = function(e) {
                                return "hex" === e ? i.toHex32(this.h.slice(0, 12), "big") : i.split32(this.h.slice(0, 12), "big")
                            }
                        },
                        1319: function(e, t, r) {
                            "use strict";
                            var i = r(263),
                                n = r(1330),
                                u = r(3523),
                                b = i.rotr64_hi,
                                m = i.rotr64_lo,
                                y = i.shr64_hi,
                                v = i.shr64_lo,
                                g = i.sum64,
                                _ = i.sum64_hi,
                                w = i.sum64_lo,
                                M = i.sum64_4_hi,
                                S = i.sum64_4_lo,
                                B = i.sum64_5_hi,
                                E = i.sum64_5_lo,
                                k = n.BlockHash,
                                A = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];

                            function SHA512() {
                                if (!(this instanceof SHA512)) return new SHA512;
                                k.call(this), this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209], this.k = A, this.W = Array(160)
                            }
                            i.inherits(SHA512, k), e.exports = SHA512, SHA512.blockSize = 1024, SHA512.outSize = 512, SHA512.hmacStrength = 192, SHA512.padLength = 128, SHA512.prototype._prepareBlock = function(e, t) {
                                for (var r = this.W, i = 0; i < 32; i++) r[i] = e[t + i];
                                for (; i < r.length; i += 2) {
                                    var n = function(e, t) {
                                            var r = b(e, t, 19) ^ b(t, e, 29) ^ y(e, t, 6);
                                            return r < 0 && (r += 4294967296), r
                                        }(r[i - 4], r[i - 3]),
                                        u = function(e, t) {
                                            var r = m(e, t, 19) ^ m(t, e, 29) ^ v(e, t, 6);
                                            return r < 0 && (r += 4294967296), r
                                        }(r[i - 4], r[i - 3]),
                                        g = r[i - 14],
                                        _ = r[i - 13],
                                        w = function(e, t) {
                                            var r = b(e, t, 1) ^ b(e, t, 8) ^ y(e, t, 7);
                                            return r < 0 && (r += 4294967296), r
                                        }(r[i - 30], r[i - 29]),
                                        B = function(e, t) {
                                            var r = m(e, t, 1) ^ m(e, t, 8) ^ v(e, t, 7);
                                            return r < 0 && (r += 4294967296), r
                                        }(r[i - 30], r[i - 29]),
                                        E = r[i - 32],
                                        k = r[i - 31];
                                    r[i] = M(n, u, g, _, w, B, E, k), r[i + 1] = S(n, u, g, _, w, B, E, k)
                                }
                            }, SHA512.prototype._update = function(e, t) {
                                this._prepareBlock(e, t);
                                var r = this.W,
                                    i = this.h[0],
                                    n = this.h[1],
                                    y = this.h[2],
                                    v = this.h[3],
                                    M = this.h[4],
                                    S = this.h[5],
                                    k = this.h[6],
                                    A = this.h[7],
                                    N = this.h[8],
                                    R = this.h[9],
                                    P = this.h[10],
                                    x = this.h[11],
                                    I = this.h[12],
                                    C = this.h[13],
                                    D = this.h[14],
                                    T = this.h[15];
                                u(this.k.length === r.length);
                                for (var j = 0; j < r.length; j += 2) {
                                    var O = D,
                                        H = T,
                                        q = function(e, t) {
                                            var r = b(e, t, 14) ^ b(e, t, 18) ^ b(t, e, 9);
                                            return r < 0 && (r += 4294967296), r
                                        }(N, R),
                                        L = function(e, t) {
                                            var r = m(e, t, 14) ^ m(e, t, 18) ^ m(t, e, 9);
                                            return r < 0 && (r += 4294967296), r
                                        }(N, R),
                                        z = function(e, t, r, i, n) {
                                            var u = e & r ^ ~e & n;
                                            return u < 0 && (u += 4294967296), u
                                        }(N, 0, P, 0, I, C),
                                        U = function(e, t, r, i, n, u) {
                                            var b = t & i ^ ~t & u;
                                            return b < 0 && (b += 4294967296), b
                                        }(0, R, 0, x, 0, C),
                                        K = this.k[j],
                                        F = this.k[j + 1],
                                        W = r[j],
                                        V = r[j + 1],
                                        G = B(O, H, q, L, z, U, K, F, W, V),
                                        Z = E(O, H, q, L, z, U, K, F, W, V);
                                    O = function(e, t) {
                                        var r = b(e, t, 28) ^ b(t, e, 2) ^ b(t, e, 7);
                                        return r < 0 && (r += 4294967296), r
                                    }(i, n);
                                    var J = _(O, H = function(e, t) {
                                            var r = m(e, t, 28) ^ m(t, e, 2) ^ m(t, e, 7);
                                            return r < 0 && (r += 4294967296), r
                                        }(i, n), q = function(e, t, r, i, n) {
                                            var u = e & r ^ e & n ^ r & n;
                                            return u < 0 && (u += 4294967296), u
                                        }(i, 0, y, 0, M, S), L = function(e, t, r, i, n, u) {
                                            var b = t & i ^ t & u ^ i & u;
                                            return b < 0 && (b += 4294967296), b
                                        }(0, n, 0, v, 0, S)),
                                        X = w(O, H, q, L);
                                    D = I, T = C, I = P, C = x, P = N, x = R, N = _(k, A, G, Z), R = w(A, A, G, Z), k = M, A = S, M = y, S = v, y = i, v = n, i = _(G, Z, J, X), n = w(G, Z, J, X)
                                }
                                g(this.h, 0, i, n), g(this.h, 2, y, v), g(this.h, 4, M, S), g(this.h, 6, k, A), g(this.h, 8, N, R), g(this.h, 10, P, x), g(this.h, 12, I, C), g(this.h, 14, D, T)
                            }, SHA512.prototype._digest = function(e) {
                                return "hex" === e ? i.toHex32(this.h, "big") : i.split32(this.h, "big")
                            }
                        },
                        2975: function(e, t, r) {
                            "use strict";
                            var i = r(263).rotr32;

                            function maj32(e, t, r) {
                                return e & t ^ e & r ^ t & r
                            }
                            t.ft_1 = function(e, t, r, i) {
                                return 0 === e ? t & r ^ ~t & i : 1 === e || 3 === e ? t ^ r ^ i : 2 === e ? maj32(t, r, i) : void 0
                            }, t.ch32 = function(e, t, r) {
                                return e & t ^ ~e & r
                            }, t.maj32 = maj32, t.p32 = function(e, t, r) {
                                return e ^ t ^ r
                            }, t.s0_256 = function(e) {
                                return i(e, 2) ^ i(e, 13) ^ i(e, 22)
                            }, t.s1_256 = function(e) {
                                return i(e, 6) ^ i(e, 11) ^ i(e, 25)
                            }, t.g0_256 = function(e) {
                                return i(e, 7) ^ i(e, 18) ^ e >>> 3
                            }, t.g1_256 = function(e) {
                                return i(e, 17) ^ i(e, 19) ^ e >>> 10
                            }
                        },
                        263: function(e, t, r) {
                            "use strict";
                            var i = r(3523),
                                n = r(3782);

                            function htonl(e) {
                                return (e >>> 24 | e >>> 8 & 65280 | e << 8 & 16711680 | (255 & e) << 24) >>> 0
                            }

                            function zero2(e) {
                                return 1 === e.length ? "0" + e : e
                            }

                            function zero8(e) {
                                if (7 === e.length) return "0" + e;
                                if (6 === e.length) return "00" + e;
                                if (5 === e.length) return "000" + e;
                                if (4 === e.length) return "0000" + e;
                                if (3 === e.length) return "00000" + e;
                                if (2 === e.length) return "000000" + e;
                                if (1 === e.length) return "0000000" + e;
                                else return e
                            }
                            t.inherits = n, t.toArray = function(e, t) {
                                if (Array.isArray(e)) return e.slice();
                                if (!e) return [];
                                var r = [];
                                if ("string" == typeof e) {
                                    if (t) {
                                        if ("hex" === t)
                                            for ((e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (e = "0" + e), n = 0; n < e.length; n += 2) r.push(parseInt(e[n] + e[n + 1], 16))
                                    } else
                                        for (var i = 0, n = 0; n < e.length; n++) {
                                            var u, b, m = e.charCodeAt(n);
                                            m < 128 ? r[i++] = m : (m < 2048 ? r[i++] = m >> 6 | 192 : ((u = e, b = n, (64512 & u.charCodeAt(b)) != 55296 || b < 0 || b + 1 >= u.length ? 1 : (64512 & u.charCodeAt(b + 1)) != 56320) ? r[i++] = m >> 12 | 224 : (m = 65536 + ((1023 & m) << 10) + (1023 & e.charCodeAt(++n)), r[i++] = m >> 18 | 240, r[i++] = m >> 12 & 63 | 128), r[i++] = m >> 6 & 63 | 128), r[i++] = 63 & m | 128)
                                        }
                                } else
                                    for (n = 0; n < e.length; n++) r[n] = 0 | e[n];
                                return r
                            }, t.toHex = function(e) {
                                for (var t = "", r = 0; r < e.length; r++) t += zero2(e[r].toString(16));
                                return t
                            }, t.htonl = htonl, t.toHex32 = function(e, t) {
                                for (var r = "", i = 0; i < e.length; i++) {
                                    var n = e[i];
                                    "little" === t && (n = htonl(n)), r += zero8(n.toString(16))
                                }
                                return r
                            }, t.zero2 = zero2, t.zero8 = zero8, t.join32 = function(e, t, r, n) {
                                var u, b = r - t;
                                i(b % 4 == 0);
                                for (var m = Array(b / 4), y = 0, v = t; y < m.length; y++, v += 4) u = "big" === n ? e[v] << 24 | e[v + 1] << 16 | e[v + 2] << 8 | e[v + 3] : e[v + 3] << 24 | e[v + 2] << 16 | e[v + 1] << 8 | e[v], m[y] = u >>> 0;
                                return m
                            }, t.split32 = function(e, t) {
                                for (var r = Array(4 * e.length), i = 0, n = 0; i < e.length; i++, n += 4) {
                                    var u = e[i];
                                    "big" === t ? (r[n] = u >>> 24, r[n + 1] = u >>> 16 & 255, r[n + 2] = u >>> 8 & 255, r[n + 3] = 255 & u) : (r[n + 3] = u >>> 24, r[n + 2] = u >>> 16 & 255, r[n + 1] = u >>> 8 & 255, r[n] = 255 & u)
                                }
                                return r
                            }, t.rotr32 = function(e, t) {
                                return e >>> t | e << 32 - t
                            }, t.rotl32 = function(e, t) {
                                return e << t | e >>> 32 - t
                            }, t.sum32 = function(e, t) {
                                return e + t >>> 0
                            }, t.sum32_3 = function(e, t, r) {
                                return e + t + r >>> 0
                            }, t.sum32_4 = function(e, t, r, i) {
                                return e + t + r + i >>> 0
                            }, t.sum32_5 = function(e, t, r, i, n) {
                                return e + t + r + i + n >>> 0
                            }, t.sum64 = function(e, t, r, i) {
                                var n = e[t],
                                    u = i + e[t + 1] >>> 0;
                                e[t] = (u < i ? 1 : 0) + r + n >>> 0, e[t + 1] = u
                            }, t.sum64_hi = function(e, t, r, i) {
                                return (t + i >>> 0 < t ? 1 : 0) + e + r >>> 0
                            }, t.sum64_lo = function(e, t, r, i) {
                                return t + i >>> 0
                            }, t.sum64_4_hi = function(e, t, r, i, n, u, b, m) {
                                var y, v = t;
                                return e + r + n + b + (0 + ((v = v + i >>> 0) < t ? 1 : 0) + ((v = v + u >>> 0) < u ? 1 : 0) + ((v = v + m >>> 0) < m ? 1 : 0)) >>> 0
                            }, t.sum64_4_lo = function(e, t, r, i, n, u, b, m) {
                                return t + i + u + m >>> 0
                            }, t.sum64_5_hi = function(e, t, r, i, n, u, b, m, y, v) {
                                var g, _ = t;
                                return e + r + n + b + y + (0 + ((_ = _ + i >>> 0) < t ? 1 : 0) + ((_ = _ + u >>> 0) < u ? 1 : 0) + ((_ = _ + m >>> 0) < m ? 1 : 0) + ((_ = _ + v >>> 0) < v ? 1 : 0)) >>> 0
                            }, t.sum64_5_lo = function(e, t, r, i, n, u, b, m, y, v) {
                                return t + i + u + m + v >>> 0
                            }, t.rotr64_hi = function(e, t, r) {
                                return (t << 32 - r | e >>> r) >>> 0
                            }, t.rotr64_lo = function(e, t, r) {
                                return (e << 32 - r | t >>> r) >>> 0
                            }, t.shr64_hi = function(e, t, r) {
                                return e >>> r
                            }, t.shr64_lo = function(e, t, r) {
                                return (e << 32 - r | t >>> r) >>> 0
                            }
                        },
                        4910: function(e, t, r) {
                            "use strict";
                            var i = r(7028),
                                n = r(6545),
                                u = r(3523);

                            function HmacDRBG(e) {
                                if (!(this instanceof HmacDRBG)) return new HmacDRBG(e);
                                this.hash = e.hash, this.predResist = !!e.predResist, this.outLen = this.hash.outSize, this.minEntropy = e.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
                                var t = n.toArray(e.entropy, e.entropyEnc || "hex"),
                                    r = n.toArray(e.nonce, e.nonceEnc || "hex"),
                                    i = n.toArray(e.pers, e.persEnc || "hex");
                                u(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(t, r, i)
                            }
                            e.exports = HmacDRBG, HmacDRBG.prototype._init = function(e, t, r) {
                                var i = e.concat(t).concat(r);
                                this.K = Array(this.outLen / 8), this.V = Array(this.outLen / 8);
                                for (var n = 0; n < this.V.length; n++) this.K[n] = 0, this.V[n] = 1;
                                this._update(i), this._reseed = 1, this.reseedInterval = 281474976710656
                            }, HmacDRBG.prototype._hmac = function() {
                                return new i.hmac(this.hash, this.K)
                            }, HmacDRBG.prototype._update = function(e) {
                                var t = this._hmac().update(this.V).update([0]);
                                e && (t = t.update(e)), this.K = t.digest(), this.V = this._hmac().update(this.V).digest(), e && (this.K = this._hmac().update(this.V).update([1]).update(e).digest(), this.V = this._hmac().update(this.V).digest())
                            }, HmacDRBG.prototype.reseed = function(e, t, r, i) {
                                "string" != typeof t && (i = r, r = t, t = null), e = n.toArray(e, t), r = n.toArray(r, i), u(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(e.concat(r || [])), this._reseed = 1
                            }, HmacDRBG.prototype.generate = function(e, t, r, i) {
                                if (this._reseed > this.reseedInterval) throw Error("Reseed is required");
                                "string" != typeof t && (i = r, r = t, t = null), r && (r = n.toArray(r, i || "hex"), this._update(r));
                                for (var u = []; u.length < e;) this.V = this._hmac().update(this.V).digest(), u = u.concat(this.V);
                                var b = u.slice(0, e);
                                return this._update(r), this._reseed++, n.encode(b, t)
                            }
                        },
                        3782: function(e) {
                            "function" == typeof Object.create ? e.exports = function(e, t) {
                                t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
                                    constructor: {
                                        value: e,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }))
                            } : e.exports = function(e, t) {
                                if (t) {
                                    e.super_ = t;
                                    var TempCtor = function() {};
                                    TempCtor.prototype = t.prototype, e.prototype = new TempCtor, e.prototype.constructor = e
                                }
                            }
                        },
                        3533: function(e, t, r) {
                            "use strict";
                            var i = r(3782),
                                n = r(9029),
                                u = r(6911).Buffer,
                                b = Array(16);

                            function MD5() {
                                n.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878
                            }

                            function rotl(e, t) {
                                return e << t | e >>> 32 - t
                            }

                            function fnF(e, t, r, i, n, u, b) {
                                return rotl(e + (t & r | ~t & i) + n + u | 0, b) + t | 0
                            }

                            function fnG(e, t, r, i, n, u, b) {
                                return rotl(e + (t & i | r & ~i) + n + u | 0, b) + t | 0
                            }

                            function fnH(e, t, r, i, n, u, b) {
                                return rotl(e + (t ^ r ^ i) + n + u | 0, b) + t | 0
                            }

                            function fnI(e, t, r, i, n, u, b) {
                                return rotl(e + (r ^ (t | ~i)) + n + u | 0, b) + t | 0
                            }
                            i(MD5, n), MD5.prototype._update = function() {
                                for (var e = 0; e < 16; ++e) b[e] = this._block.readInt32LE(4 * e);
                                var t = this._a,
                                    r = this._b,
                                    i = this._c,
                                    n = this._d;
                                t = fnF(t, r, i, n, b[0], 3614090360, 7), n = fnF(n, t, r, i, b[1], 3905402710, 12), i = fnF(i, n, t, r, b[2], 606105819, 17), r = fnF(r, i, n, t, b[3], 3250441966, 22), t = fnF(t, r, i, n, b[4], 4118548399, 7), n = fnF(n, t, r, i, b[5], 1200080426, 12), i = fnF(i, n, t, r, b[6], 2821735955, 17), r = fnF(r, i, n, t, b[7], 4249261313, 22), t = fnF(t, r, i, n, b[8], 1770035416, 7), n = fnF(n, t, r, i, b[9], 2336552879, 12), i = fnF(i, n, t, r, b[10], 4294925233, 17), r = fnF(r, i, n, t, b[11], 2304563134, 22), t = fnF(t, r, i, n, b[12], 1804603682, 7), n = fnF(n, t, r, i, b[13], 4254626195, 12), i = fnF(i, n, t, r, b[14], 2792965006, 17), r = fnF(r, i, n, t, b[15], 1236535329, 22), t = fnG(t, r, i, n, b[1], 4129170786, 5), n = fnG(n, t, r, i, b[6], 3225465664, 9), i = fnG(i, n, t, r, b[11], 643717713, 14), r = fnG(r, i, n, t, b[0], 3921069994, 20), t = fnG(t, r, i, n, b[5], 3593408605, 5), n = fnG(n, t, r, i, b[10], 38016083, 9), i = fnG(i, n, t, r, b[15], 3634488961, 14), r = fnG(r, i, n, t, b[4], 3889429448, 20), t = fnG(t, r, i, n, b[9], 568446438, 5), n = fnG(n, t, r, i, b[14], 3275163606, 9), i = fnG(i, n, t, r, b[3], 4107603335, 14), r = fnG(r, i, n, t, b[8], 1163531501, 20), t = fnG(t, r, i, n, b[13], 2850285829, 5), n = fnG(n, t, r, i, b[2], 4243563512, 9), i = fnG(i, n, t, r, b[7], 1735328473, 14), r = fnG(r, i, n, t, b[12], 2368359562, 20), t = fnH(t, r, i, n, b[5], 4294588738, 4), n = fnH(n, t, r, i, b[8], 2272392833, 11), i = fnH(i, n, t, r, b[11], 1839030562, 16), r = fnH(r, i, n, t, b[14], 4259657740, 23), t = fnH(t, r, i, n, b[1], 2763975236, 4), n = fnH(n, t, r, i, b[4], 1272893353, 11), i = fnH(i, n, t, r, b[7], 4139469664, 16), r = fnH(r, i, n, t, b[10], 3200236656, 23), t = fnH(t, r, i, n, b[13], 681279174, 4), n = fnH(n, t, r, i, b[0], 3936430074, 11), i = fnH(i, n, t, r, b[3], 3572445317, 16), r = fnH(r, i, n, t, b[6], 76029189, 23), t = fnH(t, r, i, n, b[9], 3654602809, 4), n = fnH(n, t, r, i, b[12], 3873151461, 11), i = fnH(i, n, t, r, b[15], 530742520, 16), r = fnH(r, i, n, t, b[2], 3299628645, 23), t = fnI(t, r, i, n, b[0], 4096336452, 6), n = fnI(n, t, r, i, b[7], 1126891415, 10), i = fnI(i, n, t, r, b[14], 2878612391, 15), r = fnI(r, i, n, t, b[5], 4237533241, 21), t = fnI(t, r, i, n, b[12], 1700485571, 6), n = fnI(n, t, r, i, b[3], 2399980690, 10), i = fnI(i, n, t, r, b[10], 4293915773, 15), r = fnI(r, i, n, t, b[1], 2240044497, 21), t = fnI(t, r, i, n, b[8], 1873313359, 6), n = fnI(n, t, r, i, b[15], 4264355552, 10), i = fnI(i, n, t, r, b[6], 2734768916, 15), r = fnI(r, i, n, t, b[13], 1309151649, 21), t = fnI(t, r, i, n, b[4], 4149444226, 6), n = fnI(n, t, r, i, b[11], 3174756917, 10), i = fnI(i, n, t, r, b[2], 718787259, 15), r = fnI(r, i, n, t, b[9], 3951481745, 21), this._a = this._a + t | 0, this._b = this._b + r | 0, this._c = this._c + i | 0, this._d = this._d + n | 0
                            }, MD5.prototype._digest = function() {
                                this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
                                var e = u.allocUnsafe(16);
                                return e.writeInt32LE(this._a, 0), e.writeInt32LE(this._b, 4), e.writeInt32LE(this._c, 8), e.writeInt32LE(this._d, 12), e
                            }, e.exports = MD5
                        },
                        1354: function(e, t, r) {
                            var i = r(711),
                                n = r(3500);

                            function MillerRabin(e) {
                                this.rand = e || new n.Rand
                            }
                            e.exports = MillerRabin, MillerRabin.create = function(e) {
                                return new MillerRabin(e)
                            }, MillerRabin.prototype._randbelow = function(e) {
                                var t = Math.ceil(e.bitLength() / 8);
                                do var r = new i(this.rand.generate(t)); while (r.cmp(e) >= 0);
                                return r
                            }, MillerRabin.prototype._randrange = function(e, t) {
                                var r = t.sub(e);
                                return e.add(this._randbelow(r))
                            }, MillerRabin.prototype.test = function(e, t, r) {
                                var n = e.bitLength(),
                                    u = i.mont(e),
                                    b = new i(1).toRed(u);
                                t || (t = Math.max(1, n / 48 | 0));
                                for (var m = e.subn(1), y = 0; !m.testn(y); y++);
                                for (var v = e.shrn(y), g = m.toRed(u); t > 0; t--) {
                                    var _ = this._randrange(new i(2), m);
                                    r && r(_);
                                    var w = _.toRed(u).redPow(v);
                                    if (0 !== w.cmp(b) && 0 !== w.cmp(g)) {
                                        for (var M = 1; M < y; M++) {
                                            if (0 === (w = w.redSqr()).cmp(b)) return !1;
                                            if (0 === w.cmp(g)) break
                                        }
                                        if (M === y) return !1
                                    }
                                }
                                return !0
                            }, MillerRabin.prototype.getDivisor = function(e, t) {
                                var r = e.bitLength(),
                                    n = i.mont(e),
                                    u = new i(1).toRed(n);
                                t || (t = Math.max(1, r / 48 | 0));
                                for (var b = e.subn(1), m = 0; !b.testn(m); m++);
                                for (var y = e.shrn(m), v = b.toRed(n); t > 0; t--) {
                                    var g = this._randrange(new i(2), b),
                                        _ = e.gcd(g);
                                    if (0 !== _.cmpn(1)) return _;
                                    var w = g.toRed(n).redPow(y);
                                    if (0 !== w.cmp(u) && 0 !== w.cmp(v)) {
                                        for (var M = 1; M < m; M++) {
                                            if (0 === (w = w.redSqr()).cmp(u)) return w.fromRed().subn(1).gcd(e);
                                            if (0 === w.cmp(v)) break
                                        }
                                        if (M === m) return (w = w.redSqr()).fromRed().subn(1).gcd(e)
                                    }
                                }
                                return !1
                            }
                        },
                        3523: function(e) {
                            function assert(e, t) {
                                if (!e) throw Error(t || "Assertion failed")
                            }
                            e.exports = assert, assert.equal = function(e, t, r) {
                                if (e != t) throw Error(r || "Assertion failed: " + e + " != " + t)
                            }
                        },
                        6545: function(e, t) {
                            "use strict";

                            function zero2(e) {
                                return 1 === e.length ? "0" + e : e
                            }

                            function toHex(e) {
                                for (var t = "", r = 0; r < e.length; r++) t += zero2(e[r].toString(16));
                                return t
                            }
                            t.toArray = function(e, t) {
                                if (Array.isArray(e)) return e.slice();
                                if (!e) return [];
                                var r = [];
                                if ("string" != typeof e) {
                                    for (var i = 0; i < e.length; i++) r[i] = 0 | e[i];
                                    return r
                                }
                                if ("hex" === t) {
                                    (e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (e = "0" + e);
                                    for (var i = 0; i < e.length; i += 2) r.push(parseInt(e[i] + e[i + 1], 16))
                                } else
                                    for (var i = 0; i < e.length; i++) {
                                        var n = e.charCodeAt(i),
                                            u = n >> 8,
                                            b = 255 & n;
                                        u ? r.push(u, b) : r.push(b)
                                    }
                                return r
                            }, t.zero2 = zero2, t.toHex = toHex, t.encode = function(e, t) {
                                return "hex" === t ? toHex(e) : e
                            }
                        },
                        8687: function(e, t, r) {
                            "use strict";
                            var i = r(7160);
                            t.certificate = r(8782);
                            var n = i.define("RSAPrivateKey", function() {
                                this.seq().obj(this.key("version").int(), this.key("modulus").int(), this.key("publicExponent").int(), this.key("privateExponent").int(), this.key("prime1").int(), this.key("prime2").int(), this.key("exponent1").int(), this.key("exponent2").int(), this.key("coefficient").int())
                            });
                            t.RSAPrivateKey = n;
                            var u = i.define("RSAPublicKey", function() {
                                this.seq().obj(this.key("modulus").int(), this.key("publicExponent").int())
                            });
                            t.RSAPublicKey = u;
                            var b = i.define("SubjectPublicKeyInfo", function() {
                                this.seq().obj(this.key("algorithm").use(m), this.key("subjectPublicKey").bitstr())
                            });
                            t.PublicKey = b;
                            var m = i.define("AlgorithmIdentifier", function() {
                                    this.seq().obj(this.key("algorithm").objid(), this.key("none").null_().optional(), this.key("curve").objid().optional(), this.key("params").seq().obj(this.key("p").int(), this.key("q").int(), this.key("g").int()).optional())
                                }),
                                y = i.define("PrivateKeyInfo", function() {
                                    this.seq().obj(this.key("version").int(), this.key("algorithm").use(m), this.key("subjectPrivateKey").octstr())
                                });
                            t.PrivateKey = y;
                            var v = i.define("EncryptedPrivateKeyInfo", function() {
                                this.seq().obj(this.key("algorithm").seq().obj(this.key("id").objid(), this.key("decrypt").seq().obj(this.key("kde").seq().obj(this.key("id").objid(), this.key("kdeparams").seq().obj(this.key("salt").octstr(), this.key("iters").int())), this.key("cipher").seq().obj(this.key("algo").objid(), this.key("iv").octstr()))), this.key("subjectPrivateKey").octstr())
                            });
                            t.EncryptedPrivateKey = v;
                            var g = i.define("DSAPrivateKey", function() {
                                this.seq().obj(this.key("version").int(), this.key("p").int(), this.key("q").int(), this.key("g").int(), this.key("pub_key").int(), this.key("priv_key").int())
                            });
                            t.DSAPrivateKey = g, t.DSAparam = i.define("DSAparam", function() {
                                this.int()
                            });
                            var _ = i.define("ECPrivateKey", function() {
                                this.seq().obj(this.key("version").int(), this.key("privateKey").octstr(), this.key("parameters").optional().explicit(0).use(w), this.key("publicKey").optional().explicit(1).bitstr())
                            });
                            t.ECPrivateKey = _;
                            var w = i.define("ECParameters", function() {
                                this.choice({
                                    namedCurve: this.objid()
                                })
                            });
                            t.signature = i.define("signature", function() {
                                this.seq().obj(this.key("r").int(), this.key("s").int())
                            })
                        },
                        8782: function(e, t, r) {
                            "use strict";
                            var i = r(7160),
                                n = i.define("Time", function() {
                                    this.choice({
                                        utcTime: this.utctime(),
                                        generalTime: this.gentime()
                                    })
                                }),
                                u = i.define("AttributeTypeValue", function() {
                                    this.seq().obj(this.key("type").objid(), this.key("value").any())
                                }),
                                b = i.define("AlgorithmIdentifier", function() {
                                    this.seq().obj(this.key("algorithm").objid(), this.key("parameters").optional(), this.key("curve").objid().optional())
                                }),
                                m = i.define("SubjectPublicKeyInfo", function() {
                                    this.seq().obj(this.key("algorithm").use(b), this.key("subjectPublicKey").bitstr())
                                }),
                                y = i.define("RelativeDistinguishedName", function() {
                                    this.setof(u)
                                }),
                                v = i.define("RDNSequence", function() {
                                    this.seqof(y)
                                }),
                                g = i.define("Name", function() {
                                    this.choice({
                                        rdnSequence: this.use(v)
                                    })
                                }),
                                _ = i.define("Validity", function() {
                                    this.seq().obj(this.key("notBefore").use(n), this.key("notAfter").use(n))
                                }),
                                w = i.define("Extension", function() {
                                    this.seq().obj(this.key("extnID").objid(), this.key("critical").bool().def(!1), this.key("extnValue").octstr())
                                }),
                                M = i.define("TBSCertificate", function() {
                                    this.seq().obj(this.key("version").explicit(0).int().optional(), this.key("serialNumber").int(), this.key("signature").use(b), this.key("issuer").use(g), this.key("validity").use(_), this.key("subject").use(g), this.key("subjectPublicKeyInfo").use(m), this.key("issuerUniqueID").implicit(1).bitstr().optional(), this.key("subjectUniqueID").implicit(2).bitstr().optional(), this.key("extensions").explicit(3).seqof(w).optional())
                                }),
                                S = i.define("X509Certificate", function() {
                                    this.seq().obj(this.key("tbsCertificate").use(M), this.key("signatureAlgorithm").use(b), this.key("signatureValue").bitstr())
                                });
                            e.exports = S
                        },
                        6501: function(e, t, r) {
                            var i = /Proc-Type: 4,ENCRYPTED[\n\r]+DEK-Info: AES-((?:128)|(?:192)|(?:256))-CBC,([0-9A-H]+)[\n\r]+([0-9A-z\n\r\+\/\=]+)[\n\r]+/m,
                                n = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----/m,
                                u = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----([0-9A-z\n\r\+\/\=]+)-----END \1-----$/m,
                                b = r(8368),
                                m = r(6594),
                                y = r(6911).Buffer;
                            e.exports = function(e, t) {
                                var r, v = e.toString(),
                                    g = v.match(i);
                                if (g) {
                                    var _ = "aes" + g[1],
                                        w = y.from(g[2], "hex"),
                                        M = y.from(g[3].replace(/[\r\n]/g, ""), "base64"),
                                        S = b(t, w.slice(0, 8), parseInt(g[1], 10)).key,
                                        B = [],
                                        E = m.createDecipheriv(_, S, w);
                                    B.push(E.update(M)), B.push(E.final()), r = y.concat(B)
                                } else {
                                    var k = v.match(u);
                                    r = new y(k[2].replace(/[\r\n]/g, ""), "base64")
                                }
                                return {
                                    tag: v.match(n)[1],
                                    data: r
                                }
                            }
                        },
                        9902: function(e, t, r) {
                            var i = r(8687),
                                n = r(2510),
                                u = r(6501),
                                b = r(6594),
                                m = r(4978),
                                y = r(6911).Buffer;

                            function parseKeys(e) {
                                "object" != typeof e || y.isBuffer(e) || (A = e.passphrase, e = e.key), "string" == typeof e && (e = y.from(e));
                                var t, r, v, g, _, w, M, S, B, E, k, A, N, R, P = u(e, A),
                                    x = P.tag,
                                    I = P.data;
                                switch (x) {
                                    case "CERTIFICATE":
                                        R = i.certificate.decode(I, "der").tbsCertificate.subjectPublicKeyInfo;
                                    case "PUBLIC KEY":
                                        switch (R || (R = i.PublicKey.decode(I, "der")), N = R.algorithm.algorithm.join(".")) {
                                            case "1.2.840.113549.1.1.1":
                                                return i.RSAPublicKey.decode(R.subjectPublicKey.data, "der");
                                            case "1.2.840.10045.2.1":
                                                return R.subjectPrivateKey = R.subjectPublicKey, {
                                                    type: "ec",
                                                    data: R
                                                };
                                            case "1.2.840.10040.4.1":
                                                return R.algorithm.params.pub_key = i.DSAparam.decode(R.subjectPublicKey.data, "der"), {
                                                    type: "dsa",
                                                    data: R.algorithm.params
                                                };
                                            default:
                                                throw Error("unknown key id " + N)
                                        }
                                        throw Error("unknown key type " + x);
                                    case "ENCRYPTED PRIVATE KEY":
                                        t = I = i.EncryptedPrivateKey.decode(I, "der"), r = A, v = t.algorithm.decrypt.kde.kdeparams.salt, g = parseInt(t.algorithm.decrypt.kde.kdeparams.iters.toString(), 10), _ = n[t.algorithm.decrypt.cipher.algo.join(".")], w = t.algorithm.decrypt.cipher.iv, M = t.subjectPrivateKey, S = parseInt(_.split("-")[1], 10) / 8, B = m.pbkdf2Sync(r, v, g, S, "sha1"), E = b.createDecipheriv(_, B, w), (k = []).push(E.update(M)), k.push(E.final()), I = y.concat(k);
                                    case "PRIVATE KEY":
                                        switch (N = (R = i.PrivateKey.decode(I, "der")).algorithm.algorithm.join(".")) {
                                            case "1.2.840.113549.1.1.1":
                                                return i.RSAPrivateKey.decode(R.subjectPrivateKey, "der");
                                            case "1.2.840.10045.2.1":
                                                return {
                                                    curve: R.algorithm.curve, privateKey: i.ECPrivateKey.decode(R.subjectPrivateKey, "der").privateKey
                                                };
                                            case "1.2.840.10040.4.1":
                                                return R.algorithm.params.priv_key = i.DSAparam.decode(R.subjectPrivateKey, "der"), {
                                                    type: "dsa",
                                                    params: R.algorithm.params
                                                };
                                            default:
                                                throw Error("unknown key id " + N)
                                        }
                                        throw Error("unknown key type " + x);
                                    case "RSA PUBLIC KEY":
                                        return i.RSAPublicKey.decode(I, "der");
                                    case "RSA PRIVATE KEY":
                                        return i.RSAPrivateKey.decode(I, "der");
                                    case "DSA PRIVATE KEY":
                                        return {
                                            type: "dsa", params: i.DSAPrivateKey.decode(I, "der")
                                        };
                                    case "EC PRIVATE KEY":
                                        return {
                                            curve: (I = i.ECPrivateKey.decode(I, "der")).parameters.value, privateKey: I.privateKey
                                        };
                                    default:
                                        throw Error("unknown key type " + x)
                                }
                            }
                            e.exports = parseKeys, parseKeys.signature = i.signature
                        },
                        4978: function(e, t, r) {
                            var i = r(6113),
                                n = r(5349),
                                u = r(7007),
                                b = r(5407);
                            i.pbkdf2Sync && -1 !== i.pbkdf2Sync.toString().indexOf("keylen, digest") ? (t.pbkdf2Sync = function(e, t, r, m, y) {
                                return n(r, m), e = b(e, u, "Password"), t = b(t, u, "Salt"), y = y || "sha1", i.pbkdf2Sync(e, t, r, m, y)
                            }, t.pbkdf2 = function(e, t, r, m, y, v) {
                                if (n(r, m), e = b(e, u, "Password"), t = b(t, u, "Salt"), "function" == typeof y && (v = y, y = "sha1"), "function" != typeof v) throw Error("No callback provided to pbkdf2");
                                return i.pbkdf2(e, t, r, m, y, v)
                            }) : (t.pbkdf2Sync = r(2127), t.pbkdf2 = r(9601))
                        },
                        9601: function(e, t, i) {
                            var u, b = i(6911).Buffer,
                                m = i(5349),
                                y = i(7007),
                                v = i(2127),
                                g = i(5407),
                                _ = r.g.crypto && r.g.crypto.subtle,
                                w = {
                                    sha: "SHA-1",
                                    "sha-1": "SHA-1",
                                    sha1: "SHA-1",
                                    sha256: "SHA-256",
                                    "sha-256": "SHA-256",
                                    sha384: "SHA-384",
                                    "sha-384": "SHA-384",
                                    "sha-512": "SHA-512",
                                    sha512: "SHA-512"
                                },
                                M = [];

                            function browserPbkdf2(e, t, r, i, n) {
                                return _.importKey("raw", e, {
                                    name: "PBKDF2"
                                }, !1, ["deriveBits"]).then(function(e) {
                                    return _.deriveBits({
                                        name: "PBKDF2",
                                        salt: t,
                                        iterations: r,
                                        hash: {
                                            name: n
                                        }
                                    }, e, i << 3)
                                }).then(function(e) {
                                    return b.from(e)
                                })
                            }
                            e.exports = function(e, t, i, S, B, E) {
                                "function" == typeof B && (E = B, B = void 0);
                                var k = w[(B = B || "sha1").toLowerCase()];
                                if (!k || "function" != typeof r.g.Promise) return n.nextTick(function() {
                                    var r;
                                    try {
                                        r = v(e, t, i, S, B)
                                    } catch (e) {
                                        return E(e)
                                    }
                                    E(null, r)
                                });
                                if (m(i, S), e = g(e, y, "Password"), t = g(t, y, "Salt"), "function" != typeof E) throw Error("No callback provided to pbkdf2");
                                ! function(e, t) {
                                    e.then(function(e) {
                                        n.nextTick(function() {
                                            t(null, e)
                                        })
                                    }, function(e) {
                                        n.nextTick(function() {
                                            t(e)
                                        })
                                    })
                                }((function(e) {
                                    if (r.g.process && !r.g.process.browser || !_ || !_.importKey || !_.deriveBits) return Promise.resolve(!1);
                                    if (void 0 !== M[e]) return M[e];
                                    var t = browserPbkdf2(u = u || b.alloc(8), u, 10, 128, e).then(function() {
                                        return !0
                                    }).catch(function() {
                                        return !1
                                    });
                                    return M[e] = t, t
                                })(k).then(function(r) {
                                    return r ? browserPbkdf2(e, t, i, S, k) : v(e, t, i, S, B)
                                }), E)
                            }
                        },
                        7007: function(e) {
                            e.exports = "utf-8"
                        },
                        5349: function(e) {
                            e.exports = function(e, t) {
                                if ("number" != typeof e) throw TypeError("Iterations not a number");
                                if (e < 0) throw TypeError("Bad iterations");
                                if ("number" != typeof t) throw TypeError("Key length not a number");
                                if (t < 0 || t > 1073741823 || t != t) throw TypeError("Bad key length")
                            }
                        },
                        2127: function(e, t, r) {
                            var i = {
                                    md5: 16,
                                    sha1: 20,
                                    sha224: 28,
                                    sha256: 32,
                                    sha384: 48,
                                    sha512: 64,
                                    rmd160: 20,
                                    ripemd160: 20
                                },
                                n = r(4873),
                                u = r(6911).Buffer,
                                b = r(5349),
                                m = r(7007),
                                y = r(5407);
                            e.exports = function(e, t, r, v, g) {
                                b(r, v), e = y(e, m, "Password"), t = y(t, m, "Salt"), g = g || "sha1";
                                var _ = u.allocUnsafe(v),
                                    w = u.allocUnsafe(t.length + 4);
                                t.copy(w, 0, 0, t.length);
                                for (var M = 0, S = i[g], B = Math.ceil(v / S), E = 1; E <= B; E++) {
                                    w.writeUInt32BE(E, t.length);
                                    for (var k = n(g, e).update(w).digest(), A = k, N = 1; N < r; N++) {
                                        A = n(g, e).update(A).digest();
                                        for (var R = 0; R < S; R++) k[R] ^= A[R]
                                    }
                                    k.copy(_, M), M += S
                                }
                                return _
                            }
                        },
                        5407: function(e, t, r) {
                            var i = r(6911).Buffer;
                            e.exports = function(e, t, r) {
                                if (i.isBuffer(e)) return e;
                                if ("string" == typeof e) return i.from(e, t);
                                if (ArrayBuffer.isView(e)) return i.from(e.buffer);
                                throw TypeError(r + " must be a string, a Buffer, a typed array or a DataView")
                            }
                        },
                        9783: function(e, t, r) {
                            t.publicEncrypt = r(3995), t.privateDecrypt = r(4366), t.privateEncrypt = function(e, r) {
                                return t.publicEncrypt(e, r, !0)
                            }, t.publicDecrypt = function(e, r) {
                                return t.privateDecrypt(e, r, !0)
                            }
                        },
                        5520: function(e, t, r) {
                            var i = r(9739),
                                n = r(6911).Buffer;
                            e.exports = function(e, t) {
                                for (var r, u = n.alloc(0), b = 0; u.length < t;) r = function(e) {
                                    var t = n.allocUnsafe(4);
                                    return t.writeUInt32BE(e, 0), t
                                }(b++), u = n.concat([u, i("sha1").update(e).update(r).digest()]);
                                return u.slice(0, t)
                            }
                        },
                        4366: function(e, t, r) {
                            var i = r(9902),
                                n = r(5520),
                                u = r(6386),
                                b = r(711),
                                m = r(7166),
                                y = r(9739),
                                v = r(1607),
                                g = r(6911).Buffer;
                            e.exports = function(e, t, r) {
                                _ = e.padding ? e.padding : r ? 1 : 4;
                                var _, w, M = i(e),
                                    S = M.modulus.byteLength();
                                if (t.length > S || new b(t).cmp(M.modulus) >= 0) throw Error("decryption error");
                                w = r ? v(new b(t), M) : m(t, M);
                                var B = g.alloc(S - w.length);
                                if (w = g.concat([B, w], S), 4 === _) return function(e, t) {
                                    var r = e.modulus.byteLength(),
                                        i = y("sha1").update(g.alloc(0)).digest(),
                                        b = i.length;
                                    if (0 !== t[0]) throw Error("decryption error");
                                    var m = t.slice(1, b + 1),
                                        v = t.slice(b + 1),
                                        _ = u(m, n(v, b)),
                                        w = u(v, n(_, r - b - 1));
                                    if (function(e, t) {
                                            e = g.from(e), t = g.from(t);
                                            var r = 0,
                                                i = e.length;
                                            e.length !== t.length && (r++, i = Math.min(e.length, t.length));
                                            for (var n = -1; ++n < i;) r += e[n] ^ t[n];
                                            return r
                                        }(i, w.slice(0, b))) throw Error("decryption error");
                                    for (var M = b; 0 === w[M];) M++;
                                    if (1 !== w[M++]) throw Error("decryption error");
                                    return w.slice(M)
                                }(M, w);
                                if (1 === _) return function(e, t, r) {
                                    for (var i = t.slice(0, 2), n = 2, u = 0; 0 !== t[n++];)
                                        if (n >= t.length) {
                                            u++;
                                            break
                                        } var b = t.slice(2, n - 1);
                                    if (("0002" !== i.toString("hex") && !r || "0001" !== i.toString("hex") && r) && u++, b.length < 8 && u++, u) throw Error("decryption error");
                                    return t.slice(n)
                                }(0, w, r);
                                if (3 === _) return w;
                                throw Error("unknown padding")
                            }
                        },
                        3995: function(e, t, r) {
                            var i = r(9902),
                                n = r(7223),
                                u = r(9739),
                                b = r(5520),
                                m = r(6386),
                                y = r(711),
                                v = r(1607),
                                g = r(7166),
                                _ = r(6911).Buffer;
                            e.exports = function(e, t, r) {
                                w = e.padding ? e.padding : r ? 1 : 4;
                                var w, M, S = i(e);
                                if (4 === w) M = function(e, t) {
                                    var r = e.modulus.byteLength(),
                                        i = t.length,
                                        v = u("sha1").update(_.alloc(0)).digest(),
                                        g = v.length,
                                        w = 2 * g;
                                    if (i > r - w - 2) throw Error("message too long");
                                    var M = _.alloc(r - i - w - 2),
                                        S = r - g - 1,
                                        B = n(g),
                                        E = m(_.concat([v, M, _.alloc(1, 1), t], S), b(B, S)),
                                        k = m(B, b(E, g));
                                    return new y(_.concat([_.alloc(1), k, E], r))
                                }(S, t);
                                else if (1 === w) M = function(e, t, r) {
                                    var i, u = t.length,
                                        b = e.modulus.byteLength();
                                    if (u > b - 11) throw Error("message too long");
                                    return i = r ? _.alloc(b - u - 3, 255) : function(e) {
                                        for (var t, r = _.allocUnsafe(e), i = 0, u = n(2 * e), b = 0; i < e;) b === u.length && (u = n(2 * e), b = 0), (t = u[b++]) && (r[i++] = t);
                                        return r
                                    }(b - u - 3), new y(_.concat([_.from([0, r ? 1 : 2]), i, _.alloc(1), t], b))
                                }(S, t, r);
                                else if (3 === w) {
                                    if ((M = new y(t)).cmp(S.modulus) >= 0) throw Error("data too long for modulus")
                                } else throw Error("unknown padding");
                                return r ? g(M, S) : v(M, S)
                            }
                        },
                        1607: function(e, t, r) {
                            var i = r(711),
                                n = r(6911).Buffer;
                            e.exports = function(e, t) {
                                return n.from(e.toRed(i.mont(t.modulus)).redPow(new i(t.publicExponent)).fromRed().toArray())
                            }
                        },
                        6386: function(e) {
                            e.exports = function(e, t) {
                                for (var r = e.length, i = -1; ++i < r;) e[i] ^= t[i];
                                return e
                            }
                        },
                        7223: function(e, t, i) {
                            "use strict";
                            var u = i(6911).Buffer,
                                b = r.g.crypto || r.g.msCrypto;
                            b && b.getRandomValues ? e.exports = function(e, t) {
                                if (e > 4294967295) throw RangeError("requested too many random bytes");
                                var r = u.allocUnsafe(e);
                                if (e > 0) {
                                    if (e > 65536)
                                        for (var i = 0; i < e; i += 65536) b.getRandomValues(r.slice(i, i + 65536));
                                    else b.getRandomValues(r)
                                }
                                return "function" == typeof t ? n.nextTick(function() {
                                    t(null, r)
                                }) : r
                            } : e.exports = function() {
                                throw Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11")
                            }
                        },
                        6445: function(e, t, i) {
                            "use strict";

                            function oldBrowser() {
                                throw Error("secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11")
                            }
                            var u = i(6911);
                            i(7223);
                            var b = u.Buffer,
                                m = u.kMaxLength,
                                y = r.g.crypto || r.g.msCrypto;

                            function assertOffset(e, t) {
                                if ("number" != typeof e || e != e) throw TypeError("offset must be a number");
                                if (e > 4294967295 || e < 0) throw TypeError("offset must be a uint32");
                                if (e > m || e > t) throw RangeError("offset out of range")
                            }

                            function assertSize(e, t, r) {
                                if ("number" != typeof e || e != e) throw TypeError("size must be a number");
                                if (e > 4294967295 || e < 0) throw TypeError("size must be a uint32");
                                if (e + t > r || e > m) throw RangeError("buffer too small")
                            }

                            function actualFill(e, t, r, i) {
                                var u = e.buffer,
                                    b = new Uint8Array(u, t, r);
                                if (y.getRandomValues(b), i) {
                                    n.nextTick(function() {
                                        i(null, e)
                                    });
                                    return
                                }
                                return e
                            }
                            y && y.getRandomValues ? (t.randomFill = function(e, t, i, n) {
                                if (!b.isBuffer(e) && !(e instanceof r.g.Uint8Array)) throw TypeError('"buf" argument must be a Buffer or Uint8Array');
                                if ("function" == typeof t) n = t, t = 0, i = e.length;
                                else if ("function" == typeof i) n = i, i = e.length - t;
                                else if ("function" != typeof n) throw TypeError('"cb" argument must be a function');
                                return assertOffset(t, e.length), assertSize(i, t, e.length), actualFill(e, t, i, n)
                            }, t.randomFillSync = function(e, t, i) {
                                if (void 0 === t && (t = 0), !b.isBuffer(e) && !(e instanceof r.g.Uint8Array)) throw TypeError('"buf" argument must be a Buffer or Uint8Array');
                                return assertOffset(t, e.length), void 0 === i && (i = e.length - t), assertSize(i, t, e.length), actualFill(e, t, i)
                            }) : (t.randomFill = oldBrowser, t.randomFillSync = oldBrowser)
                        },
                        4646: function(e) {
                            "use strict";
                            let t = {};

                            function createErrorType(e, r, i) {
                                i || (i = Error);
                                let NodeError = class NodeError extends i {
                                    constructor(e, t, i) {
                                        super("string" == typeof r ? r : r(e, t, i))
                                    }
                                };
                                NodeError.prototype.name = i.name, NodeError.prototype.code = e, t[e] = NodeError
                            }

                            function oneOf(e, t) {
                                if (!Array.isArray(e)) return `of ${t} ${String(e)}`;
                                {
                                    let r = e.length;
                                    return (e = e.map(e => String(e)), r > 2) ? `one of ${t} ${e.slice(0,r-1).join(", ")}, or ` + e[r - 1] : 2 === r ? `one of ${t} ${e[0]} or ${e[1]}` : `of ${t} ${e[0]}`
                                }
                            }
                            createErrorType("ERR_INVALID_OPT_VALUE", function(e, t) {
                                return 'The value "' + t + '" is invalid for option "' + e + '"'
                            }, TypeError), createErrorType("ERR_INVALID_ARG_TYPE", function(e, t, r) {
                                var i, n, u, b, m;
                                let y, v;
                                if ("string" == typeof t && (i = "not ", t.substr(!n || n < 0 ? 0 : +n, i.length) === i) ? (y = "must not be", t = t.replace(/^not /, "")) : y = "must be", u = " argument", (void 0 === b || b > e.length) && (b = e.length), e.substring(b - u.length, b) === u) v = `The ${e} ${y} ${oneOf(t,"type")}`;
                                else {
                                    let r = ("number" != typeof m && (m = 0), m + 1 > e.length || -1 === e.indexOf(".", m)) ? "argument" : "property";
                                    v = `The "${e}" ${r} ${y} ${oneOf(t,"type")}`
                                }
                                return v + `. Received type ${typeof r}`
                            }, TypeError), createErrorType("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"), createErrorType("ERR_METHOD_NOT_IMPLEMENTED", function(e) {
                                return "The " + e + " method is not implemented"
                            }), createErrorType("ERR_STREAM_PREMATURE_CLOSE", "Premature close"), createErrorType("ERR_STREAM_DESTROYED", function(e) {
                                return "Cannot call " + e + " after a stream was destroyed"
                            }), createErrorType("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"), createErrorType("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"), createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end"), createErrorType("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError), createErrorType("ERR_UNKNOWN_ENCODING", function(e) {
                                return "Unknown encoding: " + e
                            }, TypeError), createErrorType("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"), e.exports.q = t
                        },
                        2403: function(e, t, r) {
                            "use strict";
                            var i = Object.keys || function(e) {
                                var t = [];
                                for (var r in e) t.push(r);
                                return t
                            };
                            e.exports = Duplex;
                            var u = r(1709),
                                b = r(7337);
                            r(3782)(Duplex, u);
                            for (var m = i(b.prototype), y = 0; y < m.length; y++) {
                                var v = m[y];
                                Duplex.prototype[v] || (Duplex.prototype[v] = b.prototype[v])
                            }

                            function Duplex(e) {
                                if (!(this instanceof Duplex)) return new Duplex(e);
                                u.call(this, e), b.call(this, e), this.allowHalfOpen = !0, e && (!1 === e.readable && (this.readable = !1), !1 === e.writable && (this.writable = !1), !1 === e.allowHalfOpen && (this.allowHalfOpen = !1, this.once("end", onend)))
                            }

                            function onend() {
                                this._writableState.ended || n.nextTick(onEndNT, this)
                            }

                            function onEndNT(e) {
                                e.end()
                            }
                            Object.defineProperty(Duplex.prototype, "writableHighWaterMark", {
                                enumerable: !1,
                                get: function() {
                                    return this._writableState.highWaterMark
                                }
                            }), Object.defineProperty(Duplex.prototype, "writableBuffer", {
                                enumerable: !1,
                                get: function() {
                                    return this._writableState && this._writableState.getBuffer()
                                }
                            }), Object.defineProperty(Duplex.prototype, "writableLength", {
                                enumerable: !1,
                                get: function() {
                                    return this._writableState.length
                                }
                            }), Object.defineProperty(Duplex.prototype, "destroyed", {
                                enumerable: !1,
                                get: function() {
                                    return void 0 !== this._readableState && void 0 !== this._writableState && this._readableState.destroyed && this._writableState.destroyed
                                },
                                set: function(e) {
                                    void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e, this._writableState.destroyed = e)
                                }
                            })
                        },
                        7889: function(e, t, r) {
                            "use strict";
                            e.exports = PassThrough;
                            var i = r(1170);

                            function PassThrough(e) {
                                if (!(this instanceof PassThrough)) return new PassThrough(e);
                                i.call(this, e)
                            }
                            r(3782)(PassThrough, i), PassThrough.prototype._transform = function(e, t, r) {
                                r(null, e)
                            }
                        },
                        1709: function(e, t, i) {
                            "use strict";
                            e.exports = Readable, Readable.ReadableState = ReadableState, i(2361).EventEmitter;
                            var u, b, m, y, v, a = function(e, t) {
                                    return e.listeners(t).length
                                },
                                g = i(4678),
                                _ = i(4300).Buffer,
                                w = r.g.Uint8Array || function() {},
                                M = i(3837);
                            b = M && M.debuglog ? M.debuglog("stream") : function() {};
                            var S = i(4379),
                                B = i(7025),
                                E = i(6776).getHighWaterMark,
                                k = i(4646).q,
                                A = k.ERR_INVALID_ARG_TYPE,
                                N = k.ERR_STREAM_PUSH_AFTER_EOF,
                                R = k.ERR_METHOD_NOT_IMPLEMENTED,
                                P = k.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
                            i(3782)(Readable, g);
                            var x = B.errorOrDestroy,
                                I = ["error", "close", "destroy", "pause", "resume"];

                            function ReadableState(e, t, r) {
                                u = u || i(2403), e = e || {}, "boolean" != typeof r && (r = t instanceof u), this.objectMode = !!e.objectMode, r && (this.objectMode = this.objectMode || !!e.readableObjectMode), this.highWaterMark = E(this, e, "readableHighWaterMark", r), this.buffer = new S, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.paused = !0, this.emitClose = !1 !== e.emitClose, this.autoDestroy = !!e.autoDestroy, this.destroyed = !1, this.defaultEncoding = e.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, e.encoding && (m || (m = i(3704).s), this.decoder = new m(e.encoding), this.encoding = e.encoding)
                            }

                            function Readable(e) {
                                if (u = u || i(2403), !(this instanceof Readable)) return new Readable(e);
                                var t = this instanceof u;
                                this._readableState = new ReadableState(e, this, t), this.readable = !0, e && ("function" == typeof e.read && (this._read = e.read), "function" == typeof e.destroy && (this._destroy = e.destroy)), g.call(this)
                            }

                            function readableAddChunk(e, t, r, i, n) {
                                b("readableAddChunk", t);
                                var u, m, y, v, g, M = e._readableState;
                                if (null === t) M.reading = !1,
                                    function(e, t) {
                                        if (b("onEofChunk"), !t.ended) {
                                            if (t.decoder) {
                                                var r = t.decoder.end();
                                                r && r.length && (t.buffer.push(r), t.length += t.objectMode ? 1 : r.length)
                                            }
                                            t.ended = !0, t.sync ? emitReadable(e) : (t.needReadable = !1, t.emittedReadable || (t.emittedReadable = !0, emitReadable_(e)))
                                        }
                                    }(e, M);
                                else {
                                    if (n || (u = M, m = t, _.isBuffer(m) || m instanceof w || "string" == typeof m || void 0 === m || u.objectMode || (y = new A("chunk", ["string", "Buffer", "Uint8Array"], m)), g = y), g) x(e, g);
                                    else if (M.objectMode || t && t.length > 0) {
                                        if ("string" == typeof t || M.objectMode || Object.getPrototypeOf(t) === _.prototype || (v = t, t = _.from(v)), i) M.endEmitted ? x(e, new P) : addChunk(e, M, t, !0);
                                        else if (M.ended) x(e, new N);
                                        else {
                                            if (M.destroyed) return !1;
                                            M.reading = !1, M.decoder && !r ? (t = M.decoder.write(t), M.objectMode || 0 !== t.length ? addChunk(e, M, t, !1) : maybeReadMore(e, M)) : addChunk(e, M, t, !1)
                                        }
                                    } else i || (M.reading = !1, maybeReadMore(e, M))
                                }
                                return !M.ended && (M.length < M.highWaterMark || 0 === M.length)
                            }

                            function addChunk(e, t, r, i) {
                                t.flowing && 0 === t.length && !t.sync ? (t.awaitDrain = 0, e.emit("data", r)) : (t.length += t.objectMode ? 1 : r.length, i ? t.buffer.unshift(r) : t.buffer.push(r), t.needReadable && emitReadable(e)), maybeReadMore(e, t)
                            }

                            function howMuchToRead(e, t) {
                                if (e <= 0 || 0 === t.length && t.ended) return 0;
                                if (t.objectMode) return 1;
                                if (e != e) return t.flowing && t.length ? t.buffer.head.data.length : t.length;
                                if (e > t.highWaterMark) {
                                    var r;
                                    t.highWaterMark = ((r = e) >= 1073741824 ? r = 1073741824 : (r--, r |= r >>> 1, r |= r >>> 2, r |= r >>> 4, r |= r >>> 8, r |= r >>> 16, r++), r)
                                }
                                return e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0)
                            }

                            function emitReadable(e) {
                                var t = e._readableState;
                                b("emitReadable", t.needReadable, t.emittedReadable), t.needReadable = !1, t.emittedReadable || (b("emitReadable", t.flowing), t.emittedReadable = !0, n.nextTick(emitReadable_, e))
                            }

                            function emitReadable_(e) {
                                var t = e._readableState;
                                b("emitReadable_", t.destroyed, t.length, t.ended), !t.destroyed && (t.length || t.ended) && (e.emit("readable"), t.emittedReadable = !1), t.needReadable = !t.flowing && !t.ended && t.length <= t.highWaterMark, flow(e)
                            }

                            function maybeReadMore(e, t) {
                                t.readingMore || (t.readingMore = !0, n.nextTick(maybeReadMore_, e, t))
                            }

                            function maybeReadMore_(e, t) {
                                for (; !t.reading && !t.ended && (t.length < t.highWaterMark || t.flowing && 0 === t.length);) {
                                    var r = t.length;
                                    if (b("maybeReadMore read 0"), e.read(0), r === t.length) break
                                }
                                t.readingMore = !1
                            }

                            function updateReadableListening(e) {
                                var t = e._readableState;
                                t.readableListening = e.listenerCount("readable") > 0, t.resumeScheduled && !t.paused ? t.flowing = !0 : e.listenerCount("data") > 0 && e.resume()
                            }

                            function nReadingNextTick(e) {
                                b("readable nexttick read 0"), e.read(0)
                            }

                            function resume_(e, t) {
                                b("resume", t.reading), t.reading || e.read(0), t.resumeScheduled = !1, e.emit("resume"), flow(e), t.flowing && !t.reading && e.read(0)
                            }

                            function flow(e) {
                                var t = e._readableState;
                                for (b("flow", t.flowing); t.flowing && null !== e.read(););
                            }

                            function fromList(e, t) {
                                var r;
                                return 0 === t.length ? null : (t.objectMode ? r = t.buffer.shift() : !e || e >= t.length ? (r = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.first() : t.buffer.concat(t.length), t.buffer.clear()) : r = t.buffer.consume(e, t.decoder), r)
                            }

                            function endReadable(e) {
                                var t = e._readableState;
                                b("endReadable", t.endEmitted), t.endEmitted || (t.ended = !0, n.nextTick(endReadableNT, t, e))
                            }

                            function endReadableNT(e, t) {
                                if (b("endReadableNT", e.endEmitted, e.length), !e.endEmitted && 0 === e.length && (e.endEmitted = !0, t.readable = !1, t.emit("end"), e.autoDestroy)) {
                                    var r = t._writableState;
                                    (!r || r.autoDestroy && r.finished) && t.destroy()
                                }
                            }

                            function indexOf(e, t) {
                                for (var r = 0, i = e.length; r < i; r++)
                                    if (e[r] === t) return r;
                                return -1
                            }
                            Object.defineProperty(Readable.prototype, "destroyed", {
                                enumerable: !1,
                                get: function() {
                                    return void 0 !== this._readableState && this._readableState.destroyed
                                },
                                set: function(e) {
                                    this._readableState && (this._readableState.destroyed = e)
                                }
                            }), Readable.prototype.destroy = B.destroy, Readable.prototype._undestroy = B.undestroy, Readable.prototype._destroy = function(e, t) {
                                t(e)
                            }, Readable.prototype.push = function(e, t) {
                                var r, i = this._readableState;
                                return i.objectMode ? r = !0 : "string" == typeof e && ((t = t || i.defaultEncoding) !== i.encoding && (e = _.from(e, t), t = ""), r = !0), readableAddChunk(this, e, t, !1, r)
                            }, Readable.prototype.unshift = function(e) {
                                return readableAddChunk(this, e, null, !0, !1)
                            }, Readable.prototype.isPaused = function() {
                                return !1 === this._readableState.flowing
                            }, Readable.prototype.setEncoding = function(e) {
                                m || (m = i(3704).s);
                                var t = new m(e);
                                this._readableState.decoder = t, this._readableState.encoding = this._readableState.decoder.encoding;
                                for (var r = this._readableState.buffer.head, n = ""; null !== r;) n += t.write(r.data), r = r.next;
                                return this._readableState.buffer.clear(), "" !== n && this._readableState.buffer.push(n), this._readableState.length = n.length, this
                            }, Readable.prototype.read = function(e) {
                                b("read", e), e = parseInt(e, 10);
                                var t, r = this._readableState,
                                    i = e;
                                if (0 !== e && (r.emittedReadable = !1), 0 === e && r.needReadable && ((0 !== r.highWaterMark ? r.length >= r.highWaterMark : r.length > 0) || r.ended)) return b("read: emitReadable", r.length, r.ended), 0 === r.length && r.ended ? endReadable(this) : emitReadable(this), null;
                                if (0 === (e = howMuchToRead(e, r)) && r.ended) return 0 === r.length && endReadable(this), null;
                                var n = r.needReadable;
                                return b("need readable", n), (0 === r.length || r.length - e < r.highWaterMark) && b("length less than watermark", n = !0), r.ended || r.reading ? b("reading or ended", n = !1) : n && (b("do read"), r.reading = !0, r.sync = !0, 0 === r.length && (r.needReadable = !0), this._read(r.highWaterMark), r.sync = !1, r.reading || (e = howMuchToRead(i, r))), null === (t = e > 0 ? fromList(e, r) : null) ? (r.needReadable = r.length <= r.highWaterMark, e = 0) : (r.length -= e, r.awaitDrain = 0), 0 === r.length && (r.ended || (r.needReadable = !0), i !== e && r.ended && endReadable(this)), null !== t && this.emit("data", t), t
                            }, Readable.prototype._read = function(e) {
                                x(this, new R("_read()"))
                            }, Readable.prototype.pipe = function(e, t) {
                                var r = this,
                                    i = this._readableState;
                                switch (i.pipesCount) {
                                    case 0:
                                        i.pipes = e;
                                        break;
                                    case 1:
                                        i.pipes = [i.pipes, e];
                                        break;
                                    default:
                                        i.pipes.push(e)
                                }
                                i.pipesCount += 1, b("pipe count=%d opts=%j", i.pipesCount, t);
                                var u = t && !1 === t.end || e === n.stdout || e === n.stderr ? unpipe : onend;

                                function onend() {
                                    b("onend"), e.end()
                                }
                                i.endEmitted ? n.nextTick(u) : r.once("end", u), e.on("unpipe", function onunpipe(t, n) {
                                    b("onunpipe"), t === r && n && !1 === n.hasUnpiped && (n.hasUnpiped = !0, b("cleanup"), e.removeListener("close", onclose), e.removeListener("finish", onfinish), e.removeListener("drain", o), e.removeListener("error", onerror), e.removeListener("unpipe", onunpipe), r.removeListener("end", onend), r.removeListener("end", unpipe), r.removeListener("data", ondata), m = !0, i.awaitDrain && (!e._writableState || e._writableState.needDrain) && o())
                                });
                                var o = function() {
                                    var e = r._readableState;
                                    b("pipeOnDrain", e.awaitDrain), e.awaitDrain && e.awaitDrain--, 0 === e.awaitDrain && a(r, "data") && (e.flowing = !0, flow(r))
                                };
                                e.on("drain", o);
                                var m = !1;

                                function ondata(t) {
                                    b("ondata");
                                    var n = e.write(t);
                                    b("dest.write", n), !1 === n && ((1 === i.pipesCount && i.pipes === e || i.pipesCount > 1 && -1 !== indexOf(i.pipes, e)) && !m && (b("false write response, pause", i.awaitDrain), i.awaitDrain++), r.pause())
                                }

                                function onerror(t) {
                                    b("onerror", t), unpipe(), e.removeListener("error", onerror), 0 === a(e, "error") && x(e, t)
                                }

                                function onclose() {
                                    e.removeListener("finish", onfinish), unpipe()
                                }

                                function onfinish() {
                                    b("onfinish"), e.removeListener("close", onclose), unpipe()
                                }

                                function unpipe() {
                                    b("unpipe"), r.unpipe(e)
                                }
                                return r.on("data", ondata),
                                    function(e, t, r) {
                                        if ("function" == typeof e.prependListener) return e.prependListener(t, r);
                                        e._events && e._events[t] ? Array.isArray(e._events[t]) ? e._events[t].unshift(r) : e._events[t] = [r, e._events[t]] : e.on(t, r)
                                    }(e, "error", onerror), e.once("close", onclose), e.once("finish", onfinish), e.emit("pipe", r), i.flowing || (b("pipe resume"), r.resume()), e
                            }, Readable.prototype.unpipe = function(e) {
                                var t = this._readableState,
                                    r = {
                                        hasUnpiped: !1
                                    };
                                if (0 === t.pipesCount) return this;
                                if (1 === t.pipesCount) return e && e !== t.pipes || (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit("unpipe", this, r)), this;
                                if (!e) {
                                    var i = t.pipes,
                                        n = t.pipesCount;
                                    t.pipes = null, t.pipesCount = 0, t.flowing = !1;
                                    for (var u = 0; u < n; u++) i[u].emit("unpipe", this, {
                                        hasUnpiped: !1
                                    });
                                    return this
                                }
                                var b = indexOf(t.pipes, e);
                                return -1 === b || (t.pipes.splice(b, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit("unpipe", this, r)), this
                            }, Readable.prototype.on = function(e, t) {
                                var r = g.prototype.on.call(this, e, t),
                                    i = this._readableState;
                                return "data" === e ? (i.readableListening = this.listenerCount("readable") > 0, !1 !== i.flowing && this.resume()) : "readable" !== e || i.endEmitted || i.readableListening || (i.readableListening = i.needReadable = !0, i.flowing = !1, i.emittedReadable = !1, b("on readable", i.length, i.reading), i.length ? emitReadable(this) : i.reading || n.nextTick(nReadingNextTick, this)), r
                            }, Readable.prototype.addListener = Readable.prototype.on, Readable.prototype.removeListener = function(e, t) {
                                var r = g.prototype.removeListener.call(this, e, t);
                                return "readable" === e && n.nextTick(updateReadableListening, this), r
                            }, Readable.prototype.removeAllListeners = function(e) {
                                var t = g.prototype.removeAllListeners.apply(this, arguments);
                                return ("readable" === e || void 0 === e) && n.nextTick(updateReadableListening, this), t
                            }, Readable.prototype.resume = function() {
                                var e = this._readableState;
                                return e.flowing || (b("resume"), e.flowing = !e.readableListening, e.resumeScheduled || (e.resumeScheduled = !0, n.nextTick(resume_, this, e))), e.paused = !1, this
                            }, Readable.prototype.pause = function() {
                                return b("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (b("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState.paused = !0, this
                            }, Readable.prototype.wrap = function(e) {
                                var t = this,
                                    r = this._readableState,
                                    i = !1;
                                for (var n in e.on("end", function() {
                                        if (b("wrapped end"), r.decoder && !r.ended) {
                                            var e = r.decoder.end();
                                            e && e.length && t.push(e)
                                        }
                                        t.push(null)
                                    }), e.on("data", function(n) {
                                        b("wrapped data"), r.decoder && (n = r.decoder.write(n)), (!r.objectMode || null != n) && (r.objectMode || n && n.length) && (t.push(n) || (i = !0, e.pause()))
                                    }), e) void 0 === this[n] && "function" == typeof e[n] && (this[n] = function(t) {
                                    return function() {
                                        return e[t].apply(e, arguments)
                                    }
                                }(n));
                                for (var u = 0; u < I.length; u++) e.on(I[u], this.emit.bind(this, I[u]));
                                return this._read = function(t) {
                                    b("wrapped _read", t), i && (i = !1, e.resume())
                                }, this
                            }, "function" == typeof Symbol && (Readable.prototype[Symbol.asyncIterator] = function() {
                                return void 0 === y && (y = i(6871)), y(this)
                            }), Object.defineProperty(Readable.prototype, "readableHighWaterMark", {
                                enumerable: !1,
                                get: function() {
                                    return this._readableState.highWaterMark
                                }
                            }), Object.defineProperty(Readable.prototype, "readableBuffer", {
                                enumerable: !1,
                                get: function() {
                                    return this._readableState && this._readableState.buffer
                                }
                            }), Object.defineProperty(Readable.prototype, "readableFlowing", {
                                enumerable: !1,
                                get: function() {
                                    return this._readableState.flowing
                                },
                                set: function(e) {
                                    this._readableState && (this._readableState.flowing = e)
                                }
                            }), Readable._fromList = fromList, Object.defineProperty(Readable.prototype, "readableLength", {
                                enumerable: !1,
                                get: function() {
                                    return this._readableState.length
                                }
                            }), "function" == typeof Symbol && (Readable.from = function(e, t) {
                                return void 0 === v && (v = i(9727)), v(Readable, e, t)
                            })
                        },
                        1170: function(e, t, r) {
                            "use strict";
                            e.exports = Transform;
                            var i = r(4646).q,
                                n = i.ERR_METHOD_NOT_IMPLEMENTED,
                                u = i.ERR_MULTIPLE_CALLBACK,
                                b = i.ERR_TRANSFORM_ALREADY_TRANSFORMING,
                                m = i.ERR_TRANSFORM_WITH_LENGTH_0,
                                y = r(2403);

                            function afterTransform(e, t) {
                                var r = this._transformState;
                                r.transforming = !1;
                                var i = r.writecb;
                                if (null === i) return this.emit("error", new u);
                                r.writechunk = null, r.writecb = null, null != t && this.push(t), i(e);
                                var n = this._readableState;
                                n.reading = !1, (n.needReadable || n.length < n.highWaterMark) && this._read(n.highWaterMark)
                            }

                            function Transform(e) {
                                if (!(this instanceof Transform)) return new Transform(e);
                                y.call(this, e), this._transformState = {
                                    afterTransform: afterTransform.bind(this),
                                    needTransform: !1,
                                    transforming: !1,
                                    writecb: null,
                                    writechunk: null,
                                    writeencoding: null
                                }, this._readableState.needReadable = !0, this._readableState.sync = !1, e && ("function" == typeof e.transform && (this._transform = e.transform), "function" == typeof e.flush && (this._flush = e.flush)), this.on("prefinish", prefinish)
                            }

                            function prefinish() {
                                var e = this;
                                "function" != typeof this._flush || this._readableState.destroyed ? done(this, null, null) : this._flush(function(t, r) {
                                    done(e, t, r)
                                })
                            }

                            function done(e, t, r) {
                                if (t) return e.emit("error", t);
                                if (null != r && e.push(r), e._writableState.length) throw new m;
                                if (e._transformState.transforming) throw new b;
                                return e.push(null)
                            }
                            r(3782)(Transform, y), Transform.prototype.push = function(e, t) {
                                return this._transformState.needTransform = !1, y.prototype.push.call(this, e, t)
                            }, Transform.prototype._transform = function(e, t, r) {
                                r(new n("_transform()"))
                            }, Transform.prototype._write = function(e, t, r) {
                                var i = this._transformState;
                                if (i.writecb = r, i.writechunk = e, i.writeencoding = t, !i.transforming) {
                                    var n = this._readableState;
                                    (i.needTransform || n.needReadable || n.length < n.highWaterMark) && this._read(n.highWaterMark)
                                }
                            }, Transform.prototype._read = function(e) {
                                var t = this._transformState;
                                null === t.writechunk || t.transforming ? t.needTransform = !0 : (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform))
                            }, Transform.prototype._destroy = function(e, t) {
                                y.prototype._destroy.call(this, e, function(e) {
                                    t(e)
                                })
                            }
                        },
                        7337: function(e, t, i) {
                            "use strict";

                            function CorkedRequest(e) {
                                var t = this;
                                this.next = null, this.entry = null, this.finish = function() {
                                    (function(e, t, r) {
                                        var i = e.entry;
                                        for (e.entry = null; i;) {
                                            var n = i.callback;
                                            t.pendingcb--, n(void 0), i = i.next
                                        }
                                        t.corkedRequestsFree.next = e
                                    })(t, e)
                                }
                            }
                            e.exports = Writable, Writable.WritableState = WritableState;
                            var u, b, m = {
                                    deprecate: i(6769)
                                },
                                y = i(4678),
                                v = i(4300).Buffer,
                                g = r.g.Uint8Array || function() {},
                                _ = i(7025),
                                w = i(6776).getHighWaterMark,
                                M = i(4646).q,
                                S = M.ERR_INVALID_ARG_TYPE,
                                B = M.ERR_METHOD_NOT_IMPLEMENTED,
                                E = M.ERR_MULTIPLE_CALLBACK,
                                k = M.ERR_STREAM_CANNOT_PIPE,
                                A = M.ERR_STREAM_DESTROYED,
                                N = M.ERR_STREAM_NULL_VALUES,
                                R = M.ERR_STREAM_WRITE_AFTER_END,
                                P = M.ERR_UNKNOWN_ENCODING,
                                x = _.errorOrDestroy;

                            function nop() {}

                            function WritableState(e, t, r) {
                                u = u || i(2403), e = e || {}, "boolean" != typeof r && (r = t instanceof u), this.objectMode = !!e.objectMode, r && (this.objectMode = this.objectMode || !!e.writableObjectMode), this.highWaterMark = w(this, e, "writableHighWaterMark", r), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
                                var b = !1 === e.decodeStrings;
                                this.decodeStrings = !b, this.defaultEncoding = e.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(e) {
                                    (function(e, t) {
                                        var r = e._writableState,
                                            i = r.sync,
                                            u = r.writecb;
                                        if ("function" != typeof u) throw new E;
                                        if (r.writing = !1, r.writecb = null, r.length -= r.writelen, r.writelen = 0, t) --r.pendingcb, i ? (n.nextTick(u, t), n.nextTick(finishMaybe, e, r), e._writableState.errorEmitted = !0, x(e, t)) : (u(t), e._writableState.errorEmitted = !0, x(e, t), finishMaybe(e, r));
                                        else {
                                            var b = needFinish(r) || e.destroyed;
                                            b || r.corked || r.bufferProcessing || !r.bufferedRequest || clearBuffer(e, r), i ? n.nextTick(afterWrite, e, r, b, u) : afterWrite(e, r, b, u)
                                        }
                                    })(t, e)
                                }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = !1 !== e.emitClose, this.autoDestroy = !!e.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new CorkedRequest(this)
                            }

                            function Writable(e) {
                                var t = this instanceof(u = u || i(2403));
                                if (!t && !b.call(Writable, this)) return new Writable(e);
                                this._writableState = new WritableState(e, this, t), this.writable = !0, e && ("function" == typeof e.write && (this._write = e.write), "function" == typeof e.writev && (this._writev = e.writev), "function" == typeof e.destroy && (this._destroy = e.destroy), "function" == typeof e.final && (this._final = e.final)), y.call(this)
                            }

                            function doWrite(e, t, r, i, n, u, b) {
                                t.writelen = i, t.writecb = b, t.writing = !0, t.sync = !0, t.destroyed ? t.onwrite(new A("write")) : r ? e._writev(n, t.onwrite) : e._write(n, u, t.onwrite), t.sync = !1
                            }

                            function afterWrite(e, t, r, i) {
                                r || 0 === t.length && t.needDrain && (t.needDrain = !1, e.emit("drain")), t.pendingcb--, i(), finishMaybe(e, t)
                            }

                            function clearBuffer(e, t) {
                                t.bufferProcessing = !0;
                                var r = t.bufferedRequest;
                                if (e._writev && r && r.next) {
                                    var i = Array(t.bufferedRequestCount),
                                        n = t.corkedRequestsFree;
                                    n.entry = r;
                                    for (var u = 0, b = !0; r;) i[u] = r, r.isBuf || (b = !1), r = r.next, u += 1;
                                    i.allBuffers = b, doWrite(e, t, !0, t.length, i, "", n.finish), t.pendingcb++, t.lastBufferedRequest = null, n.next ? (t.corkedRequestsFree = n.next, n.next = null) : t.corkedRequestsFree = new CorkedRequest(t), t.bufferedRequestCount = 0
                                } else {
                                    for (; r;) {
                                        var m = r.chunk,
                                            y = r.encoding,
                                            v = r.callback,
                                            g = t.objectMode ? 1 : m.length;
                                        if (doWrite(e, t, !1, g, m, y, v), r = r.next, t.bufferedRequestCount--, t.writing) break
                                    }
                                    null === r && (t.lastBufferedRequest = null)
                                }
                                t.bufferedRequest = r, t.bufferProcessing = !1
                            }

                            function needFinish(e) {
                                return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing
                            }

                            function callFinal(e, t) {
                                e._final(function(r) {
                                    t.pendingcb--, r && x(e, r), t.prefinished = !0, e.emit("prefinish"), finishMaybe(e, t)
                                })
                            }

                            function finishMaybe(e, t) {
                                var r = needFinish(t);
                                if (r && (t.prefinished || t.finalCalled || ("function" != typeof e._final || t.destroyed ? (t.prefinished = !0, e.emit("prefinish")) : (t.pendingcb++, t.finalCalled = !0, n.nextTick(callFinal, e, t))), 0 === t.pendingcb && (t.finished = !0, e.emit("finish"), t.autoDestroy))) {
                                    var i = e._readableState;
                                    (!i || i.autoDestroy && i.endEmitted) && e.destroy()
                                }
                                return r
                            }
                            i(3782)(Writable, y), WritableState.prototype.getBuffer = function() {
                                    for (var e = this.bufferedRequest, t = []; e;) t.push(e), e = e.next;
                                    return t
                                },
                                function() {
                                    try {
                                        Object.defineProperty(WritableState.prototype, "buffer", {
                                            get: m.deprecate(function() {
                                                return this.getBuffer()
                                            }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                                        })
                                    } catch (e) {}
                                }(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (b = Function.prototype[Symbol.hasInstance], Object.defineProperty(Writable, Symbol.hasInstance, {
                                    value: function(e) {
                                        return !!b.call(this, e) || this === Writable && e && e._writableState instanceof WritableState
                                    }
                                })) : b = function(e) {
                                    return e instanceof this
                                }, Writable.prototype.pipe = function() {
                                    x(this, new k)
                                }, Writable.prototype.write = function(e, t, r) {
                                    var i, u, b, m, y, _, w, M = this._writableState,
                                        B = !1,
                                        E = !M.objectMode && (i = e, v.isBuffer(i) || i instanceof g);
                                    return E && !v.isBuffer(e) && (u = e, e = v.from(u)), ("function" == typeof t && (r = t, t = null), E ? t = "buffer" : t || (t = M.defaultEncoding), "function" != typeof r && (r = nop), M.ending) ? (b = r, x(this, m = new R), n.nextTick(b, m)) : (E || (y = e, _ = r, null === y ? w = new N : "string" == typeof y || M.objectMode || (w = new S("chunk", ["string", "Buffer"], y)), !w || (x(this, w), n.nextTick(_, w), 0))) && (M.pendingcb++, B = function(e, t, r, i, n, u) {
                                        if (!r) {
                                            var b, m, y = (b = i, m = n, t.objectMode || !1 === t.decodeStrings || "string" != typeof b || (b = v.from(b, m)), b);
                                            i !== y && (r = !0, n = "buffer", i = y)
                                        }
                                        var g = t.objectMode ? 1 : i.length;
                                        t.length += g;
                                        var _ = t.length < t.highWaterMark;
                                        if (_ || (t.needDrain = !0), t.writing || t.corked) {
                                            var w = t.lastBufferedRequest;
                                            t.lastBufferedRequest = {
                                                chunk: i,
                                                encoding: n,
                                                isBuf: r,
                                                callback: u,
                                                next: null
                                            }, w ? w.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1
                                        } else doWrite(e, t, !1, g, i, n, u);
                                        return _
                                    }(this, M, E, e, t, r)), B
                                }, Writable.prototype.cork = function() {
                                    this._writableState.corked++
                                }, Writable.prototype.uncork = function() {
                                    var e = this._writableState;
                                    !e.corked || (e.corked--, e.writing || e.corked || e.bufferProcessing || !e.bufferedRequest || clearBuffer(this, e))
                                }, Writable.prototype.setDefaultEncoding = function(e) {
                                    if ("string" == typeof e && (e = e.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1)) throw new P(e);
                                    return this._writableState.defaultEncoding = e, this
                                }, Object.defineProperty(Writable.prototype, "writableBuffer", {
                                    enumerable: !1,
                                    get: function() {
                                        return this._writableState && this._writableState.getBuffer()
                                    }
                                }), Object.defineProperty(Writable.prototype, "writableHighWaterMark", {
                                    enumerable: !1,
                                    get: function() {
                                        return this._writableState.highWaterMark
                                    }
                                }), Writable.prototype._write = function(e, t, r) {
                                    r(new B("_write()"))
                                }, Writable.prototype._writev = null, Writable.prototype.end = function(e, t, r) {
                                    var i, u = this._writableState;
                                    return "function" == typeof e ? (r = e, e = null, t = null) : "function" == typeof t && (r = t, t = null), null != e && this.write(e, t), u.corked && (u.corked = 1, this.uncork()), u.ending || (i = r, u.ending = !0, finishMaybe(this, u), i && (u.finished ? n.nextTick(i) : this.once("finish", i)), u.ended = !0, this.writable = !1), this
                                }, Object.defineProperty(Writable.prototype, "writableLength", {
                                    enumerable: !1,
                                    get: function() {
                                        return this._writableState.length
                                    }
                                }), Object.defineProperty(Writable.prototype, "destroyed", {
                                    enumerable: !1,
                                    get: function() {
                                        return void 0 !== this._writableState && this._writableState.destroyed
                                    },
                                    set: function(e) {
                                        this._writableState && (this._writableState.destroyed = e)
                                    }
                                }), Writable.prototype.destroy = _.destroy, Writable.prototype._undestroy = _.undestroy, Writable.prototype._destroy = function(e, t) {
                                    t(e)
                                }
                        },
                        6871: function(e, t, r) {
                            "use strict";

                            function _defineProperty(e, t, r) {
                                return t in e ? Object.defineProperty(e, t, {
                                    value: r,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : e[t] = r, e
                            }
                            var i, u = r(9698),
                                b = Symbol("lastResolve"),
                                m = Symbol("lastReject"),
                                y = Symbol("error"),
                                v = Symbol("ended"),
                                g = Symbol("lastPromise"),
                                _ = Symbol("handlePromise"),
                                w = Symbol("stream");

                            function createIterResult(e, t) {
                                return {
                                    value: e,
                                    done: t
                                }
                            }

                            function readAndResolve(e) {
                                var t = e[b];
                                if (null !== t) {
                                    var r = e[w].read();
                                    null !== r && (e[g] = null, e[b] = null, e[m] = null, t(createIterResult(r, !1)))
                                }
                            }

                            function onReadable(e) {
                                n.nextTick(readAndResolve, e)
                            }
                            var M = Object.getPrototypeOf(function() {}),
                                S = Object.setPrototypeOf((_defineProperty(i = {
                                    get stream() {
                                        return this[w]
                                    },
                                    next: function() {
                                        var e, t, r = this,
                                            i = this[y];
                                        if (null !== i) return Promise.reject(i);
                                        if (this[v]) return Promise.resolve(createIterResult(void 0, !0));
                                        if (this[w].destroyed) return new Promise(function(e, t) {
                                            n.nextTick(function() {
                                                r[y] ? t(r[y]) : e(createIterResult(void 0, !0))
                                            })
                                        });
                                        var u = this[g];
                                        if (u) t = new Promise((e = this, function(t, r) {
                                            u.then(function() {
                                                if (e[v]) {
                                                    t(createIterResult(void 0, !0));
                                                    return
                                                }
                                                e[_](t, r)
                                            }, r)
                                        }));
                                        else {
                                            var b = this[w].read();
                                            if (null !== b) return Promise.resolve(createIterResult(b, !1));
                                            t = new Promise(this[_])
                                        }
                                        return this[g] = t, t
                                    }
                                }, Symbol.asyncIterator, function() {
                                    return this
                                }), _defineProperty(i, "return", function() {
                                    var e = this;
                                    return new Promise(function(t, r) {
                                        e[w].destroy(null, function(e) {
                                            if (e) {
                                                r(e);
                                                return
                                            }
                                            t(createIterResult(void 0, !0))
                                        })
                                    })
                                }), i), M);
                            e.exports = function(e) {
                                var t, r = Object.create(S, (_defineProperty(t = {}, w, {
                                    value: e,
                                    writable: !0
                                }), _defineProperty(t, b, {
                                    value: null,
                                    writable: !0
                                }), _defineProperty(t, m, {
                                    value: null,
                                    writable: !0
                                }), _defineProperty(t, y, {
                                    value: null,
                                    writable: !0
                                }), _defineProperty(t, v, {
                                    value: e._readableState.endEmitted,
                                    writable: !0
                                }), _defineProperty(t, _, {
                                    value: function(e, t) {
                                        var i = r[w].read();
                                        i ? (r[g] = null, r[b] = null, r[m] = null, e(createIterResult(i, !1))) : (r[b] = e, r[m] = t)
                                    },
                                    writable: !0
                                }), t));
                                return r[g] = null, u(e, function(e) {
                                    if (e && "ERR_STREAM_PREMATURE_CLOSE" !== e.code) {
                                        var t = r[m];
                                        null !== t && (r[g] = null, r[b] = null, r[m] = null, t(e)), r[y] = e;
                                        return
                                    }
                                    var i = r[b];
                                    null !== i && (r[g] = null, r[b] = null, r[m] = null, i(createIterResult(void 0, !0))), r[v] = !0
                                }), e.on("readable", onReadable.bind(null, r)), r
                            }
                        },
                        4379: function(e, t, r) {
                            "use strict";

                            function ownKeys(e, t) {
                                var r = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var i = Object.getOwnPropertySymbols(e);
                                    t && (i = i.filter(function(t) {
                                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                                    })), r.push.apply(r, i)
                                }
                                return r
                            }

                            function _defineProperties(e, t) {
                                for (var r = 0; r < t.length; r++) {
                                    var i = t[r];
                                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                                }
                            }
                            var i = r(4300).Buffer,
                                n = r(3837).inspect,
                                u = n && n.custom || "inspect";
                            e.exports = function() {
                                var e, t;

                                function BufferList() {
                                    ! function(e, t) {
                                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                                    }(this, BufferList), this.head = null, this.tail = null, this.length = 0
                                }
                                return e = [{
                                    key: "push",
                                    value: function(e) {
                                        var t = {
                                            data: e,
                                            next: null
                                        };
                                        this.length > 0 ? this.tail.next = t : this.head = t, this.tail = t, ++this.length
                                    }
                                }, {
                                    key: "unshift",
                                    value: function(e) {
                                        var t = {
                                            data: e,
                                            next: this.head
                                        };
                                        0 === this.length && (this.tail = t), this.head = t, ++this.length
                                    }
                                }, {
                                    key: "shift",
                                    value: function() {
                                        if (0 !== this.length) {
                                            var e = this.head.data;
                                            return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, e
                                        }
                                    }
                                }, {
                                    key: "clear",
                                    value: function() {
                                        this.head = this.tail = null, this.length = 0
                                    }
                                }, {
                                    key: "join",
                                    value: function(e) {
                                        if (0 === this.length) return "";
                                        for (var t = this.head, r = "" + t.data; t = t.next;) r += e + t.data;
                                        return r
                                    }
                                }, {
                                    key: "concat",
                                    value: function(e) {
                                        if (0 === this.length) return i.alloc(0);
                                        for (var t, r, n = i.allocUnsafe(e >>> 0), u = this.head, b = 0; u;) t = u.data, r = b, i.prototype.copy.call(t, n, r), b += u.data.length, u = u.next;
                                        return n
                                    }
                                }, {
                                    key: "consume",
                                    value: function(e, t) {
                                        var r;
                                        return e < this.head.data.length ? (r = this.head.data.slice(0, e), this.head.data = this.head.data.slice(e)) : r = e === this.head.data.length ? this.shift() : t ? this._getString(e) : this._getBuffer(e), r
                                    }
                                }, {
                                    key: "first",
                                    value: function() {
                                        return this.head.data
                                    }
                                }, {
                                    key: "_getString",
                                    value: function(e) {
                                        var t = this.head,
                                            r = 1,
                                            i = t.data;
                                        for (e -= i.length; t = t.next;) {
                                            var n = t.data,
                                                u = e > n.length ? n.length : e;
                                            if (u === n.length ? i += n : i += n.slice(0, e), 0 == (e -= u)) {
                                                u === n.length ? (++r, t.next ? this.head = t.next : this.head = this.tail = null) : (this.head = t, t.data = n.slice(u));
                                                break
                                            }++r
                                        }
                                        return this.length -= r, i
                                    }
                                }, {
                                    key: "_getBuffer",
                                    value: function(e) {
                                        var t = i.allocUnsafe(e),
                                            r = this.head,
                                            n = 1;
                                        for (r.data.copy(t), e -= r.data.length; r = r.next;) {
                                            var u = r.data,
                                                b = e > u.length ? u.length : e;
                                            if (u.copy(t, t.length - e, 0, b), 0 == (e -= b)) {
                                                b === u.length ? (++n, r.next ? this.head = r.next : this.head = this.tail = null) : (this.head = r, r.data = u.slice(b));
                                                break
                                            }++n
                                        }
                                        return this.length -= n, t
                                    }
                                }, {
                                    key: u,
                                    value: function(e, t) {
                                        return n(this, function(e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var r = null != arguments[t] ? arguments[t] : {};
                                                t % 2 ? ownKeys(Object(r), !0).forEach(function(t) {
                                                    var i;
                                                    i = r[t], t in e ? Object.defineProperty(e, t, {
                                                        value: i,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0
                                                    }) : e[t] = i
                                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ownKeys(Object(r)).forEach(function(t) {
                                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                                })
                                            }
                                            return e
                                        }({}, t, {
                                            depth: 0,
                                            customInspect: !1
                                        }))
                                    }
                                }], _defineProperties(BufferList.prototype, e), t && _defineProperties(BufferList, t), BufferList
                            }()
                        },
                        7025: function(e) {
                            "use strict";

                            function emitErrorAndCloseNT(e, t) {
                                emitErrorNT(e, t), emitCloseNT(e)
                            }

                            function emitCloseNT(e) {
                                (!e._writableState || e._writableState.emitClose) && (!e._readableState || e._readableState.emitClose) && e.emit("close")
                            }

                            function emitErrorNT(e, t) {
                                e.emit("error", t)
                            }
                            e.exports = {
                                destroy: function(e, t) {
                                    var r = this,
                                        i = this._readableState && this._readableState.destroyed,
                                        u = this._writableState && this._writableState.destroyed;
                                    return i || u ? t ? t(e) : e && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, n.nextTick(emitErrorNT, this, e)) : n.nextTick(emitErrorNT, this, e)) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(e || null, function(e) {
                                        !t && e ? r._writableState ? r._writableState.errorEmitted ? n.nextTick(emitCloseNT, r) : (r._writableState.errorEmitted = !0, n.nextTick(emitErrorAndCloseNT, r, e)) : n.nextTick(emitErrorAndCloseNT, r, e) : t ? (n.nextTick(emitCloseNT, r), t(e)) : n.nextTick(emitCloseNT, r)
                                    })), this
                                },
                                undestroy: function() {
                                    this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1)
                                },
                                errorOrDestroy: function(e, t) {
                                    var r = e._readableState,
                                        i = e._writableState;
                                    r && r.autoDestroy || i && i.autoDestroy ? e.destroy(t) : e.emit("error", t)
                                }
                            }
                        },
                        9698: function(e, t, r) {
                            "use strict";
                            var i = r(4646).q.ERR_STREAM_PREMATURE_CLOSE;

                            function noop() {}
                            e.exports = function eos(e, t, r) {
                                if ("function" == typeof t) return eos(e, null, t);
                                t || (t = {}), n = r || noop, u = !1, r = function() {
                                    if (!u) {
                                        u = !0;
                                        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                                        n.apply(this, t)
                                    }
                                };
                                var n, u, b = t.readable || !1 !== t.readable && e.readable,
                                    m = t.writable || !1 !== t.writable && e.writable,
                                    s = function() {
                                        e.writable || h()
                                    },
                                    y = e._writableState && e._writableState.finished,
                                    h = function() {
                                        m = !1, y = !0, b || r.call(e)
                                    },
                                    v = e._readableState && e._readableState.endEmitted,
                                    d = function() {
                                        b = !1, v = !0, m || r.call(e)
                                    },
                                    c = function(t) {
                                        r.call(e, t)
                                    },
                                    l = function() {
                                        var t;
                                        return b && !v ? (e._readableState && e._readableState.ended || (t = new i), r.call(e, t)) : m && !y ? (e._writableState && e._writableState.ended || (t = new i), r.call(e, t)) : void 0
                                    },
                                    p = function() {
                                        e.req.on("finish", h)
                                    };
                                return e.setHeader && "function" == typeof e.abort ? (e.on("complete", h), e.on("abort", l), e.req ? p() : e.on("request", p)) : m && !e._writableState && (e.on("end", s), e.on("close", s)), e.on("end", d), e.on("finish", h), !1 !== t.error && e.on("error", c), e.on("close", l),
                                    function() {
                                        e.removeListener("complete", h), e.removeListener("abort", l), e.removeListener("request", p), e.req && e.req.removeListener("finish", h), e.removeListener("end", s), e.removeListener("close", s), e.removeListener("finish", h), e.removeListener("end", d), e.removeListener("error", c), e.removeListener("close", l)
                                    }
                            }
                        },
                        9727: function(e, t, r) {
                            "use strict";

                            function asyncGeneratorStep(e, t, r, i, n, u, b) {
                                try {
                                    var m = e[u](b),
                                        y = m.value
                                } catch (e) {
                                    r(e);
                                    return
                                }
                                m.done ? t(y) : Promise.resolve(y).then(i, n)
                            }

                            function ownKeys(e, t) {
                                var r = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var i = Object.getOwnPropertySymbols(e);
                                    t && (i = i.filter(function(t) {
                                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                                    })), r.push.apply(r, i)
                                }
                                return r
                            }
                            var i = r(4646).q.ERR_INVALID_ARG_TYPE;
                            e.exports = function(e, t, r) {
                                if (t && "function" == typeof t.next) n = t;
                                else if (t && t[Symbol.asyncIterator]) n = t[Symbol.asyncIterator]();
                                else if (t && t[Symbol.iterator]) n = t[Symbol.iterator]();
                                else throw new i("iterable", ["Iterable"], t);
                                var n, u = new e(function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var r = null != arguments[t] ? arguments[t] : {};
                                            t % 2 ? ownKeys(Object(r), !0).forEach(function(t) {
                                                var i;
                                                i = r[t], t in e ? Object.defineProperty(e, t, {
                                                    value: i,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0
                                                }) : e[t] = i
                                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ownKeys(Object(r)).forEach(function(t) {
                                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                            })
                                        }
                                        return e
                                    }({
                                        objectMode: !0
                                    }, r)),
                                    b = !1;

                                function next() {
                                    return _next2.apply(this, arguments)
                                }

                                function _next2() {
                                    var e;
                                    return e = function*() {
                                        try {
                                            var e = yield n.next(), t = e.value;
                                            e.done ? u.push(null) : u.push((yield t)) ? next() : b = !1
                                        } catch (e) {
                                            u.destroy(e)
                                        }
                                    }, (_next2 = function() {
                                        var t = this,
                                            r = arguments;
                                        return new Promise(function(i, n) {
                                            var u = e.apply(t, r);

                                            function _next(e) {
                                                asyncGeneratorStep(u, i, n, _next, _throw, "next", e)
                                            }

                                            function _throw(e) {
                                                asyncGeneratorStep(u, i, n, _next, _throw, "throw", e)
                                            }
                                            _next(void 0)
                                        })
                                    }).apply(this, arguments)
                                }
                                return u._read = function() {
                                    b || (b = !0, next())
                                }, u
                            }
                        },
                        8442: function(e, t, r) {
                            "use strict";
                            var i, n = r(4646).q,
                                u = n.ERR_MISSING_ARGS,
                                b = n.ERR_STREAM_DESTROYED;

                            function noop(e) {
                                if (e) throw e
                            }

                            function call(e) {
                                e()
                            }

                            function pipe(e, t) {
                                return e.pipe(t)
                            }
                            e.exports = function() {
                                for (var e, t, n = arguments.length, m = Array(n), y = 0; y < n; y++) m[y] = arguments[y];
                                var v = (e = m).length && "function" == typeof e[e.length - 1] ? e.pop() : noop;
                                if (Array.isArray(m[0]) && (m = m[0]), m.length < 2) throw new u("streams");
                                var g = m.map(function(e, n) {
                                    var u, y, _, w, M, S = n < m.length - 1;
                                    return y = u = function(e) {
                                            t || (t = e), e && g.forEach(call), S || (g.forEach(call), v(t))
                                        }, _ = !1, u = function() {
                                            _ || (_ = !0, y.apply(void 0, arguments))
                                        }, w = !1, e.on("close", function() {
                                            w = !0
                                        }), void 0 === i && (i = r(9698)), i(e, {
                                            readable: S,
                                            writable: n > 0
                                        }, function(e) {
                                            if (e) return u(e);
                                            w = !0, u()
                                        }), M = !1,
                                        function(t) {
                                            if (!w && !M) {
                                                if (M = !0, e.setHeader && "function" == typeof e.abort) return e.abort();
                                                if ("function" == typeof e.destroy) return e.destroy();
                                                u(t || new b("pipe"))
                                            }
                                        }
                                });
                                return m.reduce(pipe)
                            }
                        },
                        6776: function(e, t, r) {
                            "use strict";
                            var i = r(4646).q.ERR_INVALID_OPT_VALUE;
                            e.exports = {
                                getHighWaterMark: function(e, t, r, n) {
                                    var u = null != t.highWaterMark ? t.highWaterMark : n ? t[r] : null;
                                    if (null != u) {
                                        if (!(isFinite(u) && Math.floor(u) === u) || u < 0) {
                                            var b = n ? r : "highWaterMark";
                                            throw new i(b, u)
                                        }
                                        return Math.floor(u)
                                    }
                                    return e.objectMode ? 16 : 16384
                                }
                            }
                        },
                        4678: function(e, t, r) {
                            e.exports = r(2781)
                        },
                        3726: function(e, t, r) {
                            var i = r(2781);
                            "disable" === ({
                                BUILD_ID: "i03J32lwNA5H4DZFCIZVy",
                                NEXT_PUBLIC_APP_ENVIRONMENT: "production",
                                NEXT_PUBLIC_APP_RELEASE_ID: "53c463c134c072c4121e9af627423d0ceb0f7b97"
                            }).READABLE_STREAM && i ? (e.exports = i.Readable, Object.assign(e.exports, i), e.exports.Stream = i) : ((t = e.exports = r(1709)).Stream = i || t, t.Readable = t, t.Writable = r(7337), t.Duplex = r(2403), t.Transform = r(1170), t.PassThrough = r(7889), t.finished = r(9698), t.pipeline = r(8442))
                        },
                        3225: function(e, t, r) {
                            "use strict";
                            var i = r(4300).Buffer,
                                n = r(3782),
                                u = r(9029),
                                b = Array(16),
                                m = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
                                y = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
                                v = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
                                g = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11];

                            function RIPEMD160() {
                                u.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520
                            }

                            function rotl(e, t) {
                                return e << t | e >>> 32 - t
                            }
                            n(RIPEMD160, u), RIPEMD160.prototype._update = function() {
                                for (var e, t, r, i, n, u, _, w, M, S, B, E, k, A, N, R, P, x, I, C, D, T, j, O, H, q, L, z, U, K, F, W, V, G, Z, J, X, Y, $, Q, ee, et, er, ei, en, ea, eo, es, ef, eh, ed, ec, eu, el, ep, eb, em, ey, ev, eg, e_, ew, eM, eS, eB, eE, ek, eA, eN, eR, eP, ex, eI = 0; eI < 16; ++eI) b[eI] = this._block.readInt32LE(4 * eI);
                                for (var eC = 0 | this._a, eD = 0 | this._b, eT = 0 | this._c, ej = 0 | this._d, eO = 0 | this._e, eH = 0 | this._a, eq = 0 | this._b, eL = 0 | this._c, ez = 0 | this._d, eU = 0 | this._e, eK = 0; eK < 80; eK += 1) eK < 16 ? (e = eC, t = eD, r = eT, i = ej, n = eO, eP = rotl(e + (t ^ r ^ i) + b[m[eK]] + 0 | 0, v[eK]) + n | 0, w = eH, M = eq, S = eL, B = ez, E = eU, ex = rotl(w + (M ^ (S | ~B)) + b[y[eK]] + 1352829926 | 0, g[eK]) + E | 0) : eK < 32 ? (N = eC, R = eD, P = eT, x = ej, I = eO, eP = rotl(N + (R & P | ~R & x) + b[m[eK]] + 1518500249 | 0, v[eK]) + I | 0, T = eH, j = eq, O = eL, H = ez, q = eU, ex = rotl(T + (j & H | O & ~H) + b[y[eK]] + 1548603684 | 0, g[eK]) + q | 0) : eK < 48 ? (U = eC, K = eD, F = eT, W = ej, V = eO, eP = rotl(U + ((K | ~F) ^ W) + b[m[eK]] + 1859775393 | 0, v[eK]) + V | 0, J = eH, X = eq, Y = eL, $ = ez, Q = eU, ex = rotl(J + ((X | ~Y) ^ $) + b[y[eK]] + 1836072691 | 0, g[eK]) + Q | 0) : eK < 64 ? (er = eC, ei = eD, en = eT, ea = ej, eo = eO, eP = rotl(er + (ei & ea | en & ~ea) + b[m[eK]] + 2400959708 | 0, v[eK]) + eo | 0, eh = eH, ed = eq, ec = eL, eu = ez, el = eU, ex = rotl(eh + (ed & ec | ~ed & eu) + b[y[eK]] + 2053994217 | 0, g[eK]) + el | 0) : (em = eC, ey = eD, ev = eT, eg = ej, e_ = eO, eP = rotl(em + (ey ^ (ev | ~eg)) + b[m[eK]] + 2840853838 | 0, v[eK]) + e_ | 0, eS = eH, eB = eq, eE = eL, ek = ez, eA = eU, ex = rotl(eS + (eB ^ eE ^ ek) + b[y[eK]] + 0 | 0, g[eK]) + eA | 0), eC = eO, eO = ej, ej = rotl(eT, 10), eT = eD, eD = eP, eH = eU, eU = ez, ez = rotl(eL, 10), eL = eq, eq = ex;
                                var eF = this._b + eT + ez | 0;
                                this._b = this._c + ej + eU | 0, this._c = this._d + eO + eH | 0, this._d = this._e + eC + eq | 0, this._e = this._a + eD + eL | 0, this._a = eF
                            }, RIPEMD160.prototype._digest = function() {
                                this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
                                var e = i.alloc ? i.alloc(20) : new i(20);
                                return e.writeInt32LE(this._a, 0), e.writeInt32LE(this._b, 4), e.writeInt32LE(this._c, 8), e.writeInt32LE(this._d, 12), e.writeInt32LE(this._e, 16), e
                            }, e.exports = RIPEMD160
                        },
                        5055: function(e, t, r) {
                            var i = r(4300),
                                n = i.Buffer;

                            function copyProps(e, t) {
                                for (var r in e) t[r] = e[r]
                            }

                            function SafeBuffer(e, t, r) {
                                return n(e, t, r)
                            }
                            n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow ? e.exports = i : (copyProps(i, t), t.Buffer = SafeBuffer), SafeBuffer.prototype = Object.create(n.prototype), copyProps(n, SafeBuffer), SafeBuffer.from = function(e, t, r) {
                                if ("number" == typeof e) throw TypeError("Argument must not be a number");
                                return n(e, t, r)
                            }, SafeBuffer.alloc = function(e, t, r) {
                                if ("number" != typeof e) throw TypeError("Argument must be a number");
                                var i = n(e);
                                return void 0 !== t ? "string" == typeof r ? i.fill(t, r) : i.fill(t) : i.fill(0), i
                            }, SafeBuffer.allocUnsafe = function(e) {
                                if ("number" != typeof e) throw TypeError("Argument must be a number");
                                return n(e)
                            }, SafeBuffer.allocUnsafeSlow = function(e) {
                                if ("number" != typeof e) throw TypeError("Argument must be a number");
                                return i.SlowBuffer(e)
                            }
                        },
                        6911: function(e, t, r) {
                            /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
                            var i = r(4300),
                                n = i.Buffer;

                            function copyProps(e, t) {
                                for (var r in e) t[r] = e[r]
                            }

                            function SafeBuffer(e, t, r) {
                                return n(e, t, r)
                            }
                            n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow ? e.exports = i : (copyProps(i, t), t.Buffer = SafeBuffer), SafeBuffer.prototype = Object.create(n.prototype), copyProps(n, SafeBuffer), SafeBuffer.from = function(e, t, r) {
                                if ("number" == typeof e) throw TypeError("Argument must not be a number");
                                return n(e, t, r)
                            }, SafeBuffer.alloc = function(e, t, r) {
                                if ("number" != typeof e) throw TypeError("Argument must be a number");
                                var i = n(e);
                                return void 0 !== t ? "string" == typeof r ? i.fill(t, r) : i.fill(t) : i.fill(0), i
                            }, SafeBuffer.allocUnsafe = function(e) {
                                if ("number" != typeof e) throw TypeError("Argument must be a number");
                                return n(e)
                            }, SafeBuffer.allocUnsafeSlow = function(e) {
                                if ("number" != typeof e) throw TypeError("Argument must be a number");
                                return i.SlowBuffer(e)
                            }
                        },
                        2858: function(e, t, r) {
                            var i = r(6911).Buffer;

                            function Hash(e, t) {
                                this._block = i.alloc(e), this._finalSize = t, this._blockSize = e, this._len = 0
                            }
                            Hash.prototype.update = function(e, t) {
                                "string" == typeof e && (t = t || "utf8", e = i.from(e, t));
                                for (var r = this._block, n = this._blockSize, u = e.length, b = this._len, m = 0; m < u;) {
                                    for (var y = b % n, v = Math.min(u - m, n - y), g = 0; g < v; g++) r[y + g] = e[m + g];
                                    b += v, m += v, b % n == 0 && this._update(r)
                                }
                                return this._len += u, this
                            }, Hash.prototype.digest = function(e) {
                                var t = this._len % this._blockSize;
                                this._block[t] = 128, this._block.fill(0, t + 1), t >= this._finalSize && (this._update(this._block), this._block.fill(0));
                                var r = 8 * this._len;
                                if (r <= 4294967295) this._block.writeUInt32BE(r, this._blockSize - 4);
                                else {
                                    var i = (4294967295 & r) >>> 0,
                                        n = (r - i) / 4294967296;
                                    this._block.writeUInt32BE(n, this._blockSize - 8), this._block.writeUInt32BE(i, this._blockSize - 4)
                                }
                                this._update(this._block);
                                var u = this._hash();
                                return e ? u.toString(e) : u
                            }, Hash.prototype._update = function() {
                                throw Error("_update must be implemented by subclass")
                            }, e.exports = Hash
                        },
                        4371: function(e, t, r) {
                            var i = e.exports = function(e) {
                                var t = i[e = e.toLowerCase()];
                                if (!t) throw Error(e + " is not supported (we accept pull requests)");
                                return new t
                            };
                            i.sha = r(4018), i.sha1 = r(4179), i.sha224 = r(532), i.sha256 = r(1843), i.sha384 = r(7455), i.sha512 = r(9934)
                        },
                        4018: function(e, t, r) {
                            var i = r(3782),
                                n = r(2858),
                                u = r(6911).Buffer,
                                b = [1518500249, 1859775393, -1894007588, -899497514],
                                m = Array(80);

                            function Sha() {
                                this.init(), this._w = m, n.call(this, 64, 56)
                            }
                            i(Sha, n), Sha.prototype.init = function() {
                                return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this
                            }, Sha.prototype._update = function(e) {
                                for (var t = this._w, r = 0 | this._a, i = 0 | this._b, n = 0 | this._c, u = 0 | this._d, m = 0 | this._e, y = 0; y < 16; ++y) t[y] = e.readInt32BE(4 * y);
                                for (; y < 80; ++y) t[y] = t[y - 3] ^ t[y - 8] ^ t[y - 14] ^ t[y - 16];
                                for (var v = 0; v < 80; ++v) {
                                    var g, _, w, M, S, B = ~~(v / 20),
                                        E = ((g = r) << 5 | g >>> 27) + (_ = i, w = n, M = u, 0 === B ? _ & w | ~_ & M : 2 === B ? _ & w | _ & M | w & M : _ ^ w ^ M) + m + t[v] + b[B] | 0;
                                    m = u, u = n, n = (S = i) << 30 | S >>> 2, i = r, r = E
                                }
                                this._a = r + this._a | 0, this._b = i + this._b | 0, this._c = n + this._c | 0, this._d = u + this._d | 0, this._e = m + this._e | 0
                            }, Sha.prototype._hash = function() {
                                var e = u.allocUnsafe(20);
                                return e.writeInt32BE(0 | this._a, 0), e.writeInt32BE(0 | this._b, 4), e.writeInt32BE(0 | this._c, 8), e.writeInt32BE(0 | this._d, 12), e.writeInt32BE(0 | this._e, 16), e
                            }, e.exports = Sha
                        },
                        4179: function(e, t, r) {
                            var i = r(3782),
                                n = r(2858),
                                u = r(6911).Buffer,
                                b = [1518500249, 1859775393, -1894007588, -899497514],
                                m = Array(80);

                            function Sha1() {
                                this.init(), this._w = m, n.call(this, 64, 56)
                            }
                            i(Sha1, n), Sha1.prototype.init = function() {
                                return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this
                            }, Sha1.prototype._update = function(e) {
                                for (var t = this._w, r = 0 | this._a, i = 0 | this._b, n = 0 | this._c, u = 0 | this._d, m = 0 | this._e, y = 0; y < 16; ++y) t[y] = e.readInt32BE(4 * y);
                                for (; y < 80; ++y) t[y] = (g = t[y - 3] ^ t[y - 8] ^ t[y - 14] ^ t[y - 16]) << 1 | g >>> 31;
                                for (var v = 0; v < 80; ++v) {
                                    var g, _, w, M, S, B, E = ~~(v / 20),
                                        k = ((_ = r) << 5 | _ >>> 27) + (w = i, M = n, S = u, 0 === E ? w & M | ~w & S : 2 === E ? w & M | w & S | M & S : w ^ M ^ S) + m + t[v] + b[E] | 0;
                                    m = u, u = n, n = (B = i) << 30 | B >>> 2, i = r, r = k
                                }
                                this._a = r + this._a | 0, this._b = i + this._b | 0, this._c = n + this._c | 0, this._d = u + this._d | 0, this._e = m + this._e | 0
                            }, Sha1.prototype._hash = function() {
                                var e = u.allocUnsafe(20);
                                return e.writeInt32BE(0 | this._a, 0), e.writeInt32BE(0 | this._b, 4), e.writeInt32BE(0 | this._c, 8), e.writeInt32BE(0 | this._d, 12), e.writeInt32BE(0 | this._e, 16), e
                            }, e.exports = Sha1
                        },
                        532: function(e, t, r) {
                            var i = r(3782),
                                n = r(1843),
                                u = r(2858),
                                b = r(6911).Buffer,
                                m = Array(64);

                            function Sha224() {
                                this.init(), this._w = m, u.call(this, 64, 56)
                            }
                            i(Sha224, n), Sha224.prototype.init = function() {
                                return this._a = 3238371032, this._b = 914150663, this._c = 812702999, this._d = 4144912697, this._e = 4290775857, this._f = 1750603025, this._g = 1694076839, this._h = 3204075428, this
                            }, Sha224.prototype._hash = function() {
                                var e = b.allocUnsafe(28);
                                return e.writeInt32BE(this._a, 0), e.writeInt32BE(this._b, 4), e.writeInt32BE(this._c, 8), e.writeInt32BE(this._d, 12), e.writeInt32BE(this._e, 16), e.writeInt32BE(this._f, 20), e.writeInt32BE(this._g, 24), e
                            }, e.exports = Sha224
                        },
                        1843: function(e, t, r) {
                            var i = r(3782),
                                n = r(2858),
                                u = r(6911).Buffer,
                                b = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
                                m = Array(64);

                            function Sha256() {
                                this.init(), this._w = m, n.call(this, 64, 56)
                            }
                            i(Sha256, n), Sha256.prototype.init = function() {
                                return this._a = 1779033703, this._b = 3144134277, this._c = 1013904242, this._d = 2773480762, this._e = 1359893119, this._f = 2600822924, this._g = 528734635, this._h = 1541459225, this
                            }, Sha256.prototype._update = function(e) {
                                for (var t = this._w, r = 0 | this._a, i = 0 | this._b, n = 0 | this._c, u = 0 | this._d, m = 0 | this._e, y = 0 | this._f, v = 0 | this._g, g = 0 | this._h, _ = 0; _ < 16; ++_) t[_] = e.readInt32BE(4 * _);
                                for (; _ < 64; ++_) t[_] = (((M = t[_ - 2]) >>> 17 | M << 15) ^ (M >>> 19 | M << 13) ^ M >>> 10) + t[_ - 7] + (((S = t[_ - 15]) >>> 7 | S << 25) ^ (S >>> 18 | S << 14) ^ S >>> 3) + t[_ - 16] | 0;
                                for (var w = 0; w < 64; ++w) {
                                    var M, S, B, E, k, A, N, R, P, x = g + (((B = m) >>> 6 | B << 26) ^ (B >>> 11 | B << 21) ^ (B >>> 25 | B << 7)) + (E = m, k = y, (A = v) ^ E & (k ^ A)) + b[w] + t[w] | 0,
                                        I = (((N = r) >>> 2 | N << 30) ^ (N >>> 13 | N << 19) ^ (N >>> 22 | N << 10)) + ((R = r) & (P = i) | n & (R | P)) | 0;
                                    g = v, v = y, y = m, m = u + x | 0, u = n, n = i, i = r, r = x + I | 0
                                }
                                this._a = r + this._a | 0, this._b = i + this._b | 0, this._c = n + this._c | 0, this._d = u + this._d | 0, this._e = m + this._e | 0, this._f = y + this._f | 0, this._g = v + this._g | 0, this._h = g + this._h | 0
                            }, Sha256.prototype._hash = function() {
                                var e = u.allocUnsafe(32);
                                return e.writeInt32BE(this._a, 0), e.writeInt32BE(this._b, 4), e.writeInt32BE(this._c, 8), e.writeInt32BE(this._d, 12), e.writeInt32BE(this._e, 16), e.writeInt32BE(this._f, 20), e.writeInt32BE(this._g, 24), e.writeInt32BE(this._h, 28), e
                            }, e.exports = Sha256
                        },
                        7455: function(e, t, r) {
                            var i = r(3782),
                                n = r(9934),
                                u = r(2858),
                                b = r(6911).Buffer,
                                m = Array(160);

                            function Sha384() {
                                this.init(), this._w = m, u.call(this, 128, 112)
                            }
                            i(Sha384, n), Sha384.prototype.init = function() {
                                return this._ah = 3418070365, this._bh = 1654270250, this._ch = 2438529370, this._dh = 355462360, this._eh = 1731405415, this._fh = 2394180231, this._gh = 3675008525, this._hh = 1203062813, this._al = 3238371032, this._bl = 914150663, this._cl = 812702999, this._dl = 4144912697, this._el = 4290775857, this._fl = 1750603025, this._gl = 1694076839, this._hl = 3204075428, this
                            }, Sha384.prototype._hash = function() {
                                var e = b.allocUnsafe(48);

                                function writeInt64BE(t, r, i) {
                                    e.writeInt32BE(t, i), e.writeInt32BE(r, i + 4)
                                }
                                return writeInt64BE(this._ah, this._al, 0), writeInt64BE(this._bh, this._bl, 8), writeInt64BE(this._ch, this._cl, 16), writeInt64BE(this._dh, this._dl, 24), writeInt64BE(this._eh, this._el, 32), writeInt64BE(this._fh, this._fl, 40), e
                            }, e.exports = Sha384
                        },
                        9934: function(e, t, r) {
                            var i = r(3782),
                                n = r(2858),
                                u = r(6911).Buffer,
                                b = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591],
                                m = Array(160);

                            function Sha512() {
                                this.init(), this._w = m, n.call(this, 128, 112)
                            }

                            function sigma0(e, t) {
                                return (e >>> 28 | t << 4) ^ (t >>> 2 | e << 30) ^ (t >>> 7 | e << 25)
                            }

                            function sigma1(e, t) {
                                return (e >>> 14 | t << 18) ^ (e >>> 18 | t << 14) ^ (t >>> 9 | e << 23)
                            }

                            function getCarry(e, t) {
                                return e >>> 0 < t >>> 0 ? 1 : 0
                            }
                            i(Sha512, n), Sha512.prototype.init = function() {
                                return this._ah = 1779033703, this._bh = 3144134277, this._ch = 1013904242, this._dh = 2773480762, this._eh = 1359893119, this._fh = 2600822924, this._gh = 528734635, this._hh = 1541459225, this._al = 4089235720, this._bl = 2227873595, this._cl = 4271175723, this._dl = 1595750129, this._el = 2917565137, this._fl = 725511199, this._gl = 4215389547, this._hl = 327033209, this
                            }, Sha512.prototype._update = function(e) {
                                for (var t = this._w, r = 0 | this._ah, i = 0 | this._bh, n = 0 | this._ch, u = 0 | this._dh, m = 0 | this._eh, y = 0 | this._fh, v = 0 | this._gh, g = 0 | this._hh, _ = 0 | this._al, w = 0 | this._bl, M = 0 | this._cl, S = 0 | this._dl, B = 0 | this._el, E = 0 | this._fl, k = 0 | this._gl, A = 0 | this._hl, N = 0; N < 32; N += 2) t[N] = e.readInt32BE(4 * N), t[N + 1] = e.readInt32BE(4 * N + 4);
                                for (; N < 160; N += 2) {
                                    var R, P, x, I, C, D, T, j, O = t[N - 30],
                                        H = t[N - 30 + 1],
                                        q = ((R = O) >>> 1 | (P = H) << 31) ^ (R >>> 8 | P << 24) ^ R >>> 7,
                                        L = ((x = H) >>> 1 | (I = O) << 31) ^ (x >>> 8 | I << 24) ^ (x >>> 7 | I << 25);
                                    O = t[N - 4], H = t[N - 4 + 1];
                                    var z = ((C = O) >>> 19 | (D = H) << 13) ^ (D >>> 29 | C << 3) ^ C >>> 6,
                                        U = ((T = H) >>> 19 | (j = O) << 13) ^ (j >>> 29 | T << 3) ^ (T >>> 6 | j << 26),
                                        K = t[N - 14],
                                        F = t[N - 14 + 1],
                                        W = t[N - 32],
                                        V = t[N - 32 + 1],
                                        G = L + F | 0,
                                        Z = q + K + getCarry(G, L) | 0;
                                    Z = (Z = Z + z + getCarry(G = G + U | 0, U) | 0) + W + getCarry(G = G + V | 0, V) | 0, t[N] = Z, t[N + 1] = G
                                }
                                for (var J = 0; J < 160; J += 2) {
                                    Z = t[J], G = t[J + 1];
                                    var X, Y, $, Q, ee, et, er, ei, en, ea, eo = (X = r) & (Y = i) | n & (X | Y),
                                        es = ($ = _) & (Q = w) | M & ($ | Q),
                                        ef = sigma0(r, _),
                                        eh = sigma0(_, r),
                                        ed = sigma1(m, B),
                                        ec = sigma1(B, m),
                                        eu = b[J],
                                        el = b[J + 1],
                                        ep = (ee = m, et = y, (er = v) ^ ee & (et ^ er)),
                                        eb = (ei = B, en = E, (ea = k) ^ ei & (en ^ ea)),
                                        em = A + ec | 0,
                                        ey = g + ed + getCarry(em, A) | 0;
                                    ey = (ey = (ey = ey + ep + getCarry(em = em + eb | 0, eb) | 0) + eu + getCarry(em = em + el | 0, el) | 0) + Z + getCarry(em = em + G | 0, G) | 0;
                                    var ev = eh + es | 0,
                                        eg = ef + eo + getCarry(ev, eh) | 0;
                                    g = v, A = k, v = y, k = E, y = m, E = B, m = u + ey + getCarry(B = S + em | 0, S) | 0, u = n, S = M, n = i, M = w, i = r, w = _, r = ey + eg + getCarry(_ = em + ev | 0, em) | 0
                                }
                                this._al = this._al + _ | 0, this._bl = this._bl + w | 0, this._cl = this._cl + M | 0, this._dl = this._dl + S | 0, this._el = this._el + B | 0, this._fl = this._fl + E | 0, this._gl = this._gl + k | 0, this._hl = this._hl + A | 0, this._ah = this._ah + r + getCarry(this._al, _) | 0, this._bh = this._bh + i + getCarry(this._bl, w) | 0, this._ch = this._ch + n + getCarry(this._cl, M) | 0, this._dh = this._dh + u + getCarry(this._dl, S) | 0, this._eh = this._eh + m + getCarry(this._el, B) | 0, this._fh = this._fh + y + getCarry(this._fl, E) | 0, this._gh = this._gh + v + getCarry(this._gl, k) | 0, this._hh = this._hh + g + getCarry(this._hl, A) | 0
                            }, Sha512.prototype._hash = function() {
                                var e = u.allocUnsafe(64);

                                function writeInt64BE(t, r, i) {
                                    e.writeInt32BE(t, i), e.writeInt32BE(r, i + 4)
                                }
                                return writeInt64BE(this._ah, this._al, 0), writeInt64BE(this._bh, this._bl, 8), writeInt64BE(this._ch, this._cl, 16), writeInt64BE(this._dh, this._dl, 24), writeInt64BE(this._eh, this._el, 32), writeInt64BE(this._fh, this._fl, 40), writeInt64BE(this._gh, this._gl, 48), writeInt64BE(this._hh, this._hl, 56), e
                            }, e.exports = Sha512
                        },
                        3704: function(e, t, r) {
                            "use strict";
                            var i = r(5055).Buffer,
                                n = i.isEncoding || function(e) {
                                    switch ((e = "" + e) && e.toLowerCase()) {
                                        case "hex":
                                        case "utf8":
                                        case "utf-8":
                                        case "ascii":
                                        case "binary":
                                        case "base64":
                                        case "ucs2":
                                        case "ucs-2":
                                        case "utf16le":
                                        case "utf-16le":
                                        case "raw":
                                            return !0;
                                        default:
                                            return !1
                                    }
                                };

                            function StringDecoder(e) {
                                var t;
                                switch (this.encoding = function(e) {
                                        var t = function(e) {
                                            var t;
                                            if (!e) return "utf8";
                                            for (;;) switch (e) {
                                                case "utf8":
                                                case "utf-8":
                                                    return "utf8";
                                                case "ucs2":
                                                case "ucs-2":
                                                case "utf16le":
                                                case "utf-16le":
                                                    return "utf16le";
                                                case "latin1":
                                                case "binary":
                                                    return "latin1";
                                                case "base64":
                                                case "ascii":
                                                case "hex":
                                                    return e;
                                                default:
                                                    if (t) return;
                                                    e = ("" + e).toLowerCase(), t = !0
                                            }
                                        }(e);
                                        if ("string" != typeof t && (i.isEncoding === n || !n(e))) throw Error("Unknown encoding: " + e);
                                        return t || e
                                    }(e), this.encoding) {
                                    case "utf16le":
                                        this.text = utf16Text, this.end = utf16End, t = 4;
                                        break;
                                    case "utf8":
                                        this.fillLast = utf8FillLast, t = 4;
                                        break;
                                    case "base64":
                                        this.text = base64Text, this.end = base64End, t = 3;
                                        break;
                                    default:
                                        this.write = simpleWrite, this.end = simpleEnd;
                                        return
                                }
                                this.lastNeed = 0, this.lastTotal = 0, this.lastChar = i.allocUnsafe(t)
                            }

                            function utf8CheckByte(e) {
                                return e <= 127 ? 0 : e >> 5 == 6 ? 2 : e >> 4 == 14 ? 3 : e >> 3 == 30 ? 4 : e >> 6 == 2 ? -1 : -2
                            }

                            function utf8FillLast(e) {
                                var t = this.lastTotal - this.lastNeed,
                                    r = function(e, t, r) {
                                        if ((192 & t[0]) != 128) return e.lastNeed = 0, "�";
                                        if (e.lastNeed > 1 && t.length > 1) {
                                            if ((192 & t[1]) != 128) return e.lastNeed = 1, "�";
                                            if (e.lastNeed > 2 && t.length > 2 && (192 & t[2]) != 128) return e.lastNeed = 2, "�"
                                        }
                                    }(this, e, 0);
                                return void 0 !== r ? r : this.lastNeed <= e.length ? (e.copy(this.lastChar, t, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : void(e.copy(this.lastChar, t, 0, e.length), this.lastNeed -= e.length)
                            }

                            function utf16Text(e, t) {
                                if ((e.length - t) % 2 == 0) {
                                    var r = e.toString("utf16le", t);
                                    if (r) {
                                        var i = r.charCodeAt(r.length - 1);
                                        if (i >= 55296 && i <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1], r.slice(0, -1)
                                    }
                                    return r
                                }
                                return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e[e.length - 1], e.toString("utf16le", t, e.length - 1)
                            }

                            function utf16End(e) {
                                var t = e && e.length ? this.write(e) : "";
                                if (this.lastNeed) {
                                    var r = this.lastTotal - this.lastNeed;
                                    return t + this.lastChar.toString("utf16le", 0, r)
                                }
                                return t
                            }

                            function base64Text(e, t) {
                                var r = (e.length - t) % 3;
                                return 0 === r ? e.toString("base64", t) : (this.lastNeed = 3 - r, this.lastTotal = 3, 1 === r ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1]), e.toString("base64", t, e.length - r))
                            }

                            function base64End(e) {
                                var t = e && e.length ? this.write(e) : "";
                                return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t
                            }

                            function simpleWrite(e) {
                                return e.toString(this.encoding)
                            }

                            function simpleEnd(e) {
                                return e && e.length ? this.write(e) : ""
                            }
                            t.s = StringDecoder, StringDecoder.prototype.write = function(e) {
                                var t, r;
                                if (0 === e.length) return "";
                                if (this.lastNeed) {
                                    if (void 0 === (t = this.fillLast(e))) return "";
                                    r = this.lastNeed, this.lastNeed = 0
                                } else r = 0;
                                return r < e.length ? t ? t + this.text(e, r) : this.text(e, r) : t || ""
                            }, StringDecoder.prototype.end = function(e) {
                                var t = e && e.length ? this.write(e) : "";
                                return this.lastNeed ? t + "�" : t
                            }, StringDecoder.prototype.text = function(e, t) {
                                var r = function(e, t, r) {
                                    var i = t.length - 1;
                                    if (i < r) return 0;
                                    var n = utf8CheckByte(t[i]);
                                    return n >= 0 ? (n > 0 && (e.lastNeed = n - 1), n) : --i < r || -2 === n ? 0 : (n = utf8CheckByte(t[i])) >= 0 ? (n > 0 && (e.lastNeed = n - 2), n) : --i < r || -2 === n ? 0 : (n = utf8CheckByte(t[i])) >= 0 ? (n > 0 && (2 === n ? n = 0 : e.lastNeed = n - 3), n) : 0
                                }(this, e, t);
                                if (!this.lastNeed) return e.toString("utf8", t);
                                this.lastTotal = r;
                                var i = e.length - (r - this.lastNeed);
                                return e.copy(this.lastChar, 0, i), e.toString("utf8", t, i)
                            }, StringDecoder.prototype.fillLast = function(e) {
                                if (this.lastNeed <= e.length) return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
                                e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), this.lastNeed -= e.length
                            }
                        },
                        6769: function(e) {
                            e.exports = function(e, t) {
                                if (config("noDeprecation")) return e;
                                var r = !1;
                                return function() {
                                    if (!r) {
                                        if (config("throwDeprecation")) throw Error(t);
                                        config("traceDeprecation") ? console.trace(t) : console.warn(t), r = !0
                                    }
                                    return e.apply(this, arguments)
                                }
                            };

                            function config(e) {
                                try {
                                    if (!r.g.localStorage) return !1
                                } catch (e) {
                                    return !1
                                }
                                var t = r.g.localStorage[e];
                                return null != t && "true" === String(t).toLowerCase()
                            }
                        },
                        4300: function(e) {
                            "use strict";
                            e.exports = r(185)
                        },
                        6113: function(e) {
                            "use strict";
                            e.exports = r(1183)
                        },
                        2361: function(e) {
                            "use strict";
                            e.exports = r(9944)
                        },
                        2781: function(e) {
                            "use strict";
                            e.exports = r(240)
                        },
                        1576: function(e) {
                            "use strict";
                            e.exports = r(2310)
                        },
                        3837: function(e) {
                            "use strict";
                            e.exports = r(5985)
                        },
                        6144: function(e) {
                            "use strict";
                            e.exports = r(947)
                        },
                        5866: function(e) {
                            "use strict";
                            e.exports = JSON.parse('{"aes-128-ecb":{"cipher":"AES","key":128,"iv":0,"mode":"ECB","type":"block"},"aes-192-ecb":{"cipher":"AES","key":192,"iv":0,"mode":"ECB","type":"block"},"aes-256-ecb":{"cipher":"AES","key":256,"iv":0,"mode":"ECB","type":"block"},"aes-128-cbc":{"cipher":"AES","key":128,"iv":16,"mode":"CBC","type":"block"},"aes-192-cbc":{"cipher":"AES","key":192,"iv":16,"mode":"CBC","type":"block"},"aes-256-cbc":{"cipher":"AES","key":256,"iv":16,"mode":"CBC","type":"block"},"aes128":{"cipher":"AES","key":128,"iv":16,"mode":"CBC","type":"block"},"aes192":{"cipher":"AES","key":192,"iv":16,"mode":"CBC","type":"block"},"aes256":{"cipher":"AES","key":256,"iv":16,"mode":"CBC","type":"block"},"aes-128-cfb":{"cipher":"AES","key":128,"iv":16,"mode":"CFB","type":"stream"},"aes-192-cfb":{"cipher":"AES","key":192,"iv":16,"mode":"CFB","type":"stream"},"aes-256-cfb":{"cipher":"AES","key":256,"iv":16,"mode":"CFB","type":"stream"},"aes-128-cfb8":{"cipher":"AES","key":128,"iv":16,"mode":"CFB8","type":"stream"},"aes-192-cfb8":{"cipher":"AES","key":192,"iv":16,"mode":"CFB8","type":"stream"},"aes-256-cfb8":{"cipher":"AES","key":256,"iv":16,"mode":"CFB8","type":"stream"},"aes-128-cfb1":{"cipher":"AES","key":128,"iv":16,"mode":"CFB1","type":"stream"},"aes-192-cfb1":{"cipher":"AES","key":192,"iv":16,"mode":"CFB1","type":"stream"},"aes-256-cfb1":{"cipher":"AES","key":256,"iv":16,"mode":"CFB1","type":"stream"},"aes-128-ofb":{"cipher":"AES","key":128,"iv":16,"mode":"OFB","type":"stream"},"aes-192-ofb":{"cipher":"AES","key":192,"iv":16,"mode":"OFB","type":"stream"},"aes-256-ofb":{"cipher":"AES","key":256,"iv":16,"mode":"OFB","type":"stream"},"aes-128-ctr":{"cipher":"AES","key":128,"iv":16,"mode":"CTR","type":"stream"},"aes-192-ctr":{"cipher":"AES","key":192,"iv":16,"mode":"CTR","type":"stream"},"aes-256-ctr":{"cipher":"AES","key":256,"iv":16,"mode":"CTR","type":"stream"},"aes-128-gcm":{"cipher":"AES","key":128,"iv":12,"mode":"GCM","type":"auth"},"aes-192-gcm":{"cipher":"AES","key":192,"iv":12,"mode":"GCM","type":"auth"},"aes-256-gcm":{"cipher":"AES","key":256,"iv":12,"mode":"GCM","type":"auth"}}')
                        },
                        2908: function(e) {
                            "use strict";
                            e.exports = JSON.parse('{"sha224WithRSAEncryption":{"sign":"rsa","hash":"sha224","id":"302d300d06096086480165030402040500041c"},"RSA-SHA224":{"sign":"ecdsa/rsa","hash":"sha224","id":"302d300d06096086480165030402040500041c"},"sha256WithRSAEncryption":{"sign":"rsa","hash":"sha256","id":"3031300d060960864801650304020105000420"},"RSA-SHA256":{"sign":"ecdsa/rsa","hash":"sha256","id":"3031300d060960864801650304020105000420"},"sha384WithRSAEncryption":{"sign":"rsa","hash":"sha384","id":"3041300d060960864801650304020205000430"},"RSA-SHA384":{"sign":"ecdsa/rsa","hash":"sha384","id":"3041300d060960864801650304020205000430"},"sha512WithRSAEncryption":{"sign":"rsa","hash":"sha512","id":"3051300d060960864801650304020305000440"},"RSA-SHA512":{"sign":"ecdsa/rsa","hash":"sha512","id":"3051300d060960864801650304020305000440"},"RSA-SHA1":{"sign":"rsa","hash":"sha1","id":"3021300906052b0e03021a05000414"},"ecdsa-with-SHA1":{"sign":"ecdsa","hash":"sha1","id":""},"sha256":{"sign":"ecdsa","hash":"sha256","id":""},"sha224":{"sign":"ecdsa","hash":"sha224","id":""},"sha384":{"sign":"ecdsa","hash":"sha384","id":""},"sha512":{"sign":"ecdsa","hash":"sha512","id":""},"DSA-SHA":{"sign":"dsa","hash":"sha1","id":""},"DSA-SHA1":{"sign":"dsa","hash":"sha1","id":""},"DSA":{"sign":"dsa","hash":"sha1","id":""},"DSA-WITH-SHA224":{"sign":"dsa","hash":"sha224","id":""},"DSA-SHA224":{"sign":"dsa","hash":"sha224","id":""},"DSA-WITH-SHA256":{"sign":"dsa","hash":"sha256","id":""},"DSA-SHA256":{"sign":"dsa","hash":"sha256","id":""},"DSA-WITH-SHA384":{"sign":"dsa","hash":"sha384","id":""},"DSA-SHA384":{"sign":"dsa","hash":"sha384","id":""},"DSA-WITH-SHA512":{"sign":"dsa","hash":"sha512","id":""},"DSA-SHA512":{"sign":"dsa","hash":"sha512","id":""},"DSA-RIPEMD160":{"sign":"dsa","hash":"rmd160","id":""},"ripemd160WithRSA":{"sign":"rsa","hash":"rmd160","id":"3021300906052b2403020105000414"},"RSA-RIPEMD160":{"sign":"rsa","hash":"rmd160","id":"3021300906052b2403020105000414"},"md5WithRSAEncryption":{"sign":"rsa","hash":"md5","id":"3020300c06082a864886f70d020505000410"},"RSA-MD5":{"sign":"rsa","hash":"md5","id":"3020300c06082a864886f70d020505000410"}}')
                        },
                        9267: function(e) {
                            "use strict";
                            e.exports = JSON.parse('{"1.3.132.0.10":"secp256k1","1.3.132.0.33":"p224","1.2.840.10045.3.1.1":"p192","1.2.840.10045.3.1.7":"p256","1.3.132.0.34":"p384","1.3.132.0.35":"p521"}')
                        },
                        7992: function(e) {
                            "use strict";
                            e.exports = JSON.parse('{"modp1":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a63a3620ffffffffffffffff"},"modp2":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece65381ffffffffffffffff"},"modp5":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca237327ffffffffffffffff"},"modp14":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aacaa68ffffffffffffffff"},"modp15":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a93ad2caffffffffffffffff"},"modp16":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c934063199ffffffffffffffff"},"modp17":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dcc4024ffffffffffffffff"},"modp18":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dbe115974a3926f12fee5e438777cb6a932df8cd8bec4d073b931ba3bc832b68d9dd300741fa7bf8afc47ed2576f6936ba424663aab639c5ae4f5683423b4742bf1c978238f16cbe39d652de3fdb8befc848ad922222e04a4037c0713eb57a81a23f0c73473fc646cea306b4bcbc8862f8385ddfa9d4b7fa2c087e879683303ed5bdd3a062b3cf5b3a278a66d2a13f83f44f82ddf310ee074ab6a364597e899a0255dc164f31cc50846851df9ab48195ded7ea1b1d510bd7ee74d73faf36bc31ecfa268359046f4eb879f924009438b481c6cd7889a002ed5ee382bc9190da6fc026e479558e4475677e9aa9e3050e2765694dfc81f56e880b96e7160c980dd98edd3dfffffffffffffffff"}}')
                        },
                        2531: function(e) {
                            "use strict";
                            e.exports = {
                                i8: "6.5.3"
                            }
                        },
                        2510: function(e) {
                            "use strict";
                            e.exports = JSON.parse('{"2.16.840.1.101.3.4.1.1":"aes-128-ecb","2.16.840.1.101.3.4.1.2":"aes-128-cbc","2.16.840.1.101.3.4.1.3":"aes-128-ofb","2.16.840.1.101.3.4.1.4":"aes-128-cfb","2.16.840.1.101.3.4.1.21":"aes-192-ecb","2.16.840.1.101.3.4.1.22":"aes-192-cbc","2.16.840.1.101.3.4.1.23":"aes-192-ofb","2.16.840.1.101.3.4.1.24":"aes-192-cfb","2.16.840.1.101.3.4.1.41":"aes-256-ecb","2.16.840.1.101.3.4.1.42":"aes-256-cbc","2.16.840.1.101.3.4.1.43":"aes-256-ofb","2.16.840.1.101.3.4.1.44":"aes-256-cfb"}')
                        }
                    },
                    w = {};

                function __nccwpck_require__(e) {
                    var t = w[e];
                    if (void 0 !== t) return t.exports;
                    var r = w[e] = {
                            id: e,
                            loaded: !1,
                            exports: {}
                        },
                        i = !0;
                    try {
                        _[e].call(r.exports, r, r.exports, __nccwpck_require__), i = !1
                    } finally {
                        i && delete w[e]
                    }
                    return r.loaded = !0, r.exports
                }
                __nccwpck_require__.nmd = function(e) {
                    return e.paths = [], e.children || (e.children = []), e
                }, __nccwpck_require__.ab = "//";
                var M = {};
                M.randomBytes = M.rng = M.pseudoRandomBytes = M.prng = __nccwpck_require__(7223), M.createHash = M.Hash = __nccwpck_require__(9739), M.createHmac = M.Hmac = __nccwpck_require__(4873), t = ["sha1", "sha224", "sha256", "sha384", "sha512", "md5", "rmd160"].concat(Object.keys(__nccwpck_require__(9276))), M.getHashes = function() {
                    return t
                }, u = __nccwpck_require__(4978), M.pbkdf2 = u.pbkdf2, M.pbkdf2Sync = u.pbkdf2Sync, b = __nccwpck_require__(8996), M.Cipher = b.Cipher, M.createCipher = b.createCipher, M.Cipheriv = b.Cipheriv, M.createCipheriv = b.createCipheriv, M.Decipher = b.Decipher, M.createDecipher = b.createDecipher, M.Decipheriv = b.Decipheriv, M.createDecipheriv = b.createDecipheriv, M.getCiphers = b.getCiphers, M.listCiphers = b.listCiphers, m = __nccwpck_require__(6587), M.DiffieHellmanGroup = m.DiffieHellmanGroup, M.createDiffieHellmanGroup = m.createDiffieHellmanGroup, M.getDiffieHellman = m.getDiffieHellman, M.createDiffieHellman = m.createDiffieHellman, M.DiffieHellman = m.DiffieHellman, y = __nccwpck_require__(4078), M.createSign = y.createSign, M.Sign = y.Sign, M.createVerify = y.createVerify, M.Verify = y.Verify, M.createECDH = __nccwpck_require__(9942), v = __nccwpck_require__(9783), M.publicEncrypt = v.publicEncrypt, M.privateEncrypt = v.privateEncrypt, M.publicDecrypt = v.publicDecrypt, M.privateDecrypt = v.privateDecrypt, g = __nccwpck_require__(6445), M.randomFill = g.randomFill, M.randomFillSync = g.randomFillSync, M.createCredentials = function() {
                    throw Error("sorry, createCredentials is not implemented yet\nwe accept pull requests\nhttps://github.com/crypto-browserify/crypto-browserify")
                }, M.constants = {
                    DH_CHECK_P_NOT_SAFE_PRIME: 2,
                    DH_CHECK_P_NOT_PRIME: 1,
                    DH_UNABLE_TO_CHECK_GENERATOR: 4,
                    DH_NOT_SUITABLE_GENERATOR: 8,
                    NPN_ENABLED: 1,
                    ALPN_ENABLED: 1,
                    RSA_PKCS1_PADDING: 1,
                    RSA_SSLV23_PADDING: 2,
                    RSA_NO_PADDING: 3,
                    RSA_PKCS1_OAEP_PADDING: 4,
                    RSA_X931_PADDING: 5,
                    RSA_PKCS1_PSS_PADDING: 6,
                    POINT_CONVERSION_COMPRESSED: 2,
                    POINT_CONVERSION_UNCOMPRESSED: 4,
                    POINT_CONVERSION_HYBRID: 6
                }, e.exports = M
            }()
        }
    }
]);