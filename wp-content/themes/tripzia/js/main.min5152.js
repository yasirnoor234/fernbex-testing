"use strict";
jQuery(document).ready(function () {
    jQuery(".post.cymolthemes-box-blog-classic").each(function (e) {
        var t = jQuery(this);
        t.find(".cmt-social-share-title").on("click", function () {
            return t.find(".cmt-social-share-post-wrapper").toggleClass("cmt-show-sharelinks"), !1;
        });
    }),
        jQuery(".widget_nav_menu li a").each(function () {
            jQuery(this).attr("href") || jQuery(this).closest("li").addClass("empty_link");
        }),
        jQuery(".cmt-sboxheader-search-link a").addClass("sclose"),
        jQuery(".cmt-sboxheader-search-link a").on("click", function () {
            jQuery(".field.searchform-s").focus(),
                jQuery(".cmt-sboxheader-search-link a").hasClass("sclose")
                    ? (jQuery(".cmt-sboxheader-search-link a i").removeClass("cmt-tripzia-icon-search").addClass("cmt-tripzia-icon-close"),
                      jQuery(this).removeClass("sclose").addClass("open"),
                      jQuery(".cmt-search-overlay").addClass("st-show"))
                    : (jQuery(this).removeClass("open").addClass("sclose"),
                      jQuery(".cmt-sboxheader-search-link i").removeClass("cmt-tripzia-icon-close").addClass("cmt-tripzia-icon-search"),
                      jQuery(".cmt-search-overlay").removeClass("st-show"));
        }),
        jQuery(".cymolthemes-fbar-btn > a.cymolthemes-fbar-btn-link").on("click", function () {
            return (
                jQuery(this).closest(".cymolthemes-fbar-main-w").hasClass("cymolthemes-fbar-position-default") &&
                    ("none" == jQuery(".cymolthemes-fbar-box-w").css("display")
                        ? (jQuery(".cmt-sboxfbar-open-icon", this).fadeOut(), jQuery(".cmt-fbar-close-icon", this).fadeIn(), jQuery(".cymolthemes-fbar-box-w").slideDown())
                        : (jQuery(".cmt-sboxfbar-open-icon", this).fadeIn(), jQuery(".cmt-fbar-close-icon", this).fadeOut(), jQuery(".cymolthemes-fbar-box-w").slideUp())),
                !1
            );
        }),
        jQuery(".cmt-fbar-close, .cymolthemes-fbar-btn > a.cymolthemes-fbar-btn-link, .cmt-float-overlay").on("click", function () {
            jQuery(".cymolthemes-fbar-box-w").toggleClass("animated"), jQuery(".cmt-float-overlay").toggleClass("animated"), jQuery(".cymolthemes-fbar-btn").toggleClass("animated");
        }),
        jQuery(".vc_row-o-equal-height, .cmt-sboxequalheightdiv").each(function () {
            var e = jQuery(this);
            jQuery(".wpb_column", e).each(function () {
                var e = jQuery(this);
                if (
                    ((jQuery(".cmt-col-wrapper-bg-layer", e).length > 0 && "none" != jQuery(".cmt-col-wrapper-bg-layer", e).css("background-image")) ||
                        (jQuery(".vc_column-inner", e).length > 0 && "none" != jQuery(".vc_column-inner", e).css("background-image"))) &&
                    "" == jQuery(".wpb_wrapper", e).html().trim()
                ) {
                    var t;
                    if (jQuery(".cmt-col-wrapper-bg-layer", e).length > 0 && "none" != jQuery(".cmt-col-wrapper-bg-layer", e).css("background-image"))
                        t = (t = jQuery(".cmt-col-wrapper-bg-layer", e).css("background-image").replace("url(", "")).replace(")", "");
                    else t = (t = jQuery(".vc_column-inner", e).css("background-image").replace("url(", "")).replace(")", "");
                    0 == jQuery(".cmt-sboxequal-height-image", e).length && jQuery(".vc_column-inner", e).after("<img src=" + t + ' class="cmt-sboxequal-height-image" />'), jQuery(e).addClass("cmt-sboxemtydiv");
                }
            });
        });
}),
    jQuery("#scroll_up").hide(),
    jQuery(window).scroll(function () {
        jQuery(this).scrollTop() >= 100 ? (jQuery("#scroll_up").fadeIn(200), jQuery("#scroll_up").addClass("top-visible")) : (jQuery("#scroll_up").fadeOut(200), jQuery("#scroll_up").removeClass("top-visible"));
    }),
    jQuery("#scroll_up").on("click", function () {
        return jQuery("body,html").animate({ scrollTop: 0 }, 500), !1;
    });
var equalheight = function (e) {
    var t,
        s = 0,
        r = 0,
        o = new Array();
    jQuery(e).each(function () {
        if (((t = jQuery(this)), jQuery(t).outerHeight("auto"), (topPostion = t.position().top), r != topPostion)) {
            for (currentDiv = 0; currentDiv < o.length; currentDiv++) o[currentDiv].height(s);
            (o.length = 0), (r = topPostion), (s = t.outerHeight()), o.push(t);
        } else o.push(t), (s = s < t.outerHeight() ? t.outerHeight() : s);
        for (currentDiv = 0; currentDiv < o.length; currentDiv++) o[currentDiv].outerHeight(s);
    });
};
function cymolthemes_sticky() {
    if ("function" == typeof jQuery.fn.stick_in_parent) {
        var e = 0;
        jQuery("body").hasClass("admin-bar") && (e = jQuery("#wpadminbar").height());
        var t = jQuery(window).width();
        parseInt(t) > parseInt(cmt_breakpoint) ? jQuery(".cmt-sboxstickable-header").stick_in_parent({ parent: "body", spacer: !1, offset_top: e }) : jQuery(".cmt-sboxstickable-header").trigger("sticky_kit:detach");
    }
}
function cymolthemes_setCookie(e, t, s) {
    var r = new Date(),
        o = r.getTime();
    (o += 864e5), r.setTime(o);
    var i = escape(t) + (null == s ? "" : "; expires=" + r.toGMTString());
    document.cookie = e + "=" + i;
}
function setHeight(e) {
    var t = 0;
    (e = jQuery(e)).css("height", "auto"),
        jQuery(window).width() > 479 &&
            (e.each(function () {
                jQuery(this).height() > t && (t = jQuery(this).height());
            }),
            e.height(t));
}
function cymolthemes_blogmasonry() {
    jQuery().isotope &&
        jQuery("#content.cymolthemes-blog-col-page").length > 0 &&
        (jQuery("#content.cymolthemes-blog-col-page").masonry(), jQuery("#content.cymolthemes-blog-col-page").isotope({ itemSelector: ".post-box", masonry: {}, sortBy: "original-order" }));
}
function cymolthemes_stickyFooter() {
    jQuery("body").hasClass("cymolthemes-sticky-footer") && jQuery("div#content-wrapper").css("marginBottom", jQuery("footer#colophon").height());
}
function setEmptySelectBox(e) {
    "" == jQuery(e).val() ? jQuery(e).addClass("empty") : jQuery(e).removeClass("empty");
}
function cymolthemes_hide_togle_link() {
    jQuery("#navbar div.mega-menu-wrap ul.mega-menu").length > 0 && jQuery("h3.menu-toggle").css("display", "none");
}
function cymolthemes_reset_gmap() {
    jQuery(".cymolthemes-fbar-box-w > div > aside").each(function () {
        var e = jQuery(this);
        jQuery('iframe[src^="https://www.google.com/maps/"], iframe[src^="http://www.google.com/maps/"]', e).each(function () {
            jQuery(this).hasClass("cymolthemes-set-gmap") ||
                (jQuery(this).attr("src", jQuery(this).attr("src") + ""),
                jQuery(this).load(function () {
                    jQuery(this).addClass("cymolthemes-set-gmap").animate({ opacity: 1 }, 1e3);
                }));
        });
    });
}
function cymolthemes_hide_gmap() {
    jQuery(".cymolthemes-fbar-box-w > div > aside").each(function () {
        var e = jQuery(this);
        jQuery('iframe[src^="https://www.google.com/maps/"], iframe[src^="http://www.google.com/maps/"]', e).each(function () {
            jQuery(this).hasClass("cymolthemes-set-gmap") || (jQuery(this).css({ opacity: 0 }), jQuery(this).css("display", "block"));
        });
    });
}
function cymolthemes_isotope() {
    jQuery(".cymolthemes-boxes-sortable-yes,.cymolthemes-sortable-yes").each(function () {
        var e = jQuery(".cymolthemes-boxes-row-wrapper", this),
            t = jQuery(".cmt-sboxsortable-wrapper a", this);
        e.isotope({ animationEngine: "best-available" }),
            t.on("click", function (s) {
                var r = jQuery(this).attr("data-filter");
                e.isotope({ filter: r, itemSelector: ".isotope-item" }), t.removeClass("selected"), jQuery("#filter-by li").removeClass("current-cat"), jQuery(this).addClass("selected"), s.preventDefault();
            });
    });
}
function tripzia_logMarginPadding() {
    jQuery(".wpb_column").each(function () {
        if (jQuery(this).hasClass("cmt-sboxleft-span")) {
            var e = jQuery(this).parent().css("padding-left").replace("px", "");
            e = parseInt(e);
            var t = jQuery(this).css("width").replace("px", ""),
                s = e + (t = parseInt(t)),
                r = "",
                o = "",
                i = Math.floor(1e6 * Math.random() + 1);
            if (((i = "tripzia-random-class-" + i), jQuery(this).addClass(i), (r += "padding-left: " + s + "px;"), "none" != jQuery(".vc_column-inner", this).css("background-image"))) {
                var a = jQuery(".vc_column-inner", this).css("background-image");
                jQuery(".vc_column-inner", this).css("background-image", "none", "!important"), (r += "background-image: " + a + ";");
            }
            if ("" != jQuery(".vc_column-inner", this).css("background-color") || "inherit" != jQuery(".vc_column-inner", this).css("background-color"))
                o += "background-color: " + jQuery(".vc_column-inner", this).css("background-color") + ";";
            ("" == r && "" == o) || jQuery("head").append("<style>." + i + ":after{" + r + "} ." + i + ":before{" + o + "} .cmt-sboxleft-span .vc_column-inner{background-image:none !important;}</style>");
        }
    });
}
function tripzia_logMarginPadding_right() {
    jQuery(".wpb_column").each(function () {
        if (jQuery(this).hasClass("cmt-sboxright-span")) {
            var e = jQuery(this).parent().css("padding-right").replace("px", "");
            e = parseInt(e);
            var t = jQuery(this).css("width").replace("px", ""),
                s = e + (t = parseInt(t)),
                r = "",
                o = "",
                i = Math.floor(1e6 * Math.random() + 1);
            if (((i = "tripzia-random-class-" + i), jQuery(this).addClass(i), (r += "padding-right: " + s + "px;"), "none" != jQuery(".vc_column-inner", this).css("background-image"))) {
                var a = jQuery(".vc_column-inner", this).css("background-image");
                jQuery(".vc_column-inner", this).css("background-image", "none", "!important"), (r += "background-image: " + a + ";");
            }
            if ("" != jQuery(".vc_column-inner", this).css("background-color") || "inherit" != jQuery(".vc_column-inner", this).css("background-color"))
                o += "background-color: " + jQuery(".vc_column-inner", this).css("background-color") + ";";
            ("" == r && "" == o) || jQuery("head").append("<style>." + i + ":after{" + r + "} ." + i + ":before{" + o + "} .cmt-sboxright-span .vc_column-inner{background-image:none !important;}</style>");
        }
    });
}
jQuery(".cmt-sboxsresult-form-wrapper").length > 0 &&
    (jQuery(".cmt-sboxsresult-form-wrapper .cmt-sboxsresults-settings-btn").on("click", function () {
        return (
            jQuery(".cmt-sboxsresult-form-wrapper .cmt-sboxsresult-form-bottom").slideToggle("400", function () {
                jQuery(".cmt-sboxsresult-form-wrapper .cmt-sboxsresult-form-bottom").is(":hidden")
                    ? jQuery(".cmt-sboxsresult-form-wrapper .cmt-sboxsresults-settings-btn").removeClass("cmt-sboxsresult-btn-active")
                    : jQuery(".cmt-sboxsresult-form-wrapper .cmt-sboxsresults-settings-btn").addClass("cmt-sboxsresult-btn-active");
            }),
            !1
        );
    }),
    jQuery(".cmt-sboxsresult-form-wrapper form.search-form").length > 0 &&
        0 == jQuery(".cmt-sboxsresult-form-wrapper form.search-form input[name='post_type']").length &&
        jQuery("<input>").attr({ type: "hidden", name: "post_type" }).appendTo(".cmt-sboxsresult-form-wrapper form.search-form"),
    jQuery(".cmt-sboxsresult-form-wrapper .cmt-sboxsresult-cpt-select").change(function () {
        jQuery(".cmt-sboxsresult-form-wrapper form.search-form input[name='post_type']").val(jQuery(this).val());
    }),
    jQuery(".cmt-sboxsresult-form-wrapper .cmt-sboxsresult-form-sbtbtn").on("click", function () {
        jQuery(".cmt-sboxsresult-form-wrapper form.search-form").submit();
    })),
    jQuery(document).ready(function (e) {
        cymolthemes_hide_gmap(),
            jQuery("#site-header-menu #site-navigation div.nav-menu > ul > li:has(ul), .cmt-mmmenu-override-yes #site-header-menu #site-navigation .mega-menu-wrap > ul > li:has(ul)").append(
                "<span class='righticon'><i class='cmt-tripzia-icon-angle-down'></i></span>"
            ),
            jQuery(".cmt-mmmenu-override-yes #site-navigation .mega-menu-wrap > ul > li.menu-item-language ul").addClass("mega-sub-menu"),
            jQuery(".cmt-mmmenu-override-yes #navbar #site-navigation .mega-menu-wrap .mega-menu.mega-menu-horizontal > li.menu-item-language > a").show(),
            jQuery(".cmt-mmmenu-override-yes #site-navigation .mega-menu-wrap > ul > li.menu-item-language").hover(
                function () {
                    jQuery(".cmt-mmmenu-override-yes #navbar #site-navigation .mega-menu-wrap .mega-menu.mega-menu-horizontal .mega-menu-flyout .mega-sub-menu").css("display", "none"), jQuery(this).find("ul").show();
                },
                function () {
                    jQuery(this).find("ul").hide();
                }
            ),
            jQuery(".menu li.current-menu-item").parents("li.mega-menu-megamenu").addClass("mega-current-menu-ancestor"),
            jQuery("body").hasClass("cmt-header-invert") ||
                (jQuery(".nav-menu ul:not(.children,.sub-menu) > li:eq(-2), #site-header-menu #site-navigation div.mega-menu-wrap ul.mega-menu.mega-menu-horizontal > li:eq(-2)").addClass("lastsecond"),
                jQuery(".nav-menu ul:not(.children,.sub-menu) > li:eq(-1), #site-header-menu #site-navigation div.mega-menu-wrap ul.mega-menu.mega-menu-horizontal > li:eq(-1)").addClass("last")),
            jQuery(".righticon").on("click", function () {
                return (
                    jQuery(this).siblings(".sub-menu, .children, .mega-sub-menu").hasClass("open")
                        ? (jQuery(this).siblings(".sub-menu, .children, .mega-sub-menu").removeClass("open"), jQuery("i", jQuery(this)).removeClass("cmt-tripzia-icon-angle-up").addClass("cmt-tripzia-icon-angle-down"))
                        : (jQuery(this).siblings(".sub-menu, .children, .mega-sub-menu").addClass("open"), jQuery("i", jQuery(this)).removeClass("cmt-tripzia-icon-angle-down").addClass("cmt-tripzia-icon-angle-up")),
                    !1
                );
            }),
            jQuery("a[data-gal^='prettyPhoto']").prettyPhoto({ hook: "data-gal" }),
            jQuery(".cymolthemes-slider-wrapper > div > div > div:contains('Revolution Slider Error')").css("margin-top", "0"),
            jQuery("select").select2(),
            tripzia_logMarginPadding(),
            tripzia_logMarginPadding_right(),
            jQuery(".cymolthemes-row-fullwidth-true.full-colum-height-widht > .grid_section > .vc_column_container img.vc_single_image-img").each(function () {
                var e = jQuery(this).attr("src");
                jQuery(this)
                    .parent()
                    .parent()
                    .parent()
                    .parent()
                    .parent(".vc_column_container")
                    .css("background-image", "url(" + e + ")");
            }),
            "function" == typeof jQuery.fn.prettyPhoto &&
                (jQuery('div.gallery a[href*=".jpg"], div.gallery a[href*=".jpeg"], div.gallery a[href*=".png"], div.gallery a[href*=".gif"]').each(function () {
                    "_blank" != jQuery(this).attr("target") && jQuery(this).attr("rel", "prettyPhoto[wp-gallery]");
                }),
                jQuery('.gallery-item a[href*=".jpg"], .gallery-item a[href*=".jpeg"], .gallery-item a[href*=".png"], .gallery-item a[href*=".gif"]').each(function () {
                    "_blank" != jQuery(this).attr("target") && jQuery(this).attr("rel", "prettyPhoto[coregallery]");
                }),
                jQuery('a[href*=".jpg"], a[href*=".jpeg"], a[href*=".png"], a[href*=".gif"]').each(function () {
                    if ("_blank" != jQuery(this).attr("target") && !jQuery(this).hasClass("prettyphoto")) {
                        var t = e(this).attr("rel");
                        void 0 !== t && !1 !== t && "prettyPhoto" != t && jQuery(this).attr("data-rel", "prettyPhoto");
                    }
                }),
                jQuery('a[data-rel^="prettyPhoto"]').prettyPhoto(),
                jQuery("a.cmt_prettyphoto, div.cmt_prettyphoto a").prettyPhoto(),
                jQuery('a[rel^="prettyPhoto"]').prettyPhoto(),
                jQuery("a.cymolthemes-open-gallery").on("click", function () {
                    var e = jQuery(this).data("id");
                    window["api_images_" + e];
                    jQuery.prettyPhoto.open(window["api_images_" + e], window["api_titles_" + e], window["api_desc_" + e]);
                })),
            e("[data-appear-animation]").each(function () {
                var t = e(this),
                    s = t.data("appear-animation");
                t.data("appear-animation-delay") && t.data("appear-animation-delay");
                e(window).width() > 959
                    ? (t.html("0"),
                      t.waypoint(
                          function (e) {
                              if (!t.hasClass("completed")) {
                                  var s = t.data("from"),
                                      r = t.data("to"),
                                      o = t.data("interval");
                                  t.numinate({
                                      format: "%counter%",
                                      from: s,
                                      to: r,
                                      runningInterval: 2e3,
                                      stepUnit: o,
                                      onComplete: function (e) {
                                          t.addClass("completed");
                                      },
                                  });
                              }
                          },
                          { offset: "85%" }
                      ))
                    : "animateWidth" == s && t.css("width", t.data("width"));
            }),
            jQuery(".cymolthemes-testimonial-box").length > 0 &&
                (setHeight(".cymolthemes-testimonial-box.col-lg-6.col-sm-6.col-md-6"), setHeight(".cymolthemes-testimonial-box.col-lg-4.col-sm-6.col-md-4"), setHeight(".cymolthemes-testimonial-box.col-lg-3.col-sm-6.col-md-3")),
            jQuery(".cmt-sboxstickable-header").length > 0 && cymolthemes_sticky(),
            e('#site-navigation a[href="#"]').on("click", function () {
                return !1;
            }),
            e(".cymolthemes-close-icon").on("click", function () {
                e("#page").css("padding-top", parseInt(e("#page").css("padding-top")) - parseInt(e(".cymolthemes-wbar").height()) + "px"), e(".cymolthemes-wbar").slideUp(), cymolthemes_setCookie("kw_hidewbar", "1", 1);
            });
        jQuery(".gallery-size-full br").each(function () {
            jQuery(this).remove();
        });
        if (
            (jQuery("a.cymolthemes-open-gallery").on("click", function () {
                var e = jQuery(this).attr("href").replace("#cymolthemes-embed-code-", "");
                window["api_images_" + e];
                jQuery.prettyPhoto.open(window["api_images_" + e], window["api_titles_" + e], window["api_desc_" + e]);
            }),
            jQuery().isotope &&
                (jQuery(window).load(function () {
                    cymolthemes_isotope();
                }),
                jQuery(window).resize(function () {
                    cymolthemes_isotope();
                })),
            jQuery("footer#colophon").resize(function () {
                cymolthemes_stickyFooter();
            }),
            cymolthemes_stickyFooter(),
            equalheight(".cmt-sboxequalheightdiv  .wpb_column.vc_column_container"),
            cymolthemes_hide_togle_link(),
            jQuery("#cmt-sboxheader-slider > div > div:contains('Revolution Slider Error')").css("margin", "auto"),
            (e.fn.smTimeline = function (e, t) {
                jQuery(this).each(function () {
                    var e = jQuery(this),
                        t = jQuery(window).width() < 768;
                    e.find(".timeline-element").each(function () {
                        var e = jQuery(this),
                            s = e.find(".cmt-sboxtimeline-spine");
                        if (t) e.addClass("wow fadeInUp"), s.attr("style", "");
                        else {
                            if ((e.hasClass("left-side") ? e.find(".cmt-sboxanimation-wrap").addClass("wow fadeInLeft") : e.hasClass("right-side") && e.find(".cmt-sboxanimation-wrap").addClass("wow fadeInRight"), 0 == e.next().length))
                                return;
                            var r = e.next(),
                                o = r.find(".cmt-sboxtimeline-spine");
                            r.hasClass("cmt-sboxdate-separator") ? s.height(r.offset().top - s.offset().top - 5) : o.length && s.height(o.offset().top - s.offset().top - 25);
                        }
                    });
                });
            }),
            jQuery(".cymolthemes-boxes-view-carousel").each(function () {
                jQuery(this);
                var e = 3,
                    t = 3,
                    s = 3,
                    r = 2,
                    o = 2,
                    i = 1,
                    a = 1;
                if ("1" == jQuery(this).data("cmt-sboxslidestoscroll")) (t = 1), (s = 1), (r = 1), (o = 1), (i = 1), (a = 1);
                var n = [
                    { breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: s } },
                    { breakpoint: 992, settings: { slidesToShow: 2, slidesToScroll: r } },
                    { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: o } },
                    { breakpoint: 574, settings: { slidesToShow: 1, slidesToScroll: i } },
                    { breakpoint: 0, settings: { slidesToShow: 1, slidesToScroll: a } },
                ];
                if (jQuery(this).hasClass("cymolthemes-boxes-col-three")) {
                    (e = 3), (t = 3);
                    (s = 3), (r = 2), (o = 2), (i = 1), (a = 1);
                    if ("1" == jQuery(this).data("cmt-sboxslidestoscroll")) (t = 1), (s = 1), (r = 1), (o = 1), (i = 1), (a = 1);
                    n = [
                        { breakpoint: 1200, settings: { slidesToShow: 3, centerMode: !1, centerPadding: "0px", slidesToScroll: s } },
                        { breakpoint: 992, settings: { slidesToShow: 2, centerMode: !1, centerPadding: "0px", slidesToScroll: r } },
                        { breakpoint: 768, settings: { slidesToShow: 2, centerMode: !1, centerPadding: "0px", slidesToScroll: o } },
                        { breakpoint: 574, settings: { slidesToShow: 1, centerMode: !1, centerPadding: "0px", slidesToScroll: i } },
                        { breakpoint: 0, settings: { slidesToShow: 1, slidesToScroll: a } },
                    ];
                } else if (jQuery(this).hasClass("cymolthemes-boxes-col-one"))
                    (e = 1),
                        (t = 1),
                        (n = [
                            { breakpoint: 1200, settings: { slidesToShow: 1, slidesToScroll: 1, centerMode: !1, centerPadding: "0px", arrows: y } },
                            { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1, centerMode: !1, centerPadding: "0px", arrows: y } },
                            { breakpoint: 574, settings: { slidesToShow: 1, centerMode: !1, centerPadding: "0px", slidesToScroll: 1 } },
                            { breakpoint: 0, settings: { slidesToShow: 1, slidesToScroll: 1 } },
                        ]);
                else if (jQuery(this).hasClass("cymolthemes-boxes-col-two")) {
                    (e = 2), (t = 2);
                    (s = 2), (o = 2), (i = 1), (a = 1);
                    if ("1" == jQuery(this).data("cmt-sboxslidestoscroll")) (t = 1), (s = 1), (o = 1), (i = 1), (a = 1);
                    n = [
                        { breakpoint: 1200, settings: { slidesToShow: 2, centerMode: !1, centerPadding: "0px", slidesToScroll: s } },
                        { breakpoint: 768, settings: { slidesToShow: 2, centerMode: !1, centerPadding: "0px", slidesToScroll: o } },
                        { breakpoint: 574, settings: { slidesToShow: 1, centerMode: !1, centerPadding: "0px", slidesToScroll: i } },
                        { breakpoint: 0, settings: { slidesToShow: 1, slidesToScroll: a } },
                    ];
                } else if (jQuery(this).hasClass("cymolthemes-boxes-col-four")) {
                    (e = 4), (t = 4);
                    (s = 4), (r = 3), (o = 2), (i = 1), (a = 1);
                    if ("1" == jQuery(this).data("cmt-sboxslidestoscroll")) (t = 1), (s = 1), (r = 1), (o = 1), (i = 1), (a = 1);
                    n = [
                        { breakpoint: 1200, settings: { slidesToShow: 4, centerMode: !1, centerPadding: "0px", slidesToScroll: s } },
                        { breakpoint: 992, settings: { slidesToShow: 3, centerMode: !1, centerPadding: "0px", slidesToScroll: r } },
                        { breakpoint: 768, settings: { slidesToShow: 2, centerMode: !1, centerPadding: "0px", slidesToScroll: o } },
                        { breakpoint: 574, settings: { slidesToShow: 1, centerMode: !1, centerPadding: "0px", slidesToScroll: i } },
                        { breakpoint: 0, settings: { slidesToShow: 1, slidesToScroll: a } },
                    ];
                } else if (jQuery(this).hasClass("cymolthemes-boxes-col-five")) {
                    (e = 5), (t = 5);
                    (s = 5), (o = 3), (i = 1), (a = 1);
                    if ("1" == jQuery(this).data("cmt-sboxslidestoscroll")) (t = 1), (s = 1), (o = 1), (i = 1), (a = 1);
                    n = [
                        { breakpoint: 1200, settings: { slidesToShow: 5, slidesToScroll: s, centerMode: !1, centerPadding: "0px" } },
                        { breakpoint: 768, settings: { slidesToShow: 3, centerMode: !1, centerPadding: "0px", slidesToScroll: o } },
                        { breakpoint: 574, settings: { slidesToShow: 1, centerMode: !1, centerPadding: "0px", slidesToScroll: i } },
                        { breakpoint: 0, settings: { slidesToShow: 1, slidesToScroll: a } },
                    ];
                } else if (jQuery(this).hasClass("cymolthemes-boxes-col-six")) {
                    (e = 6), (t = 6);
                    (s = 6), (o = 3), (i = 1), (a = 1);
                    if ("1" == jQuery(this).data("cmt-sboxslidestoscroll")) (t = 1), (s = 1), (o = 1), (i = 1), (a = 1);
                    n = [
                        { breakpoint: 1200, settings: { slidesToShow: 6, centerMode: !1, centerPadding: "0px", slidesToScroll: s } },
                        { breakpoint: 768, settings: { slidesToShow: 3, centerMode: !1, centerPadding: "0px", slidesToScroll: o } },
                        { breakpoint: 574, settings: { slidesToShow: 1, centerMode: !1, centerPadding: "0px", slidesToScroll: i } },
                        { breakpoint: 0, settings: { slidesToShow: 1, slidesToScroll: a } },
                    ];
                }
                var c = !1;
                "fade" == jQuery(this).data("cmt-sboxeffecttype") && (c = !0);
                var l = 800;
                "" != jQuery.trim(jQuery(this).data("cmt-sboxspeed")) && (l = jQuery.trim(jQuery(this).data("cmt-sboxspeed")));
                var d = !1;
                "1" == jQuery(this).data("cmt-sboxautoplay") && (d = !0);
                var u = 2e3;
                "" != jQuery.trim(jQuery(this).data("cmt-sboxautoplayspeed")) && (u = jQuery.trim(jQuery(this).data("cmt-sboxautoplayspeed")));
                var m = !1;
                "1" == jQuery.trim(jQuery(this).data("cmt-sboxloop")) && (m = !0);
                var h = !1;
                "1" == jQuery.trim(jQuery(this).data("cmt-sboxdots")) && (h = !0);
                var y = !1;
                ("1" != jQuery.trim(jQuery(this).data("cmt-sboxnav")) && "above" != jQuery.trim(jQuery(this).data("cmt-sboxnav")) && "below" != jQuery.trim(jQuery(this).data("cmt-sboxnav"))) || (y = !0);
                var p = !1;
                "1" == jQuery.trim(jQuery(this).data("cmt-sboxcentermode")) && (p = !0);
                var g = 800;
                if ("" != jQuery.trim(jQuery(this).data("cmt-sboxcenterpadding"))) g = jQuery.trim(jQuery(this).data("cmt-sboxcenterpadding"));
                var j = !1;
                "1" == jQuery.trim(jQuery(this).data("cmt-sboxpauseonfocus")) && (j = !0);
                var Q = !1;
                "1" == jQuery.trim(jQuery(this).data("cmt-pauseonhover")) && (Q = !0);
                var b = !1;
                jQuery("body").hasClass("rtl") && (b = !0),
                    jQuery(".cymolthemes-boxes-row-wrapper > div", this).removeClass(function (e, t) {
                        return (t.match(/(^|\s)col-\S+/g) || []).join(" ");
                    }),
                    jQuery(".cymolthemes-boxes-row-wrapper", this).slick({
                        fade: c,
                        speed: l,
                        centerMode: p,
                        centerPadding: g + "px",
                        pauseOnFocus: j,
                        pauseOnHover: Q,
                        slidesToShow: e,
                        slidesToScroll: t,
                        autoplay: d,
                        autoplaySpeed: u,
                        rtl: b,
                        dots: h,
                        pauseOnDotsHover: !1,
                        arrows: y,
                        adaptiveHeight: !1,
                        infinite: m,
                        responsive: n,
                    });
            }),
            jQuery(".cymolthemes-boxes-row-wrapper", this).on("setPosition", function (e, t) {
                jQuery(this)
                    .find(".cmt-sboxflexslider")
                    .each(function () {
                        jQuery(this).resize();
                    });
            }),
            jQuery(".cmt-slick-arrow.cmt-slick-next", this).on("click", function () {
                jQuery(".cymolthemes-boxes-row-wrapper", jQuery(this).closest(".cymolthemes-boxes-view-carousel")).slick("slickNext");
            }),
            jQuery(".cmt-slick-arrow.cmt-sboxslick-prev", this).on("click", function () {
                jQuery(".cymolthemes-boxes-row-wrapper", jQuery(this).closest(".cymolthemes-boxes-view-carousel")).slick("slickPrev");
            }),
            jQuery(".cymolthemes-boxes-view-slickview").each(function () {
                jQuery(this).data("cmt-sboxeffecttype");
                var e = 800;
                "" != jQuery.trim(jQuery(this).data("cmt-sboxspeed")) && (e = jQuery.trim(jQuery(this).data("cmt-sboxspeed")));
                var t = !1;
                "1" == jQuery(this).data("cmt-sboxautoplay") && (t = !0);
                "" != jQuery.trim(jQuery(this).data("cmt-autoplayspeed")) && jQuery.trim(jQuery(this).data("cmt-autoplayspeed"));
                jQuery.trim(jQuery(this).data("cmt-loop"));
                var s = !1;
                "1" == jQuery.trim(jQuery(this).data("cmt-dots")) && (s = !0);
                var r = !1;
                "1" == jQuery.trim(jQuery(this).data("cmt-nav")) && (r = !0);
                var o = jQuery(".testimonials-nav", this),
                    i = jQuery(".testimonials-info", this),
                    a = !1;
                jQuery("body").hasClass("rtl") && (a = !0),
                    jQuery(".testimonials-info", this).slick({ slidesToShow: 1, slidesToScroll: 1, fade: !1, arrows: !0, asNavFor: o, adaptiveHeight: !0, rtl: a, speed: e, autoplay: t }),
                    jQuery(".testimonials-nav", this).slick({
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        asNavFor: i,
                        centerMode: !0,
                        centerPadding: "0",
                        focusOnSelect: !0,
                        rtl: a,
                        autoplay: t,
                        speed: e,
                        arrows: r,
                        dots: s,
                        variableWidth: !0,
                        responsive: [
                            { breakpoint: 1199, settings: { arrows: !1, centerMode: !0, centerPadding: "0", slidesToShow: 3 } },
                            { breakpoint: 480, settings: { arrows: !1, centerMode: !0, centerPadding: "0", slidesToShow: 1 } },
                        ],
                    });
            }),
            jQuery("body").hasClass("cymolthemes-one-page-site"))
        ) {
            var t = jQuery(".cmt-row, #cmt-sboxheader-slider"),
                s = jQuery(".mega-menu-wrap, div.nav-menu"),
                r = jQuery("#site-navigation").data("sticky-height") - 1;
            jQuery(window).on("scroll", function () {
                jQuery("body").scrollTop() < 5 &&
                    (s.find("a").parent().removeClass("mega-current-menu-item mega-current_page_item current-menu-ancestor current-menu-item current_page_item"),
                    s.find('a[href="#cmt-home"]').parent().addClass("mega-current-menu-item mega-current_page_item current-menu-ancestor current-menu-item current_page_item"));
                var e = jQuery(this).scrollTop();
                t.each(function () {
                    var t = jQuery(this).offset().top - (r + 2),
                        o = t + jQuery(this).outerHeight();
                    if (e >= t && e <= o && void 0 !== jQuery(this) && void 0 !== jQuery(this).attr("id") && "" != jQuery(this).attr("id")) {
                        var i = jQuery(this);
                        s.find("a").removeClass("mega-current-menu-item mega-current_page_item current-menu-ancestor current-menu-item current_page_item"),
                            jQuery(this).addClass("mega-current-menu-item mega-current_page_item current-menu-ancestor current-menu-item current_page_item");
                        var a = i.attr("id");
                        s.find("a").parent().removeClass("mega-current-menu-item mega-current_page_item current-menu-ancestor current-menu-item current_page_item"),
                            s.find("a").each(function () {
                                jQuery(this).attr("href").split("#")[1] == a && jQuery(this).parent().addClass("mega-current-menu-item mega-current_page_item current-menu-ancestor current-menu-item current_page_item");
                            });
                    }
                });
            }),
                s.find("a").on("click", function () {
                    var e = jQuery(this).attr("href").split("#")[1];
                    return jQuery("html, body").animate({ scrollTop: jQuery("#" + e).offset().top - r }, 500), !1;
                });
        }
    }),
    jQuery(window).load(function () {
        jQuery(".cmt-sboxflexslider").length > 0 &&
            jQuery(".cmt-sboxflexslider").flexslider({
                animation: "slide",
                controlNav: !0,
                directionNav: !1,
                start: function () {
                    jQuery(".cmt-sboxtimeline").length > 0 && jQuery(".cmt-sboxtimeline").smTimeline();
                },
            }),
            jQuery(".cmt-sboxpage-loader-wrapper").length > 0 &&
                setTimeout(function () {
                    jQuery(".cmt-sboxpage-loader-wrapper").fadeOut(1e3);
                }, 100),
            jQuery("#pageoverlay").fadeOut(500);
        var e = jQuery(".portfolio-wrapper");
        e.isotope({ filter: "*", animationOptions: { duration: 750, easing: "linear", queue: !1 } }),
            jQuery("nav.portfolio-sortable-list ul li a").on("click", function () {
                var t = jQuery(this).attr("data-filter");
                return e.isotope({ filter: t, animationOptions: { duration: 750, easing: "linear", queue: !1 } }), jQuery("nav.portfolio-sortable-list").find("a.selected").removeClass("selected"), jQuery(this).addClass("selected"), !1;
            }),
            jQuery(".cymolthemes-slider-wrapper .nivoSlider").length > 0 && jQuery(".cymolthemes-slider-wrapper .nivoSlider").nivoSlider();
        var t,
            s,
            r,
            o = !1;
        jQuery("body").hasClass("rtl") && (o = !0),
            jQuery(".cmt-sboxslick-carousel").slick({ autoplay: !0, arrows: !1, dots: !0, rtl: o }),
            (r = jQuery("#site-navigation")) &&
                (t = r.find(".menu-toggle")) &&
                ((s = r.find(".nav-menu")) && s.children().length
                    ? jQuery(".menu-toggle").on("click.tripzia", function () {
                          r.toggleClass("toggled-on");
                      })
                    : t.hide()),
            jQuery(".righticon").each(function () {
                var e = this;
                jQuery(e).prev().prev().length > 0 &&
                    "#" == jQuery(e).prev().prev().attr("href") &&
                    jQuery(e)
                        .prev()
                        .prev()
                        .on("click", function () {
                            jQuery(e).trigger("click");
                        });
            }),
            cymolthemes_blogmasonry(),
            jQuery(".cymolthemes-fbar-content-wrapper").perfectScrollbar({ suppressScrollX: !0, includePadding: !0 }),
            jQuery(".header-style-one-vertical .cmt-header-box").perfectScrollbar({ suppressScrollX: !0, includePadding: !0 });
    });
var cmt_bgimage_class = function () {
        jQuery(".elementor-section").each(function () {
            "" != jQuery(this).css("background-image") && "none" != jQuery(this).css("background-image")
                ? jQuery(this).addClass("cmt-bgimage-yes").removeClass("cmt-bgimage-no")
                : jQuery(this).addClass("cmt-bgimage-no").removeClass("cmt-bgimage-yes");
        }),
            jQuery(".elementor-column").each(function () {
                jQuery(this).children(".elementor-widget-wrap").children(".cmt-stretched-div").length
                    ? "" != jQuery(this).children(".elementor-widget-wrap").children(".cmt-stretched-div").css("background-image") &&
                      "none" != jQuery(this).children(".elementor-widget-wrap").children(".cmt-stretched-div").css("background-image")
                        ? jQuery(this).addClass("cmt-bgimage-yes").removeClass("cmt-bgimage-no")
                        : jQuery(this).addClass("cmt-bgimage-no").removeClass("cmt-bgimage-yes")
                    : "" != jQuery(this).children(".elementor-widget-wrap").css("background-image") && "none" != jQuery(this).children(".elementor-widget-wrap").css("background-image")
                    ? jQuery(this).addClass("cmt-bgimage-yes").removeClass("cmt-bgimage-no")
                    : jQuery(this).addClass("cmt-bgimage-no").removeClass("cmt-bgimage-yes");
            });
    },
    cmt_bgcolor_class = function () {
        jQuery(".elementor-section").each(function () {
            "" != jQuery(this).css("background-color") && "transparent" != jQuery(this).css("background-color") && jQuery(this).addClass("cmt-bgcolor-yes");
        }),
            jQuery(".elementor-column").each(function () {
                jQuery(this).children(".cmt-stretched-div").length
                    ? "" != jQuery(this).children(".cmt-stretched-div").css("background-color") && "transparent" != jQuery(this).children(".cmt-stretched-div").css("background-color")
                        ? jQuery(this).addClass("cmt-bgcolor-yes").removeClass("cmt-bgcolor-no")
                        : jQuery(this).addClass("cmt-bgcolor-no").removeClass("cmt-bgcolor-yes")
                    : "" != jQuery(this).children(".elementor-widget-wrap").css("background-color") && "transparent" != jQuery(this).children(".elementor-widget-wrap").css("background-color")
                    ? jQuery(this).addClass("cmt-bgcolor-yes").removeClass("cmt-bgcolor-no")
                    : jQuery(this).addClass("cmt-bgcolor-no").removeClass("cmt-bgcolor-yes");
            });
    },
    cmt_rearrange_stretched_col = function (e) {
        jQuery("body").hasClass("elementor-editor-active") &&
            jQuery('*[data-id="' + e + '"]').each(function () {
                jQuery(".cmt-stretched-div", this).remove(),
                    jQuery(".elementor-widget-wrap", this).removeAttr("style"),
                    setTimeout(function () {
                        cmt_stretched_col();
                    }, 50);
            });
    },
    cmt_stretched_col = function () {
        jQuery(".elementor-section.elementor-top-section").each(function () {
            jQuery(this).hasClass("cmt-col-stretched-left") || jQuery(this).hasClass("cmt-col-stretched-right") || jQuery(this).hasClass("cmt-col-stretched-both")
                ? jQuery(this).addClass("cmt-col-stretched-yes").removeClass("cmt-col-stretched-no")
                : jQuery(this).addClass("cmt-col-stretched-no").removeClass("cmt-col-stretched-yes");
        }),
            jQuery(".elementor-section.elementor-top-section").each(function () {
                var e = jQuery(this),
                    t = "";
                jQuery(".elementor-column:not(.elementor-inner-column)", e).each(function () {
                    (t = jQuery(this)), jQuery(".cmt-stretched-div", t).remove(), t.removeClass("cmt-col-stretched-yes cmt-col-stretched-left cmt-col-stretched-right cmt-col-stretched-content-yes");
                });
            }),
            jQuery(".elementor-section.cmt-col-stretched-yes.elementor-top-section").each(function () {
                var e,
                    t,
                    s,
                    r,
                    o,
                    i = jQuery(this),
                    a = "",
                    n = "",
                    c = "";
                (i.hasClass("cmt-col-stretched-left") || i.hasClass("cmt-col-stretched-both")) &&
                    ((a = jQuery(".elementor-column:not(.elementor-inner-column):first-child", i)),
                    0 == jQuery(".cmt-stretched-div", a).length &&
                        ((n = a.children(".elementor-widget-wrap")).prepend('<div class="cmt-stretched-div"></div>'),
                        (c = n.children(".cmt-stretched-div")).addClass("cmt-stretched-left"),
                        a.addClass("cmt-col-stretched-yes cmt-col-stretched-left"),
                        i.hasClass("cmt-left-col-stretched-content-yes") ? a.addClass("cmt-col-stretched-content-yes") : a.removeClass("cmt-col-stretched-content-yes"),
                        n.css("background-image", ""),
                        "none" != (e = n.css("background-image")) && "" != e && (c.css("background-image", e), n.css("background-image", "none")),
                        "" != (t = n.css("background-color")) && (c.css("background-color", t), n.css("background-color", "transparent")),
                        "" != (s = n.css("background-position")) && c.css("background-position", s),
                        "" != (r = n.css("background-repeat")) && c.css("background-repeat", r),
                        "" != (o = n.css("background-size")) && c.css("background-size", o),
                        cmt_stretched_col_calc()));
                (i.hasClass("cmt-col-stretched-right") || i.hasClass("cmt-col-stretched-both")) &&
                    ((a = jQuery(".elementor-column:not(.elementor-inner-column):last-child", i)),
                    0 == jQuery(".cmt-stretched-div", a).length &&
                        ((n = a.children(".elementor-widget-wrap")).prepend('<div class="cmt-stretched-div"></div>'),
                        (c = n.children(".cmt-stretched-div")).addClass("cmt-stretched-right"),
                        a.addClass("cmt-col-stretched-yes cmt-col-stretched-right"),
                        i.hasClass("cmt-right-col-stretched-content-yes") ? a.addClass("cmt-col-stretched-content-yes") : a.removeClass("cmt-col-stretched-content-yes"),
                        n.css("background-image", ""),
                        "none" != (e = n.css("background-image")) && "" != e && (c.css("background-image", e), n.css("background-image", "none")),
                        "" != (t = n.css("background-color")) && (c.css("background-color", t), n.css("background-color", "transparent")),
                        "" != (s = n.css("background-position")) && c.css("background-position", s),
                        "" != (r = n.css("background-repeat")) && c.css("background-repeat", r),
                        "" != (o = n.css("background-size")) && c.css("background-size", o),
                        cmt_stretched_col_calc()));
            });
    },
    cmt_stretched_col_calc = function () {
        if (jQuery(".elementor-section.elementor-top-section > .elementor-container > .elementor-column.cmt-col-stretched-yes").length > 0) {
            var e = jQuery(window).width();
            jQuery(document).width();
            jQuery(".elementor-section.elementor-top-section > .elementor-container > .elementor-column.cmt-col-stretched-yes").each(function () {
                jQuery(this);
                var t = jQuery(this).closest(".elementor-container").width(),
                    s = (e - t) / 2,
                    r = "left";
                if (
                    (jQuery(this).hasClass("cmt-col-stretched-right") && (r = "right"),
                    "100%" == jQuery(".elementor-widget-wrap", jQuery(this)).parent().width() ? jQuery(".elementor-widget-wrap", jQuery(this)).css("width", "100%") : jQuery(".elementor-widget-wrap", jQuery(this)).css("width", ""),
                    jQuery(".cmt-stretched-div", jQuery(this)).css("margin-" + r, "-" + s + "px"),
                    jQuery(this).hasClass("cmt-col-stretched-content-yes"))
                ) {
                    var o = jQuery(".cmt-stretched-div", jQuery(this)).width();
                    jQuery(this)
                        .children(".elementor-widget-wrap")
                        .css("margin-" + r, "-" + s + "px"),
                        jQuery(this)
                            .children(".elementor-widget-wrap")
                            .css("width", o + "px");
                } else
                    jQuery(this)
                        .children(".elementor-widget-wrap")
                        .css("margin-" + r, ""),
                        jQuery(this).children(".elementor-widget-wrap").css("width", "");
            });
        }
    },
    cymolthemes_carousel = function () {
        jQuery(".cymolthemes-boxes-view-carousel").each(function () {
            jQuery(this);
            var e = 3,
                t = 3,
                s = 3,
                r = 3,
                o = 2,
                i = 1,
                a = 1;
            if ("1" == jQuery(this).data("cmt-slidestoscroll")) (t = 1), (s = 1), (r = 1), (o = 1), (i = 1), (a = 1);
            var n = [
                { breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: s } },
                { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: o } },
                { breakpoint: 574, settings: { slidesToShow: 1, slidesToScroll: i } },
                { breakpoint: 0, settings: { slidesToShow: 1, slidesToScroll: a } },
            ];
            if (jQuery(this).hasClass("cymolthemes-boxes-col-three")) {
                (e = 3), (t = 3);
                (s = 3), (r = 2), (o = 2), (i = 1), (a = 1);
                if ("1" == jQuery(this).data("cmt-slidestoscroll")) (t = 1), (s = 1), (r = 1), (o = 1), (i = 1), (a = 1);
                n = [
                    { breakpoint: 1200, settings: { slidesToShow: 3, centerMode: !1, centerPadding: "0px", slidesToScroll: s } },
                    { breakpoint: 992, settings: { slidesToShow: 2, centerMode: !1, centerPadding: "0px", slidesToScroll: r } },
                    { breakpoint: 768, settings: { slidesToShow: 2, centerMode: !1, centerPadding: "0px", slidesToScroll: o } },
                    { breakpoint: 574, settings: { slidesToShow: 1, centerMode: !1, centerPadding: "0px", slidesToScroll: i } },
                    { breakpoint: 0, settings: { slidesToShow: 1, slidesToScroll: a } },
                ];
            } else if (jQuery(this).hasClass("cymolthemes-boxes-col-one"))
                (e = 1),
                    (t = 1),
                    (n = [
                        { breakpoint: 1200, settings: { slidesToShow: 1, slidesToScroll: 1, centerMode: !1, centerPadding: "0px", arrows: !1 } },
                        { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1, centerMode: !1, centerPadding: "0px", arrows: !1 } },
                        { breakpoint: 574, settings: { slidesToShow: 1, centerMode: !1, centerPadding: "0px", slidesToScroll: 1 } },
                        { breakpoint: 0, settings: { slidesToShow: 1, slidesToScroll: 1 } },
                    ]);
            else if (jQuery(this).hasClass("cymolthemes-boxes-col-two")) {
                (e = 2), (t = 2);
                (s = 2), (o = 2), (i = 1), (a = 1);
                if ("1" == jQuery(this).data("cmt-slidestoscroll")) (t = 1), (s = 1), (o = 1), (i = 1), (a = 1);
                n = [
                    { breakpoint: 1200, settings: { slidesToShow: 2, centerMode: !1, centerPadding: "0px", slidesToScroll: s } },
                    { breakpoint: 768, settings: { slidesToShow: 2, centerMode: !1, centerPadding: "0px", slidesToScroll: o } },
                    { breakpoint: 574, settings: { slidesToShow: 1, centerMode: !1, centerPadding: "0px", slidesToScroll: i } },
                    { breakpoint: 0, settings: { slidesToShow: 1, slidesToScroll: a } },
                ];
            } else if (jQuery(this).hasClass("cymolthemes-boxes-col-four")) {
                (e = 4), (t = 4);
                (s = 4), (r = 2), (o = 2), (i = 1), (a = 1);
                if ("1" == jQuery(this).data("cmt-slidestoscroll")) (t = 1), (s = 1), (r = 1), (o = 1), (i = 1), (a = 1);
                n = [
                    { breakpoint: 1200, settings: { slidesToShow: 4, centerMode: !1, centerPadding: "0px", slidesToScroll: s } },
                    { breakpoint: 992, settings: { slidesToShow: 2, centerMode: !1, centerPadding: "0px", slidesToScroll: r } },
                    { breakpoint: 768, settings: { slidesToShow: 2, centerMode: !1, centerPadding: "0px", slidesToScroll: o } },
                    { breakpoint: 574, settings: { slidesToShow: 1, centerMode: !1, centerPadding: "0px", slidesToScroll: i } },
                    { breakpoint: 0, settings: { slidesToShow: 1, slidesToScroll: a } },
                ];
            } else if (jQuery(this).hasClass("cymolthemes-boxes-col-five")) {
                (e = 5), (t = 5);
                (s = 5), (r = 3), (o = 3), (i = 1), (a = 1);
                if ("1" == jQuery(this).data("cmt-slidestoscroll")) (t = 1), (s = 1), (r = 1), (o = 1), (i = 1), (a = 1);
                n = [
                    { breakpoint: 1200, settings: { slidesToShow: 5, slidesToScroll: s, centerMode: !1, centerPadding: "0px" } },
                    { breakpoint: 992, settings: { slidesToShow: 3, centerMode: !1, centerPadding: "0px", slidesToScroll: r } },
                    { breakpoint: 768, settings: { slidesToShow: 3, centerMode: !1, centerPadding: "0px", slidesToScroll: o } },
                    { breakpoint: 574, settings: { slidesToShow: 1, centerMode: !1, centerPadding: "0px", slidesToScroll: i } },
                    { breakpoint: 0, settings: { slidesToShow: 1, slidesToScroll: a } },
                ];
            } else if (jQuery(this).hasClass("cymolthemes-boxes-col-six")) {
                (e = 6), (t = 6);
                (s = 6), (r = 3), (o = 3), (i = 1), (a = 1);
                if ("1" == jQuery(this).data("cmt-slidestoscroll")) (t = 1), (s = 1), (r = 1), (o = 1), (i = 1), (a = 1);
                n = [
                    { breakpoint: 1200, settings: { slidesToShow: 6, centerMode: !1, centerPadding: "0px", slidesToScroll: s } },
                    { breakpoint: 992, settings: { slidesToShow: 3, centerMode: !1, centerPadding: "0px", slidesToScroll: r } },
                    { breakpoint: 768, settings: { slidesToShow: 3, centerMode: !1, centerPadding: "0px", slidesToScroll: o } },
                    { breakpoint: 574, settings: { slidesToShow: 1, centerMode: !1, centerPadding: "0px", slidesToScroll: i } },
                    { breakpoint: 0, settings: { slidesToShow: 1, slidesToScroll: a } },
                ];
            }
            if (jQuery(this).hasClass("cmt_1200slidestoshow_2")) {
                (e = 3), (t = 3);
                (s = 3), (o = 2), (i = 1), (a = 1);
                if ("1" == jQuery(this).data("cmt-slidestoscroll")) (t = 1), (s = 1), (o = 1), (i = 1), (a = 1);
                n = [
                    { breakpoint: 1400, settings: { slidesToShow: 2, centerMode: !1, centerPadding: "0px", slidesToScroll: s } },
                    { breakpoint: 768, settings: { slidesToShow: 2, centerMode: !1, centerPadding: "0px", slidesToScroll: o } },
                    { breakpoint: 574, settings: { slidesToShow: 1, centerMode: !1, centerPadding: "0px", slidesToScroll: i } },
                    { breakpoint: 0, settings: { slidesToShow: 1, slidesToScroll: a } },
                ];
            }
            var c = !1;
            "fade" == jQuery(this).data("cmt-effecttype") && (c = !0);
            var l = 800;
            "" != jQuery.trim(jQuery(this).data("cmt-speed")) && (l = jQuery.trim(jQuery(this).data("cmt-speed")));
            var d = !1;
            "1" == jQuery(this).data("cmt-autoplay") && (d = !0);
            var u = 2e3;
            "" != jQuery.trim(jQuery(this).data("cmt-autoplayspeed")) && (u = jQuery.trim(jQuery(this).data("cmt-autoplayspeed")));
            var m = !1;
            "1" == jQuery.trim(jQuery(this).data("cmt-loop")) && (m = !0);
            var h = !1;
            "1" == jQuery.trim(jQuery(this).data("cmt-dots")) && (h = !0);
            var y = !1;
            ("1" != jQuery.trim(jQuery(this).data("cmt-nav")) && "above" != jQuery.trim(jQuery(this).data("cmt-nav")) && "below" != jQuery.trim(jQuery(this).data("cmt-nav"))) || (y = !0);
            var p = !1;
            "1" == jQuery.trim(jQuery(this).data("cmt-centermode")) && (p = !0);
            var g = 800;
            if ("" != jQuery.trim(jQuery(this).data("cmt-centerpadding"))) g = jQuery.trim(jQuery(this).data("cmt-centerpadding"));
            var j = !1;
            "1" == jQuery.trim(jQuery(this).data("cmt-pauseonfocus")) && (j = !0);
            var Q = !1;
            "1" == jQuery.trim(jQuery(this).data("cmt-pauseonhover")) && (Q = !0);
            var b = !1;
            jQuery("body").hasClass("rtl") && (b = !0),
                jQuery(".cymolthemes-boxes-row-wrapper > div", this).removeClass(function (e, t) {
                    return (t.match(/(^|\s)col-\S+/g) || []).join(" ");
                }),
                jQuery(".cymolthemes-boxes-row-wrapper", this)
                    .not(".slick-initialized")
                    .slick({
                        fade: c,
                        speed: l,
                        centerMode: p,
                        centerPadding: g + "px",
                        pauseOnFocus: j,
                        pauseOnHover: Q,
                        slidesToShow: e,
                        slidesToScroll: t,
                        autoplay: d,
                        autoplaySpeed: u,
                        rtl: b,
                        dots: h,
                        pauseOnDotsHover: !1,
                        arrows: y,
                        adaptiveHeight: !1,
                        infinite: m,
                        responsive: n,
                    });
        }),
            jQuery(".cymolthemes-boxes-row-wrapper", this).on("setPosition", function (e, t) {
                jQuery(this)
                    .find(".cmt-flexslider")
                    .each(function () {
                        jQuery(this).resize();
                    });
            }),
            jQuery(".cmt-slick-arrow.cmt-slick-next", this).on("click", function () {
                jQuery(".cymolthemes-boxes-row-wrapper", jQuery(this).closest(".cymolthemes-boxes-view-carousel")).slick("slickNext");
            }),
            jQuery(".cmt-slick-arrow.cmt-slick-prev", this).on("click", function () {
                jQuery(".cymolthemes-boxes-row-wrapper", jQuery(this).closest(".cymolthemes-boxes-view-carousel")).slick("slickPrev");
            }),
            jQuery(".cymolthemes-boxes-view-slickview").each(function () {
                var e = !1;
                "fade" == jQuery(this).data("cmt-effecttype") && (e = !0);
                var t = 800;
                "" != jQuery.trim(jQuery(this).data("cmt-speed")) && (t = jQuery.trim(jQuery(this).data("cmt-speed")));
                var s = !1;
                "1" == jQuery(this).data("cmt-autoplay") && (s = !0);
                var r = 2e3;
                "" != jQuery.trim(jQuery(this).data("cmt-autoplayspeed")) && (r = jQuery.trim(jQuery(this).data("cmt-autoplayspeed")));
                var o = !1;
                "1" == jQuery.trim(jQuery(this).data("cmt-loop")) && (o = !0);
                var i = !1;
                "1" == jQuery.trim(jQuery(this).data("cmt-dots")) && (i = !0);
                jQuery.trim(jQuery(this).data("cmt-nav"));
                var a = jQuery(".testimonials-nav", this),
                    n = jQuery(".testimonials-info", this),
                    c = !1;
                jQuery("body").hasClass("rtl") && (c = !0),
                    jQuery(".testimonials-info", this).not(".slick-initialized").slick({ fade: e, arrows: !1, asNavFor: a, adaptiveHeight: !0, speed: t, autoplay: s, autoplaySpeed: r, infinite: o, rtl: c }),
                    jQuery(".testimonials-nav", this)
                        .not(".slick-initialized")
                        .slick({ slidesToShow: 3, vertical: !0, verticalScrolling: !0, asNavFor: n, centerMode: !0, centerPadding: 0, focusOnSelect: !0, autoplay: s, autoplaySpeed: r, speed: t, arrows: !1, dots: i, infinite: o, rtl: c });
            });
    };
jQuery(window).resize(function () {
    equalheight(".cmt-sboxequalheightdiv  .wpb_column.vc_column_container"),
        setTimeout(function () {
            jQuery(".cmt-sboxtimeline").smTimeline();
        }, 100),
        jQuery(".cymolthemes-testimonial-box").length > 0 &&
            (setHeight(".cymolthemes-testimonial-box.col-lg-4.col-sm-6.col-md-4"), setHeight(".cymolthemes-testimonial-box.col-lg-6.col-sm-6.col-md-6"), setHeight(".cymolthemes-testimonial-box.col-lg-3.col-sm-6.col-md-3")),
        cymolthemes_sticky();
}),
    jQuery(document).ready(function () {
        cymolthemes_isotope(),
            cmt_stretched_col(),
            cmt_stretched_col_calc(),
            cmt_bgimage_class(),
            cmt_bgcolor_class(),
            setTimeout(function () {
                cymolthemes_carousel();
            }, 100);
    });
