"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2811], {
        7594: function(e, r, t) {
            t.d(r, {
                PU: function() {
                    return useWalletBalances
                },
                q1: function() {
                    return useBridgeBalances
                },
                qO: function() {
                    return useBridge
                }
            });
            var n = t(7833),
                a = t(1248),
                o = t(7622),
                s = t(6179),
                l = t(1480),
                i = t(5130),
                c = t(3330),
                d = t(2488);

            function useBridge() {
                let e = (0, l.O)(),
                    {
                        data: r,
                        mutate: t
                    } = (0, o.ZP)((0, s.FP)("/user/wallet-balances")),
                    n = a.useRef(null),
                    [i, u] = a.useState(null),
                    [p, m] = a.useState(null),
                    h = a.useRef();
                a.useEffect(() => () => clearTimeout(h.current), []);
                let showLog = (e, r, t) => {
                        let a = null != t ? t : n.current;
                        if (null === a) throw Error("Bridge has not been initialized");
                        let o = {
                            ...a,
                            i18nKey: e,
                            logType: r,
                            show: !0
                        };
                        u(e => {
                            if (null == e || !e.show) return setTimeout(() => u(o), "error" === r ? 0 : 500), e;
                            {
                                let r = {
                                    ...e,
                                    show: !1
                                };
                                return setTimeout(() => u(o), 150), r
                            }
                        })
                    },
                    g = a.useCallback(() => {
                        u(e => null === e ? e : {
                            ...e,
                            show: !1
                        })
                    }, []),
                    handleFailed = e => {
                        switch (m(null), e) {
                            case "action":
                                return showLog("bridge:log.error_failed_deposit", "error");
                            case "approval":
                                return showLog("bridge:log.error_failed_approve", "error");
                            case "conversion":
                                return showLog("bridge:log.error_failed_convert", "error")
                        }
                    },
                    handleReject = (e, r) => {
                        var t, n;
                        m(null);
                        let a = null !== (n = null == e ? void 0 : null === (t = e.message) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== n ? n : "",
                            o = a.includes("user denied") || a.includes("user rejected");
                        if (o) switch (r) {
                            case "action":
                                return showLog("bridge:log.error_user_rejected_deposit", "error");
                            case "approval":
                                return showLog("bridge:log.error_user_rejected_approve", "error");
                            case "conversion":
                                return showLog("bridge:log.error_user_rejected_convert", "error")
                        } else switch (r) {
                            case "action":
                                return showLog("bridge:log.error_wallet_rejected_deposit", "error");
                            case "approval":
                                return showLog("bridge:log.error_wallet_rejected_approve", "error");
                            case "conversion":
                                return showLog("bridge:log.error_wallet_rejected_convert", "error")
                        }
                    },
                    init = r => {
                        let t = {
                            ...r
                        };
                        return e.isEthereum ? e.signer && e.provider ? (g(), n.current = t, t) : (showLog("bridge:log.error_provider_disconnected", "error", t), null) : (showLog("bridge:log.error_unsupported_network", "error", t), null)
                    },
                    deposit = async a => {
                        let o = a ? init(a) : n.current;
                        if (m("bridge:form.button_confirm_in_wallet"), null === o || null === e.signer || null === e.provider) return !1;
                        let s = await (0, d.Yf)(o.amount, o.asset);
                        if (null === s) return showLog("bridge:log.error_format_deposit", "error"), !1;
                        if (null !== s.approval) try {
                            let {
                                approval: r
                            } = s;
                            showLog("bridge:log.pending_approve", "pending"), m("bridge:form.button_confirm_in_wallet");
                            let t = await e.signer.sendTransaction(r);
                            m("bridge:form.button_wait_for_transaction");
                            let n = await (0, c.Mn)(e.provider)(t);
                            if (!n.status) return handleFailed("approval"), !1
                        } catch (e) {
                            return handleReject(e, "approval"), !1
                        }
                        if (null !== s.conversion) try {
                            let {
                                conversion: r
                            } = s;
                            showLog("bridge:log.pending_convert", "pending"), m("bridge:form.button_confirm_in_wallet");
                            let t = await e.signer.sendTransaction(r);
                            m("bridge:form.button_wait_for_transaction");
                            let n = await (0, c.Mn)(e.provider)(t);
                            if (!n.status) return handleFailed("conversion"), !1
                        } catch (e) {
                            return handleReject(e, "conversion"), !1
                        }
                        try {
                            let {
                                action: r
                            } = s;
                            showLog("bridge:log.pending_deposit", "pending"), m("bridge:form.button_confirm_in_wallet");
                            let t = await e.signer.sendTransaction(r);
                            m("bridge:form.button_wait_for_transaction");
                            let n = await (0, c.Mn)(e.provider)(t);
                            if (!n.status) return handleFailed("action"), !1
                        } catch (e) {
                            return handleReject(e, "action"), !1
                        }
                        if (showLog("bridge:log.confirmed_deposit", "confirmed"), m(null), void 0 !== r) {
                            var l, i;
                            t({
                                ...r,
                                balances: {
                                    ...r.balances,
                                    [o.asset.toUpperCase()]: "".concat(Number(null !== (l = r.balances[o.asset.toUpperCase()]) && void 0 !== l ? l : 0) - Number(null !== (i = o.amount) && void 0 !== i ? i : 0))
                                }
                            })
                        }
                        return !0
                    };
                return {
                    deposit,
                    dismissLog: g,
                    init,
                    log: i,
                    status: p
                }
            }

            function useBridgeBalances(e) {
                var r, t, a, l;
                let {
                    lang: c
                } = (0, n.Z)(), d = {
                    fractionDigits: "full",
                    ...e
                }, {
                    data: u,
                    isLoading: p
                } = (0, o.ZP)((0, s.FP)("/user/bridge-balances"), s.U2), format = e => {
                    var r, t;
                    let n = {
                        full: e > 100 ? 4 : Math.min(Math.max(null !== (t = null === (r = "".concat(e).split(".")[1]) || void 0 === r ? void 0 : r.length) && void 0 !== t ? t : 2, 2), 6),
                        max2: 2
                    };
                    return (0, i.HA)(e, c, {
                        maximumFractionDigits: n[d.fractionDigits],
                        minimumFractionDigits: 2,
                        useGrouping: "min2"
                    })
                };
                return {
                    isLoading: p,
                    eth: format(Number(null !== (a = null == u ? void 0 : null === (r = u.ethAmounts) || void 0 === r ? void 0 : r.depositAmount) && void 0 !== a ? a : 0)),
                    usd: format(Number(null !== (l = null == u ? void 0 : null === (t = u.usdAmounts) || void 0 === t ? void 0 : t.depositAmount) && void 0 !== l ? l : 0))
                }
            }

            function useWalletBalances() {
                return (0, o.ZP)((0, s.FP)("/user/wallet-balances"), s.U2)
            }
        },
        2488: function(e, r, t) {
            t.d(r, {
                NB: function() {
                    return s
                },
                Vf: function() {
                    return isEthAsset
                },
                Yf: function() {
                    return formatDeposit
                },
                Yj: function() {
                    return a
                }
            });
            var n, a, o = t(6179);
            (n = a || (a = {})).BLAST = "BLAST", n.DAI = "DAI", n.ETH = "ETH", n.STETH = "STETH", n.USDB = "USDB", n.USDC = "USDC", n.USDT = "USDT", n.WETH = "WETH";
            let s = ["ETH", "USDC", "USDT", "STETH", "WETH", "DAI"];

            function isEthAsset(e) {
                return ["ETH", "STETH", "WETH"].includes(e)
            }
            async function formatDeposit(e, r) {
                var t, n;
                let a = await fetch((0, o.FP)("/deposit/format"), {
                        body: JSON.stringify({
                            amount: e,
                            unit: r.toUpperCase()
                        }),
                        credentials: "include",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        method: "POST"
                    }),
                    {
                        actions: s,
                        approvals: l,
                        conversions: i,
                        success: c
                    } = await a.json();
                return !0 !== c ? null : {
                    action: s[0],
                    approval: null !== (t = l[0]) && void 0 !== t ? t : null,
                    conversion: null !== (n = i[0]) && void 0 !== n ? n : null
                }
            }
        },
        6529: function(e, r, t) {
            t.d(r, {
                fZ: function() {
                    return d
                },
                XN: function() {
                    return LocaleDialogMediaSmall
                },
                pd: function() {
                    return LocaleImage
                },
                K2: function() {
                    return LocaleSelector
                }
            });
            var n = t(4817),
                a = t(7835),
                o = t.n(a),
                s = t(7833),
                l = t(8821),
                i = t.n(l),
                c = t(1248);
            let d = i()(() => Promise.resolve(e => {
                let {
                    lang: r,
                    t
                } = (0, s.Z)("common"), a = r.replace("-", "_"), l = o().humanizer({
                    languages: {
                        symbols: {
                            d: () => t("days_symbol"),
                            h: () => t("hours_symbol"),
                            m: () => t("minutes_symbol"),
                            s: () => t("seconds_symbol")
                        }
                    }
                });
                return (0, n.jsx)(c.Fragment, {
                    children: l(e.ms, {
                        language: e.symbols ? "symbols" : a,
                        ...e.options
                    })
                })
            }), {
                ssr: !1
            });
            var u = t(8735),
                p = t.n(u);
            let LocaleImage = e => {
                let {
                    alt: r,
                    src: t,
                    ...a
                } = e;
                if ("string" != typeof t) throw Error("LocaleImage: expected src prop to be typeof string");
                let {
                    lang: o
                } = (0, s.Z)(), [l, i] = c.useState(!1);
                return (0, n.jsx)(p(), {
                    alt: r,
                    src: l ? t : t.replace(/(\.[^.]*)$/, "_".concat(o, "$1")),
                    onError: () => {
                        i(!0), console.warn("LocaleImage: missing localized image src ".concat(t, " for locale ").concat(o))
                    },
                    ...a
                })
            };
            var m = t(3821),
                h = t(5834),
                g = t(9241);

            function LocaleSelector() {
                let {
                    lang: e,
                    t: r
                } = (0, s.Z)("common"), [t, a] = c.useState(null), [o, l] = c.useState(!1), i = (0, g.P)();
                return (0, n.jsxs)("div", {
                    ref: a,
                    children: [(0, n.jsx)(h.hU, {
                        "aria-haspopup": "menu",
                        "aria-label": r("aria-label_button_locale_selector"),
                        name: "globe",
                        onClick: () => l(!o),
                        variant: "tertiary"
                    }), (0, n.jsxs)(h.J2, {
                        contentFrameProps: {
                            frameSize: "large"
                        },
                        isOpen: o,
                        onClose: () => l(!1),
                        placement: "bottom-end",
                        referenceElement: t,
                        overlayProps: {
                            autoFocus: !0,
                            lockFocus: !0
                        },
                        children: [(0, n.jsx)(h.L_, {
                            children: (0, n.jsx)("h2", {
                                className: "typography-brand-body-l-caps text-yellow-100",
                                children: r("h2_locale_selector")
                            })
                        }), (0, n.jsx)(h.v2, {
                            items: i.keys,
                            labelFunction: i.labelFor,
                            selectedItem: e,
                            onSelect: e => {
                                (0, m.Z)(e), l(!1)
                            }
                        })]
                    })]
                })
            }

            function LocaleDialogMediaSmall(e) {
                let {
                    isOpen: r,
                    onClose: t
                } = e, {
                    lang: a,
                    t: o
                } = (0, s.Z)("common"), l = (0, g.P)();
                return (0, n.jsxs)(h.u_, {
                    ariaLabel: o("aria-label_button_locale_selector"),
                    onClose: t,
                    open: r,
                    children: [(0, n.jsx)(h.Io, {
                        children: (0, n.jsx)("h2", {
                            className: "typography-brand-body-l-caps text-yellow-100",
                            children: o("h2_locale_selector")
                        })
                    }), (0, n.jsx)(h.v2, {
                        items: l.keys,
                        labelFunction: l.labelFor,
                        selectedItem: a,
                        onSelect: e => {
                            (0, m.Z)(e), t()
                        }
                    })]
                })
            }
        },
        9241: function(e, r, t) {
            t.d(r, {
                P: function() {
                    return useSupportedLangs
                }
            });
            var n = t(7833);
            let useSupportedLangs = () => {
                let {
                    t: e
                } = (0, n.Z)("common"), r = e("supported_languages", void 0, {
                    returnObjects: !0
                });
                return {
                    keys: Object.keys(r),
                    labelFor: e => {
                        let t = r[e];
                        if (!t) throw Error("Invalid locale");
                        return t
                    }
                }
            }
        },
        9752: function(e, r, t) {
            t.d(r, {
                JL: function() {
                    return Nav
                },
                Ww: function() {
                    return NavPoints
                },
                Ak: function() {
                    return NavProfile
                },
                NA: function() {
                    return NavProspectPoints
                }
            });
            var n = t(4817),
                a = t(7833),
                o = t(8735),
                s = t.n(o),
                l = t(7518),
                i = t.n(l),
                c = t(6497),
                d = t(1248),
                u = t(1389),
                p = t(5834),
                m = t(1480),
                h = t(3125),
                g = t(6529),
                f = t(9241),
                x = t(6359),
                b = t(7657),
                v = t(3460),
                y = t(8851),
                j = t(34),
                w = t(7594),
                _ = t(8299);
            let NavPoints = e => {
                    var r, t;
                    let {
                        me: o,
                        ...s
                    } = e, {
                        t: l
                    } = (0, a.Z)("common"), c = (0, w.q1)({
                        fractionDigits: "max2"
                    }), m = d.useRef(null), h = d.useRef(null);
                    if ("string" == typeof o || !o.hasSeenPoints) return null;
                    let {
                        pointsForBridging: g
                    } = o, f = "string" != typeof o && null !== (r = o.points) && void 0 !== r ? r : 0, x = !!g;
                    return (0, n.jsxs)("div", {
                        className: "flex flex-col justify-center",
                        children: [(0, n.jsx)(p.u, {
                            placement: "bottom-end",
                            referenceElement: m.current,
                            children: (0, n.jsx)("div", {
                                className: "typography-brand-body max-w-xs text-camo-200",
                                children: l("nav.tooltip_eth")
                            })
                        }), (0, n.jsx)(p.u, {
                            placement: "bottom-end",
                            referenceElement: h.current,
                            children: (0, n.jsx)("div", {
                                className: "typography-brand-body max-w-xs text-camo-200",
                                children: l("nav.tooltip_usdb")
                            })
                        }), o.hasBridged ? (0, n.jsxs)(d.Fragment, {
                            children: [(0, n.jsx)("div", {
                                className: "typography-brand-body-l-caps flex items-center text-camo-300",
                                children: (0, n.jsx)(N, {
                                    end: f,
                                    fromZero: null !== (t = s.countUpFromZero) && void 0 !== t && t
                                })
                            }), (0, n.jsx)("div", {
                                className: "typography-brand-body flex items-center text-camo-400",
                                children: (0, n.jsx)(y.Z, {
                                    i18nKey: "common:nav.bridged",
                                    components: {
                                        0: (0, n.jsx)("span", {
                                            className: "mr-2",
                                            children: (0, n.jsx)(p.JO, {
                                                ref: m,
                                                height: 20,
                                                name: "eth"
                                            })
                                        }),
                                        1: (0, n.jsx)("span", {
                                            children: (0, n.jsx)(p.JO, {
                                                ref: h,
                                                height: 20,
                                                name: "usdb"
                                            })
                                        })
                                    },
                                    values: {
                                        eth: c.eth,
                                        usd: c.usd
                                    }
                                })
                            })]
                        }) : (0, n.jsxs)(i(), {
                            href: "/airdrop/early-access/bridge",
                            className: (0, u.m)("interactive-text typography-brand-body-l-caps flex items-center", x ? "text-mars-300" : "text-camo-300"),
                            children: [(0, n.jsx)(y.Z, {
                                values: {
                                    count: g
                                },
                                i18nKey: x ? "common:nav.points_prospect_eligible" : "common:nav.points_prospect_ineligible"
                            }), x && (0, n.jsx)(p.JO, {
                                name: "lock"
                            })]
                        })]
                    })
                },
                N = d.memo(e => {
                    let {
                        end: r,
                        fromZero: t
                    } = e, {
                        t: o
                    } = (0, a.Z)("common"), s = d.useRef(0);
                    return d.useEffect(() => {
                        s.current = r
                    }), (0, n.jsx)(j.ZP, {
                        duration: 2,
                        end: r,
                        start: 0 !== s.current || t ? s.current : r,
                        easingFn: d.useCallback((e, r, t, n) => -t * (e /= n) * (e - 2) + r, []),
                        formattingFn: d.useCallback(e => o("nav.points", {
                            count: e
                        }), [o]),
                        children: e => {
                            let {
                                countUpRef: r
                            } = e;
                            return (0, n.jsx)("span", {
                                ref: r
                            })
                        }
                    })
                }, (e, r) => e.end === r.end && e.fromZero === r.fromZero);
            N.displayName = "CountUpCurrentPoints";
            let NavProspectPoints = e => {
                if ("string" == typeof e.me) throw Error("NavProspectPoints: expected authorized `me`");
                let {
                    t: r
                } = (0, a.Z)("common"), {
                    pointsForBridging: t
                } = e.me, o = !!t, s = d.useCallback(e => r(o ? "nav.points_prospect_eligible" : "nav.points_prospect_ineligible", {
                    count: e
                }), [r, o]);
                return "number" == typeof t && 0 !== t ? (0, n.jsx)(b.WV, {
                    appear: !0,
                    duration: e.startAsRevealed ? 0 : 1e3,
                    in: e.in,
                    children: (0, n.jsxs)("div", {
                        className: (0, u.m)("typography-brand-body-l-caps flex items-center transition-colors", e.reveal || e.startAsRevealed ? "text-mars-300" : "text-camo-300"),
                        children: [(0, n.jsx)(_.ug, {
                            duration: e.startAsRevealed ? 0 : 1e3,
                            in: e.in,
                            children: e.reveal ? (0, n.jsx)(j.ZP, {
                                duration: 2,
                                end: t,
                                formattingFn: s,
                                start: 0,
                                children: e => {
                                    let {
                                        countUpRef: r
                                    } = e;
                                    return (0, n.jsx)("span", {
                                        ref: r
                                    })
                                }
                            }) : (0, n.jsx)("span", {
                                children: s(e.startAsRevealed ? t : 0)
                            })
                        }), (0, n.jsx)(b.WV, {
                            appear: !0,
                            duration: e.startAsRevealed ? 0 : 500,
                            in: e.reveal || e.startAsRevealed,
                            children: (0, n.jsx)("div", {
                                children: (0, n.jsx)(_.ug, {
                                    duration: e.in ? 0 : 1e3,
                                    in: e.in,
                                    children: (0, n.jsx)(p.JO, {
                                        name: "lock"
                                    })
                                })
                            })
                        })]
                    })
                }) : (0, n.jsx)(b.WV, {
                    appear: !0,
                    in: e.in,
                    children: (0, n.jsx)("div", {
                        className: "typography-brand-body-l-caps flex items-center text-camo-300",
                        children: s(0)
                    })
                })
            };
            var L = t(4072),
                k = t(8347),
                P = t(5644),
                S = t(350);
            let NavProfile = e => {
                    var r;
                    let {
                        marginTop: t,
                        me: o,
                        underline: l
                    } = e, c = (0, m.O)(), p = (0, P.U)(), {
                        t: h
                    } = (0, a.Z)("common"), f = (0, S.A)(), x = "string" != typeof o && (null === (r = o.twitter) || void 0 === r ? void 0 : r.profileImageUrl), b = "string" != typeof o && o.displayName, v = c.signer ? (0, L.K)(c.signer.address) : null, y = f.address ? (0, L.K)(f.address) : null, j = null != y ? y : v;
                    return (0, n.jsxs)(d.Fragment, {
                        children: [(0, n.jsxs)("div", {
                            className: "flex h-max w-max items-center gap-4",
                            style: {
                                marginTop: t
                            },
                            children: [(0, n.jsx)("button", {
                                className: "h-[40px] w-[40px]",
                                onClick: p.open,
                                children: "string" == typeof x && x ? (0, n.jsx)(s(), {
                                    alt: h("profile.img.alt_avatar"),
                                    className: "rounded-full",
                                    height: 40,
                                    src: x,
                                    width: 40
                                }) : "string" == typeof j && (0, n.jsx)(k.r, {
                                    address: j,
                                    size: "40px"
                                })
                            }), (0, n.jsxs)(i(), {
                                href: "string" == typeof o ? "/airdrop" : "string" != typeof o.registeredOn ? "/airdrop/early-access" : !1 === o.hasBridged ? "/airdrop/early-access/bridge" : "/airdrop",
                                className: (0, u.m)("group", "[&>*:only-child]:typography-brand-body-l [&>*:only-child]:text-camo-300", "[&>*:first-child]:typography-brand-body-l-caps [&>*:first-child]:text-camo-300", "[&>*:last-child]:typography-brand-body [&>*:last-child]:text-camo-400"),
                                children: ["string" == typeof b && (0, n.jsx)("div", {
                                    className: "interactive-text-group",
                                    children: b
                                }), "string" == typeof j && (0, n.jsx)("div", {
                                    className: "interactive-text-group",
                                    children: j.slice(0, 12)
                                })]
                            }), (0, n.jsx)(g.K2, {})]
                        }), l]
                    })
                },
                Nav = e => {
                    let {
                        me: r,
                        navPoints: t,
                        navProfile: o
                    } = e, {
                        t: s
                    } = (0, a.Z)("common"), l = (0, h.G)(), i = (0, m.O)(), f = (0, c.useRouter)(), [x, b] = d.useState(!1), [v, y] = d.useState(null), j = null == v ? void 0 : v.getBoundingClientRect(), w = [{
                        active: f.pathname.startsWith("/airdrop"),
                        href: "/airdrop",
                        label: s("airdrop"),
                        show: !0
                    }, {
                        active: f.pathname.startsWith("/leaderboard"),
                        href: "/leaderboard",
                        label: s("leaderboard"),
                        show: !0
                    }, {
                        active: "/devs" === f.pathname,
                        href: "/devs",
                        label: s("devs"),
                        show: !0
                    }, {
                        active: "/about" === f.pathname,
                        href: "/about",
                        label: s("about"),
                        show: !0
                    }, {
                        active: f.pathname.startsWith("/bridge"),
                        href: "/bridge",
                        label: s("bridge"),
                        show: "string" != typeof r && !0 === r.hasBridged
                    }];
                    return (0, n.jsxs)("div", {
                        className: "flex flex-1 items-center justify-between gap-5 overflow-x-hidden",
                        children: [(0, n.jsx)(NavHamburger, {
                            in: x,
                            navLinks: w
                        }), (0, n.jsxs)("div", {
                            className: "flex flex-1 items-center justify-between sm:justify-start",
                            children: [(0, n.jsx)(NavLogo, {}), (0, n.jsxs)("nav", {
                                className: "ml-6 hidden items-center gap-2 xs:flex",
                                children: [w.map(e => (0, n.jsx)(NavLink, {
                                    navLink: e,
                                    onClick: l.quit,
                                    setElement: e.active ? y : void 0
                                }, e.href)), v && (0, n.jsx)(p.h_, {
                                    children: (0, n.jsx)("div", {
                                        "aria-hidden": !0,
                                        className: "fixed z-20 h-[1px] translate-y-[12px] bg-yellow-100 sm:translate-y-[13px] lg:translate-y-[19px]",
                                        style: {
                                            left: null == j ? void 0 : j.left,
                                            top: null == j ? void 0 : j.bottom,
                                            width: null == j ? void 0 : j.width
                                        }
                                    })
                                }), "string" == typeof r && !i.isConnecting && !i.isConnected && (0, n.jsx)(g.K2, {})]
                            })]
                        }), (0, n.jsx)("div", {
                            className: (0, u.m)("block transition-transform duration-500 xs:hidden", x ? "rotate-90" : "rotate-0"),
                            children: (0, n.jsx)(p.hU, {
                                "aria-label": s("aria-label_icon_hamburger"),
                                name: "menu",
                                variant: x ? "secondary" : "primary",
                                onClick: () => {
                                    b(e => !e)
                                }
                            })
                        }), (0, n.jsxs)("div", {
                            className: "hidden overflow-x-auto xs:gap-10 sm:flex",
                            children: ["boolean" == typeof t ? t && (0, n.jsx)(NavPoints, {
                                me: r
                            }) : t, "string" != typeof r && ("boolean" == typeof o ? o && (0, n.jsx)(NavProfile, {
                                me: r
                            }) : o)]
                        })]
                    })
                },
                NavLogo = () => {
                    let e = {
                        lg: {
                            h: 54,
                            w: 256
                        },
                        md: {
                            h: 40,
                            w: 170
                        },
                        sm: {
                            h: 32,
                            w: 136
                        }
                    };
                    return (0, n.jsxs)(d.Fragment, {
                        children: [(0, n.jsx)(i(), {
                            className: "flex items-center sm:hidden",
                            href: "/",
                            style: {
                                height: e.sm.h,
                                width: e.sm.w
                            },
                            children: (0, n.jsx)(s(), {
                                alt: "Blast Logo",
                                height: e.sm.h,
                                src: "/images/logo-glow.png",
                                width: e.sm.w
                            })
                        }), (0, n.jsx)(i(), {
                            className: "hidden items-center sm:flex lg:hidden",
                            href: "/",
                            style: {
                                height: e.md.h,
                                width: e.md.w
                            },
                            children: (0, n.jsx)(s(), {
                                alt: "Blast Logo",
                                height: e.md.h,
                                src: "/images/logo-glow.png",
                                width: e.md.w
                            })
                        }), (0, n.jsx)(i(), {
                            className: "hidden items-center lg:flex",
                            href: "/",
                            style: {
                                height: e.lg.h,
                                width: e.lg.w
                            },
                            children: (0, n.jsx)(s(), {
                                alt: "Blast Logo",
                                height: e.lg.h,
                                src: "/images/logo-glow.png",
                                width: e.lg.w
                            })
                        })]
                    })
                };

            function NavLink(e) {
                let {
                    navLink: r,
                    onClick: t,
                    setElement: a
                } = e;
                return r.show ? (0, n.jsx)(d.Fragment, {
                    children: (0, n.jsx)("div", {
                        ref: a,
                        className: "typography-brand-body-l-caps px-2 py-2 sm:px-4",
                        children: (0, n.jsx)(i(), {
                            href: r.href,
                            onClick: t,
                            className: (0, u.m)("interactive-text", r.active ? "text-yellow-100" : "text-camo-300"),
                            children: r.label
                        })
                    }, r.href)
                }) : null
            }
            let NavHamburger = e => {
                let r = (0, f.P)(),
                    {
                        lang: t
                    } = (0, a.Z)("common");
                (0, v.Pr)(e.in);
                let [o, s] = d.useState(!1);
                return (0, n.jsx)(b.WV, {
                    appear: !0,
                    in: e.in,
                    children: (0, n.jsxs)("div", {
                        className: "absolute inset-0 z-[-1] h-screen pb-6 pt-20 backdrop-blur-[12px] backdrop-brightness-50",
                        children: [(0, n.jsx)(x.iz, {
                            axis: "x",
                            className: "h-[2px] translate-y-[-2px] bg-camo-500"
                        }), (0, n.jsxs)("div", {
                            className: "flex flex-col divide-y divide-camo-500 border-b border-camo-500",
                            children: [e.navLinks.map(e => !!e.show && (0, n.jsx)(i(), {
                                href: e.href,
                                className: (0, u.m)("typography-brand-body-l-bold interactive-text w-full p-6 uppercase tracking-[1.2px]", e.active ? "text-yellow-100" : "text-camo-300"),
                                children: e.label
                            }, e.href)), (0, n.jsxs)("div", {
                                className: "typography-brand-body-l-bold interactive-text flex w-full cursor-pointer items-center gap-2 p-6 uppercase tracking-[1.2px] text-camo-300",
                                onClick: () => s(!0),
                                children: [(0, n.jsx)(p.JO, {
                                    name: "globe"
                                }), (0, n.jsx)("span", {
                                    children: r.labelFor(t)
                                })]
                            }), (0, n.jsx)(g.XN, {
                                isOpen: o,
                                onClose: () => s(!1)
                            }), (0, n.jsxs)(i(), {
                                className: "typography-brand-body-l-bold interactive-text flex w-full cursor-pointer items-center gap-2 p-6 uppercase tracking-[1.2px] text-camo-300",
                                href: "https://twitter.com/Blast_L2",
                                rel: "noreferrer",
                                target: "_blank",
                                children: [(0, n.jsx)(p.JO, {
                                    name: "twitter-filled"
                                }), (0, n.jsx)("span", {
                                    children: "Twitter"
                                })]
                            }), (0, n.jsxs)(i(), {
                                className: "typography-brand-body-l-bold interactive-text flex w-full cursor-pointer items-center gap-2 p-6 uppercase tracking-[1.2px] text-camo-300",
                                href: "https://discord.gg/blast-l2",
                                rel: "noreferrer",
                                target: "_blank",
                                children: [(0, n.jsx)(p.JO, {
                                    name: "discord"
                                }), (0, n.jsx)("span", {
                                    children: "Discord"
                                })]
                            })]
                        })]
                    })
                })
            }
        },
        6897: function(e, r, t) {
            t.d(r, {
                fz: function() {
                    return nextPage
                }
            });
            var n = t(4817);

            function nextPage(e) {
                return r => (0, n.jsx)(e, {
                    ...r
                })
            }
            t(5147), t(6010), t(4878), t(3303), t(6179), t(3338)
        }
    }
]);