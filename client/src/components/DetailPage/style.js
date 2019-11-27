import jss from "jss";
import preset from "jss-preset-default";
import { red, green } from "@material-ui/core/colors";

jss.setup(preset());

let detailPageStyle = {
    container: {
        fontFamily: "Open Sans",
        maxWidth: "1266px",
        margin: "0 auto",
        marginTop: "33px",
        marginBottom: "37px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden"
    },
    h3: {
        fontFamily: "Open Sans",
        fontSize: "14px",
        fontWeight: "bold",
        color: "#000"
    },
    filterType: {
        position: "absolute",
        left: "0",
        marginLeft: "33px"
    },
    liStyle: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        marginTop: "7px"
    },
    imageParams: {
        position: 'relative',
        animation: 'SHOW_FROM_LEFT 1s ease-in-out',
        display: "flex",
        justifyContent: "center",
        transition: "1s",

        "& > img": {
            display: "none",

            "&:last-child": {
                marginRight: "0"
            }
        }
    },

    containerInfo: {
        position: "relative",
        animation: 'SHOW_FROM_RIGHT 1s ease-in-out',
    },
    headerInfoText: {
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",

        "& > h2": {
            width: "100%",
            fontWeight: "bold",
            fontSize: "14px",
            textTransform: "uppercase"
        }
    },

    refStyle: {
        fontSize: "10px",
        color: "#847A7A",
        marginBottom: "13px"
    },
    activeColor: {
        boxShadow: '0px 0px 0px 2px MEDIUMSPRINGGREEN',
    },
    colorsDiv: {
        display: "flex",
        justifyContent: "flex-start",
        marginBottom: "51px",
        marginLeft: "35px",

        "& > div": {
            marginTop: "27px",
            width: "27px",
            height: "27px",
            borderRadius: "50%",

            "&:hover": {
                textDecoration: "underline",
                cursor: "pointer"
            },

            "&:first-child": {
                marginRight: "45px"
            },

            "& > span": {
                position: "relative",
                top: "35px",
                fontSize: "12px"
            }
        }
    },

    sizeGuide: {
        position: "relative"
    },
    activeSize: {
        color: 'green',
        textDecoration: 'underline',
    },

    sizes: {
        display: "flex",
        position: "relative",
        top: "25px",
        left: "33px",
        margin: "18px 0 51px",
        "& > li": {
            marginRight: "25px",
            "&:last-child": {
                marginRight: "0"
            }
        }
    },
    sizeHelper: {
        color: "#847A7A",
        fontSize: "12px",
        textDecoration: "underline",
        position: "absolute",
        right: "0",
        marginRight: "20px"
    },
    descriptionContainer: {
        padding: "27px 0 23px 31px",
        textAlign: "left"
    },
    description: {
        "& > p": {
            fontSize: "12px",
            lineHeight: "16px",
            textAlign: "left"
        }
    },

    btnSettings: {
        marginTop: "20px"
    },

        "@media(min-width: 480px)": {
            h3: {
                fontSize: "17px"
            },
            filterType: {
                marginLeft: "35px"
            },
            liStyle: {
                marginTop: "10px"
            },

            headerInfoText: {
                "& > h2": {
                    fontSize: "18px"
                }
            },

            refStyle: {
                fontSize: "13px",
                marginTop: "7px",
                marginBottom: "15px"
            },
            colorsDiv: {
                marginBottom: "55px",
                marginLeft: "40px",

                "& > div": {
                    marginTop: "30px",
                    width: "30px",
                    height: "30px",

                    "& > span": {
                        top: "37px",
                        fontSize: "16px"
                    }
                }
            },

            sizes: {
                top: "27px",
                left: "40px",
                margin: "20px 0 54px",
                "& > li": {
                    marginRight: "30px"
                }
            },
            sizeHelper: {
                fontSize: "15px",
                marginRight: "25px"
            },
            descriptionContainer: {
                padding: "30px 0 25px 34px"
            },
            description: {
                "& > p": {
                    fontSize: "15px"
                }
            },

            btnSettings: {
                marginTop: "23px"
            }
        },
        "@media(min-width: 700px)": {
            h3: {
                fontSize: "19px"
            },
            filterType: {
                marginLeft: "37px"
            },
            liStyle: {
                marginTop: "12px"
            },

            headerInfoText: {
                "& > h2": {
                    fontSize: "20px"
                }
            },

            refStyle: {
                fontSize: "15px",
                marginTop: "9px",
                marginBottom: "17px"
            },
            colorsDiv: {
                marginBottom: "57px",
                marginLeft: "42px",

                "& > div": {
                    marginTop: "32px",
                    width: "32px",
                    height: "32px",

                    "& > span": {
                        top: "39px",
                        fontSize: "18px"
                    }
                }
            },

            sizes: {
                top: "29px",
                left: "42px",
                margin: "22px 0 56px",
                "& > li": {
                    marginRight: "32px"
                }
            },
            sizeHelper: {
                fontSize: "17px",
                marginRight: "27px"
            },
            descriptionContainer: {
                padding: "32px 0 27px 36px"
            },
            description: {
                "& > p": {
                    fontSize: "17px"
                }
            },

            btnSettings: {
                marginTop: "25px"
            }
        },

        "@media(min-width: 1260px)": {
            container: {
                marginTop: "19px",
                marginBottom: "10px"
            },

            h3: {
                fontSize: "16px"
            },

            liStyle: {
                flexDirection: "row",
                marginTop: "66px"
            },

            imageParams: {
                "& > img": {
                    display: "inline-block",
                    width: "416px",
                    height: "603px",
                    marginRight: "12px"
                }
            },

            containerInfo: {
                width: "391px",
                marginLeft: "31px",
                height: "603px"
            },

            headerInfoText: {
                "& > h2": {
                    fontSize: "24px"
                }
            },

            refStyle: {
                marginTop: "9px",
                marginBottom: "50px"
            },

            colorsDiv: {
                "& > div": {
                    marginTop: "22px",
                    width: "32px",
                    height: "32px",

                    "&:first-child": {
                        marginRight: "54px"
                    },

                    "& > span": {
                        top: "40px",
                        fontSize: "14px"
                    }
                }
            },

            sizeStyles: {
                marginTop: "72px",

                "& > ul": {
                    display: "flex",
                    marginTop: "35px",

                    "& > li": {
                        marginRight: "35px"
                    }
                }
            },

            active: {
                "&:after": {
                    content: '""',
                    display: "block",
                    height: "1px",
                    width: "11px",
                    background: "#000",
                    position: "relative",
                    top: "1px",
                    right: "1px"
                }
            },

            sizeGuide: {
                marginTop: "20px",
                marginBottom: "44px",

                "& > a": {
                    fontSize: "12px",
                    paddingBottom: "20px"
                }
            },

            description: {
                "& > p": {
                    fontSize: "12px",
                    lineHeight: "16px",

                    "&:nth-child(2)": {
                        marginTop: "14px"
                    },

                    "&:last-child": {
                        marginTop: "12px"
                    }
                }
            },

            btnSettings: {
                position: "relative"
            }
        }
    };
    export const { classes } = jss.createStyleSheet(detailPageStyle).attach();