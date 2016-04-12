/*
* @Author: SirMrE
* @http: http://www.sirmre.com/bdo-calculator
* @Copyright: (c) 2016 Mark Eliasen
* @license: May be freely distributed under the CC BY-NC 3.0 License 
*           (https://creativecommons.org/licenses/by-nc/3.0/)
* @Date:   2016-04-07 21:40:17
* @Last Modified by:   SirMrE
* @Last Modified time: 2016-04-12 17:51:36
*/

/* Data from http://bddatabase.net */
/* jslint unused: false */

var BDOdatabase = {
    "max_gear_enhancement": 15,
    "max_acc_enhancement": 5,
    "stats": {
        "ap": {
            "title": "AP",
            "min": 0,
            "max": 0,
            "symbol": ""
        },
        "dp": {
            "title": "DP",
            "total": 0,
            "symbol": ""
        },
        "hp": {
            "title": "Health",
            "total": 0,
            "symbol": ""
        },
        "mpwpsp": {
            "title": "MP/WP/SP",
            "total": 0,
            "symbol": ""
        },
        "hprc": {
            "title": "HP recovery",
            "total": 0,
            "symbol": ""
        },
        "wprc": {
            "title": "WP recovery",
            "total": 0,
            "symbol": ""
        },
        "sprc": {
            "title": "SP recovery",
            "total": 0,
            "symbol": ""
        },
        "mprc": {
            "title": "MP recovery",
            "total": 0,
            "symbol": ""
        },
        "mpar": {
            "title": "MP Auto Recovery",
            "total": 0,
            "symbol": ""
        },
        "wpar": {
            "title": "WP Auto Recovery",
            "total": 0,
            "symbol": ""
        },
        "spar": {
            "title": "SP Auto Recovery",
            "total": 0,
            "symbol": ""
        },
        "hpar": {
            "title": "HP Auto Recovery",
            "total": 0,
            "symbol": ""
        },
        "dr": {
            "title": "Damage Reduction",
            "total": 0,
            "symbol": ""
        },
        "sr": {
            "title": "Stun Resistance",
            "total": 0,
            "symbol": "%"
        },
        "gr": {
            "title": "Grapple Resistance",
            "total": 0,
            "symbol": "%"
        },
        "kb": {
            "title": "Knowback/Floating Resistance",
            "total": 0,
            "symbol": "%"
        },
        "kd": {
            "title": "Knockdown/Bound Resistance",
            "total": 0,
            "symbol": "%"
        },
        "ar": {
            "title": "All Resistances",
            "total": 0,
            "symbol": "%"
        },
        "rta": {
            "title": "Resistance to All Status Abnormalities",
            "total": 0,
            "symbol": "%"
        },
        "as": {
            "title": "Attack Speed",
            "total": 0,
            "symbol": ""
        },
        "cs": {
            "title": "Casting Speed",
            "total": 0,
            "symbol": ""
        },
        "lk": {
            "title": "Luck",
            "total": 0,
            "symbol": ""
        },
        "ms": {
            "title": "Movement Speed",
            "total": 0,
            "symbol": ""
        },
        "chr": {
            "title": "Critical Hit Rate",
            "total": 0,
            "symbol": "%"
        },
        "acc": {
            "title": "Accuracy",
            "total": 0,
            "symbol": ""
        },
        "ev": {
            "title": "Evasion",
            "total": 0,
            "symbol": ""
        },
        "end": {
            "title": "Endurance",
            "total": 0,
            "symbol": ""
        },
        "stam": {
            "title": "Stamina",
            "total": 0,
            "symbol": ""
        },
        "wgt": {
            "title": "Weight Limit",
            "total": 0,
            "symbol": ""
        },
        "jh": {
            "title": "Jump Height",
            "total": 0,
            "symbol": ""
        },
        "bsr": {
            "title": "Black Spirit's Rage",
            "total": 0,
            "symbol": ""
        },
        "dmgtdh": {
            "title": "Damage To Demihumans",
            "total": 0,
            "symbol": ""
        },
        "dmgth": {
            "title": "Damage To Humans",
            "total": 0,
            "symbol": ""
        },
        "dmgaes": {
            "title": "Damage Against Every Species",
            "total": 0,
            "symbol": ""
        },
        "special": {
            "title": "Gear Specials",
            "specials": []
        }
    },
    "rarities": {
        "common": "#ffffff",
        "uncommon": "#5ff369",
        "rare": "#0391c4",
        "epic": "#f6c232",
        "legendary": "#d36300"
    },
    "classes": [
        "Berserker",
        "Ranger",
        "Sorceress",
        "Tamer",
        "Valkyrie",
        "Warrior",
        "Witch",
        "Wizard"
    ],
    "class_weapons": {
        "berserker": {
            "main-weapon": "Axe",
            "secondary-weapon": "Sword Knot"
        },
        "ranger": {
            "main-weapon": "Longbow",
            "secondary-weapon": "Dagger"
        },
        "sorceress": {
            "main-weapon": "Amulet",
            "secondary-weapon": "Talisman"
        },
        "tamer": {
            "main-weapon": "Shortsword",
            "secondary-weapon": "Shortbow"
        },
        "valkyrie": {
            "main-weapon": "Longsword",
            "secondary-weapon": "Shield"
        },
        "warrior": {
            "main-weapon": "Longsword",
            "secondary-weapon": "Shield"
        },
        "witch": {
            "main-weapon": "Staff",
            "secondary-weapon": "Dagger"
        },
        "wizard": {
            "main-weapon": "Staff",
            "secondary-weapon": "Dagger"
        }
    },
    "set_effects": {
        "Agerian": {
            "pieces": {
                "2": {
                    "hp": 100
                },
                "3": {
                    "as": 2,
                    "cs": 2
                }
            },
            "combos": {}
        },
        "Hercules' Might": {
            "pieces": {
                "2": {
                    "wgt": 150
                },
                "3": {
                    "wgt": 50
                }
            },
            "combos": {}
        },
        "Luck of Fortuna": {
            "pieces": {
                "2": {
                    "lk": 2
                },
                "3": {
                    "ms": 3
                }
            },
            "combos": {}
        },
        "Strength of Heve": {
            "pieces": {
                "2": {
                    "hp": 250
                },
                "3": {
                    "hp": 50
                }
            },
            "combos": {}
        },
        "Talis": {
            "pieces": {
                "2": {
                    "ms": 1,
                    "jh": 0
                },
                "3": {
                    "ms": 2
                }
            },
            "combos": {}
        },
        "Taritas": {
            "pieces": {
                "2": {
                    "mpwpsp": 100
                },
                "3": {
                    "acc": 5
                }
            },
            "combos": {}
        },
        "Zereth": {
            "pieces": {
                "2": {
                    "end": 200
                },
                "3": {
                    "dmgaes": 5
                }
            },
            "combos": {}
        },
        "Rocaba": {
            "pieces": {
                "4": {
                    "ev": 2
                }
            },
            "combos": [
                {
                    "pieces": [
                        "gloves",
                        "helmet"
                    ],
                    "effects": {
                        "ev": 5
                    }
                },
                {
                    "pieces": [
                        "armor",
                        "shoes"
                    ],
                    "effects": {
                        "hp": 75,
                        "mpwpsp": 75
                    }
                }
            ]
        },
        "Grunil": {
            "pieces": {
                "4": {
                    "ap": 2
                }
            },
            "combos": [
                {
                    "pieces": [
                        "gloves",
                        "helmet"
                    ],
                    "effects": {
                        "ap": 5
                    }
                },
                {
                    "pieces": [
                        "armor",
                        "shoes"
                    ],
                    "effects": {
                        "hp": 150
                    }
                }
            ]
        },
        "Giath-Bheg-Muskan-RedNose" : {
            "pieces": {
                "3": {
                    "stam": 200
                },
                "4": {
                    "as": 1,
                    "cs": 1
                }
            }
        },
        "Rosar": {
            "pieces": {},
            "combos": [
                {
                    "pieces": [
                        "main-weapon",
                        "secondary-weapon"
                    ],
                    "effects": {
                        "ar": 10
                    }
                }
            ]
        },
        "Krea": {
            "pieces": {},
            "combos": [
                {
                    "pieces": [
                        "main-weapon",
                        "secondary-weapon"
                    ],
                    "effects": {
                        "acc": 5
                    }
                }
            ]
        }
    },
    "items": {
        "helmets": {
            "Agerian Helmet": {
                "set": "Agerian",
                "dp": 4,
                "rarity": "uncommon",
                "gems": 1,
                "item_effects": {
                    "sr": 2,
                    "dr": 2
                },
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "dp": 7
                    },
                    "2": {
                        "dp": 10
                    },
                    "3": {
                        "dp": 12
                    },
                    "4": {
                        "dp": 14
                    },
                    "5": {
                        "dp": 16
                    },
                    "6": {
                        "dp": 19
                    },
                    "7": {
                        "dp": 22
                    },
                    "8": {
                        "dp": 25
                    },
                    "9": {
                        "dp": 28
                    },
                    "10": {
                        "dp": 31
                    },
                    "11": {
                        "dp": 34
                    },
                    "12": {
                        "dp": 37
                    },
                    "13": {
                        "dp": 40
                    },
                    "14": {
                        "dp": 43
                    },
                    "15": {
                        "dp": 46
                    },
                    "16": {
                        "dp": 51
                    },
                    "17": {
                        "dp": 56
                    },
                    "18": {
                        "dp": 64
                    },
                    "19": {
                        "dp": 69
                    },
                    "20": {
                        "dp": 74
                    }
                }
            },
            "Grunil Helmet": {
                "set": "Grunil",
                "dp": 3,
                "rarity": "uncommon",
                "gems": 2,
                "item_effects": {
                    "dr": 2
                },
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "dp": 6
                    },
                    "2": {
                        "dp": 9
                    },
                    "3": {
                        "dp": 11
                    },
                    "4": {
                        "dp": 13
                    },
                    "5": {
                        "dp": 15
                    },
                    "6": {
                        "dp": 18
                    },
                    "7": {
                        "dp": 21
                    },
                    "8": {
                        "dp": 24
                    },
                    "9": {
                        "dp": 27
                    },
                    "10": {
                        "dp": 30
                    },
                    "11": {
                        "dp": 33
                    },
                    "12": {
                        "dp": 36
                    },
                    "13": {
                        "dp": 39
                    },
                    "14": {
                        "dp": 42
                    },
                    "15": {
                        "dp": 45
                    },
                    "16": {
                        "dp": 50
                    },
                    "17": {
                        "dp": 55
                    },
                    "18": {
                        "dp": 63
                    },
                    "19": {
                        "dp": 68
                    },
                    "20": {
                        "dp": 73
                    }
                }
            },
            "Dobart Helmet": {
                "set": "Dobart",
                "dp": 9,
                "rarity": "uncommon",
                "gems": 1,
                "item_effects": {
                    "ev": 0
                },
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "dp": 11
                    },
                    "2": {
                        "dp": 13
                    },
                    "3": {
                        "dp": 14
                    },
                    "4": {
                        "dp": 15
                    },
                    "5": {
                        "dp": 16
                    }
                }
            },
            "Helmet of Hercules\' Might": {
                "set": "Hercules\' Might",
                "dp": 3,
                "rarity": "uncommon",
                "gems": 2,
                "item_effects": {},
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "dp": 6
                    },
                    "2": {
                        "dp": 9
                    },
                    "3": {
                        "dp": 11
                    },
                    "4": {
                        "dp": 13
                    },
                    "5": {
                        "dp": 15
                    },
                    "6": {
                        "dp": 18
                    },
                    "7": {
                        "dp": 21
                    },
                    "8": {
                        "dp": 24
                    },
                    "9": {
                        "dp": 27
                    },
                    "10": {
                        "dp": 30
                    },
                    "11": {
                        "dp": 33
                    },
                    "12": {
                        "dp": 36
                    },
                    "13": {
                        "dp": 39
                    },
                    "14": {
                        "dp": 42
                    },
                    "15": {
                        "dp": 45
                    },
                    "16": {
                        "dp": 50
                    },
                    "17": {
                        "dp": 55
                    },
                    "18": {
                        "dp": 63
                    },
                    "19": {
                        "dp": 68
                    },
                    "20": {
                        "dp": 73
                    }
                }
            },
            "Luck Helmet of Fortuna": {
                "set": "Luck of Fortuna",
                "dp": 3,
                "rarity": "uncommon",
                "gems": 2,
                "item_effects": {},
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "dp": 6
                    },
                    "2": {
                        "dp": 9
                    },
                    "3": {
                        "dp": 11
                    },
                    "4": {
                        "dp": 13
                    },
                    "5": {
                        "dp": 15
                    },
                    "6": {
                        "dp": 18
                    },
                    "7": {
                        "dp": 21
                    },
                    "8": {
                        "dp": 24
                    },
                    "9": {
                        "dp": 27
                    },
                    "10": {
                        "dp": 30
                    },
                    "11": {
                        "dp": 33
                    },
                    "12": {
                        "dp": 36
                    },
                    "13": {
                        "dp": 39
                    },
                    "14": {
                        "dp": 42
                    },
                    "15": {
                        "dp": 45
                    },
                    "16": {
                        "dp": 50
                    },
                    "17": {
                        "dp": 55
                    },
                    "18": {
                        "dp": 63
                    },
                    "19": {
                        "dp": 68
                    },
                    "20": {
                        "dp": 73
                    }
                }
            },
            "Rocaba Helmet": {
                "set": "Rocaba",
                "dp": 3,
                "rarity": "uncommon",
                "gems": 2,
                "item_effects": {},
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "dp": 6
                    },
                    "2": {
                        "dp": 9
                    },
                    "3": {
                        "dp": 11
                    },
                    "4": {
                        "dp": 13
                    },
                    "5": {
                        "dp": 15
                    },
                    "6": {
                        "dp": 18
                    },
                    "7": {
                        "dp": 21
                    },
                    "8": {
                        "dp": 24
                    },
                    "9": {
                        "dp": 27
                    },
                    "10": {
                        "dp": 30
                    },
                    "11": {
                        "dp": 33
                    },
                    "12": {
                        "dp": 36
                    },
                    "13": {
                        "dp": 39
                    },
                    "14": {
                        "dp": 42
                    },
                    "15": {
                        "dp": 45
                    },
                    "16": {
                        "dp": 50
                    },
                    "17": {
                        "dp": 55
                    },
                    "18": {
                        "dp": 63
                    },
                    "19": {
                        "dp": 68
                    },
                    "20": {
                        "dp": 73
                    }
                }
            },
            "Strength Helmet of Heve": {
                "set": "Strength of Heve",
                "dp": 3,
                "rarity": "uncommon",
                "gems": 2,
                "item_effects": {},
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "dp": 6
                    },
                    "2": {
                        "dp": 9
                    },
                    "3": {
                        "dp": 11
                    },
                    "4": {
                        "dp": 13
                    },
                    "5": {
                        "dp": 15
                    },
                    "6": {
                        "dp": 18
                    },
                    "7": {
                        "dp": 21
                    },
                    "8": {
                        "dp": 24
                    },
                    "9": {
                        "dp": 27
                    },
                    "10": {
                        "dp": 30
                    },
                    "11": {
                        "dp": 33
                    },
                    "12": {
                        "dp": 36
                    },
                    "13": {
                        "dp": 39
                    },
                    "14": {
                        "dp": 42
                    },
                    "15": {
                        "dp": 45
                    },
                    "16": {
                        "dp": 50
                    },
                    "17": {
                        "dp": 55
                    },
                    "18": {
                        "dp": 63
                    },
                    "19": {
                        "dp": 68
                    },
                    "20": {
                        "dp": 73
                    }
                }
            },
            "Talis Helmet": {
                "set": "Talis",
                "dp": 3,
                "rarity": "uncommon",
                "gems": 1,
                "item_effects": {
                    "gr": 0
                },
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "dp": 6
                    },
                    "2": {
                        "dp": 9
                    },
                    "3": {
                        "dp": 11
                    },
                    "4": {
                        "dp": 13
                    },
                    "5": {
                        "dp": 15
                    },
                    "6": {
                        "dp": 18
                    },
                    "7": {
                        "dp": 21
                    },
                    "8": {
                        "dp": 24
                    },
                    "9": {
                        "dp": 27
                    },
                    "10": {
                        "dp": 30
                    },
                    "11": {
                        "dp": 33
                    },
                    "12": {
                        "dp": 36
                    },
                    "13": {
                        "dp": 39
                    },
                    "14": {
                        "dp": 42
                    },
                    "15": {
                        "dp": 45
                    },
                    "16": {
                        "dp": 50
                    },
                    "17": {
                        "dp": 55
                    },
                    "18": {
                        "dp": 63
                    },
                    "19": {
                        "dp": 68
                    },
                    "20": {
                        "dp": 73
                    }
                }
            },
            "Taritas Helmet": {
                "set": "Taritas",
                "dp": 5,
                "rarity": "uncommon",
                "gems": 1,
                "item_effects": {
                    "kb": 0
                },
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "dp": 6
                    },
                    "2": {
                        "dp": 9
                    },
                    "3": {
                        "dp": 11
                    },
                    "4": {
                        "dp": 13
                    },
                    "5": {
                        "dp": 15
                    },
                    "6": {
                        "dp": 18
                    },
                    "7": {
                        "dp": 21
                    },
                    "8": {
                        "dp": 24
                    },
                    "9": {
                        "dp": 27
                    },
                    "10": {
                        "dp": 30
                    },
                    "11": {
                        "dp": 33
                    },
                    "12": {
                        "dp": 36
                    },
                    "13": {
                        "dp": 39
                    },
                    "14": {
                        "dp": 42
                    },
                    "15": {
                        "dp": 45
                    },
                    "16": {
                        "dp": 50
                    },
                    "17": {
                        "dp": 55
                    },
                    "18": {
                        "dp": 63
                    },
                    "19": {
                        "dp": 68
                    },
                    "20": {
                        "dp": 73
                    }
                }
            },
            "Zereth Helmet": {
                "set": "Zereth",
                "dp": 5,
                "rarity": "uncommon",
                "gems": 1,
                "item_effects": {
                    "kd": 0
                },
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "dp": 6
                    },
                    "2": {
                        "dp": 9
                    },
                    "3": {
                        "dp": 11
                    },
                    "4": {
                        "dp": 13
                    },
                    "5": {
                        "dp": 15
                    },
                    "6": {
                        "dp": 18
                    },
                    "7": {
                        "dp": 21
                    },
                    "8": {
                        "dp": 24
                    },
                    "9": {
                        "dp": 27
                    },
                    "10": {
                        "dp": 30
                    },
                    "11": {
                        "dp": 33
                    },
                    "12": {
                        "dp": 36
                    },
                    "13": {
                        "dp": 39
                    },
                    "14": {
                        "dp": 42
                    },
                    "15": {
                        "dp": 45
                    },
                    "16": {
                        "dp": 50
                    },
                    "17": {
                        "dp": 55
                    },
                    "18": {
                        "dp": 63
                    },
                    "19": {
                        "dp": 68
                    },
                    "20": {
                        "dp": 73
                    }
                }
            },
            "Giath’s Helmet": {
                "set": "Giath-Bheg-Muskan-RedNose",
                "dp": 4,
                "rarity": "rare",
                "gems": 2,
                "item_effects": {
                    "hp": 100
                },
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "dp": 7
                    },
                    "2": {
                        "dp": 10
                    },
                    "3": {
                        "dp": 13
                    },
                    "4": {
                        "dp": 16
                    },
                    "5": {
                        "dp": 19
                    },
                    "6": {
                        "dp": 22
                    },
                    "7": {
                        "dp": 25
                    },
                    "8": {
                        "dp": 28
                    },
                    "9": {
                        "dp": 31
                    },
                    "10": {
                        "dp": 34
                    },
                    "11": {
                        "dp": 37
                    },
                    "12": {
                        "dp": 40
                    },
                    "13": {
                        "dp": 43
                    },
                    "14": {
                        "dp": 46
                    },
                    "15": {
                        "dp": 49
                    },
                    "16": {
                        "dp": 54
                    },
                    "17": {
                        "dp": 59
                    },
                    "18": {
                        "dp": 67
                    },
                    "19": {
                        "dp": 72
                    },
                    "20": {
                        "dp": 77
                    }
                }
            }
        },
        "armor": {
            "Agerian Armor": {
                "set": "Agerian",
                "dp": 7,
                "rarity": "uncommon",
                "gems": 1,
                "item_effects": {
                    "hp": 50
                },
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "dp": 11
                    },
                    "2": {
                        "dp": 14
                    },
                    "3": {
                        "dp": 17
                    },
                    "4": {
                        "dp": 19
                    },
                    "5": {
                        "dp": 21
                    },
                    "6": {
                        "dp": 24
                    },
                    "7": {
                        "dp": 27
                    },
                    "8": {
                        "dp": 30
                    },
                    "9": {
                        "dp": 33
                    },
                    "10": {
                        "dp": 36
                    },
                    "11": {
                        "dp": 39
                    },
                    "12": {
                        "dp": 42
                    },
                    "13": {
                        "dp": 45
                    },
                    "14": {
                        "dp": 48
                    },
                    "15": {
                        "dp": 51
                    },
                    "16": {
                        "dp": 56
                    },
                    "17": {
                        "dp": 61
                    },
                    "18": {
                        "dp": 69
                    },
                    "19": {
                        "dp": 74
                    },
                    "20": {
                        "dp": 79
                    }
                }
            },
            "Grunil Armor": {
                "set": "Grunil",
                "dp": 6,
                "rarity": "uncommon",
                "gems": 2,
                "item_effects": {},
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "dp": 10
                    },
                    "2": {
                        "dp": 13
                    },
                    "3": {
                        "dp": 16
                    },
                    "4": {
                        "dp": 18
                    },
                    "5": {
                        "dp": 20
                    },
                    "6": {
                        "dp": 23
                    },
                    "7": {
                        "dp": 26
                    },
                    "8": {
                        "dp": 29
                    },
                    "9": {
                        "dp": 32
                    },
                    "10": {
                        "dp": 35
                    },
                    "11": {
                        "dp": 38
                    },
                    "12": {
                        "dp": 41
                    },
                    "13": {
                        "dp": 44
                    },
                    "14": {
                        "dp": 47
                    },
                    "15": {
                        "dp": 50
                    },
                    "16": {
                        "dp": 55
                    },
                    "17": {
                        "dp": 60
                    },
                    "18": {
                        "dp": 68
                    },
                    "19": {
                        "dp": 73
                    },
                    "20": {
                        "dp": 78
                    }

                }
            },
            "Dobart Armor": {
                "set": "Dobart",
                "dp": 11,
                "rarity": "uncommon",
                "gems": 1,
                "item_effects": {
                    "ev": 0
                },
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "dp": 13
                    },
                    "2": {
                        "dp": 15
                    },
                    "3": {
                        "dp": 17
                    },
                    "4": {
                        "dp": 19
                    },
                    "5": {
                        "dp": 21
                    }
                }
            },
            "Armor of Hercules\' Might": {
                "set": "Hercules\' Might",
                "dp": 6,
                "rarity": "uncommon",
                "gems": 2,
                "item_effects": {},
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "dp": 10
                    },
                    "2": {
                        "dp": 13
                    },
                    "3": {
                        "dp": 16
                    },
                    "4": {
                        "dp": 18
                    },
                    "5": {
                        "dp": 20
                    },
                    "6": {
                        "dp": 23
                    },
                    "7": {
                        "dp": 26
                    },
                    "8": {
                        "dp": 29
                    },
                    "9": {
                        "dp": 32
                    },
                    "10": {
                        "dp": 35
                    },
                    "11": {
                        "dp": 38
                    },
                    "12": {
                        "dp": 41
                    },
                    "13": {
                        "dp": 44
                    },
                    "14": {
                        "dp": 47
                    },
                    "15": {
                        "dp": 50
                    },
                    "16": {
                        "dp": 55
                    },
                    "17": {
                        "dp": 60
                    },
                    "18": {
                        "dp": 68
                    },
                    "19": {
                        "dp": 73
                    },
                    "20": {
                        "dp": 78
                    }
                }
            },
            "Luck Armor of Fortuna": {
                "set": "Luck of Fortuna",
                "dp": 6,
                "rarity": "uncommon",
                "gems": 2,
                "item_effects": {},
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "dp": 10
                    },
                    "2": {
                        "dp": 13
                    },
                    "3": {
                        "dp": 16
                    },
                    "4": {
                        "dp": 18
                    },
                    "5": {
                        "dp": 20
                    },
                    "6": {
                        "dp": 23
                    },
                    "7": {
                        "dp": 26
                    },
                    "8": {
                        "dp": 29
                    },
                    "9": {
                        "dp": 32
                    },
                    "10": {
                        "dp": 35
                    },
                    "11": {
                        "dp": 38
                    },
                    "12": {
                        "dp": 41
                    },
                    "13": {
                        "dp": 44
                    },
                    "14": {
                        "dp": 47
                    },
                    "15": {
                        "dp": 50
                    },
                    "16": {
                        "dp": 55
                    },
                    "17": {
                        "dp": 60
                    },
                    "18": {
                        "dp": 68
                    },
                    "19": {
                        "dp": 73
                    },
                    "20": {
                        "dp": 78
                    }
                }
            },
            "Rocaba Armor": {
                "set": "Rocaba",
                "dp": 6,
                "rarity": "uncommon",
                "gems": 2,
                "item_effects": {},
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "dp": 10
                    },
                    "2": {
                        "dp": 13
                    },
                    "3": {
                        "dp": 16
                    },
                    "4": {
                        "dp": 18
                    },
                    "5": {
                        "dp": 20
                    },
                    "6": {
                        "dp": 23
                    },
                    "7": {
                        "dp": 26
                    },
                    "8": {
                        "dp": 29
                    },
                    "9": {
                        "dp": 32
                    },
                    "10": {
                        "dp": 35
                    },
                    "11": {
                        "dp": 38
                    },
                    "12": {
                        "dp": 41
                    },
                    "13": {
                        "dp": 44
                    },
                    "14": {
                        "dp": 47
                    },
                    "15": {
                        "dp": 50
                    },
                    "16": {
                        "dp": 55
                    },
                    "17": {
                        "dp": 60
                    },
                    "18": {
                        "dp": 68
                    },
                    "19": {
                        "dp": 73
                    },
                    "20": {
                        "dp": 78
                    }
                }
            },
            "Strength Armor of Heve": {
                "set": "Strength of Heve",
                "dp": 6,
                "rarity": "uncommon",
                "gems": 2,
                "item_effects": {},
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "dp": 10
                    },
                    "2": {
                        "dp": 13
                    },
                    "3": {
                        "dp": 16
                    },
                    "4": {
                        "dp": 18
                    },
                    "5": {
                        "dp": 20
                    },
                    "6": {
                        "dp": 23
                    },
                    "7": {
                        "dp": 26
                    },
                    "8": {
                        "dp": 29
                    },
                    "9": {
                        "dp": 32
                    },
                    "10": {
                        "dp": 35
                    },
                    "11": {
                        "dp": 38
                    },
                    "12": {
                        "dp": 41
                    },
                    "13": {
                        "dp": 44
                    },
                    "14": {
                        "dp": 47
                    },
                    "15": {
                        "dp": 50
                    },
                    "16": {
                        "dp": 55
                    },
                    "17": {
                        "dp": 60
                    },
                    "18": {
                        "dp": 68
                    },
                    "19": {
                        "dp": 73
                    },
                    "20": {
                        "dp": 78
                    }
                }
            },
            "Talis Armor": {
                "set": "Talis",
                "dp": 6,
                "rarity": "uncommon",
                "gems": 1,
                "item_effects": {
                    "mpar": 5,
                    "wpar": 5,
                    "spar": 5
                },
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "dp": 10
                    },
                    "2": {
                        "dp": 13
                    },
                    "3": {
                        "dp": 16
                    },
                    "4": {
                        "dp": 18
                    },
                    "5": {
                        "dp": 20
                    },
                    "6": {
                        "dp": 23
                    },
                    "7": {
                        "dp": 26
                    },
                    "8": {
                        "dp": 29
                    },
                    "9": {
                        "dp": 32
                    },
                    "10": {
                        "dp": 35
                    },
                    "11": {
                        "dp": 38
                    },
                    "12": {
                        "dp": 41
                    },
                    "13": {
                        "dp": 44
                    },
                    "14": {
                        "dp": 47
                    },
                    "15": {
                        "dp": 50
                    },
                    "16": {
                        "dp": 55
                    },
                    "17": {
                        "dp": 60
                    },
                    "18": {
                        "dp": 68
                    },
                    "19": {
                        "dp": 73
                    },
                    "20": {
                        "dp": 78
                    }
                }
            },
            "Taritas Armor": {
                "set": "Taritas",
                "dp": 8,
                "rarity": "uncommon",
                "gems": 1,
                "item_effects": {
                    "hp": 20,
                    "mpwpsp": 20
                },
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "dp": 12
                    },
                    "2": {
                        "dp": 15
                    },
                    "3": {
                        "dp": 18
                    },
                    "4": {
                        "dp": 20
                    },
                    "5": {
                        "dp": 22
                    },
                    "6": {
                        "dp": 25
                    },
                    "7": {
                        "dp": 28
                    },
                    "8": {
                        "dp": 31
                    },
                    "9": {
                        "dp": 34
                    },
                    "10": {
                        "dp": 37
                    },
                    "11": {
                        "dp": 40
                    },
                    "12": {
                        "dp": 43
                    },
                    "13": {
                        "dp": 46
                    },
                    "14": {
                        "dp": 49
                    },
                    "15": {
                        "dp": 52
                    },
                    "16": {
                        "dp": 57
                    },
                    "17": {
                        "dp": 62
                    },
                    "18": {
                        "dp": 70
                    },
                    "19": {
                        "dp": 75
                    },
                    "20": {
                        "dp": 80
                    }
                }
            },
            "Zereth Armor": {
                "set": "Zereth",
                "dp": 8,
                "rarity": "uncommon",
                "gems": 1,
                "item_effects": {
                    "hpar": 5,
                    "wgt": 50
                },
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "dp": 12
                    },
                    "2": {
                        "dp": 15
                    },
                    "3": {
                        "dp": 18
                    },
                    "4": {
                        "dp": 20
                    },
                    "5": {
                        "dp": 22
                    },
                    "6": {
                        "dp": 25
                    },
                    "7": {
                        "dp": 28
                    },
                    "8": {
                        "dp": 31
                    },
                    "9": {
                        "dp": 34
                    },
                    "10": {
                        "dp": 37
                    },
                    "11": {
                        "dp": 40
                    },
                    "12": {
                        "dp": 43
                    },
                    "13": {
                        "dp": 46
                    },
                    "14": {
                        "dp": 49
                    },
                    "15": {
                        "dp": 52
                    },
                    "16": {
                        "dp": 57
                    },
                    "17": {
                        "dp": 62
                    },
                    "18": {
                        "dp": 70
                    },
                    "19": {
                        "dp": 75
                    },
                    "20": {
                        "dp": 80
                    }
                }
            },
            "Red Nose’s Armor": {
                "set": "Giath-Bheg-Muskan-RedNose",
                "dp": 6,
                "rarity": "rare",
                "gems": 2,
                "item_effects": {
                    "hprc": 100,
                    "mpwpsp": 100
                },
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "dp": 9
                    },
                    "2": {
                        "dp": 12
                    },
                    "3": {
                        "dp": 15
                    },
                    "4": {
                        "dp": 18
                    },
                    "5": {
                        "dp": 21
                    },
                    "6": {
                        "dp": 25
                    },
                    "7": {
                        "dp": 29
                    },
                    "8": {
                        "dp": 33
                    },
                    "9": {
                        "dp": 37
                    },
                    "10": {
                        "dp": 41
                    },
                    "11": {
                        "dp": 45
                    },
                    "12": {
                        "dp": 49
                    },
                    "13": {
                        "dp": 53
                    },
                    "14": {
                        "dp": 57
                    },
                    "15": {
                        "dp": 61
                    },
                    "16": {
                        "dp": 66
                    },
                    "17": {
                        "dp": 71
                    },
                    "18": {
                        "dp": 79
                    },
                    "19": {
                        "dp": 84
                    },
                    "20": {
                        "dp": 89
                    }
                }
            },
            "Hebetate Tree Spirit's Armor": {
                "set": "Giath-Bheg-Muskan-RedNose",
                "dp": 6,
                "rarity": "rare",
                "gems": 2,
                "item_effects": {
                    "hp": 200
                },
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "dp": 9
                    },
                    "2": {
                        "dp": 12
                    },
                    "3": {
                        "dp": 15
                    },
                    "4": {
                        "dp": 18
                    },
                    "5": {
                        "dp": 21
                    },
                    "6": {
                        "dp": 25
                    },
                    "7": {
                        "dp": 29
                    },
                    "8": {
                        "dp": 33
                    },
                    "9": {
                        "dp": 37
                    },
                    "10": {
                        "dp": 41
                    },
                    "11": {
                        "dp": 45
                    },
                    "12": {
                        "dp": 49
                    },
                    "13": {
                        "dp": 53
                    },
                    "14": {
                        "dp": 57
                    },
                    "15": {
                        "dp": 61
                    },
                    "16": {
                        "dp": 66
                    },
                    "17": {
                        "dp": 71
                    },
                    "18": {
                        "dp": 79
                    },
                    "19": {
                        "dp": 84
                    },
                    "20": {
                        "dp": 89
                    }
                }
            }
        },
        "shoes": {
            "Agerian Shoes": {
                "set": "Agerian",
                "dp": 2,
                "rarity": "uncommon",
                "gems": 1,
                "item_effects": {
                    "ms": 1
                },
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "dp": 4
                    },
                    "2": {
                        "dp": 6
                    },
                    "3": {
                        "dp": 8
                    },
                    "4": {
                        "dp": 10
                    },
                    "5": {
                        "dp": 12
                    },
                    "6": {
                        "dp": 14
                    },
                    "7": {
                        "dp": 16
                    },
                    "8": {
                        "dp": 18
                    },
                    "9": {
                        "dp": 20
                    },
                    "10": {
                        "dp": 22
                    },
                    "11": {
                        "dp": 24
                    },
                    "12": {
                        "dp": 26
                    },
                    "13": {
                        "dp": 28
                    },
                    "14": {
                        "dp": 30
                    },
                    "15": {
                        "dp": 32
                    },
                    "16": {
                        "dp": 37
                    },
                    "17": {
                        "dp": 42
                    },
                    "18": {
                        "dp": 50
                    },
                    "19": {
                        "dp": 55
                    },
                    "20": {
                        "dp": 60
                    }
                }
            },
            "Grunil Shoes": {
                "set": "Grunil",
                "dp": 1,
                "rarity": "uncommon",
                "gems": 2,
                "item_effects": {},
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "dp": 3
                    },
                    "2": {
                        "dp": 5
                    },
                    "3": {
                        "dp": 7
                    },
                    "4": {
                        "dp": 9
                    },
                    "5": {
                        "dp": 11
                    },
                    "6": {
                        "dp": 13
                    },
                    "7": {
                        "dp": 15
                    },
                    "8": {
                        "dp": 17
                    },
                    "9": {
                        "dp": 19
                    },
                    "10": {
                        "dp": 21
                    },
                    "11": {
                        "dp": 23
                    },
                    "12": {
                        "dp": 25
                    },
                    "13": {
                        "dp": 27
                    },
                    "14": {
                        "dp": 29
                    },
                    "15": {
                        "dp": 31
                    },
                    "16": {
                        "dp": 36
                    },
                    "17": {
                        "dp": 41
                    },
                    "18": {
                        "dp": 49
                    },
                    "19": {
                        "dp": 54
                    },
                    "20": {
                        "dp": 59
                    }
                }
            },
            "Dobart Shoes": {
                "set": "Dobart",
                "dp": 7,
                "rarity": "uncommon",
                "gems": 1,
                "item_effects": {
                    "ev": 0
                },
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "dp": 8
                    },
                    "2": {
                        "dp": 9
                    },
                    "3": {
                        "dp": 10
                    },
                    "4": {
                        "dp": 11
                    },
                    "5": {
                        "dp": 12
                    }
                }
            },
            "Shoes of Hercules\' Might": {
                "set": "Hercules\' Might",
                "dp": 1,
                "rarity": "uncommon",
                "gems": 2,
                "item_effects": {},
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "dp": 3
                    },
                    "2": {
                        "dp": 5
                    },
                    "3": {
                        "dp": 7
                    },
                    "4": {
                        "dp": 9
                    },
                    "5": {
                        "dp": 11
                    },
                    "6": {
                        "dp": 13
                    },
                    "7": {
                        "dp": 15
                    },
                    "8": {
                        "dp": 17
                    },
                    "9": {
                        "dp": 19
                    },
                    "10": {
                        "dp": 21
                    },
                    "11": {
                        "dp": 23
                    },
                    "12": {
                        "dp": 25
                    },
                    "13": {
                        "dp": 27
                    },
                    "14": {
                        "dp": 29
                    },
                    "15": {
                        "dp": 31
                    },
                    "16": {
                        "dp": 36
                    },
                    "17": {
                        "dp": 41
                    },
                    "18": {
                        "dp": 49
                    },
                    "19": {
                        "dp": 54
                    },
                    "20": {
                        "dp": 59
                    }
                }
            },
            "Luck Shoes of Fortuna": {
                "set": "Luck of Fortuna",
                "dp": 1,
                "rarity": "uncommon",
                "gems": 2,
                "item_effects": {},
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "dp": 3
                    },
                    "2": {
                        "dp": 5
                    },
                    "3": {
                        "dp": 7
                    },
                    "4": {
                        "dp": 9
                    },
                    "5": {
                        "dp": 11
                    },
                    "6": {
                        "dp": 13
                    },
                    "7": {
                        "dp": 15
                    },
                    "8": {
                        "dp": 17
                    },
                    "9": {
                        "dp": 19
                    },
                    "10": {
                        "dp": 21
                    },
                    "11": {
                        "dp": 23
                    },
                    "12": {
                        "dp": 25
                    },
                    "13": {
                        "dp": 27
                    },
                    "14": {
                        "dp": 29
                    },
                    "15": {
                        "dp": 31
                    },
                    "16": {
                        "dp": 36
                    },
                    "17": {
                        "dp": 41
                    },
                    "18": {
                        "dp": 49
                    },
                    "19": {
                        "dp": 54
                    },
                    "20": {
                        "dp": 59
                    }
                }
            },
            "Rocaba Shoes": {
                "set": "Rocaba",
                "dp": 1,
                "rarity": "uncommon",
                "gems": 2,
                "item_effects": {},
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "dp": 3
                    },
                    "2": {
                        "dp": 5
                    },
                    "3": {
                        "dp": 7
                    },
                    "4": {
                        "dp": 9
                    },
                    "5": {
                        "dp": 11
                    },
                    "6": {
                        "dp": 13
                    },
                    "7": {
                        "dp": 15
                    },
                    "8": {
                        "dp": 17
                    },
                    "9": {
                        "dp": 19
                    },
                    "10": {
                        "dp": 21
                    },
                    "11": {
                        "dp": 23
                    },
                    "12": {
                        "dp": 25
                    },
                    "13": {
                        "dp": 27
                    },
                    "14": {
                        "dp": 29
                    },
                    "15": {
                        "dp": 31
                    },
                    "16": {
                        "dp": 36
                    },
                    "17": {
                        "dp": 41
                    },
                    "18": {
                        "dp": 49
                    },
                    "19": {
                        "dp": 54
                    },
                    "20": {
                        "dp": 59
                    }
                }
            },
            "Strength Shoes of Heve": {
                "set": "Strength of Heve",
                "dp": 1,
                "rarity": "uncommon",
                "gems": 2,
                "item_effects": {},
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "dp": 3
                    },
                    "2": {
                        "dp": 5
                    },
                    "3": {
                        "dp": 7
                    },
                    "4": {
                        "dp": 9
                    },
                    "5": {
                        "dp": 11
                    },
                    "6": {
                        "dp": 13
                    },
                    "7": {
                        "dp": 15
                    },
                    "8": {
                        "dp": 17
                    },
                    "9": {
                        "dp": 19
                    },
                    "10": {
                        "dp": 21
                    },
                    "11": {
                        "dp": 23
                    },
                    "12": {
                        "dp": 25
                    },
                    "13": {
                        "dp": 27
                    },
                    "14": {
                        "dp": 29
                    },
                    "15": {
                        "dp": 31
                    },
                    "16": {
                        "dp": 36
                    },
                    "17": {
                        "dp": 41
                    },
                    "18": {
                        "dp": 49
                    },
                    "19": {
                        "dp": 54
                    },
                    "20": {
                        "dp": 59
                    }
                }
            },
            "Talis Shoes": {
                "set": "Talis",
                "dp": 1,
                "rarity": "uncommon",
                "gems": 1,
                "item_effects": {
                    "ms": 2
                },
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "dp": 3
                    },
                    "2": {
                        "dp": 5
                    },
                    "3": {
                        "dp": 7
                    },
                    "4": {
                        "dp": 9
                    },
                    "5": {
                        "dp": 11
                    },
                    "6": {
                        "dp": 13
                    },
                    "7": {
                        "dp": 15
                    },
                    "8": {
                        "dp": 17
                    },
                    "9": {
                        "dp": 19
                    },
                    "10": {
                        "dp": 21
                    },
                    "11": {
                        "dp": 23
                    },
                    "12": {
                        "dp": 25
                    },
                    "13": {
                        "dp": 27
                    },
                    "14": {
                        "dp": 29
                    },
                    "15": {
                        "dp": 31
                    },
                    "16": {
                        "dp": 36
                    },
                    "17": {
                        "dp": 41
                    },
                    "18": {
                        "dp": 49
                    },
                    "19": {
                        "dp": 54
                    },
                    "20": {
                        "dp": 59
                    }
                }
            },
            "Taritas Shoes": {
                "set": "Taritas",
                "dp": 4,
                "rarity": "uncommon",
                "gems": 1,
                "item_effects": {
                    "ev": 0
                },
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "dp": 6
                    },
                    "2": {
                        "dp": 8
                    },
                    "3": {
                        "dp": 10
                    },
                    "4": {
                        "dp": 12
                    },
                    "5": {
                        "dp": 14
                    },
                    "6": {
                        "dp": 16
                    },
                    "7": {
                        "dp": 18
                    },
                    "8": {
                        "dp": 20
                    },
                    "9": {
                        "dp": 22
                    },
                    "10": {
                        "dp": 24
                    },
                    "11": {
                        "dp": 26
                    },
                    "12": {
                        "dp": 28
                    },
                    "13": {
                        "dp": 30
                    },
                    "14": {
                        "dp": 32
                    },
                    "15": {
                        "dp": 34
                    },
                    "16": {
                        "dp": 39
                    },
                    "17": {
                        "dp": 44
                    },
                    "18": {
                        "dp": 52
                    },
                    "19": {
                        "dp": 57
                    },
                    "20": {
                        "dp": 62
                    }
                }
            },
            "Zereth Shoes": {
                "set": "Zereth",
                "dp": 3,
                "rarity": "uncommon",
                "gems": 1,
                "item_effects": {
                    "end": 200
                },
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "dp": 5
                    },
                    "2": {
                        "dp": 7
                    },
                    "3": {
                        "dp": 9
                    },
                    "4": {
                        "dp": 11
                    },
                    "5": {
                        "dp": 13
                    },
                    "6": {
                        "dp": 15
                    },
                    "7": {
                        "dp": 17
                    },
                    "8": {
                        "dp": 19
                    },
                    "9": {
                        "dp": 21
                    },
                    "10": {
                        "dp": 23
                    },
                    "11": {
                        "dp": 25
                    },
                    "12": {
                        "dp": 27
                    },
                    "13": {
                        "dp": 29
                    },
                    "14": {
                        "dp": 31
                    },
                    "15": {
                        "dp": 33
                    },
                    "16": {
                        "dp": 38
                    },
                    "17": {
                        "dp": 43
                    },
                    "18": {
                        "dp": 51
                    },
                    "19": {
                        "dp": 56
                    },
                    "20": {
                        "dp": 61
                    }
                }
            },
            "Muskan's Shoes": {
                "set": "Giath-Bheg-Muskan-RedNose",
                "dp": 4,
                "rarity": "rare",
                "gems": 2,
                "item_effects": {},
                "enhancement_text": "Increased Evasion & effect increases during Enhancement",
                "enhancement": {
                    "1": {
                        "dp": 7
                    },
                    "2": {
                        "dp": 10
                    },
                    "3": {
                        "dp": 13
                    },
                    "4": {
                        "dp": 16
                    },
                    "5": {
                        "dp": 19
                    },
                    "6": {
                        "dp": 22
                    },
                    "7": {
                        "dp": 25
                    },
                    "8": {
                        "dp": 28
                    },
                    "9": {
                        "dp": 31
                    },
                    "10": {
                        "dp": 34
                    },
                    "11": {
                        "dp": 37
                    },
                    "12": {
                        "dp": 40
                    },
                    "13": {
                        "dp": 43
                    },
                    "14": {
                        "dp": 46
                    },
                    "15": {
                        "dp": 49
                    },
                    "16": {
                        "dp": 54
                    },
                    "17": {
                        "dp": 59
                    },
                    "18": {
                        "dp": 67
                    },
                    "19": {
                        "dp": 72
                    },
                    "20": {
                        "dp": 77
                    }
                }
            }
        },
        "gloves": {
            "Agerian Gloves": {
                "set": "Agerian",
                "dp": 2,
                "rarity": "uncommon",
                "gems": 1,
                "item_effects": {
                    "as": 1,
                    "cs": 1
                },
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "dp": 4
                    },
                    "2": {
                        "dp": 6
                    },
                    "3": {
                        "dp": 8
                    },
                    "4": {
                        "dp": 10
                    },
                    "5": {
                        "dp": 12
                    },
                    "6": {
                        "dp": 14
                    },
                    "7": {
                        "dp": 16
                    },
                    "8": {
                        "dp": 18
                    },
                    "9": {
                        "dp": 20
                    },
                    "10": {
                        "dp": 22
                    },
                    "11": {
                        "dp": 24
                    },
                    "12": {
                        "dp": 26
                    },
                    "13": {
                        "dp": 28
                    },
                    "14": {
                        "dp": 30
                    },
                    "15": {
                        "dp": 32
                    },
                    "16": {
                        "dp": 37
                    },
                    "17": {
                        "dp": 42
                    },
                    "18": {
                        "dp": 50
                    },
                    "19": {
                        "dp": 55
                    },
                    "20": {
                        "dp": 60
                    }
                }
            },
            "Grunil Gloves": {
                "set": "Grunil",
                "dp": 1,
                "rarity": "uncommon",
                "gems": 2,
                "item_effects": {},
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "dp": 3
                    },
                    "2": {
                        "dp": 5
                    },
                    "3": {
                        "dp": 7
                    },
                    "4": {
                        "dp": 9
                    },
                    "5": {
                        "dp": 11
                    },
                    "6": {
                        "dp": 13
                    },
                    "7": {
                        "dp": 15
                    },
                    "8": {
                        "dp": 17
                    },
                    "9": {
                        "dp": 19
                    },
                    "10": {
                        "dp": 21
                    },
                    "11": {
                        "dp": 23
                    },
                    "12": {
                        "dp": 25
                    },
                    "13": {
                        "dp": 27
                    },
                    "14": {
                        "dp": 29
                    },
                    "15": {
                        "dp": 31
                    },
                    "16": {
                        "dp": 36
                    },
                    "17": {
                        "dp": 41
                    },
                    "18": {
                        "dp": 49
                    },
                    "19": {
                        "dp": 54
                    },
                    "20": {
                        "dp": 59
                    }
                }
            },
            "Dobart Gloves": {
                "set": "Dobart",
                "dp": 7,
                "rarity": "uncommon",
                "gems": 1,
                "item_effects": {
                    "ev": 0
                },
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "dp": 8
                    },
                    "2": {
                        "dp": 9
                    },
                    "3": {
                        "dp": 10
                    },
                    "4": {
                        "dp": 11
                    },
                    "5": {
                        "dp": 12
                    }
                }
            },
            "Gloves of Hercules\' Might": {
                "set": "Hercules\' Might",
                "dp": 1,
                "rarity": "uncommon",
                "gems": 2,
                "item_effects": {},
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "dp": 3
                    },
                    "2": {
                        "dp": 5
                    },
                    "3": {
                        "dp": 7
                    },
                    "4": {
                        "dp": 9
                    },
                    "5": {
                        "dp": 11
                    },
                    "6": {
                        "dp": 13
                    },
                    "7": {
                        "dp": 15
                    },
                    "8": {
                        "dp": 17
                    },
                    "9": {
                        "dp": 19
                    },
                    "10": {
                        "dp": 21
                    },
                    "11": {
                        "dp": 23
                    },
                    "12": {
                        "dp": 25
                    },
                    "13": {
                        "dp": 27
                    },
                    "14": {
                        "dp": 29
                    },
                    "15": {
                        "dp": 31
                    },
                    "16": {
                        "dp": 36
                    },
                    "17": {
                        "dp": 41
                    },
                    "18": {
                        "dp": 49
                    },
                    "19": {
                        "dp": 54
                    },
                    "20": {
                        "dp": 59
                    }
                }
            },
            "Luck Gloves of Fortuna": {
                "set": "Luck of Fortuna",
                "dp": 1,
                "rarity": "uncommon",
                "gems": 2,
                "item_effects": {},
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "dp": 3
                    },
                    "2": {
                        "dp": 5
                    },
                    "3": {
                        "dp": 7
                    },
                    "4": {
                        "dp": 9
                    },
                    "5": {
                        "dp": 11
                    },
                    "6": {
                        "dp": 13
                    },
                    "7": {
                        "dp": 15
                    },
                    "8": {
                        "dp": 17
                    },
                    "9": {
                        "dp": 19
                    },
                    "10": {
                        "dp": 21
                    },
                    "11": {
                        "dp": 23
                    },
                    "12": {
                        "dp": 25
                    },
                    "13": {
                        "dp": 27
                    },
                    "14": {
                        "dp": 29
                    },
                    "15": {
                        "dp": 31
                    },
                    "16": {
                        "dp": 36
                    },
                    "17": {
                        "dp": 41
                    },
                    "18": {
                        "dp": 49
                    },
                    "19": {
                        "dp": 54
                    },
                    "20": {
                        "dp": 59
                    }
                }
            },
            "Rocaba Gloves": {
                "set": "Rocaba",
                "dp": 1,
                "rarity": "uncommon",
                "gems": 2,
                "item_effects": {},
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "dp": 3
                    },
                    "2": {
                        "dp": 5
                    },
                    "3": {
                        "dp": 7
                    },
                    "4": {
                        "dp": 9
                    },
                    "5": {
                        "dp": 11
                    },
                    "6": {
                        "dp": 13
                    },
                    "7": {
                        "dp": 15
                    },
                    "8": {
                        "dp": 17
                    },
                    "9": {
                        "dp": 19
                    },
                    "10": {
                        "dp": 21
                    },
                    "11": {
                        "dp": 23
                    },
                    "12": {
                        "dp": 25
                    },
                    "13": {
                        "dp": 27
                    },
                    "14": {
                        "dp": 29
                    },
                    "15": {
                        "dp": 31
                    },
                    "16": {
                        "dp": 36
                    },
                    "17": {
                        "dp": 41
                    },
                    "18": {
                        "dp": 49
                    },
                    "19": {
                        "dp": 54
                    },
                    "20": {
                        "dp": 59
                    }
                }
            },
            "Strength Gloves of Heve": {
                "set": "Strength of Heve",
                "dp": 1,
                "rarity": "uncommon",
                "gems": 2,
                "item_effects": {},
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "dp": 3
                    },
                    "2": {
                        "dp": 5
                    },
                    "3": {
                        "dp": 7
                    },
                    "4": {
                        "dp": 9
                    },
                    "5": {
                        "dp": 11
                    },
                    "6": {
                        "dp": 13
                    },
                    "7": {
                        "dp": 15
                    },
                    "8": {
                        "dp": 17
                    },
                    "9": {
                        "dp": 19
                    },
                    "10": {
                        "dp": 21
                    },
                    "11": {
                        "dp": 23
                    },
                    "12": {
                        "dp": 25
                    },
                    "13": {
                        "dp": 27
                    },
                    "14": {
                        "dp": 29
                    },
                    "15": {
                        "dp": 31
                    },
                    "16": {
                        "dp": 36
                    },
                    "17": {
                        "dp": 41
                    },
                    "18": {
                        "dp": 49
                    },
                    "19": {
                        "dp": 54
                    },
                    "20": {
                        "dp": 59
                    }
                }
            },
            "Talis Gloves": {
                "set": "Talis",
                "dp": 1,
                "rarity": "uncommon",
                "gems": 1,
                "item_effects": {
                    "chr": 1
                },
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "dp": 3
                    },
                    "2": {
                        "dp": 5
                    },
                    "3": {
                        "dp": 7
                    },
                    "4": {
                        "dp": 9
                    },
                    "5": {
                        "dp": 11
                    },
                    "6": {
                        "dp": 13
                    },
                    "7": {
                        "dp": 15
                    },
                    "8": {
                        "dp": 17
                    },
                    "9": {
                        "dp": 19
                    },
                    "10": {
                        "dp": 21
                    },
                    "11": {
                        "dp": 23
                    },
                    "12": {
                        "dp": 25
                    },
                    "13": {
                        "dp": 27
                    },
                    "14": {
                        "dp": 29
                    },
                    "15": {
                        "dp": 31
                    },
                    "16": {
                        "dp": 36
                    },
                    "17": {
                        "dp": 41
                    },
                    "18": {
                        "dp": 49
                    },
                    "19": {
                        "dp": 54
                    },
                    "20": {
                        "dp": 59
                    }
                }
            },
            "Taritas Gloves": {
                "set": "Taritas",
                "dp": 3,
                "rarity": "uncommon",
                "gems": 1,
                "item_effects": {
                    "acc": 2
                },
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "dp": 5
                    },
                    "2": {
                        "dp": 7
                    },
                    "3": {
                        "dp": 9
                    },
                    "4": {
                        "dp": 11
                    },
                    "5": {
                        "dp": 13
                    },
                    "6": {
                        "dp": 15
                    },
                    "7": {
                        "dp": 17
                    },
                    "8": {
                        "dp": 19
                    },
                    "9": {
                        "dp": 21
                    },
                    "10": {
                        "dp": 23
                    },
                    "11": {
                        "dp": 25
                    },
                    "12": {
                        "dp": 27
                    },
                    "13": {
                        "dp": 29
                    },
                    "14": {
                        "dp": 31
                    },
                    "15": {
                        "dp": 33
                    },
                    "16": {
                        "dp": 38
                    },
                    "17": {
                        "dp": 43
                    },
                    "18": {
                        "dp": 51
                    },
                    "19": {
                        "dp": 56
                    },
                    "20": {
                        "dp": 61
                    }
                }
            },
            "Zereth Gloves": {
                "set": "Zereth",
                "dp": 3,
                "rarity": "uncommon",
                "gems": 1,
                "item_effects": {
                    "dmgaes": 2
                },
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "dp": 5
                    },
                    "2": {
                        "dp": 7
                    },
                    "3": {
                        "dp": 9
                    },
                    "4": {
                        "dp": 11
                    },
                    "5": {
                        "dp": 13
                    },
                    "6": {
                        "dp": 15
                    },
                    "7": {
                        "dp": 17
                    },
                    "8": {
                        "dp": 19
                    },
                    "9": {
                        "dp": 21
                    },
                    "10": {
                        "dp": 23
                    },
                    "11": {
                        "dp": 25
                    },
                    "12": {
                        "dp": 27
                    },
                    "13": {
                        "dp": 29
                    },
                    "14": {
                        "dp": 31
                    },
                    "15": {
                        "dp": 33
                    },
                    "16": {
                        "dp": 38
                    },
                    "17": {
                        "dp": 43
                    },
                    "18": {
                        "dp": 51
                    },
                    "19": {
                        "dp": 56
                    },
                    "20": {
                        "dp": 61
                    }
                }
            },
            "Bheg's Gloves": {
                "set": "Giath-Bheg-Muskan-RedNose",
                "dp": 2,
                "rarity": "rare",
                "gems": 2,
                "item_effects": {},
                "enhancement_text": "Increased Accuracy & effect increases during Enhancement",
                "enhancement": {
                    "1": {
                        "dp": 4
                    },
                    "2": {
                        "dp": 6
                    },
                    "3": {
                        "dp": 8
                    },
                    "4": {
                        "dp": 10
                    },
                    "5": {
                        "dp": 12
                    },
                    "6": {
                        "dp": 14
                    },
                    "7": {
                        "dp": 16
                    },
                    "8": {
                        "dp": 18
                    },
                    "9": {
                        "dp": 20
                    },
                    "10": {
                        "dp": 22
                    },
                    "11": {
                        "dp": 24
                    },
                    "12": {
                        "dp": 26
                    },
                    "13": {
                        "dp": 28
                    },
                    "14": {
                        "dp": 30
                    },
                    "15": {
                        "dp": 32
                    },
                    "16": {
                        "dp": 37
                    },
                    "17": {
                        "dp": 42
                    },
                    "18": {
                        "dp": 50
                    },
                    "19": {
                        "dp": 55
                    },
                    "20": {
                        "dp": 60
                    }
                }
            }
        },
        "earrings": {
            "Yuria Earring": {
                "dp": 0,
                "ap": 0,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {
                    "dmgth": 2
                },
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "dmgth": 3
                    },
                    "2": {
                        "dmgth": 4
                    },
                    "3": {
                        "dmgth": 5
                    },
                    "4": {
                        "dmgth": 6
                    },
                    "5": {
                        "dmgth": 8
                    }
                }
            },
            "Bares Earring": {
                "dp": 0,
                "ap": 2,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {},
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "ap": 3
                    },
                    "2": {
                        "ap": 4
                    },
                    "3": {
                        "ap": 5
                    },
                    "4": {
                        "ap": 6
                    },
                    "5": {
                        "ap": 8
                    }
                }
            },
            "Talis Earring": {
                "dp": 2,
                "ap": 0,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {},
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "dp": 3
                    },
                    "2": {
                        "dp": 4
                    },
                    "3": {
                        "dp": 5
                    },
                    "4": {
                        "dp": 6
                    },
                    "5": {
                        "dp": 8
                    }
                }
            },
            "Star Diamond Earring": {
                "dp": 3,
                "ap": 3,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {},
                "enhancement_text": "",
                "enhancement": {}
            },
            "Ocean Sapphire Earring": {
                "dp": 3,
                "ap": 0,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {
                    "mpwpsp": 30
                },
                "enhancement_text": "",
                "enhancement": {}
            },
            "Kalis Earring": {
                "dp": 0,
                "ap": 0,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {
                    "acc": 2
                },
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "acc": 3
                    },
                    "2": {
                        "acc": 4
                    },
                    "3": {
                        "acc": 5
                    },
                    "4": {
                        "acc": 6
                    },
                    "5": {
                        "acc": 8
                    }
                }
            },
            "Hesus Earring": {
                "dp": 1,
                "ap": 0,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {},
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "dp": 2
                    },
                    "2": {
                        "dp": 3
                    },
                    "3": {
                        "dp": 4
                    },
                    "4": {
                        "dp": 5
                    },
                    "5": {
                        "dp": 7
                    }
                }
            },
            "Gold Topaz Earring": {
                "dp": 3,
                "ap": 0,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {
                    "stam": 60
                },
                "enhancement_text": "",
                "enhancement": {}
            },
            "Forest Emerald Earring": {
                "dp": 3,
                "ap": 0,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {
                    "hprc": 3,
                    "mprc": 3,
                    "wprc": 3,
                    "sprc": 3
                },
                "enhancement_text": "",
                "enhancement": {}
            },
            "Elisha Earring": {
                "dp": 0,
                "ap": 0,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {
                    "mpwpsp": 15
                },
                "enhancement_text": "",
                "enhancement": {}
            },
            "Earring of Dim Magical Power": {
                "dp": 0,
                "ap": 3,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {},
                "enhancement_text": "",
                "enhancement": {}
            },
            "Earring of Concentrated Magical Power": {
                "dp": 0,
                "ap": 4,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {},
                "enhancement_text": "",
                "enhancement": {}
            },
            "Blood Ruby Earrings": {
                "dp": 3,
                "ap": 0,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {
                    "hp": 30
                },
                "enhancement_text": "",
                "enhancement": {}
            },
            "Witch's Earring": {
                "dp": 5,
                "ap": 0,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {},
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "ap": 7
                    },
                    "2": {
                        "ap": 9
                    },
                    "3": {
                        "ap": 11
                    },
                    "4": {
                        "ap": 13
                    },
                    "5": {
                        "ap": 15
                    }
                }
            },
            "Tungrade Earring": {
                "dp": 6,
                "ap": 0,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "bsr": 10
                },
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "ap": 8
                    },
                    "2": {
                        "ap": 10
                    },
                    "3": {
                        "ap": 12
                    },
                    "4": {
                        "ap": 14
                    },
                    "5": {
                        "ap": 16
                    }
                }
            },
            "Translucent Ocean Sapphire Earring": {
                "dp": 4,
                "ap": 0,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "mpwpsp": 40
                },
                "enhancement_text": "",
                "enhancement": {}
            },
            "Token of Friendship": {
                "dp": 5,
                "ap": 0,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "hp": 20
                },
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "dp": 7,
                        "hp": 35
                    },
                    "2": {
                        "dp": 9,
                        "hp": 50
                    },
                    "3": {
                        "dp": 11,
                        "hp": 65
                    },
                    "4": {
                        "dp": 13,
                        "hp": 80
                    },
                    "5": {
                        "dp": 15,
                        "hp": 95
                    }
                }
            },
            "Starry Night Diamond Earring": {
                "dp": 4,
                "ap": 4,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {},
                "enhancement_text": "",
                "enhancement": {}
            },
            "Shining Gold Topaz Earrings": {
                "dp": 4,
                "ap": 0,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "stam": 80
                },
                "enhancement_text": "",
                "enhancement": {}
            },
            "Sealed Spirit's Earring": {
                "dp": 4,
                "ap": 0,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "hp": 10
                },
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "hp": 20,
                        "dp": 5
                    },
                    "2": {
                        "hp": 30,
                        "dp": 6
                    }
                }
            },
            "Ridell Earring": {
                "dp": 4,
                "ap": 0,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "acc": 1
                },
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "dp": 6,
                        "acc": 2
                    },
                    "2": {
                        "dp": 7,
                        "acc": 3
                    },
                    "3": {
                        "dp": 8,
                        "acc": 4
                    },
                    "4": {
                        "dp": 9,
                        "acc": 5
                    },
                    "5": {
                        "dp": 10,
                        "acc": 6
                    }
                }
            },
            "Red Coral Earring": {
                "dp": 0,
                "ap": 2,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "acc": 3,
                    "end": 50
                },
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "ap": 4,
                        "acc": 4,
                        "end": 50
                    },
                    "2": {
                        "ap": 6,
                        "acc": 5,
                        "end": 100
                    },
                    "3": {
                        "ap": 8,
                        "acc": 6,
                        "end": 50
                    },
                    "4": {
                        "ap": 10,
                        "acc": 7,
                        "end": 50
                    },
                    "5": {
                        "ap": 12,
                        "acc": 8,
                        "end": 50
                    }
                }
            },
            "Placid Forest Emerald Earring": {
                "dp": 4,
                "ap": 0,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "hprc": 4,
                    "mprc": 4,
                    "wprc": 4,
                    "sprc": 4
                },
                "enhancement_text": "",
                "enhancement": {}
            },
            "Mesto Earring": {
                "dp": 0,
                "ap": 4,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "acc": 1
                },
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "ap": 5,
                        "acc": 2
                    },
                    "2": {
                        "ap": 6,
                        "acc": 3
                    },
                    "3": {
                        "ap": 7,
                        "acc": 4
                    },
                    "4": {
                        "ap": 8,
                        "acc": 5
                    },
                    "5": {
                        "ap": 9,
                        "acc": 6
                    }
                }
            },
            "Fugitive Khalk's Earring": {
                "dp": 0,
                "ap": 5,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "end": 50,
                    "mpwpsp": 50
                },
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "ap": 7,
                        "end": 70
                    },
                    "2": {
                        "ap": 9,
                        "end": 90
                    },
                    "3": {
                        "ap": 11,
                        "end": 110
                    },
                    "4": {
                        "ap": 13,
                        "end": 130
                    },
                    "5": {
                        "ap": 15,
                        "end": 150
                    }
                }
            },
            "Earring of Sealed Magical Power": {
                "dp": 0,
                "ap": 5,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {},
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "ap": 6
                    },
                    "2": {
                        "ap": 7
                    },
                    "3": {
                        "ap": 8
                    },
                    "4": {
                        "ap": 9
                    },
                    "5": {
                        "ap": 10
                    }
                }
            },
            "Dark Blood Ruby Earrings": {
                "dp": 4,
                "ap": 0,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "hp": 40
                },
                "enhancement_text": "",
                "enhancement": {}
            },
            "Blue Whale Molar Earring": {
                "dp": 5,
                "ap": 0,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "hp": 100
                },
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "ap": 7
                    },
                    "2": {
                        "ap": 9
                    },
                    "3": {
                        "ap": 11
                    },
                    "4": {
                        "ap": 13
                    },
                    "5": {
                        "ap": 15
                    }
                }
            },
            "Blue Coral Earring": {
                "dp": 0,
                "ap": 4,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "mpwpsp": 25
                },
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "ap": 6
                    },
                    "2": {
                        "ap": 8
                    },
                    "3": {
                        "ap": 10
                    },
                    "4": {
                        "ap": 12
                    },
                    "5": {
                        "ap": 14
                    }
                }
            },
            "Topaz Earrings of Regeneration": {
                "dp": 5,
                "ap": 0,
                "rarity": "epic",
                "gems": 0,
                "item_effects": {
                    "stam": 100
                },
                "enhancement_text": "",
                "enhancement": {}
            },
            "Sapphire Earring of Storms": {
                "dp": 5,
                "ap": 0,
                "rarity": "epic",
                "gems": 0,
                "item_effects": {
                    "mpwpsp": 50
                },
                "enhancement_text": "",
                "enhancement": {}
            },
            "Emerald Earring of Tranquility": {
                "dp": 5,
                "ap": 0,
                "rarity": "epic",
                "gems": 0,
                "item_effects": {
                    "hprc": 5,
                    "mprc": 5,
                    "wprc": 5,
                    "sprc": 5
                },
                "enhancement_text": "",
                "enhancement": {}
            },
            "Diamond Earring of Fortitude": {
                "dp": 5,
                "ap": 5,
                "rarity": "epic",
                "gems": 0,
                "item_effects": {},
                "enhancement_text": "",
                "enhancement": {}
            },
            "Corrupt Ruby Earrings": {
                "dp": 5,
                "ap": 0,
                "rarity": "epic",
                "gems": 0,
                "item_effects": {
                    "hp": 50
                },
                "enhancement_text": "",
                "enhancement": {}
            }
        },
        "rings": {
            "Yuria Ring": {
                "dp": 0,
                "ap": 0,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {
                    "dmgth": 2
                },
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "dmgth": 3
                    },
                    "2": {
                        "dmgth": 4
                    },
                    "3": {
                        "dmgth": 5
                    },
                    "4": {
                        "dmgth": 6
                    },
                    "5": {
                        "dmgth": 8
                    }
                }
            },
            "Talis Ring": {
                "dp": 2,
                "ap": 0,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {},
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "dp": 3
                    },
                    "2": {
                        "dp": 4
                    },
                    "3": {
                        "dp": 5
                    },
                    "4": {
                        "dp": 6
                    },
                    "5": {
                        "dp": 8
                    }
                }
            },
            "Star Diamond Ring": {
                "dp": 0,
                "ap": 3,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {
                    "ap": 3,
                    "hp": 30
                },
                "enhancement_text": "",
                "enhancement": {}
            },
            "Ring of Good Deeds": {
                "dp": 0,
                "ap": 2,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {
                    "acc": 1
                },
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "ap": 3,
                        "acc": 2
                    },
                    "2": {
                        "ap": 4,
                        "acc": 3
                    },
                    "3": {
                        "ap": 5,
                        "acc": 4
                    },
                    "4": {
                        "ap": 6,
                        "acc": 5
                    },
                    "5": {
                        "ap": 7,
                        "acc": 6
                    }
                }
            },
            "Ring of Dim Magical Power": {
                "dp": 0,
                "ap": 3,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {},
                "enhancement_text": "",
                "enhancement": {}
            },
            "Ring of Concentrated Magical Power": {
                "dp": 0,
                "ap": 4,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {},
                "enhancement_text": "",
                "enhancement": {}
            },
            "Ocean Sapphire Ring": {
                "dp": 0,
                "ap": 0,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {
                    "dmgtdh": 3,
                    "hp": 30
                },
                "enhancement_text": "",
                "enhancement": {}
            },
            "Ljurik's Ring": {
                "dp": 2,
                "ap": 0,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {
                    "hp": 20
                },
                "enhancement_text": "",
                "enhancement": {}
            },
            "Kalis Ring": {
                "dp": 0,
                "ap": 0,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {
                    "acc": 2
                },
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "acc": 3
                    },
                    "2": {
                        "acc": 4
                    },
                    "3": {
                        "acc": 5
                    },
                    "4": {
                        "acc": 6
                    },
                    "5": {
                        "acc": 7
                    }
                }
            },
            "Hesus Ring": {
                "dp": 1,
                "ap": 0,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {},
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "dp": 2
                    },
                    "2": {
                        "dp": 3
                    },
                    "3": {
                        "dp": 4
                    },
                    "4": {
                        "dp": 5
                    },
                    "5": {
                        "dp": 7
                    }
                }
            },
            "Gold Topaz Ring": {
                "dp": 0,
                "ap": 0,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {
                    "dmgaes": 20,
                    "hp": 30
                },
                "enhancement_text": "",
                "enhancement": {}
            },
            "Forest Emerald Ring": {
                "dp": 0,
                "ap": 0,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {
                    "acc": 3,
                    "hp": 30
                },
                "enhancement_text": "",
                "enhancement": {}
            },
            "Elisha Ring": {
                "dp": 0,
                "ap": 0,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {
                    "hp": 15
                },
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "hp": 30
                    },
                    "2": {
                        "hp": 45
                    },
                    "3": {
                        "hp": 60
                    },
                    "4": {
                        "hp": 75
                    },
                    "5": {
                        "hp": 100
                    }
                }
            },
            "Blood Ruby Ring": {
                "dp": 0,
                "ap": 0,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {
                    "dmgth": 3,
                    "hp": 30
                },
                "enhancement_text": "",
                "enhancement": {}
            },
            "Bares Ring": {
                "dp": 0,
                "ap": 2,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {},
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "ap": 3
                    },
                    "2": {
                        "ap": 4
                    },
                    "3": {
                        "ap": 5
                    },
                    "4": {
                        "ap": 6
                    },
                    "5": {
                        "ap": 8
                    }
                }
            },
            "Translucent Ocean Sapphire Ring": {
                "dp": 0,
                "ap": 0,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "dmgtdh": 4,
                    "hp": 40
                },
                "enhancement_text": "",
                "enhancement": {}
            },
            "Starry Night Diamond Ring": {
                "dp": 0,
                "ap": 4,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "ap": 4,
                    "hp": 40
                },
                "enhancement_text": "",
                "enhancement": {}
            },
            "Shrine Guardian Token": {
                "dp": 5,
                "ap": 0,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "hp": 20
                },
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "dp": 7,
                        "hp": 35
                    },
                    "2": {
                        "dp": 9,
                        "hp": 50
                    },
                    "3": {
                        "dp": 11,
                        "hp": 65
                    },
                    "4": {
                        "dp": 13,
                        "hp": 80
                    },
                    "5": {
                        "dp": 15,
                        "hp": 95
                    }
                }
            },
            "Shining Gold Topaz Ring": {
                "dp": 0,
                "ap": 0,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "dmgth": 4,
                    "hp": 40
                },
                "enhancement_text": "",
                "enhancement": {}
            },
            "Sealed Spirit's Ring": {
                "dp": 0,
                "ap": 4,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "acc": 1
                },
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "ap": 5,
                        "acc": 2
                    },
                    "2": {
                        "ap": 6,
                        "acc": 3
                    }
                }
            },
            "Saya's Ring of Eternity": {
                "dp": 7,
                "ap": 0,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "mpwpsp": 50
                },
                "enhancement_text": "",
                "enhancement": {}
            },
            "Sahazad's Ring of Monarch": {
                "dp": 0,
                "ap": 7,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "hp": 25
                },
                "enhancement_text": "",
                "enhancement": {}
            },
            "Ring of Sealed Magical Power": {
                "dp": 0,
                "ap": 5,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {},
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "ap": 6
                    },
                    "2": {
                        "ap": 7
                    },
                    "3": {
                        "ap": 8
                    },
                    "4": {
                        "ap": 9
                    },
                    "5": {
                        "ap": 10
                    }
                }
            },
            "Red Coral Ring": {
                "dp": 3,
                "ap": 4,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "stam": 50
                },
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "ap": 5,
                        "dp": 4
                    },
                    "2": {
                        "ap": 6,
                        "dp": 5
                    },
                    "3": {
                        "ap": 7,
                        "dp": 6
                    },
                    "4": {
                        "ap": 8,
                        "dp": 7
                    },
                    "5": {
                        "ap": 9,
                        "dp": 8
                    }
                }
            },
            "Placid Forest Emerald Ring": {
                "dp": 0,
                "ap": 0,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "acc": 4,
                    "hp": 40
                },
                "enhancement_text": "",
                "enhancement": {}
            },
            "Outlaw's Ring": {
                "dp": 4,
                "ap": 3,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "stam": 50
                },
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "ap": 4,
                        "dp": 5
                    },
                    "2": {
                        "ap": 5,
                        "dp": 6
                    },
                    "3": {
                        "ap": 6,
                        "dp": 7
                    },
                    "4": {
                        "ap": 7,
                        "dp": 8
                    },
                    "5": {
                        "ap": 8,
                        "dp": 9
                    }
                }
            },
            "Nert Ring": {
                "dp": 0,
                "ap": 0,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "acc": 1,
                    "hp": 25
                },
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "acc": 2,
                        "hp": 50
                    },
                    "2": {
                        "acc": 3,
                        "hp": 75
                    },
                    "3": {
                        "acc": 4,
                        "hp": 100
                    },
                    "4": {
                        "acc": 5,
                        "hp": 125
                    },
                    "5": {
                        "acc": 6,
                        "hp": 150
                    }
                }
            },
            "Mark of Shadow": {
                "dp": 0,
                "ap": 5,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {},
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "ap": 7
                    },
                    "2": {
                        "ap": 9
                    },
                    "3": {
                        "ap": 11
                    },
                    "4": {
                        "ap": 13
                    },
                    "5": {
                        "ap": 15
                    }
                }
            },
            "Manmehan's Ring of Gold": {
                "dp": 7,
                "ap": 0,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "hp": 50
                },
                "enhancement_text": "",
                "enhancement": {}
            },
            "Dark Blood Ruby Ring": {
                "dp": 0,
                "ap": 0,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "dmgth": 4,
                    "hp": 40
                },
                "enhancement_text": "",
                "enhancement": {}
            },
            "Blue Coral Ring": {
                "dp": 0,
                "ap": 5,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "mpwpsp": 25
                },
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "ap": 6,
                        "mpwpsp": 30
                    },
                    "2": {
                        "ap": 7,
                        "mpwpsp": 35
                    },
                    "3": {
                        "ap": 8,
                        "mpwpsp": 40
                    },
                    "4": {
                        "ap": 9,
                        "mpwpsp": 45
                    },
                    "5": {
                        "ap": 10,
                        "mpwpsp": 50
                    }
                }
            },
            "Barhan's Ring of Conquest": {
                "dp": 0,
                "ap": 7,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "mpwpsp": 25
                },
                "enhancement_text": "",
                "enhancement": {}
            },
            "Corrupt Ruby Ring": {
                "dp": 0,
                "ap": 0,
                "rarity": "epic",
                "gems": 0,
                "item_effects": {
                    "dmgth": 5,
                    "hp": 50
                },
                "enhancement_text": "",
                "enhancement": {}
            },
            "Diamond Ring of Fortitude": {
                "dp": 0,
                "ap": 5,
                "rarity": "epic",
                "gems": 0,
                "item_effects": {
                    "ap": 5,
                    "hp": 50
                },
                "enhancement_text": "",
                "enhancement": {}
            },
            "Emerald Ring of Tranquility": {
                "dp": 0,
                "ap": 0,
                "rarity": "epic",
                "gems": 0,
                "item_effects": {
                    "acc": 5,
                    "hp": 50
                },
                "enhancement_text": "",
                "enhancement": {}
            },
            "Sapphire Ring of Storms": {
                "dp": 0,
                "ap": 0,
                "rarity": "epic",
                "gems": 0,
                "item_effects": {
                    "dmgtdh": 5,
                    "hp": 50
                },
                "enhancement_text": "",
                "enhancement": {}
            },
            "Topaz Ring of Regeneration": {
                "dp": 0,
                "ap": 0,
                "rarity": "epic",
                "gems": 0,
                "item_effects": {
                    "dmgaes": 5,
                    "hp": 50
                },
                "enhancement_text": "",
                "enhancement": {}
            },
            "Ring of Crescent Guardian": {
                "dp": 0,
                "ap": 5,
                "rarity": "epic",
                "gems": 0,
                "item_effects": {},
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "ap": 8
                    },
                    "2": {
                        "ap": 11
                    },
                    "3": {
                        "ap": 14
                    },
                    "4": {
                        "ap": 17
                    },
                    "5": {
                        "ap": 20
                    }
                }
            },
            "Ring of Cadry Guardian": {
                "dp": 5,
                "ap": 0,
                "rarity": "epic",
                "gems": 0,
                "item_effects": {
                    "hp": 25,
                    "mpwpsp": 25
                },
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "dp": 8,
                        "hp": 40
                    },
                    "2": {
                        "dp": 11,
                        "hp": 55
                    },
                    "3": {
                        "dp": 14,
                        "hp": 70
                    },
                    "4": {
                        "dp": 17,
                        "hp": 85
                    },
                    "5": {
                        "dp": 20,
                        "hp": 100
                    }
                }
            }
        },
        "necklaces": {
            "Yuria Necklace": {
                "dp": 0,
                "ap": 0,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {
                    "dmgth": 4
                },
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "dmgth": 6
                    },
                    "2": {
                        "dmgth": 8
                    },
                    "3": {
                        "dmgth": 10
                    },
                    "4": {
                        "dmgth": 12
                    },
                    "5": {
                        "dmgth": 15
                    }
                }
            },
            "Talis Necklace": {
                "dp": 4,
                "ap": 0,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {},
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "dp": 6
                    },
                    "2": {
                        "dp": 8
                    },
                    "3": {
                        "dp": 10
                    },
                    "4": {
                        "dp": 12
                    },
                    "5": {
                        "dp": 14
                    }
                }
            },
            "Kalis Necklace": {
                "dp": 0,
                "ap": 0,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {
                    "acc": 4
                },
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "acc": 6
                    },
                    "2": {
                        "acc": 8
                    },
                    "3": {
                        "acc": 10
                    },
                    "4": {
                        "acc": 12
                    },
                    "5": {
                        "acc": 15
                    }
                }
            },
            "Necklace of Dim Magical Power": {
                "dp": 0,
                "ap": 3,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {},
                "enhancement_text": "",
                "enhancement": {}
            },
            "Necklace of Concentrated Magical Power": {
                "dp": 0,
                "ap": 4,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {},
                "enhancement_text": "",
                "enhancement": {}
            },
            "Hesus Necklace": {
                "dp": 2,
                "ap": 0,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {},
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "dp": 4
                    },
                    "2": {
                        "dp": 6
                    },
                    "3": {
                        "dp": 8
                    },
                    "4": {
                        "dp": 10
                    },
                    "5": {
                        "dp": 12
                    }
                }
            },
            "Elisha Necklace": {
                "dp": 0,
                "ap": 0,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {
                    "hprc": 2,
                    "mprc": 2
                },
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "hprc": 4,
                        "mprc": 4
                    },
                    "2": {
                        "hprc": 6,
                        "mprc": 6
                    },
                    "3": {
                        "hprc": 8,
                        "mprc": 8
                    },
                    "4": {
                        "hprc": 10,
                        "mprc": 10
                    },
                    "5": {
                        "hprc": 15,
                        "mprc": 15
                    }
                }
            },
            "Bares Necklace": {
                "dp": 0,
                "ap": 4,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {},
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "ap": 6
                    },
                    "2": {
                        "ap": 8
                    },
                    "3": {
                        "ap": 10
                    },
                    "4": {
                        "ap": 12
                    },
                    "5": {
                        "ap": 15
                    }
                }
            },
            "Scarla Necklace": {
                "dp": 5,
                "ap": 5,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {},
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "ap": 6,
                        "dp": 6
                    },
                    "2": {
                        "ap": 7,
                        "dp": 7
                    },
                    "3": {
                        "ap": 8,
                        "dp": 8
                    },
                    "4": {
                        "ap": 9,
                        "dp": 9
                    },
                    "5": {
                        "ap": 10,
                        "dp": 10
                    }
                }
            },
            "Necklace of Sealed Magical Power": {
                "dp": 0,
                "ap": 5,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {},
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "ap": 6
                    },
                    "2": {
                        "ap": 7
                    },
                    "3": {
                        "ap": 8
                    },
                    "4": {
                        "ap": 9
                    },
                    "5": {
                        "ap": 10
                    }
                }
            },
            "Necklace of Good Deeds": {
                "dp": 0,
                "ap": 6,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "acc": 3
                },
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "ap": 8,
                        "acc": 4
                    },
                    "2": {
                        "ap": 10,
                        "acc": 5
                    },
                    "3": {
                        "ap": 12,
                        "acc": 6
                    },
                    "4": {
                        "ap": 14,
                        "acc": 7
                    },
                    "5": {
                        "ap": 16,
                        "acc": 8
                    }
                }
            },
            "Translucent Ocean Sapphire Necklace": {
                "dp": 0,
                "ap": 4,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "kb": 25
                },
                "enhancement_text": "",
                "enhancement": {}
            },
            "Starry Night Diamond Necklace": {
                "dp": 0,
                "ap": 4,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "rta": 8
                },
                "enhancement_text": "",
                "enhancement": {}
            },
            "Shining Gold Topaz Necklace": {
                "dp": 0,
                "ap": 4,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "kb": 25
                },
                "enhancement_text": "",
                "enhancement": {}
            },
            "Dark Blood Ruby Necklace": {
                "dp": 0,
                "ap": 4,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "gr": 25
                },
                "enhancement_text": "",
                "enhancement": {}
            },
            "Placid Forest Emerald Necklace": {
                "dp": 0,
                "ap": 4,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "sr": 25
                },
                "enhancement_text": "",
                "enhancement": {}
            },
            "Ogre Ring": {
                "dp": 0,
                "ap": 10,
                "rarity": "epic",
                "gems": 0,
                "item_effects": {},
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "ap": 15
                    },
                    "2": {
                        "ap": 20
                    },
                    "3": {
                        "ap": 25
                    },
                    "4": {
                        "ap": 30
                    },
                    "5": {
                        "ap": 35
                    }
                }
            },
            "Corrupt Ruby Necklace": {
                "dp": 0,
                "ap": 5,
                "rarity": "epic",
                "gems": 0,
                "item_effects": {
                    "gr": 30
                },
                "enhancement_text": "",
                "enhancement": {}
            },
            "Diamond Necklace of Fortitude": {
                "dp": 0,
                "ap": 5,
                "rarity": "epic",
                "gems": 0,
                "item_effects": {
                    "rta": 10
                },
                "enhancement_text": "",
                "enhancement": {}
            },
            "Emerald Necklace of Tranquility": {
                "dp": 0,
                "ap": 5,
                "rarity": "epic",
                "gems": 0,
                "item_effects": {
                    "sr": 30
                },
                "enhancement_text": "",
                "enhancement": {}
            },
            "Sapphire Necklace of Storms": {
                "dp": 0,
                "ap": 5,
                "rarity": "epic",
                "gems": 0,
                "item_effects": {
                    "kb": 30
                },
                "enhancement_text": "",
                "enhancement": {}
            },
            "Topaz Necklace of Regeneration": {
                "dp": 0,
                "ap": 5,
                "rarity": "epic",
                "gems": 0,
                "item_effects": {
                    "kd": 30
                },
                "enhancement_text": "",
                "enhancement": {}
            }
        },
        "belts": {
            "Yuria Belt": {
                "dp": 0,
                "ap": 0,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {
                    "dmgth": 2,
                    "wgt": 40
                },
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "dmgth": 3
                    },
                    "2": {
                        "dmgth": 4
                    },
                    "3": {
                        "dmgth": 5
                    },
                    "4": {
                        "dmgth": 6
                    },
                    "5": {
                        "dmgth": 8
                    }
                }
            },
            "Talis Belt": {
                "dp": 2,
                "ap": 0,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {
                    "wgt": 40
                },
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "dp": 3
                    },
                    "2": {
                        "dp": 4
                    },
                    "3": {
                        "dp": 5
                    },
                    "4": {
                        "dp": 6
                    },
                    "5": {
                        "dp": 8
                    }
                }
            },
            "Kalis Belt": {
                "dp": 0,
                "ap": 0,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {
                    "wgt": 40,
                    "acc": 2
                },
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "acc": 3
                    },
                    "2": {
                        "acc": 4
                    },
                    "3": {
                        "acc": 5
                    },
                    "4": {
                        "acc": 6
                    },
                    "5": {
                        "acc": 7
                    }
                }
            },
            "Hesus Belt": {
                "dp": 2,
                "ap": 0,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {
                    "wgt": 30
                },
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "dp": 3
                    },
                    "2": {
                        "dp": 4
                    },
                    "3": {
                        "dp": 5
                    },
                    "4": {
                        "dp": 6
                    },
                    "5": {
                        "dp": 8
                    }
                }
            },
            "Elisha Belt": {
                "dp": 0,
                "ap": 0,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {
                    "wgt": 20,
                    "hp": 20
                },
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "hp": 30
                    },
                    "2": {
                        "hp": 40
                    },
                    "3": {
                        "hp": 50
                    },
                    "4": {
                        "hp": 60
                    },
                    "5": {
                        "hp": 80
                    }
                }
            },
            "Bares Belt": {
                "dp": 0,
                "ap": 2,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {
                    "wgt": 40
                },
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "ap": 3
                    },
                    "2": {
                        "ap": 4
                    },
                    "3": {
                        "ap": 5
                    },
                    "4": {
                        "ap": 6
                    },
                    "5": {
                        "ap": 8
                    }
                }
            },
            "Tree Spirit Belt": {
                "dp": 0,
                "ap": 5,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "wgt": 80,
                    "acc": 1
                },
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "ap": 7,
                        "acc": 2
                    },
                    "2": {
                        "ap": 9,
                        "acc": 3
                    },
                    "3": {
                        "ap": 11,
                        "acc": 4
                    },
                    "4": {
                        "ap": 13,
                        "acc": 5
                    },
                    "5": {
                        "ap": 15,
                        "acc": 6
                    }
                }
            },
            "Topaz Belt of Regeneration": {
                "dp": 0,
                "ap": 0,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "wgt": 70,
                    "stam": 100
                },
                "enhancement_text": "",
                "enhancement": {}
            },
            "Sturdy Rhutum Elite Fighter Belt": {
                "dp": 3,
                "ap": 0,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "wgt": 50
                },
                "enhancement_text": "",
                "enhancement": {}
            },
            "Rhutum Elite Belt": {
                "dp": 4,
                "ap": 0,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "wgt": 60
                },
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "dp": 6
                    },
                    "2": {
                        "dp": 8
                    },
                    "3": {
                        "dp": 10
                    },
                    "4": {
                        "dp": 12
                    },
                    "5": {
                        "dp": 14
                    }
                }
            },
            "Sapphire Belt of Storms": {
                "dp": 0,
                "ap": 0,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "wgt": 70,
                    "mpwpsp": 50
                },
                "enhancement_text": "",
                "enhancement": {}
            },
            "Emerald Belt of Tranquility": {
                "dp": 0,
                "ap": 0,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "wgt": 70,
                    "hprc": 5,
                    "mprc": 5,
                    "wprc": 5,
                    "sprc": 5
                },
                "enhancement_text": "",
                "enhancement": {}
            },
            "Diamond Belt of Fortitude": {
                "dp": 0,
                "ap": 0,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "wgt": 70,
                    "dmgaes": 5
                },
                "enhancement_text": "",
                "enhancement": {}
            },
            "Corrupt Ruby Belt": {
                "dp": 0,
                "ap": 0,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "wgt": 70,
                    "hp": 50
                },
                "enhancement_text": "",
                "enhancement": {}
            },
            "Belt of Shultz the Gladiator": {
                "dp": 0,
                "ap": 3,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "wgt": 50
                },
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "ap": 5,
                        "wgt": 60
                    },
                    "2": {
                        "ap": 7,
                        "wgt": 70
                    },
                    "3": {
                        "ap": 9,
                        "wgt": 80
                    },
                    "4": {
                        "ap": 11,
                        "wgt": 90
                    },
                    "5": {
                        "ap": 13,
                        "wgt": 100
                    }
                }
            },
            "Basilisk's Belt": {
                "dp": 0,
                "ap": 5,
                "rarity": "epic",
                "gems": 0,
                "item_effects": {
                    "wgt": 80
                },
                "enhancement_text": "",
                "enhancement": {
                    "1": {
                        "ap": 8
                    },
                    "2": {
                        "ap": 11
                    },
                    "3": {
                        "ap": 14
                    },
                    "4": {
                        "ap": 17
                    },
                    "5": {
                        "ap": 20
                    }
                }
            }
        },
        "main-weapons": {
            "berserker" :{
                "Yuria Axe": {
                    "set": "Yuria",
                    "ap_min": 16,
                    "ap_max": 21,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {
                        "dmgth": 5
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 20,
                            "ap_max": 25
                        },
                        "2": {
                            "ap_min": 23,
                            "ap_max": 28
                        },
                        "3": {
                            "ap_min": 26,
                            "ap_max": 31
                        },
                        "4": {
                            "ap_min": 28,
                            "ap_max": 33
                        },
                        "5": {
                            "ap_min": 30,
                            "ap_max": 35
                        },
                        "6": {
                            "ap_min": 33,
                            "ap_max": 38
                        },
                        "7": {
                            "ap_min": 36,
                            "ap_max": 41
                        },
                        "8": {
                            "ap_min": 40,
                            "ap_max": 45
                        },
                        "9": {
                            "ap_min": 44,
                            "ap_max": 49
                        },
                        "10": {
                            "ap_min": 48,
                            "ap_max": 53
                        },
                        "11": {
                            "ap_min": 52,
                            "ap_max": 57
                        },
                        "12": {
                            "ap_min": 56,
                            "ap_max": 61
                        },
                        "13": {
                            "ap_min": 60,
                            "ap_max": 65
                        },
                        "14": {
                            "ap_min": 64,
                            "ap_max": 69
                        },
                        "15": {
                            "ap_min": 68,
                            "ap_max": 73
                        },
                        "16": {
                            "ap_min": 76,
                            "ap_max": 81
                        },
                        "17": {
                            "ap_min": 84,
                            "ap_max": 89
                        },
                        "18": {
                            "ap_min": 96,
                            "ap_max": 101
                        },
                        "19": {
                            "ap_min": 104,
                            "ap_max": 109
                        },
                        "20": {
                            "ap_min": 112,
                            "ap_max": 117
                        }
                    }
                },
                "Styd Axe": {
                    "set": "Styd",
                    "ap_min": 18,
                    "ap_max": 22,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {},
                    "enhancement_text": "",
                    "enhancement": {}
                },
                "Seleth Axe": {
                    "set": "Seleth",
                    "ap_min": 16,
                    "ap_max": 21,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {
                        "dmgth": 10
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 14,
                            "ap_max": 18
                        },
                        "2": {
                            "ap_min": 17,
                            "ap_max": 21
                        },
                        "3": {
                            "ap_min": 20,
                            "ap_max": 24
                        },
                        "4": {
                            "ap_min": 22,
                            "ap_max": 26
                        },
                        "5": {
                            "ap_min": 24,
                            "ap_max": 28
                        },
                        "6": {
                            "ap_min": 27,
                            "ap_max": 31
                        },
                        "7": {
                            "ap_min": 30,
                            "ap_max": 34
                        },
                        "8": {
                            "ap_min": 34,
                            "ap_max": 38
                        },
                        "9": {
                            "ap_min": 38,
                            "ap_max": 42
                        },
                        "10": {
                            "ap_min": 42,
                            "ap_max": 46
                        },
                        "11": {
                            "ap_min": 46,
                            "ap_max": 50
                        },
                        "12": {
                            "ap_min": 50,
                            "ap_max": 54
                        },
                        "13": {
                            "ap_min": 54,
                            "ap_max": 58
                        },
                        "14": {
                            "ap_min": 58,
                            "ap_max": 62
                        },
                        "15": {
                            "ap_min": 62,
                            "ap_max": 66
                        },
                        "16": {
                            "ap_min": 70,
                            "ap_max": 74
                        },
                        "17": {
                            "ap_min": 78,
                            "ap_max": 82
                        },
                        "18": {
                            "ap_min": 90,
                            "ap_max": 94
                        },
                        "19": {
                            "ap_min": 98,
                            "ap_max": 102
                        },
                        "20": {
                            "ap_min": 106,
                            "ap_max": 110
                        }
                    }
                },
                "Rosar Axe": {
                    "set": "Rosar",
                    "ap_min": 17,
                    "ap_max": 22,
                    "rarity": "uncommon",
                    "gems": 2,
                    "item_effects": {},
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 21,
                            "ap_max": 26
                        },
                        "2": {
                            "ap_min": 24,
                            "ap_max": 29
                        },
                        "3": {
                            "ap_min": 27,
                            "ap_max": 32
                        },
                        "4": {
                            "ap_min": 29,
                            "ap_max": 34
                        },
                        "5": {
                            "ap_min": 31,
                            "ap_max": 36
                        },
                        "6": {
                            "ap_min": 34,
                            "ap_max": 39
                        },
                        "7": {
                            "ap_min": 37,
                            "ap_max": 42
                        },
                        "8": {
                            "ap_min": 41,
                            "ap_max": 46
                        },
                        "9": {
                            "ap_min": 45,
                            "ap_max": 50
                        },
                        "10": {
                            "ap_min": 49,
                            "ap_max": 54
                        },
                        "11": {
                            "ap_min": 53,
                            "ap_max": 58
                        },
                        "12": {
                            "ap_min": 57,
                            "ap_max": 62
                        },
                        "13": {
                            "ap_min": 61,
                            "ap_max": 66
                        },
                        "14": {
                            "ap_min": 65,
                            "ap_max": 70
                        },
                        "15": {
                            "ap_min": 69,
                            "ap_max": 74
                        },
                        "16": {
                            "ap_min": 77,
                            "ap_max": 82
                        },
                        "17": {
                            "ap_min": 85,
                            "ap_max": 90
                        },
                        "18": {
                            "ap_min": 97,
                            "ap_max": 102
                        },
                        "19": {
                            "ap_min": 105,
                            "ap_max": 110
                        },
                        "20": {
                            "ap_min": 113,
                            "ap_max": 118
                        }
                    }
                },
                "Raell Axe": {
                    "set": "Raell",
                    "ap_min": 14,
                    "ap_max": 18,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {
                        "dmgaes": 5,
                        "acc": 3,
                        "hp": -100,
                        "special": "Max HP -100 & 5% chance to regain 10 HP on attack."
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 18,
                            "ap_max": 22
                        },
                        "2": {
                            "ap_min": 21,
                            "ap_max": 25
                        },
                        "3": {
                            "ap_min": 24,
                            "ap_max": 28
                        },
                        "4": {
                            "ap_min": 26,
                            "ap_max": 30
                        },
                        "5": {
                            "ap_min": 28,
                            "ap_max": 32
                        },
                        "6": {
                            "ap_min": 31,
                            "ap_max": 35
                        },
                        "7": {
                            "ap_min": 34,
                            "ap_max": 38
                        },
                        "8": {
                            "ap_min": 38,
                            "ap_max": 42
                        },
                        "9": {
                            "ap_min": 42,
                            "ap_max": 46
                        },
                        "10": {
                            "ap_min": 46,
                            "ap_max": 50
                        },
                        "11": {
                            "ap_min": 50,
                            "ap_max": 54
                        },
                        "12": {
                            "ap_min": 54,
                            "ap_max": 58
                        },
                        "13": {
                            "ap_min": 58,
                            "ap_max": 62
                        },
                        "14": {
                            "ap_min": 62,
                            "ap_max": 66
                        },
                        "15": {
                            "ap_min": 66,
                            "ap_max": 70
                        },
                        "16": {
                            "ap_min": 74,
                            "ap_max": 78
                        },
                        "17": {
                            "ap_min": 82,
                            "ap_max": 86
                        },
                        "18": {
                            "ap_min": 94,
                            "ap_max": 98
                        },
                        "19": {
                            "ap_min": 102,
                            "ap_max": 106
                        },
                        "20": {
                            "ap_min": 110,
                            "ap_max": 114
                        }
                    }
                },
                "Krea Axe": {
                    "set": "Krea",
                    "ap_min": 17,
                    "ap_max": 19,
                    "rarity": "uncommon",
                    "gems": 2,
                    "item_effects": {},
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 21,
                            "ap_max": 23
                        },
                        "2": {
                            "ap_min": 24,
                            "ap_max": 26
                        },
                        "3": {
                            "ap_min": 27,
                            "ap_max": 29
                        },
                        "4": {
                            "ap_min": 29,
                            "ap_max": 31
                        },
                        "5": {
                            "ap_min": 31,
                            "ap_max": 33
                        },
                        "6": {
                            "ap_min": 34,
                            "ap_max": 36
                        },
                        "7": {
                            "ap_min": 37,
                            "ap_max": 39
                        },
                        "8": {
                            "ap_min": 41,
                            "ap_max": 43
                        },
                        "9": {
                            "ap_min": 45,
                            "ap_max": 47
                        },
                        "10": {
                            "ap_min": 49,
                            "ap_max": 51
                        },
                        "11": {
                            "ap_min": 53,
                            "ap_max": 55
                        },
                        "12": {
                            "ap_min": 57,
                            "ap_max": 59
                        },
                        "13": {
                            "ap_min": 61,
                            "ap_max": 63
                        },
                        "14": {
                            "ap_min": 65,
                            "ap_max": 67
                        },
                        "15": {
                            "ap_min": 69,
                            "ap_max": 71
                        },
                        "16": {
                            "ap_min": 77,
                            "ap_max": 79
                        },
                        "17": {
                            "ap_min": 85,
                            "ap_max": 87
                        },
                        "18": {
                            "ap_min": 97,
                            "ap_max": 99
                        },
                        "19": {
                            "ap_min": 105,
                            "ap_max": 107
                        },
                        "20": {
                            "ap_min": 113,
                            "ap_max": 115
                        }
                    }
                },
                "Kalis Axe": {
                    "set": "Kalis",
                    "ap_min": 13,
                    "ap_max": 27,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {},
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 17,
                            "ap_max": 31
                        },
                        "2": {
                            "ap_min": 20,
                            "ap_max": 34
                        },
                        "3": {
                            "ap_min": 23,
                            "ap_max": 37
                        },
                        "4": {
                            "ap_min": 25,
                            "ap_max": 39
                        },
                        "5": {
                            "ap_min": 27,
                            "ap_max": 41
                        },
                        "6": {
                            "ap_min": 30,
                            "ap_max": 44
                        },
                        "7": {
                            "ap_min": 33,
                            "ap_max": 47
                        },
                        "8": {
                            "ap_min": 37,
                            "ap_max": 51
                        },
                        "9": {
                            "ap_min": 41,
                            "ap_max": 55
                        },
                        "10": {
                            "ap_min": 45,
                            "ap_max": 59
                        },
                        "11": {
                            "ap_min": 49,
                            "ap_max": 63
                        },
                        "12": {
                            "ap_min": 53,
                            "ap_max": 67
                        },
                        "13": {
                            "ap_min": 57,
                            "ap_max": 71
                        },
                        "14": {
                            "ap_min": 61,
                            "ap_max": 75
                        },
                        "15": {
                            "ap_min": 65,
                            "ap_max": 79
                        },
                        "16": {
                            "ap_min": 73,
                            "ap_max": 87
                        },
                        "17": {
                            "ap_min": 81,
                            "ap_max": 95
                        },
                        "18": {
                            "ap_min": 93,
                            "ap_max": 107
                        },
                        "19": {
                            "ap_min": 101,
                            "ap_max": 115
                        },
                        "20": {
                            "ap_min": 109,
                            "ap_max": 123
                        }
                    }
                },
                "Elsh Axe": {
                    "set": "Elsh",
                    "ap_min": 10,
                    "ap_max": 14,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {
                        "dmgaes": 5,
                        "acc": 3,
                        "wgt": -25,
                        "special": "Weight Limit -25 LT & 5% chance to heal 5 HP on attack."
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 14,
                            "ap_max": 18
                        },
                        "2": {
                            "ap_min": 17,
                            "ap_max": 21
                        },
                        "3": {
                            "ap_min": 20,
                            "ap_max": 24
                        },
                        "4": {
                            "ap_min": 22,
                            "ap_max": 26
                        },
                        "5": {
                            "ap_min": 24,
                            "ap_max": 28
                        },
                        "6": {
                            "ap_min": 27,
                            "ap_max": 31
                        },
                        "7": {
                            "ap_min": 30,
                            "ap_max": 34
                        },
                        "8": {
                            "ap_min": 34,
                            "ap_max": 38
                        },
                        "9": {
                            "ap_min": 38,
                            "ap_max": 42
                        },
                        "10": {
                            "ap_min": 42,
                            "ap_max": 46
                        },
                        "11": {
                            "ap_min": 46,
                            "ap_max": 50
                        },
                        "12": {
                            "ap_min": 50,
                            "ap_max": 54
                        },
                        "13": {
                            "ap_min": 54,
                            "ap_max": 58
                        },
                        "14": {
                            "ap_min": 58,
                            "ap_max": 62
                        },
                        "15": {
                            "ap_min": 62,
                            "ap_max": 66
                        },
                        "16": {
                            "ap_min": 70,
                            "ap_max": 74
                        },
                        "17": {
                            "ap_min": 78,
                            "ap_max": 82
                        },
                        "18": {
                            "ap_min": 90,
                            "ap_max": 94
                        },
                        "19": {
                            "ap_min": 98,
                            "ap_max": 102
                        },
                        "20": {
                            "ap_min": 106,
                            "ap_max": 110
                        }
                    }
                },
                "Demihuman Axe": {
                    "set": "Demihuman",
                    "ap_min": 10,
                    "ap_max": 14,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {
                        "dmgtdh": 10
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 14,
                            "ap_max": 18
                        },
                        "2": {
                            "ap_min": 17,
                            "ap_max": 21
                        },
                        "3": {
                            "ap_min": 20,
                            "ap_max": 24
                        },
                        "4": {
                            "ap_min": 22,
                            "ap_max": 26
                        },
                        "5": {
                            "ap_min": 24,
                            "ap_max": 28
                        },
                        "6": {
                            "ap_min": 27,
                            "ap_max": 31
                        },
                        "7": {
                            "ap_min": 30,
                            "ap_max": 34
                        },
                        "8": {
                            "ap_min": 34,
                            "ap_max": 38
                        },
                        "9": {
                            "ap_min": 38,
                            "ap_max": 42
                        },
                        "10": {
                            "ap_min": 42,
                            "ap_max": 46
                        },
                        "11": {
                            "ap_min": 46,
                            "ap_max": 50
                        },
                        "12": {
                            "ap_min": 50,
                            "ap_max": 54
                        },
                        "13": {
                            "ap_min": 54,
                            "ap_max": 58
                        },
                        "14": {
                            "ap_min": 58,
                            "ap_max": 62
                        },
                        "15": {
                            "ap_min": 62,
                            "ap_max": 66
                        },
                        "16": {
                            "ap_min": 70,
                            "ap_max": 74
                        },
                        "17": {
                            "ap_min": 78,
                            "ap_max": 82
                        },
                        "18": {
                            "ap_min": 90,
                            "ap_max": 94
                        },
                        "19": {
                            "ap_min": 98,
                            "ap_max": 102
                        },
                        "20": {
                            "ap_min": 106,
                            "ap_max": 110
                        }
                    }
                },
                "Basteer Axe": {
                    "set": "Basteer",
                    "ap_min": 20,
                    "ap_max": 24,
                    "rarity": "uncommon",
                    "gems": 2,
                    "item_effects": {},
                    "enhancement_text": "",
                    "enhancement": {}
                },
                "Bares Axe": {
                    "set": "Bares",
                    "ap_min": 11,
                    "ap_max": 15,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {
                        "dmgaes": 5
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 15,
                            "ap_max": 19
                        },
                        "2": {
                            "ap_min": 18,
                            "ap_max": 22
                        },
                        "3": {
                            "ap_min": 21,
                            "ap_max": 25
                        },
                        "4": {
                            "ap_min": 23,
                            "ap_max": 27
                        },
                        "5": {
                            "ap_min": 25,
                            "ap_max": 29
                        },
                        "6": {
                            "ap_min": 28,
                            "ap_max": 32
                        },
                        "7": {
                            "ap_min": 31,
                            "ap_max": 35
                        },
                        "8": {
                            "ap_min": 35,
                            "ap_max": 39
                        },
                        "9": {
                            "ap_min": 39,
                            "ap_max": 43
                        },
                        "10": {
                            "ap_min": 43,
                            "ap_max": 47
                        },
                        "11": {
                            "ap_min": 47,
                            "ap_max": 51
                        },
                        "12": {
                            "ap_min": 51,
                            "ap_max": 55
                        },
                        "13": {
                            "ap_min": 55,
                            "ap_max": 59
                        },
                        "14": {
                            "ap_min": 59,
                            "ap_max": 63
                        },
                        "15": {
                            "ap_min": 63,
                            "ap_max": 67
                        },
                        "16": {
                            "ap_min": 71,
                            "ap_max": 75
                        },
                        "17": {
                            "ap_min": 79,
                            "ap_max": 83
                        },
                        "18": {
                            "ap_min": 91,
                            "ap_max": 95
                        },
                        "19": {
                            "ap_min": 99,
                            "ap_max": 103
                        },
                        "20": {
                            "ap_min": 107,
                            "ap_max": 111
                        }
                    }
                },
                "Azwell Axe": {
                    "set": "Azwell",
                    "ap_min": 14,
                    "ap_max": 18,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {
                        "acc": 5,
                        "special": "AP does not decrease in the rain."
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 18,
                            "ap_max": 22
                        },
                        "2": {
                            "ap_min": 21,
                            "ap_max": 25
                        },
                        "3": {
                            "ap_min": 24,
                            "ap_max": 28
                        },
                        "4": {
                            "ap_min": 26,
                            "ap_max": 30
                        },
                        "5": {
                            "ap_min": 28,
                            "ap_max": 32
                        },
                        "6": {
                            "ap_min": 31,
                            "ap_max": 35
                        },
                        "7": {
                            "ap_min": 34,
                            "ap_max": 38
                        },
                        "8": {
                            "ap_min": 38,
                            "ap_max": 42
                        },
                        "9": {
                            "ap_min": 42,
                            "ap_max": 46
                        },
                        "10": {
                            "ap_min": 46,
                            "ap_max": 50
                        },
                        "11": {
                            "ap_min": 50,
                            "ap_max": 54
                        },
                        "12": {
                            "ap_min": 54,
                            "ap_max": 58
                        },
                        "13": {
                            "ap_min": 58,
                            "ap_max": 62
                        },
                        "14": {
                            "ap_min": 62,
                            "ap_max": 66
                        },
                        "15": {
                            "ap_min": 66,
                            "ap_max": 70
                        },
                        "16": {
                            "ap_min": 74,
                            "ap_max": 78
                        },
                        "17": {
                            "ap_min": 82,
                            "ap_max": 86
                        },
                        "18": {
                            "ap_min": 94,
                            "ap_max": 98
                        },
                        "19": {
                            "ap_min": 102,
                            "ap_max": 106
                        },
                        "20": {
                            "ap_min": 110,
                            "ap_max": 114
                        }
                    }
                },
                "Liverto Axe": {
                    "set": "Liverto",
                    "ap_min": 18,
                    "ap_max": 22,
                    "rarity": "rare",
                    "gems": 2,
                    "item_effects": {
                        "chr": 3
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 22,
                            "ap_max": 26
                        },
                        "2": {
                            "ap_min": 25,
                            "ap_max": 29
                        },
                        "3": {
                            "ap_min": 28,
                            "ap_max": 32
                        },
                        "4": {
                            "ap_min": 30,
                            "ap_max": 34
                        },
                        "5": {
                            "ap_min": 32,
                            "ap_max": 36
                        },
                        "6": {
                            "ap_min": 35,
                            "ap_max": 39
                        },
                        "7": {
                            "ap_min": 38,
                            "ap_max": 42
                        },
                        "8": {
                            "ap_min": 43,
                            "ap_max": 47
                        },
                        "9": {
                            "ap_min": 48,
                            "ap_max": 52
                        },
                        "10": {
                            "ap_min": 53,
                            "ap_max": 57
                        },
                        "11": {
                            "ap_min": 58,
                            "ap_max": 62
                        },
                        "12": {
                            "ap_min": 63,
                            "ap_max": 67
                        },
                        "13": {
                            "ap_min": 68,
                            "ap_max": 72
                        },
                        "14": {
                            "ap_min": 73,
                            "ap_max": 77
                        },
                        "15": {
                            "ap_min": 78,
                            "ap_max": 82
                        },
                        "16": {
                            "ap_min": 86,
                            "ap_max": 90
                        },
                        "17": {
                            "ap_min": 94,
                            "ap_max": 98
                        },
                        "18": {
                            "ap_min": 106,
                            "ap_max": 110
                        },
                        "19": {
                            "ap_min": 114,
                            "ap_max": 118
                        },
                        "20": {
                            "ap_min": 122,
                            "ap_max": 126
                        }
                    }
                },
                "Veid Axe": {
                    "set": "Veid",
                    "ap_min": 16,
                    "ap_max": 22,
                    "rarity": "epic",
                    "gems": 2,
                    "item_effects": {
                        "acc": 5,
                        "special": "Enhancement Limit increase"
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 20,
                            "ap_max": 26
                        },
                        "2": {
                            "ap_min": 23,
                            "ap_max": 29
                        },
                        "3": {
                            "ap_min": 26,
                            "ap_max": 32
                        },
                        "4": {
                            "ap_min": 28,
                            "ap_max": 34
                        },
                        "5": {
                            "ap_min": 30,
                            "ap_max": 36
                        },
                        "6": {
                            "ap_min": 33,
                            "ap_max": 39
                        },
                        "7": {
                            "ap_min": 36,
                            "ap_max": 42
                        },
                        "8": {
                            "ap_min": 40,
                            "ap_max": 46
                        },
                        "9": {
                            "ap_min": 44,
                            "ap_max": 50
                        },
                        "10": {
                            "ap_min": 48,
                            "ap_max": 54
                        },
                        "11": {
                            "ap_min": 52,
                            "ap_max": 58
                        },
                        "12": {
                            "ap_min": 56,
                            "ap_max": 62
                        },
                        "13": {
                            "ap_min": 60,
                            "ap_max": 66
                        },
                        "14": {
                            "ap_min": 64,
                            "ap_max": 70
                        },
                        "15": {
                            "ap_min": 68,
                            "ap_max": 74
                        },
                        "16": {
                            "ap_min": 72,
                            "ap_max": 78
                        },
                        "17": {
                            "ap_min": 76,
                            "ap_max": 82
                        },
                        "18": {
                            "ap_min": 88,
                            "ap_max": 94
                        },
                        "19": {
                            "ap_min": 92,
                            "ap_max": 98
                        },
                        "20": {
                            "ap_min": 96,
                            "ap_max": 102
                        }
                    }
                },
                "Kzarka Axe": {
                    "set": "Kzarka",
                    "ap_min": 18,
                    "ap_max": 22,
                    "rarity": "epic",
                    "gems": 2,
                    "item_effects": {
                        "as": 3
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 22,
                            "ap_max": 26
                        },
                        "2": {
                            "ap_min": 25,
                            "ap_max": 29
                        },
                        "3": {
                            "ap_min": 28,
                            "ap_max": 32
                        },
                        "4": {
                            "ap_min": 30,
                            "ap_max": 34
                        },
                        "5": {
                            "ap_min": 32,
                            "ap_max": 36
                        },
                        "6": {
                            "ap_min": 35,
                            "ap_max": 39
                        },
                        "7": {
                            "ap_min": 38,
                            "ap_max": 42
                        },
                        "8": {
                            "ap_min": 43,
                            "ap_max": 47
                        },
                        "9": {
                            "ap_min": 48,
                            "ap_max": 52
                        },
                        "10": {
                            "ap_min": 53,
                            "ap_max": 57
                        },
                        "11": {
                            "ap_min": 58,
                            "ap_max": 62
                        },
                        "12": {
                            "ap_min": 63,
                            "ap_max": 67
                        },
                        "13": {
                            "ap_min": 68,
                            "ap_max": 72
                        },
                        "14": {
                            "ap_min": 73,
                            "ap_max": 77
                        },
                        "15": {
                            "ap_min": 78,
                            "ap_max": 82
                        },
                        "16": {
                            "ap_min": 86,
                            "ap_max": 90
                        },
                        "17": {
                            "ap_min": 94,
                            "ap_max": 98
                        },
                        "18": {
                            "ap_min": 106,
                            "ap_max": 110
                        },
                        "19": {
                            "ap_min": 114,
                            "ap_max": 118
                        },
                        "20": {
                            "ap_min": 122,
                            "ap_max": 126
                        }
                    }
                }
            },
            "ranger" :{
                "Yuria Longbow": {
                    "set": "Yuria",
                    "ap_min": 16,
                    "ap_max": 21,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {
                        "dmgth": 5
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 20,
                            "ap_max": 25
                        },
                        "2": {
                            "ap_min": 23,
                            "ap_max": 28
                        },
                        "3": {
                            "ap_min": 26,
                            "ap_max": 31
                        },
                        "4": {
                            "ap_min": 28,
                            "ap_max": 33
                        },
                        "5": {
                            "ap_min": 30,
                            "ap_max": 35
                        },
                        "6": {
                            "ap_min": 33,
                            "ap_max": 38
                        },
                        "7": {
                            "ap_min": 36,
                            "ap_max": 41
                        },
                        "8": {
                            "ap_min": 40,
                            "ap_max": 45
                        },
                        "9": {
                            "ap_min": 44,
                            "ap_max": 49
                        },
                        "10": {
                            "ap_min": 48,
                            "ap_max": 53
                        },
                        "11": {
                            "ap_min": 52,
                            "ap_max": 57
                        },
                        "12": {
                            "ap_min": 56,
                            "ap_max": 61
                        },
                        "13": {
                            "ap_min": 60,
                            "ap_max": 65
                        },
                        "14": {
                            "ap_min": 64,
                            "ap_max": 69
                        },
                        "15": {
                            "ap_min": 68,
                            "ap_max": 73
                        },
                        "16": {
                            "ap_min": 76,
                            "ap_max": 81
                        },
                        "17": {
                            "ap_min": 84,
                            "ap_max": 89
                        },
                        "18": {
                            "ap_min": 96,
                            "ap_max": 101
                        },
                        "19": {
                            "ap_min": 104,
                            "ap_max": 109
                        },
                        "20": {
                            "ap_min": 112,
                            "ap_max": 117
                        }
                    }
                },
                "Styd Longbow": {
                    "set": "Styd",
                    "ap_min": 18,
                    "ap_max": 22,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {},
                    "enhancement_text": "",
                    "enhancement": {}
                },
                "Seleth Longbow": {
                    "set": "Seleth",
                    "ap_min": 16,
                    "ap_max": 21,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {
                        "dmgth": 10
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 14,
                            "ap_max": 18
                        },
                        "2": {
                            "ap_min": 17,
                            "ap_max": 21
                        },
                        "3": {
                            "ap_min": 20,
                            "ap_max": 24
                        },
                        "4": {
                            "ap_min": 22,
                            "ap_max": 26
                        },
                        "5": {
                            "ap_min": 24,
                            "ap_max": 28
                        },
                        "6": {
                            "ap_min": 27,
                            "ap_max": 31
                        },
                        "7": {
                            "ap_min": 30,
                            "ap_max": 34
                        },
                        "8": {
                            "ap_min": 34,
                            "ap_max": 38
                        },
                        "9": {
                            "ap_min": 38,
                            "ap_max": 42
                        },
                        "10": {
                            "ap_min": 42,
                            "ap_max": 46
                        },
                        "11": {
                            "ap_min": 46,
                            "ap_max": 50
                        },
                        "12": {
                            "ap_min": 50,
                            "ap_max": 54
                        },
                        "13": {
                            "ap_min": 54,
                            "ap_max": 58
                        },
                        "14": {
                            "ap_min": 58,
                            "ap_max": 62
                        },
                        "15": {
                            "ap_min": 62,
                            "ap_max": 66
                        },
                        "16": {
                            "ap_min": 70,
                            "ap_max": 74
                        },
                        "17": {
                            "ap_min": 78,
                            "ap_max": 82
                        },
                        "18": {
                            "ap_min": 90,
                            "ap_max": 94
                        },
                        "19": {
                            "ap_min": 98,
                            "ap_max": 102
                        },
                        "20": {
                            "ap_min": 106,
                            "ap_max": 110
                        }
                    }
                },
                "Rosar Longbow": {
                    "set": "Rosar",
                    "ap_min": 17,
                    "ap_max": 22,
                    "rarity": "uncommon",
                    "gems": 2,
                    "item_effects": {},
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 21,
                            "ap_max": 26
                        },
                        "2": {
                            "ap_min": 24,
                            "ap_max": 29
                        },
                        "3": {
                            "ap_min": 27,
                            "ap_max": 32
                        },
                        "4": {
                            "ap_min": 29,
                            "ap_max": 34
                        },
                        "5": {
                            "ap_min": 31,
                            "ap_max": 36
                        },
                        "6": {
                            "ap_min": 34,
                            "ap_max": 39
                        },
                        "7": {
                            "ap_min": 37,
                            "ap_max": 42
                        },
                        "8": {
                            "ap_min": 41,
                            "ap_max": 46
                        },
                        "9": {
                            "ap_min": 45,
                            "ap_max": 50
                        },
                        "10": {
                            "ap_min": 49,
                            "ap_max": 54
                        },
                        "11": {
                            "ap_min": 53,
                            "ap_max": 58
                        },
                        "12": {
                            "ap_min": 57,
                            "ap_max": 62
                        },
                        "13": {
                            "ap_min": 61,
                            "ap_max": 66
                        },
                        "14": {
                            "ap_min": 65,
                            "ap_max": 70
                        },
                        "15": {
                            "ap_min": 69,
                            "ap_max": 74
                        },
                        "16": {
                            "ap_min": 77,
                            "ap_max": 82
                        },
                        "17": {
                            "ap_min": 85,
                            "ap_max": 90
                        },
                        "18": {
                            "ap_min": 97,
                            "ap_max": 102
                        },
                        "19": {
                            "ap_min": 105,
                            "ap_max": 110
                        },
                        "20": {
                            "ap_min": 113,
                            "ap_max": 118
                        }
                    }
                },
                "Raell Longbow": {
                    "set": "Raell",
                    "ap_min": 14,
                    "ap_max": 18,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {
                        "dmgaes": 5,
                        "acc": 3,
                        "hp": -100,
                        "special": "Max HP -100 & 5% chance to regain 10 HP on attack."
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 18,
                            "ap_max": 22
                        },
                        "2": {
                            "ap_min": 21,
                            "ap_max": 25
                        },
                        "3": {
                            "ap_min": 24,
                            "ap_max": 28
                        },
                        "4": {
                            "ap_min": 26,
                            "ap_max": 30
                        },
                        "5": {
                            "ap_min": 28,
                            "ap_max": 32
                        },
                        "6": {
                            "ap_min": 31,
                            "ap_max": 35
                        },
                        "7": {
                            "ap_min": 34,
                            "ap_max": 38
                        },
                        "8": {
                            "ap_min": 38,
                            "ap_max": 42
                        },
                        "9": {
                            "ap_min": 42,
                            "ap_max": 46
                        },
                        "10": {
                            "ap_min": 46,
                            "ap_max": 50
                        },
                        "11": {
                            "ap_min": 50,
                            "ap_max": 54
                        },
                        "12": {
                            "ap_min": 54,
                            "ap_max": 58
                        },
                        "13": {
                            "ap_min": 58,
                            "ap_max": 62
                        },
                        "14": {
                            "ap_min": 62,
                            "ap_max": 66
                        },
                        "15": {
                            "ap_min": 66,
                            "ap_max": 70
                        },
                        "16": {
                            "ap_min": 74,
                            "ap_max": 78
                        },
                        "17": {
                            "ap_min": 82,
                            "ap_max": 86
                        },
                        "18": {
                            "ap_min": 94,
                            "ap_max": 98
                        },
                        "19": {
                            "ap_min": 102,
                            "ap_max": 106
                        },
                        "20": {
                            "ap_min": 110,
                            "ap_max": 114
                        }
                    }
                },
                "Krea Longbow": {
                    "set": "Krea",
                    "ap_min": 17,
                    "ap_max": 19,
                    "rarity": "uncommon",
                    "gems": 2,
                    "item_effects": {},
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 21,
                            "ap_max": 23
                        },
                        "2": {
                            "ap_min": 24,
                            "ap_max": 26
                        },
                        "3": {
                            "ap_min": 27,
                            "ap_max": 29
                        },
                        "4": {
                            "ap_min": 29,
                            "ap_max": 31
                        },
                        "5": {
                            "ap_min": 31,
                            "ap_max": 33
                        },
                        "6": {
                            "ap_min": 34,
                            "ap_max": 36
                        },
                        "7": {
                            "ap_min": 37,
                            "ap_max": 39
                        },
                        "8": {
                            "ap_min": 41,
                            "ap_max": 43
                        },
                        "9": {
                            "ap_min": 45,
                            "ap_max": 47
                        },
                        "10": {
                            "ap_min": 49,
                            "ap_max": 51
                        },
                        "11": {
                            "ap_min": 53,
                            "ap_max": 55
                        },
                        "12": {
                            "ap_min": 57,
                            "ap_max": 59
                        },
                        "13": {
                            "ap_min": 61,
                            "ap_max": 63
                        },
                        "14": {
                            "ap_min": 65,
                            "ap_max": 67
                        },
                        "15": {
                            "ap_min": 69,
                            "ap_max": 71
                        },
                        "16": {
                            "ap_min": 77,
                            "ap_max": 79
                        },
                        "17": {
                            "ap_min": 85,
                            "ap_max": 87
                        },
                        "18": {
                            "ap_min": 97,
                            "ap_max": 99
                        },
                        "19": {
                            "ap_min": 105,
                            "ap_max": 107
                        },
                        "20": {
                            "ap_min": 113,
                            "ap_max": 115
                        }
                    }
                },
                "Kalis Longbow": {
                    "set": "Kalis",
                    "ap_min": 13,
                    "ap_max": 27,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {},
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 17,
                            "ap_max": 31
                        },
                        "2": {
                            "ap_min": 20,
                            "ap_max": 34
                        },
                        "3": {
                            "ap_min": 23,
                            "ap_max": 37
                        },
                        "4": {
                            "ap_min": 25,
                            "ap_max": 39
                        },
                        "5": {
                            "ap_min": 27,
                            "ap_max": 41
                        },
                        "6": {
                            "ap_min": 30,
                            "ap_max": 44
                        },
                        "7": {
                            "ap_min": 33,
                            "ap_max": 47
                        },
                        "8": {
                            "ap_min": 37,
                            "ap_max": 51
                        },
                        "9": {
                            "ap_min": 41,
                            "ap_max": 55
                        },
                        "10": {
                            "ap_min": 45,
                            "ap_max": 59
                        },
                        "11": {
                            "ap_min": 49,
                            "ap_max": 63
                        },
                        "12": {
                            "ap_min": 53,
                            "ap_max": 67
                        },
                        "13": {
                            "ap_min": 57,
                            "ap_max": 71
                        },
                        "14": {
                            "ap_min": 61,
                            "ap_max": 75
                        },
                        "15": {
                            "ap_min": 65,
                            "ap_max": 79
                        },
                        "16": {
                            "ap_min": 73,
                            "ap_max": 87
                        },
                        "17": {
                            "ap_min": 81,
                            "ap_max": 95
                        },
                        "18": {
                            "ap_min": 93,
                            "ap_max": 107
                        },
                        "19": {
                            "ap_min": 101,
                            "ap_max": 115
                        },
                        "20": {
                            "ap_min": 109,
                            "ap_max": 123
                        }
                    }
                },
                "Elsh Longbow": {
                    "set": "Elsh",
                    "ap_min": 10,
                    "ap_max": 14,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {
                        "dmgaes": 5,
                        "acc": 3,
                        "wgt": -25,
                        "special": "Weight Limit -25 LT & 5% chance to heal 5 HP on attack."
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 14,
                            "ap_max": 18
                        },
                        "2": {
                            "ap_min": 17,
                            "ap_max": 21
                        },
                        "3": {
                            "ap_min": 20,
                            "ap_max": 24
                        },
                        "4": {
                            "ap_min": 22,
                            "ap_max": 26
                        },
                        "5": {
                            "ap_min": 24,
                            "ap_max": 28
                        },
                        "6": {
                            "ap_min": 27,
                            "ap_max": 31
                        },
                        "7": {
                            "ap_min": 30,
                            "ap_max": 34
                        },
                        "8": {
                            "ap_min": 34,
                            "ap_max": 38
                        },
                        "9": {
                            "ap_min": 38,
                            "ap_max": 42
                        },
                        "10": {
                            "ap_min": 42,
                            "ap_max": 46
                        },
                        "11": {
                            "ap_min": 46,
                            "ap_max": 50
                        },
                        "12": {
                            "ap_min": 50,
                            "ap_max": 54
                        },
                        "13": {
                            "ap_min": 54,
                            "ap_max": 58
                        },
                        "14": {
                            "ap_min": 58,
                            "ap_max": 62
                        },
                        "15": {
                            "ap_min": 62,
                            "ap_max": 66
                        },
                        "16": {
                            "ap_min": 70,
                            "ap_max": 74
                        },
                        "17": {
                            "ap_min": 78,
                            "ap_max": 82
                        },
                        "18": {
                            "ap_min": 90,
                            "ap_max": 94
                        },
                        "19": {
                            "ap_min": 98,
                            "ap_max": 102
                        },
                        "20": {
                            "ap_min": 106,
                            "ap_max": 110
                        }
                    }
                },
                "Demihuman Longbow": {
                    "set": "Demihuman",
                    "ap_min": 10,
                    "ap_max": 14,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {
                        "dmgtdh": 10
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 14,
                            "ap_max": 18
                        },
                        "2": {
                            "ap_min": 17,
                            "ap_max": 21
                        },
                        "3": {
                            "ap_min": 20,
                            "ap_max": 24
                        },
                        "4": {
                            "ap_min": 22,
                            "ap_max": 26
                        },
                        "5": {
                            "ap_min": 24,
                            "ap_max": 28
                        },
                        "6": {
                            "ap_min": 27,
                            "ap_max": 31
                        },
                        "7": {
                            "ap_min": 30,
                            "ap_max": 34
                        },
                        "8": {
                            "ap_min": 34,
                            "ap_max": 38
                        },
                        "9": {
                            "ap_min": 38,
                            "ap_max": 42
                        },
                        "10": {
                            "ap_min": 42,
                            "ap_max": 46
                        },
                        "11": {
                            "ap_min": 46,
                            "ap_max": 50
                        },
                        "12": {
                            "ap_min": 50,
                            "ap_max": 54
                        },
                        "13": {
                            "ap_min": 54,
                            "ap_max": 58
                        },
                        "14": {
                            "ap_min": 58,
                            "ap_max": 62
                        },
                        "15": {
                            "ap_min": 62,
                            "ap_max": 66
                        },
                        "16": {
                            "ap_min": 70,
                            "ap_max": 74
                        },
                        "17": {
                            "ap_min": 78,
                            "ap_max": 82
                        },
                        "18": {
                            "ap_min": 90,
                            "ap_max": 94
                        },
                        "19": {
                            "ap_min": 98,
                            "ap_max": 102
                        },
                        "20": {
                            "ap_min": 106,
                            "ap_max": 110
                        }
                    }
                },
                "Basteer Longbow": {
                    "set": "Basteer",
                    "ap_min": 20,
                    "ap_max": 24,
                    "rarity": "uncommon",
                    "gems": 2,
                    "item_effects": {},
                    "enhancement_text": "",
                    "enhancement": {}
                },
                "Bares Longbow": {
                    "set": "Bares",
                    "ap_min": 11,
                    "ap_max": 15,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {
                        "dmgaes": 5
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 15,
                            "ap_max": 19
                        },
                        "2": {
                            "ap_min": 18,
                            "ap_max": 22
                        },
                        "3": {
                            "ap_min": 21,
                            "ap_max": 25
                        },
                        "4": {
                            "ap_min": 23,
                            "ap_max": 27
                        },
                        "5": {
                            "ap_min": 25,
                            "ap_max": 29
                        },
                        "6": {
                            "ap_min": 28,
                            "ap_max": 32
                        },
                        "7": {
                            "ap_min": 31,
                            "ap_max": 35
                        },
                        "8": {
                            "ap_min": 35,
                            "ap_max": 39
                        },
                        "9": {
                            "ap_min": 39,
                            "ap_max": 43
                        },
                        "10": {
                            "ap_min": 43,
                            "ap_max": 47
                        },
                        "11": {
                            "ap_min": 47,
                            "ap_max": 51
                        },
                        "12": {
                            "ap_min": 51,
                            "ap_max": 55
                        },
                        "13": {
                            "ap_min": 55,
                            "ap_max": 59
                        },
                        "14": {
                            "ap_min": 59,
                            "ap_max": 63
                        },
                        "15": {
                            "ap_min": 63,
                            "ap_max": 67
                        },
                        "16": {
                            "ap_min": 71,
                            "ap_max": 75
                        },
                        "17": {
                            "ap_min": 79,
                            "ap_max": 83
                        },
                        "18": {
                            "ap_min": 91,
                            "ap_max": 95
                        },
                        "19": {
                            "ap_min": 99,
                            "ap_max": 103
                        },
                        "20": {
                            "ap_min": 107,
                            "ap_max": 111
                        }
                    }
                },
                "Azwell Longbow": {
                    "set": "Azwell",
                    "ap_min": 14,
                    "ap_max": 18,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {
                        "acc": 5,
                        "special": "AP does not decrease in the rain."
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 18,
                            "ap_max": 22
                        },
                        "2": {
                            "ap_min": 21,
                            "ap_max": 25
                        },
                        "3": {
                            "ap_min": 24,
                            "ap_max": 28
                        },
                        "4": {
                            "ap_min": 26,
                            "ap_max": 30
                        },
                        "5": {
                            "ap_min": 28,
                            "ap_max": 32
                        },
                        "6": {
                            "ap_min": 31,
                            "ap_max": 35
                        },
                        "7": {
                            "ap_min": 34,
                            "ap_max": 38
                        },
                        "8": {
                            "ap_min": 38,
                            "ap_max": 42
                        },
                        "9": {
                            "ap_min": 42,
                            "ap_max": 46
                        },
                        "10": {
                            "ap_min": 46,
                            "ap_max": 50
                        },
                        "11": {
                            "ap_min": 50,
                            "ap_max": 54
                        },
                        "12": {
                            "ap_min": 54,
                            "ap_max": 58
                        },
                        "13": {
                            "ap_min": 58,
                            "ap_max": 62
                        },
                        "14": {
                            "ap_min": 62,
                            "ap_max": 66
                        },
                        "15": {
                            "ap_min": 66,
                            "ap_max": 70
                        },
                        "16": {
                            "ap_min": 74,
                            "ap_max": 78
                        },
                        "17": {
                            "ap_min": 82,
                            "ap_max": 86
                        },
                        "18": {
                            "ap_min": 94,
                            "ap_max": 98
                        },
                        "19": {
                            "ap_min": 102,
                            "ap_max": 106
                        },
                        "20": {
                            "ap_min": 110,
                            "ap_max": 114
                        }
                    }
                },
                "Liverto Longbow": {
                    "set": "Liverto",
                    "ap_min": 18,
                    "ap_max": 22,
                    "rarity": "rare",
                    "gems": 2,
                    "item_effects": {
                        "chr": 3
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 22,
                            "ap_max": 26
                        },
                        "2": {
                            "ap_min": 25,
                            "ap_max": 29
                        },
                        "3": {
                            "ap_min": 28,
                            "ap_max": 32
                        },
                        "4": {
                            "ap_min": 30,
                            "ap_max": 34
                        },
                        "5": {
                            "ap_min": 32,
                            "ap_max": 36
                        },
                        "6": {
                            "ap_min": 35,
                            "ap_max": 39
                        },
                        "7": {
                            "ap_min": 38,
                            "ap_max": 42
                        },
                        "8": {
                            "ap_min": 43,
                            "ap_max": 47
                        },
                        "9": {
                            "ap_min": 48,
                            "ap_max": 52
                        },
                        "10": {
                            "ap_min": 53,
                            "ap_max": 57
                        },
                        "11": {
                            "ap_min": 58,
                            "ap_max": 62
                        },
                        "12": {
                            "ap_min": 63,
                            "ap_max": 67
                        },
                        "13": {
                            "ap_min": 68,
                            "ap_max": 72
                        },
                        "14": {
                            "ap_min": 73,
                            "ap_max": 77
                        },
                        "15": {
                            "ap_min": 78,
                            "ap_max": 82
                        },
                        "16": {
                            "ap_min": 86,
                            "ap_max": 90
                        },
                        "17": {
                            "ap_min": 94,
                            "ap_max": 98
                        },
                        "18": {
                            "ap_min": 106,
                            "ap_max": 110
                        },
                        "19": {
                            "ap_min": 114,
                            "ap_max": 118
                        },
                        "20": {
                            "ap_min": 122,
                            "ap_max": 126
                        }
                    }
                },
                "Veid Longbow": {
                    "set": "Veid",
                    "ap_min": 16,
                    "ap_max": 22,
                    "rarity": "epic",
                    "gems": 2,
                    "item_effects": {
                        "acc": 5,
                        "special": "Enhancement Limit increase"
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 20,
                            "ap_max": 26
                        },
                        "2": {
                            "ap_min": 23,
                            "ap_max": 29
                        },
                        "3": {
                            "ap_min": 26,
                            "ap_max": 32
                        },
                        "4": {
                            "ap_min": 28,
                            "ap_max": 34
                        },
                        "5": {
                            "ap_min": 30,
                            "ap_max": 36
                        },
                        "6": {
                            "ap_min": 33,
                            "ap_max": 39
                        },
                        "7": {
                            "ap_min": 36,
                            "ap_max": 42
                        },
                        "8": {
                            "ap_min": 40,
                            "ap_max": 46
                        },
                        "9": {
                            "ap_min": 44,
                            "ap_max": 50
                        },
                        "10": {
                            "ap_min": 48,
                            "ap_max": 54
                        },
                        "11": {
                            "ap_min": 52,
                            "ap_max": 58
                        },
                        "12": {
                            "ap_min": 56,
                            "ap_max": 62
                        },
                        "13": {
                            "ap_min": 60,
                            "ap_max": 66
                        },
                        "14": {
                            "ap_min": 64,
                            "ap_max": 70
                        },
                        "15": {
                            "ap_min": 68,
                            "ap_max": 74
                        },
                        "16": {
                            "ap_min": 72,
                            "ap_max": 78
                        },
                        "17": {
                            "ap_min": 76,
                            "ap_max": 82
                        },
                        "18": {
                            "ap_min": 88,
                            "ap_max": 94
                        },
                        "19": {
                            "ap_min": 92,
                            "ap_max": 98
                        },
                        "20": {
                            "ap_min": 96,
                            "ap_max": 102
                        }
                    }
                },
                "Kzarka Longbow": {
                    "set": "Kzarka",
                    "ap_min": 18,
                    "ap_max": 22,
                    "rarity": "epic",
                    "gems": 2,
                    "item_effects": {
                        "as": 3
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 22,
                            "ap_max": 26
                        },
                        "2": {
                            "ap_min": 25,
                            "ap_max": 29
                        },
                        "3": {
                            "ap_min": 28,
                            "ap_max": 32
                        },
                        "4": {
                            "ap_min": 30,
                            "ap_max": 34
                        },
                        "5": {
                            "ap_min": 32,
                            "ap_max": 36
                        },
                        "6": {
                            "ap_min": 35,
                            "ap_max": 39
                        },
                        "7": {
                            "ap_min": 38,
                            "ap_max": 42
                        },
                        "8": {
                            "ap_min": 43,
                            "ap_max": 47
                        },
                        "9": {
                            "ap_min": 48,
                            "ap_max": 52
                        },
                        "10": {
                            "ap_min": 53,
                            "ap_max": 57
                        },
                        "11": {
                            "ap_min": 58,
                            "ap_max": 62
                        },
                        "12": {
                            "ap_min": 63,
                            "ap_max": 67
                        },
                        "13": {
                            "ap_min": 68,
                            "ap_max": 72
                        },
                        "14": {
                            "ap_min": 73,
                            "ap_max": 77
                        },
                        "15": {
                            "ap_min": 78,
                            "ap_max": 82
                        },
                        "16": {
                            "ap_min": 86,
                            "ap_max": 90
                        },
                        "17": {
                            "ap_min": 94,
                            "ap_max": 98
                        },
                        "18": {
                            "ap_min": 106,
                            "ap_max": 110
                        },
                        "19": {
                            "ap_min": 114,
                            "ap_max": 118
                        },
                        "20": {
                            "ap_min": 122,
                            "ap_max": 126
                        }
                    }
                }
            },
            "sorceress" :{
                "Yuria Amulet": {
                    "set": "Yuria",
                    "ap_min": 16,
                    "ap_max": 21,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {
                        "dmgth": 5
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 20,
                            "ap_max": 25
                        },
                        "2": {
                            "ap_min": 23,
                            "ap_max": 28
                        },
                        "3": {
                            "ap_min": 26,
                            "ap_max": 31
                        },
                        "4": {
                            "ap_min": 28,
                            "ap_max": 33
                        },
                        "5": {
                            "ap_min": 30,
                            "ap_max": 35
                        },
                        "6": {
                            "ap_min": 33,
                            "ap_max": 38
                        },
                        "7": {
                            "ap_min": 36,
                            "ap_max": 41
                        },
                        "8": {
                            "ap_min": 40,
                            "ap_max": 45
                        },
                        "9": {
                            "ap_min": 44,
                            "ap_max": 49
                        },
                        "10": {
                            "ap_min": 48,
                            "ap_max": 53
                        },
                        "11": {
                            "ap_min": 52,
                            "ap_max": 57
                        },
                        "12": {
                            "ap_min": 56,
                            "ap_max": 61
                        },
                        "13": {
                            "ap_min": 60,
                            "ap_max": 65
                        },
                        "14": {
                            "ap_min": 64,
                            "ap_max": 69
                        },
                        "15": {
                            "ap_min": 68,
                            "ap_max": 73
                        },
                        "16": {
                            "ap_min": 76,
                            "ap_max": 81
                        },
                        "17": {
                            "ap_min": 84,
                            "ap_max": 89
                        },
                        "18": {
                            "ap_min": 96,
                            "ap_max": 101
                        },
                        "19": {
                            "ap_min": 104,
                            "ap_max": 109
                        },
                        "20": {
                            "ap_min": 112,
                            "ap_max": 117
                        }
                    }
                },
                "Styd Amulet": {
                    "set": "Styd",
                    "ap_min": 18,
                    "ap_max": 22,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {},
                    "enhancement_text": "",
                    "enhancement": {}
                },
                "Seleth Amulet": {
                    "set": "Seleth",
                    "ap_min": 16,
                    "ap_max": 21,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {
                        "dmgth": 10
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 14,
                            "ap_max": 18
                        },
                        "2": {
                            "ap_min": 17,
                            "ap_max": 21
                        },
                        "3": {
                            "ap_min": 20,
                            "ap_max": 24
                        },
                        "4": {
                            "ap_min": 22,
                            "ap_max": 26
                        },
                        "5": {
                            "ap_min": 24,
                            "ap_max": 28
                        },
                        "6": {
                            "ap_min": 27,
                            "ap_max": 31
                        },
                        "7": {
                            "ap_min": 30,
                            "ap_max": 34
                        },
                        "8": {
                            "ap_min": 34,
                            "ap_max": 38
                        },
                        "9": {
                            "ap_min": 38,
                            "ap_max": 42
                        },
                        "10": {
                            "ap_min": 42,
                            "ap_max": 46
                        },
                        "11": {
                            "ap_min": 46,
                            "ap_max": 50
                        },
                        "12": {
                            "ap_min": 50,
                            "ap_max": 54
                        },
                        "13": {
                            "ap_min": 54,
                            "ap_max": 58
                        },
                        "14": {
                            "ap_min": 58,
                            "ap_max": 62
                        },
                        "15": {
                            "ap_min": 62,
                            "ap_max": 66
                        },
                        "16": {
                            "ap_min": 70,
                            "ap_max": 74
                        },
                        "17": {
                            "ap_min": 78,
                            "ap_max": 82
                        },
                        "18": {
                            "ap_min": 90,
                            "ap_max": 94
                        },
                        "19": {
                            "ap_min": 98,
                            "ap_max": 102
                        },
                        "20": {
                            "ap_min": 106,
                            "ap_max": 110
                        }
                    }
                },
                "Rosar Amulet": {
                    "set": "Rosar",
                    "ap_min": 17,
                    "ap_max": 22,
                    "rarity": "uncommon",
                    "gems": 2,
                    "item_effects": {},
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 21,
                            "ap_max": 26
                        },
                        "2": {
                            "ap_min": 24,
                            "ap_max": 29
                        },
                        "3": {
                            "ap_min": 27,
                            "ap_max": 32
                        },
                        "4": {
                            "ap_min": 29,
                            "ap_max": 34
                        },
                        "5": {
                            "ap_min": 31,
                            "ap_max": 36
                        },
                        "6": {
                            "ap_min": 34,
                            "ap_max": 39
                        },
                        "7": {
                            "ap_min": 37,
                            "ap_max": 42
                        },
                        "8": {
                            "ap_min": 41,
                            "ap_max": 46
                        },
                        "9": {
                            "ap_min": 45,
                            "ap_max": 50
                        },
                        "10": {
                            "ap_min": 49,
                            "ap_max": 54
                        },
                        "11": {
                            "ap_min": 53,
                            "ap_max": 58
                        },
                        "12": {
                            "ap_min": 57,
                            "ap_max": 62
                        },
                        "13": {
                            "ap_min": 61,
                            "ap_max": 66
                        },
                        "14": {
                            "ap_min": 65,
                            "ap_max": 70
                        },
                        "15": {
                            "ap_min": 69,
                            "ap_max": 74
                        },
                        "16": {
                            "ap_min": 77,
                            "ap_max": 82
                        },
                        "17": {
                            "ap_min": 85,
                            "ap_max": 90
                        },
                        "18": {
                            "ap_min": 97,
                            "ap_max": 102
                        },
                        "19": {
                            "ap_min": 105,
                            "ap_max": 110
                        },
                        "20": {
                            "ap_min": 113,
                            "ap_max": 118
                        }
                    }
                },
                "Raell Amulet": {
                    "set": "Raell",
                    "ap_min": 14,
                    "ap_max": 18,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {
                        "dmgaes": 5,
                        "acc": 3,
                        "hp": -100,
                        "special": "Max HP -100 & 5% chance to regain 10 HP on attack."
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 18,
                            "ap_max": 22
                        },
                        "2": {
                            "ap_min": 21,
                            "ap_max": 25
                        },
                        "3": {
                            "ap_min": 24,
                            "ap_max": 28
                        },
                        "4": {
                            "ap_min": 26,
                            "ap_max": 30
                        },
                        "5": {
                            "ap_min": 28,
                            "ap_max": 32
                        },
                        "6": {
                            "ap_min": 31,
                            "ap_max": 35
                        },
                        "7": {
                            "ap_min": 34,
                            "ap_max": 38
                        },
                        "8": {
                            "ap_min": 38,
                            "ap_max": 42
                        },
                        "9": {
                            "ap_min": 42,
                            "ap_max": 46
                        },
                        "10": {
                            "ap_min": 46,
                            "ap_max": 50
                        },
                        "11": {
                            "ap_min": 50,
                            "ap_max": 54
                        },
                        "12": {
                            "ap_min": 54,
                            "ap_max": 58
                        },
                        "13": {
                            "ap_min": 58,
                            "ap_max": 62
                        },
                        "14": {
                            "ap_min": 62,
                            "ap_max": 66
                        },
                        "15": {
                            "ap_min": 66,
                            "ap_max": 70
                        },
                        "16": {
                            "ap_min": 74,
                            "ap_max": 78
                        },
                        "17": {
                            "ap_min": 82,
                            "ap_max": 86
                        },
                        "18": {
                            "ap_min": 94,
                            "ap_max": 98
                        },
                        "19": {
                            "ap_min": 102,
                            "ap_max": 106
                        },
                        "20": {
                            "ap_min": 110,
                            "ap_max": 114
                        }
                    }
                },
                "Krea Amulet": {
                    "set": "Krea",
                    "ap_min": 17,
                    "ap_max": 19,
                    "rarity": "uncommon",
                    "gems": 2,
                    "item_effects": {},
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 21,
                            "ap_max": 23
                        },
                        "2": {
                            "ap_min": 24,
                            "ap_max": 26
                        },
                        "3": {
                            "ap_min": 27,
                            "ap_max": 29
                        },
                        "4": {
                            "ap_min": 29,
                            "ap_max": 31
                        },
                        "5": {
                            "ap_min": 31,
                            "ap_max": 33
                        },
                        "6": {
                            "ap_min": 34,
                            "ap_max": 36
                        },
                        "7": {
                            "ap_min": 37,
                            "ap_max": 39
                        },
                        "8": {
                            "ap_min": 41,
                            "ap_max": 43
                        },
                        "9": {
                            "ap_min": 45,
                            "ap_max": 47
                        },
                        "10": {
                            "ap_min": 49,
                            "ap_max": 51
                        },
                        "11": {
                            "ap_min": 53,
                            "ap_max": 55
                        },
                        "12": {
                            "ap_min": 57,
                            "ap_max": 59
                        },
                        "13": {
                            "ap_min": 61,
                            "ap_max": 63
                        },
                        "14": {
                            "ap_min": 65,
                            "ap_max": 67
                        },
                        "15": {
                            "ap_min": 69,
                            "ap_max": 71
                        },
                        "16": {
                            "ap_min": 77,
                            "ap_max": 79
                        },
                        "17": {
                            "ap_min": 85,
                            "ap_max": 87
                        },
                        "18": {
                            "ap_min": 97,
                            "ap_max": 99
                        },
                        "19": {
                            "ap_min": 105,
                            "ap_max": 107
                        },
                        "20": {
                            "ap_min": 113,
                            "ap_max": 115
                        }
                    }
                },
                "Kalis Amulet": {
                    "set": "Kalis",
                    "ap_min": 13,
                    "ap_max": 27,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {},
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 17,
                            "ap_max": 31
                        },
                        "2": {
                            "ap_min": 20,
                            "ap_max": 34
                        },
                        "3": {
                            "ap_min": 23,
                            "ap_max": 37
                        },
                        "4": {
                            "ap_min": 25,
                            "ap_max": 39
                        },
                        "5": {
                            "ap_min": 27,
                            "ap_max": 41
                        },
                        "6": {
                            "ap_min": 30,
                            "ap_max": 44
                        },
                        "7": {
                            "ap_min": 33,
                            "ap_max": 47
                        },
                        "8": {
                            "ap_min": 37,
                            "ap_max": 51
                        },
                        "9": {
                            "ap_min": 41,
                            "ap_max": 55
                        },
                        "10": {
                            "ap_min": 45,
                            "ap_max": 59
                        },
                        "11": {
                            "ap_min": 49,
                            "ap_max": 63
                        },
                        "12": {
                            "ap_min": 53,
                            "ap_max": 67
                        },
                        "13": {
                            "ap_min": 57,
                            "ap_max": 71
                        },
                        "14": {
                            "ap_min": 61,
                            "ap_max": 75
                        },
                        "15": {
                            "ap_min": 65,
                            "ap_max": 79
                        },
                        "16": {
                            "ap_min": 73,
                            "ap_max": 87
                        },
                        "17": {
                            "ap_min": 81,
                            "ap_max": 95
                        },
                        "18": {
                            "ap_min": 93,
                            "ap_max": 107
                        },
                        "19": {
                            "ap_min": 101,
                            "ap_max": 115
                        },
                        "20": {
                            "ap_min": 109,
                            "ap_max": 123
                        }
                    }
                },
                "Elsh Amulet": {
                    "set": "Elsh",
                    "ap_min": 10,
                    "ap_max": 14,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {
                        "dmgaes": 5,
                        "acc": 3,
                        "wgt": -25,
                        "special": "Weight Limit -25 LT & 5% chance to heal 5 HP on attack."
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 14,
                            "ap_max": 18
                        },
                        "2": {
                            "ap_min": 17,
                            "ap_max": 21
                        },
                        "3": {
                            "ap_min": 20,
                            "ap_max": 24
                        },
                        "4": {
                            "ap_min": 22,
                            "ap_max": 26
                        },
                        "5": {
                            "ap_min": 24,
                            "ap_max": 28
                        },
                        "6": {
                            "ap_min": 27,
                            "ap_max": 31
                        },
                        "7": {
                            "ap_min": 30,
                            "ap_max": 34
                        },
                        "8": {
                            "ap_min": 34,
                            "ap_max": 38
                        },
                        "9": {
                            "ap_min": 38,
                            "ap_max": 42
                        },
                        "10": {
                            "ap_min": 42,
                            "ap_max": 46
                        },
                        "11": {
                            "ap_min": 46,
                            "ap_max": 50
                        },
                        "12": {
                            "ap_min": 50,
                            "ap_max": 54
                        },
                        "13": {
                            "ap_min": 54,
                            "ap_max": 58
                        },
                        "14": {
                            "ap_min": 58,
                            "ap_max": 62
                        },
                        "15": {
                            "ap_min": 62,
                            "ap_max": 66
                        },
                        "16": {
                            "ap_min": 70,
                            "ap_max": 74
                        },
                        "17": {
                            "ap_min": 78,
                            "ap_max": 82
                        },
                        "18": {
                            "ap_min": 90,
                            "ap_max": 94
                        },
                        "19": {
                            "ap_min": 98,
                            "ap_max": 102
                        },
                        "20": {
                            "ap_min": 106,
                            "ap_max": 110
                        }
                    }
                },
                "Demihuman Amulet": {
                    "set": "Demihuman",
                    "ap_min": 10,
                    "ap_max": 14,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {
                        "dmgtdh": 10
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 14,
                            "ap_max": 18
                        },
                        "2": {
                            "ap_min": 17,
                            "ap_max": 21
                        },
                        "3": {
                            "ap_min": 20,
                            "ap_max": 24
                        },
                        "4": {
                            "ap_min": 22,
                            "ap_max": 26
                        },
                        "5": {
                            "ap_min": 24,
                            "ap_max": 28
                        },
                        "6": {
                            "ap_min": 27,
                            "ap_max": 31
                        },
                        "7": {
                            "ap_min": 30,
                            "ap_max": 34
                        },
                        "8": {
                            "ap_min": 34,
                            "ap_max": 38
                        },
                        "9": {
                            "ap_min": 38,
                            "ap_max": 42
                        },
                        "10": {
                            "ap_min": 42,
                            "ap_max": 46
                        },
                        "11": {
                            "ap_min": 46,
                            "ap_max": 50
                        },
                        "12": {
                            "ap_min": 50,
                            "ap_max": 54
                        },
                        "13": {
                            "ap_min": 54,
                            "ap_max": 58
                        },
                        "14": {
                            "ap_min": 58,
                            "ap_max": 62
                        },
                        "15": {
                            "ap_min": 62,
                            "ap_max": 66
                        },
                        "16": {
                            "ap_min": 70,
                            "ap_max": 74
                        },
                        "17": {
                            "ap_min": 78,
                            "ap_max": 82
                        },
                        "18": {
                            "ap_min": 90,
                            "ap_max": 94
                        },
                        "19": {
                            "ap_min": 98,
                            "ap_max": 102
                        },
                        "20": {
                            "ap_min": 106,
                            "ap_max": 110
                        }
                    }
                },
                "Basteer Amulet": {
                    "set": "Basteer",
                    "ap_min": 20,
                    "ap_max": 24,
                    "rarity": "uncommon",
                    "gems": 2,
                    "item_effects": {},
                    "enhancement_text": "",
                    "enhancement": {}
                },
                "Bares Amulet": {
                    "set": "Bares",
                    "ap_min": 11,
                    "ap_max": 15,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {
                        "dmgaes": 5
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 15,
                            "ap_max": 19
                        },
                        "2": {
                            "ap_min": 18,
                            "ap_max": 22
                        },
                        "3": {
                            "ap_min": 21,
                            "ap_max": 25
                        },
                        "4": {
                            "ap_min": 23,
                            "ap_max": 27
                        },
                        "5": {
                            "ap_min": 25,
                            "ap_max": 29
                        },
                        "6": {
                            "ap_min": 28,
                            "ap_max": 32
                        },
                        "7": {
                            "ap_min": 31,
                            "ap_max": 35
                        },
                        "8": {
                            "ap_min": 35,
                            "ap_max": 39
                        },
                        "9": {
                            "ap_min": 39,
                            "ap_max": 43
                        },
                        "10": {
                            "ap_min": 43,
                            "ap_max": 47
                        },
                        "11": {
                            "ap_min": 47,
                            "ap_max": 51
                        },
                        "12": {
                            "ap_min": 51,
                            "ap_max": 55
                        },
                        "13": {
                            "ap_min": 55,
                            "ap_max": 59
                        },
                        "14": {
                            "ap_min": 59,
                            "ap_max": 63
                        },
                        "15": {
                            "ap_min": 63,
                            "ap_max": 67
                        },
                        "16": {
                            "ap_min": 71,
                            "ap_max": 75
                        },
                        "17": {
                            "ap_min": 79,
                            "ap_max": 83
                        },
                        "18": {
                            "ap_min": 91,
                            "ap_max": 95
                        },
                        "19": {
                            "ap_min": 99,
                            "ap_max": 103
                        },
                        "20": {
                            "ap_min": 107,
                            "ap_max": 111
                        }
                    }
                },
                "Azwell Amulet": {
                    "set": "Azwell",
                    "ap_min": 14,
                    "ap_max": 18,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {
                        "acc": 5,
                        "special": "AP does not decrease in the rain."
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 18,
                            "ap_max": 22
                        },
                        "2": {
                            "ap_min": 21,
                            "ap_max": 25
                        },
                        "3": {
                            "ap_min": 24,
                            "ap_max": 28
                        },
                        "4": {
                            "ap_min": 26,
                            "ap_max": 30
                        },
                        "5": {
                            "ap_min": 28,
                            "ap_max": 32
                        },
                        "6": {
                            "ap_min": 31,
                            "ap_max": 35
                        },
                        "7": {
                            "ap_min": 34,
                            "ap_max": 38
                        },
                        "8": {
                            "ap_min": 38,
                            "ap_max": 42
                        },
                        "9": {
                            "ap_min": 42,
                            "ap_max": 46
                        },
                        "10": {
                            "ap_min": 46,
                            "ap_max": 50
                        },
                        "11": {
                            "ap_min": 50,
                            "ap_max": 54
                        },
                        "12": {
                            "ap_min": 54,
                            "ap_max": 58
                        },
                        "13": {
                            "ap_min": 58,
                            "ap_max": 62
                        },
                        "14": {
                            "ap_min": 62,
                            "ap_max": 66
                        },
                        "15": {
                            "ap_min": 66,
                            "ap_max": 70
                        },
                        "16": {
                            "ap_min": 74,
                            "ap_max": 78
                        },
                        "17": {
                            "ap_min": 82,
                            "ap_max": 86
                        },
                        "18": {
                            "ap_min": 94,
                            "ap_max": 98
                        },
                        "19": {
                            "ap_min": 102,
                            "ap_max": 106
                        },
                        "20": {
                            "ap_min": 110,
                            "ap_max": 114
                        }
                    }
                },
                "Liverto Amulet": {
                    "set": "Liverto",
                    "ap_min": 18,
                    "ap_max": 22,
                    "rarity": "rare",
                    "gems": 2,
                    "item_effects": {
                        "chr": 3
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 22,
                            "ap_max": 26
                        },
                        "2": {
                            "ap_min": 25,
                            "ap_max": 29
                        },
                        "3": {
                            "ap_min": 28,
                            "ap_max": 32
                        },
                        "4": {
                            "ap_min": 30,
                            "ap_max": 34
                        },
                        "5": {
                            "ap_min": 32,
                            "ap_max": 36
                        },
                        "6": {
                            "ap_min": 35,
                            "ap_max": 39
                        },
                        "7": {
                            "ap_min": 38,
                            "ap_max": 42
                        },
                        "8": {
                            "ap_min": 43,
                            "ap_max": 47
                        },
                        "9": {
                            "ap_min": 48,
                            "ap_max": 52
                        },
                        "10": {
                            "ap_min": 53,
                            "ap_max": 57
                        },
                        "11": {
                            "ap_min": 58,
                            "ap_max": 62
                        },
                        "12": {
                            "ap_min": 63,
                            "ap_max": 67
                        },
                        "13": {
                            "ap_min": 68,
                            "ap_max": 72
                        },
                        "14": {
                            "ap_min": 73,
                            "ap_max": 77
                        },
                        "15": {
                            "ap_min": 78,
                            "ap_max": 82
                        },
                        "16": {
                            "ap_min": 86,
                            "ap_max": 90
                        },
                        "17": {
                            "ap_min": 94,
                            "ap_max": 98
                        },
                        "18": {
                            "ap_min": 106,
                            "ap_max": 110
                        },
                        "19": {
                            "ap_min": 114,
                            "ap_max": 118
                        },
                        "20": {
                            "ap_min": 122,
                            "ap_max": 126
                        }
                    }
                },
                "Veid Amulet": {
                    "set": "Veid",
                    "ap_min": 16,
                    "ap_max": 22,
                    "rarity": "epic",
                    "gems": 2,
                    "item_effects": {
                        "acc": 5,
                        "special": "Enhancement Limit increase"
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 20,
                            "ap_max": 26
                        },
                        "2": {
                            "ap_min": 23,
                            "ap_max": 29
                        },
                        "3": {
                            "ap_min": 26,
                            "ap_max": 32
                        },
                        "4": {
                            "ap_min": 28,
                            "ap_max": 34
                        },
                        "5": {
                            "ap_min": 30,
                            "ap_max": 36
                        },
                        "6": {
                            "ap_min": 33,
                            "ap_max": 39
                        },
                        "7": {
                            "ap_min": 36,
                            "ap_max": 42
                        },
                        "8": {
                            "ap_min": 40,
                            "ap_max": 46
                        },
                        "9": {
                            "ap_min": 44,
                            "ap_max": 50
                        },
                        "10": {
                            "ap_min": 48,
                            "ap_max": 54
                        },
                        "11": {
                            "ap_min": 52,
                            "ap_max": 58
                        },
                        "12": {
                            "ap_min": 56,
                            "ap_max": 62
                        },
                        "13": {
                            "ap_min": 60,
                            "ap_max": 66
                        },
                        "14": {
                            "ap_min": 64,
                            "ap_max": 70
                        },
                        "15": {
                            "ap_min": 68,
                            "ap_max": 74
                        },
                        "16": {
                            "ap_min": 72,
                            "ap_max": 78
                        },
                        "17": {
                            "ap_min": 76,
                            "ap_max": 82
                        },
                        "18": {
                            "ap_min": 88,
                            "ap_max": 94
                        },
                        "19": {
                            "ap_min": 92,
                            "ap_max": 98
                        },
                        "20": {
                            "ap_min": 96,
                            "ap_max": 102
                        }
                    }
                },
                "Kzarka Amulet": {
                    "set": "Kzarka",
                    "ap_min": 18,
                    "ap_max": 22,
                    "rarity": "epic",
                    "gems": 2,
                    "item_effects": {
                        "cs": 3
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 22,
                            "ap_max": 26
                        },
                        "2": {
                            "ap_min": 25,
                            "ap_max": 29
                        },
                        "3": {
                            "ap_min": 28,
                            "ap_max": 32
                        },
                        "4": {
                            "ap_min": 30,
                            "ap_max": 34
                        },
                        "5": {
                            "ap_min": 32,
                            "ap_max": 36
                        },
                        "6": {
                            "ap_min": 35,
                            "ap_max": 39
                        },
                        "7": {
                            "ap_min": 38,
                            "ap_max": 42
                        },
                        "8": {
                            "ap_min": 43,
                            "ap_max": 47
                        },
                        "9": {
                            "ap_min": 48,
                            "ap_max": 52
                        },
                        "10": {
                            "ap_min": 53,
                            "ap_max": 57
                        },
                        "11": {
                            "ap_min": 58,
                            "ap_max": 62
                        },
                        "12": {
                            "ap_min": 63,
                            "ap_max": 67
                        },
                        "13": {
                            "ap_min": 68,
                            "ap_max": 72
                        },
                        "14": {
                            "ap_min": 73,
                            "ap_max": 77
                        },
                        "15": {
                            "ap_min": 78,
                            "ap_max": 82
                        },
                        "16": {
                            "ap_min": 86,
                            "ap_max": 90
                        },
                        "17": {
                            "ap_min": 94,
                            "ap_max": 98
                        },
                        "18": {
                            "ap_min": 106,
                            "ap_max": 110
                        },
                        "19": {
                            "ap_min": 114,
                            "ap_max": 118
                        },
                        "20": {
                            "ap_min": 122,
                            "ap_max": 126
                        }
                    }
                }
            },
            "tamer" :{
                "Yuria Shortsword": {
                    "set": "Yuria",
                    "ap_min": 16,
                    "ap_max": 21,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {
                        "dmgth": 5
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 20,
                            "ap_max": 25
                        },
                        "2": {
                            "ap_min": 23,
                            "ap_max": 28
                        },
                        "3": {
                            "ap_min": 26,
                            "ap_max": 31
                        },
                        "4": {
                            "ap_min": 28,
                            "ap_max": 33
                        },
                        "5": {
                            "ap_min": 30,
                            "ap_max": 35
                        },
                        "6": {
                            "ap_min": 33,
                            "ap_max": 38
                        },
                        "7": {
                            "ap_min": 36,
                            "ap_max": 41
                        },
                        "8": {
                            "ap_min": 40,
                            "ap_max": 45
                        },
                        "9": {
                            "ap_min": 44,
                            "ap_max": 49
                        },
                        "10": {
                            "ap_min": 48,
                            "ap_max": 53
                        },
                        "11": {
                            "ap_min": 52,
                            "ap_max": 57
                        },
                        "12": {
                            "ap_min": 56,
                            "ap_max": 61
                        },
                        "13": {
                            "ap_min": 60,
                            "ap_max": 65
                        },
                        "14": {
                            "ap_min": 64,
                            "ap_max": 69
                        },
                        "15": {
                            "ap_min": 68,
                            "ap_max": 73
                        },
                        "16": {
                            "ap_min": 76,
                            "ap_max": 81
                        },
                        "17": {
                            "ap_min": 84,
                            "ap_max": 89
                        },
                        "18": {
                            "ap_min": 96,
                            "ap_max": 101
                        },
                        "19": {
                            "ap_min": 104,
                            "ap_max": 109
                        },
                        "20": {
                            "ap_min": 112,
                            "ap_max": 117
                        }
                    }
                },
                "Styd Shortsword": {
                    "set": "Styd",
                    "ap_min": 18,
                    "ap_max": 22,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {},
                    "enhancement_text": "",
                    "enhancement": {}
                },
                "Seleth Shortsword": {
                    "set": "Seleth",
                    "ap_min": 16,
                    "ap_max": 21,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {
                        "dmgth": 10
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 14,
                            "ap_max": 18
                        },
                        "2": {
                            "ap_min": 17,
                            "ap_max": 21
                        },
                        "3": {
                            "ap_min": 20,
                            "ap_max": 24
                        },
                        "4": {
                            "ap_min": 22,
                            "ap_max": 26
                        },
                        "5": {
                            "ap_min": 24,
                            "ap_max": 28
                        },
                        "6": {
                            "ap_min": 27,
                            "ap_max": 31
                        },
                        "7": {
                            "ap_min": 30,
                            "ap_max": 34
                        },
                        "8": {
                            "ap_min": 34,
                            "ap_max": 38
                        },
                        "9": {
                            "ap_min": 38,
                            "ap_max": 42
                        },
                        "10": {
                            "ap_min": 42,
                            "ap_max": 46
                        },
                        "11": {
                            "ap_min": 46,
                            "ap_max": 50
                        },
                        "12": {
                            "ap_min": 50,
                            "ap_max": 54
                        },
                        "13": {
                            "ap_min": 54,
                            "ap_max": 58
                        },
                        "14": {
                            "ap_min": 58,
                            "ap_max": 62
                        },
                        "15": {
                            "ap_min": 62,
                            "ap_max": 66
                        },
                        "16": {
                            "ap_min": 70,
                            "ap_max": 74
                        },
                        "17": {
                            "ap_min": 78,
                            "ap_max": 82
                        },
                        "18": {
                            "ap_min": 90,
                            "ap_max": 94
                        },
                        "19": {
                            "ap_min": 98,
                            "ap_max": 102
                        },
                        "20": {
                            "ap_min": 106,
                            "ap_max": 110
                        }
                    }
                },
                "Rosar Shortsword": {
                    "set": "Rosar",
                    "ap_min": 17,
                    "ap_max": 22,
                    "rarity": "uncommon",
                    "gems": 2,
                    "item_effects": {},
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 21,
                            "ap_max": 26
                        },
                        "2": {
                            "ap_min": 24,
                            "ap_max": 29
                        },
                        "3": {
                            "ap_min": 27,
                            "ap_max": 32
                        },
                        "4": {
                            "ap_min": 29,
                            "ap_max": 34
                        },
                        "5": {
                            "ap_min": 31,
                            "ap_max": 36
                        },
                        "6": {
                            "ap_min": 34,
                            "ap_max": 39
                        },
                        "7": {
                            "ap_min": 37,
                            "ap_max": 42
                        },
                        "8": {
                            "ap_min": 41,
                            "ap_max": 46
                        },
                        "9": {
                            "ap_min": 45,
                            "ap_max": 50
                        },
                        "10": {
                            "ap_min": 49,
                            "ap_max": 54
                        },
                        "11": {
                            "ap_min": 53,
                            "ap_max": 58
                        },
                        "12": {
                            "ap_min": 57,
                            "ap_max": 62
                        },
                        "13": {
                            "ap_min": 61,
                            "ap_max": 66
                        },
                        "14": {
                            "ap_min": 65,
                            "ap_max": 70
                        },
                        "15": {
                            "ap_min": 69,
                            "ap_max": 74
                        },
                        "16": {
                            "ap_min": 77,
                            "ap_max": 82
                        },
                        "17": {
                            "ap_min": 85,
                            "ap_max": 90
                        },
                        "18": {
                            "ap_min": 97,
                            "ap_max": 102
                        },
                        "19": {
                            "ap_min": 105,
                            "ap_max": 110
                        },
                        "20": {
                            "ap_min": 113,
                            "ap_max": 118
                        }
                    }
                },
                "Raell Shortsword": {
                    "set": "Raell",
                    "ap_min": 14,
                    "ap_max": 18,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {
                        "dmgaes": 5,
                        "acc": 3,
                        "hp": -100,
                        "special": "Max HP -100 & 5% chance to regain 10 HP on attack."
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 18,
                            "ap_max": 22
                        },
                        "2": {
                            "ap_min": 21,
                            "ap_max": 25
                        },
                        "3": {
                            "ap_min": 24,
                            "ap_max": 28
                        },
                        "4": {
                            "ap_min": 26,
                            "ap_max": 30
                        },
                        "5": {
                            "ap_min": 28,
                            "ap_max": 32
                        },
                        "6": {
                            "ap_min": 31,
                            "ap_max": 35
                        },
                        "7": {
                            "ap_min": 34,
                            "ap_max": 38
                        },
                        "8": {
                            "ap_min": 38,
                            "ap_max": 42
                        },
                        "9": {
                            "ap_min": 42,
                            "ap_max": 46
                        },
                        "10": {
                            "ap_min": 46,
                            "ap_max": 50
                        },
                        "11": {
                            "ap_min": 50,
                            "ap_max": 54
                        },
                        "12": {
                            "ap_min": 54,
                            "ap_max": 58
                        },
                        "13": {
                            "ap_min": 58,
                            "ap_max": 62
                        },
                        "14": {
                            "ap_min": 62,
                            "ap_max": 66
                        },
                        "15": {
                            "ap_min": 66,
                            "ap_max": 70
                        },
                        "16": {
                            "ap_min": 74,
                            "ap_max": 78
                        },
                        "17": {
                            "ap_min": 82,
                            "ap_max": 86
                        },
                        "18": {
                            "ap_min": 94,
                            "ap_max": 98
                        },
                        "19": {
                            "ap_min": 102,
                            "ap_max": 106
                        },
                        "20": {
                            "ap_min": 110,
                            "ap_max": 114
                        }
                    }
                },
                "Krea Shortsword": {
                    "set": "Krea",
                    "ap_min": 17,
                    "ap_max": 19,
                    "rarity": "uncommon",
                    "gems": 2,
                    "item_effects": {},
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 21,
                            "ap_max": 23
                        },
                        "2": {
                            "ap_min": 24,
                            "ap_max": 26
                        },
                        "3": {
                            "ap_min": 27,
                            "ap_max": 29
                        },
                        "4": {
                            "ap_min": 29,
                            "ap_max": 31
                        },
                        "5": {
                            "ap_min": 31,
                            "ap_max": 33
                        },
                        "6": {
                            "ap_min": 34,
                            "ap_max": 36
                        },
                        "7": {
                            "ap_min": 37,
                            "ap_max": 39
                        },
                        "8": {
                            "ap_min": 41,
                            "ap_max": 43
                        },
                        "9": {
                            "ap_min": 45,
                            "ap_max": 47
                        },
                        "10": {
                            "ap_min": 49,
                            "ap_max": 51
                        },
                        "11": {
                            "ap_min": 53,
                            "ap_max": 55
                        },
                        "12": {
                            "ap_min": 57,
                            "ap_max": 59
                        },
                        "13": {
                            "ap_min": 61,
                            "ap_max": 63
                        },
                        "14": {
                            "ap_min": 65,
                            "ap_max": 67
                        },
                        "15": {
                            "ap_min": 69,
                            "ap_max": 71
                        },
                        "16": {
                            "ap_min": 77,
                            "ap_max": 79
                        },
                        "17": {
                            "ap_min": 85,
                            "ap_max": 87
                        },
                        "18": {
                            "ap_min": 97,
                            "ap_max": 99
                        },
                        "19": {
                            "ap_min": 105,
                            "ap_max": 107
                        },
                        "20": {
                            "ap_min": 113,
                            "ap_max": 115
                        }
                    }
                },
                "Kalis Shortsword": {
                    "set": "Kalis",
                    "ap_min": 13,
                    "ap_max": 27,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {},
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 17,
                            "ap_max": 31
                        },
                        "2": {
                            "ap_min": 20,
                            "ap_max": 34
                        },
                        "3": {
                            "ap_min": 23,
                            "ap_max": 37
                        },
                        "4": {
                            "ap_min": 25,
                            "ap_max": 39
                        },
                        "5": {
                            "ap_min": 27,
                            "ap_max": 41
                        },
                        "6": {
                            "ap_min": 30,
                            "ap_max": 44
                        },
                        "7": {
                            "ap_min": 33,
                            "ap_max": 47
                        },
                        "8": {
                            "ap_min": 37,
                            "ap_max": 51
                        },
                        "9": {
                            "ap_min": 41,
                            "ap_max": 55
                        },
                        "10": {
                            "ap_min": 45,
                            "ap_max": 59
                        },
                        "11": {
                            "ap_min": 49,
                            "ap_max": 63
                        },
                        "12": {
                            "ap_min": 53,
                            "ap_max": 67
                        },
                        "13": {
                            "ap_min": 57,
                            "ap_max": 71
                        },
                        "14": {
                            "ap_min": 61,
                            "ap_max": 75
                        },
                        "15": {
                            "ap_min": 65,
                            "ap_max": 79
                        },
                        "16": {
                            "ap_min": 73,
                            "ap_max": 87
                        },
                        "17": {
                            "ap_min": 81,
                            "ap_max": 95
                        },
                        "18": {
                            "ap_min": 93,
                            "ap_max": 107
                        },
                        "19": {
                            "ap_min": 101,
                            "ap_max": 115
                        },
                        "20": {
                            "ap_min": 109,
                            "ap_max": 123
                        }
                    }
                },
                "Elsh Shortsword": {
                    "set": "Elsh",
                    "ap_min": 10,
                    "ap_max": 14,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {
                        "dmgaes": 5,
                        "acc": 3,
                        "wgt": -25,
                        "special": "Weight Limit -25 LT & 5% chance to heal 5 HP on attack."
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 14,
                            "ap_max": 18
                        },
                        "2": {
                            "ap_min": 17,
                            "ap_max": 21
                        },
                        "3": {
                            "ap_min": 20,
                            "ap_max": 24
                        },
                        "4": {
                            "ap_min": 22,
                            "ap_max": 26
                        },
                        "5": {
                            "ap_min": 24,
                            "ap_max": 28
                        },
                        "6": {
                            "ap_min": 27,
                            "ap_max": 31
                        },
                        "7": {
                            "ap_min": 30,
                            "ap_max": 34
                        },
                        "8": {
                            "ap_min": 34,
                            "ap_max": 38
                        },
                        "9": {
                            "ap_min": 38,
                            "ap_max": 42
                        },
                        "10": {
                            "ap_min": 42,
                            "ap_max": 46
                        },
                        "11": {
                            "ap_min": 46,
                            "ap_max": 50
                        },
                        "12": {
                            "ap_min": 50,
                            "ap_max": 54
                        },
                        "13": {
                            "ap_min": 54,
                            "ap_max": 58
                        },
                        "14": {
                            "ap_min": 58,
                            "ap_max": 62
                        },
                        "15": {
                            "ap_min": 62,
                            "ap_max": 66
                        },
                        "16": {
                            "ap_min": 70,
                            "ap_max": 74
                        },
                        "17": {
                            "ap_min": 78,
                            "ap_max": 82
                        },
                        "18": {
                            "ap_min": 90,
                            "ap_max": 94
                        },
                        "19": {
                            "ap_min": 98,
                            "ap_max": 102
                        },
                        "20": {
                            "ap_min": 106,
                            "ap_max": 110
                        }
                    }
                },
                "Demihuman Shortsword": {
                    "set": "Demihuman",
                    "ap_min": 10,
                    "ap_max": 14,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {
                        "dmgtdh": 10
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 14,
                            "ap_max": 18
                        },
                        "2": {
                            "ap_min": 17,
                            "ap_max": 21
                        },
                        "3": {
                            "ap_min": 20,
                            "ap_max": 24
                        },
                        "4": {
                            "ap_min": 22,
                            "ap_max": 26
                        },
                        "5": {
                            "ap_min": 24,
                            "ap_max": 28
                        },
                        "6": {
                            "ap_min": 27,
                            "ap_max": 31
                        },
                        "7": {
                            "ap_min": 30,
                            "ap_max": 34
                        },
                        "8": {
                            "ap_min": 34,
                            "ap_max": 38
                        },
                        "9": {
                            "ap_min": 38,
                            "ap_max": 42
                        },
                        "10": {
                            "ap_min": 42,
                            "ap_max": 46
                        },
                        "11": {
                            "ap_min": 46,
                            "ap_max": 50
                        },
                        "12": {
                            "ap_min": 50,
                            "ap_max": 54
                        },
                        "13": {
                            "ap_min": 54,
                            "ap_max": 58
                        },
                        "14": {
                            "ap_min": 58,
                            "ap_max": 62
                        },
                        "15": {
                            "ap_min": 62,
                            "ap_max": 66
                        },
                        "16": {
                            "ap_min": 70,
                            "ap_max": 74
                        },
                        "17": {
                            "ap_min": 78,
                            "ap_max": 82
                        },
                        "18": {
                            "ap_min": 90,
                            "ap_max": 94
                        },
                        "19": {
                            "ap_min": 98,
                            "ap_max": 102
                        },
                        "20": {
                            "ap_min": 106,
                            "ap_max": 110
                        }
                    }
                },
                "Basteer Shortsword": {
                    "set": "Basteer",
                    "ap_min": 20,
                    "ap_max": 24,
                    "rarity": "uncommon",
                    "gems": 2,
                    "item_effects": {},
                    "enhancement_text": "",
                    "enhancement": {}
                },
                "Bares Shortsword": {
                    "set": "Bares",
                    "ap_min": 11,
                    "ap_max": 15,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {
                        "dmgaes": 5
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 15,
                            "ap_max": 19
                        },
                        "2": {
                            "ap_min": 18,
                            "ap_max": 22
                        },
                        "3": {
                            "ap_min": 21,
                            "ap_max": 25
                        },
                        "4": {
                            "ap_min": 23,
                            "ap_max": 27
                        },
                        "5": {
                            "ap_min": 25,
                            "ap_max": 29
                        },
                        "6": {
                            "ap_min": 28,
                            "ap_max": 32
                        },
                        "7": {
                            "ap_min": 31,
                            "ap_max": 35
                        },
                        "8": {
                            "ap_min": 35,
                            "ap_max": 39
                        },
                        "9": {
                            "ap_min": 39,
                            "ap_max": 43
                        },
                        "10": {
                            "ap_min": 43,
                            "ap_max": 47
                        },
                        "11": {
                            "ap_min": 47,
                            "ap_max": 51
                        },
                        "12": {
                            "ap_min": 51,
                            "ap_max": 55
                        },
                        "13": {
                            "ap_min": 55,
                            "ap_max": 59
                        },
                        "14": {
                            "ap_min": 59,
                            "ap_max": 63
                        },
                        "15": {
                            "ap_min": 63,
                            "ap_max": 67
                        },
                        "16": {
                            "ap_min": 71,
                            "ap_max": 75
                        },
                        "17": {
                            "ap_min": 79,
                            "ap_max": 83
                        },
                        "18": {
                            "ap_min": 91,
                            "ap_max": 95
                        },
                        "19": {
                            "ap_min": 99,
                            "ap_max": 103
                        },
                        "20": {
                            "ap_min": 107,
                            "ap_max": 111
                        }
                    }
                },
                "Azwell Shortsword": {
                    "set": "Azwell",
                    "ap_min": 14,
                    "ap_max": 18,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {
                        "acc": 5,
                        "special": "AP does not decrease in the rain."
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 18,
                            "ap_max": 22
                        },
                        "2": {
                            "ap_min": 21,
                            "ap_max": 25
                        },
                        "3": {
                            "ap_min": 24,
                            "ap_max": 28
                        },
                        "4": {
                            "ap_min": 26,
                            "ap_max": 30
                        },
                        "5": {
                            "ap_min": 28,
                            "ap_max": 32
                        },
                        "6": {
                            "ap_min": 31,
                            "ap_max": 35
                        },
                        "7": {
                            "ap_min": 34,
                            "ap_max": 38
                        },
                        "8": {
                            "ap_min": 38,
                            "ap_max": 42
                        },
                        "9": {
                            "ap_min": 42,
                            "ap_max": 46
                        },
                        "10": {
                            "ap_min": 46,
                            "ap_max": 50
                        },
                        "11": {
                            "ap_min": 50,
                            "ap_max": 54
                        },
                        "12": {
                            "ap_min": 54,
                            "ap_max": 58
                        },
                        "13": {
                            "ap_min": 58,
                            "ap_max": 62
                        },
                        "14": {
                            "ap_min": 62,
                            "ap_max": 66
                        },
                        "15": {
                            "ap_min": 66,
                            "ap_max": 70
                        },
                        "16": {
                            "ap_min": 74,
                            "ap_max": 78
                        },
                        "17": {
                            "ap_min": 82,
                            "ap_max": 86
                        },
                        "18": {
                            "ap_min": 94,
                            "ap_max": 98
                        },
                        "19": {
                            "ap_min": 102,
                            "ap_max": 106
                        },
                        "20": {
                            "ap_min": 110,
                            "ap_max": 114
                        }
                    }
                },
                "Liverto Shortsword": {
                    "set": "Liverto",
                    "ap_min": 18,
                    "ap_max": 22,
                    "rarity": "rare",
                    "gems": 2,
                    "item_effects": {
                        "chr": 3
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 22,
                            "ap_max": 26
                        },
                        "2": {
                            "ap_min": 25,
                            "ap_max": 29
                        },
                        "3": {
                            "ap_min": 28,
                            "ap_max": 32
                        },
                        "4": {
                            "ap_min": 30,
                            "ap_max": 34
                        },
                        "5": {
                            "ap_min": 32,
                            "ap_max": 36
                        },
                        "6": {
                            "ap_min": 35,
                            "ap_max": 39
                        },
                        "7": {
                            "ap_min": 38,
                            "ap_max": 42
                        },
                        "8": {
                            "ap_min": 43,
                            "ap_max": 47
                        },
                        "9": {
                            "ap_min": 48,
                            "ap_max": 52
                        },
                        "10": {
                            "ap_min": 53,
                            "ap_max": 57
                        },
                        "11": {
                            "ap_min": 58,
                            "ap_max": 62
                        },
                        "12": {
                            "ap_min": 63,
                            "ap_max": 67
                        },
                        "13": {
                            "ap_min": 68,
                            "ap_max": 72
                        },
                        "14": {
                            "ap_min": 73,
                            "ap_max": 77
                        },
                        "15": {
                            "ap_min": 78,
                            "ap_max": 82
                        },
                        "16": {
                            "ap_min": 86,
                            "ap_max": 90
                        },
                        "17": {
                            "ap_min": 94,
                            "ap_max": 98
                        },
                        "18": {
                            "ap_min": 106,
                            "ap_max": 110
                        },
                        "19": {
                            "ap_min": 114,
                            "ap_max": 118
                        },
                        "20": {
                            "ap_min": 122,
                            "ap_max": 126
                        }
                    }
                },
                "Veid Shortsword": {
                    "set": "Veid",
                    "ap_min": 16,
                    "ap_max": 22,
                    "rarity": "epic",
                    "gems": 2,
                    "item_effects": {
                        "acc": 5,
                        "special": "Enhancement Limit increase"
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 20,
                            "ap_max": 26
                        },
                        "2": {
                            "ap_min": 23,
                            "ap_max": 29
                        },
                        "3": {
                            "ap_min": 26,
                            "ap_max": 32
                        },
                        "4": {
                            "ap_min": 28,
                            "ap_max": 34
                        },
                        "5": {
                            "ap_min": 30,
                            "ap_max": 36
                        },
                        "6": {
                            "ap_min": 33,
                            "ap_max": 39
                        },
                        "7": {
                            "ap_min": 36,
                            "ap_max": 42
                        },
                        "8": {
                            "ap_min": 40,
                            "ap_max": 46
                        },
                        "9": {
                            "ap_min": 44,
                            "ap_max": 50
                        },
                        "10": {
                            "ap_min": 48,
                            "ap_max": 54
                        },
                        "11": {
                            "ap_min": 52,
                            "ap_max": 58
                        },
                        "12": {
                            "ap_min": 56,
                            "ap_max": 62
                        },
                        "13": {
                            "ap_min": 60,
                            "ap_max": 66
                        },
                        "14": {
                            "ap_min": 64,
                            "ap_max": 70
                        },
                        "15": {
                            "ap_min": 68,
                            "ap_max": 74
                        },
                        "16": {
                            "ap_min": 72,
                            "ap_max": 78
                        },
                        "17": {
                            "ap_min": 76,
                            "ap_max": 82
                        },
                        "18": {
                            "ap_min": 88,
                            "ap_max": 94
                        },
                        "19": {
                            "ap_min": 92,
                            "ap_max": 98
                        },
                        "20": {
                            "ap_min": 96,
                            "ap_max": 102
                        }
                    }
                },
                "Kzarka Shortsword": {
                    "set": "Kzarka",
                    "ap_min": 18,
                    "ap_max": 22,
                    "rarity": "epic",
                    "gems": 2,
                    "item_effects": {
                        "as": 3
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 22,
                            "ap_max": 26
                        },
                        "2": {
                            "ap_min": 25,
                            "ap_max": 29
                        },
                        "3": {
                            "ap_min": 28,
                            "ap_max": 32
                        },
                        "4": {
                            "ap_min": 30,
                            "ap_max": 34
                        },
                        "5": {
                            "ap_min": 32,
                            "ap_max": 36
                        },
                        "6": {
                            "ap_min": 35,
                            "ap_max": 39
                        },
                        "7": {
                            "ap_min": 38,
                            "ap_max": 42
                        },
                        "8": {
                            "ap_min": 43,
                            "ap_max": 47
                        },
                        "9": {
                            "ap_min": 48,
                            "ap_max": 52
                        },
                        "10": {
                            "ap_min": 53,
                            "ap_max": 57
                        },
                        "11": {
                            "ap_min": 58,
                            "ap_max": 62
                        },
                        "12": {
                            "ap_min": 63,
                            "ap_max": 67
                        },
                        "13": {
                            "ap_min": 68,
                            "ap_max": 72
                        },
                        "14": {
                            "ap_min": 73,
                            "ap_max": 77
                        },
                        "15": {
                            "ap_min": 78,
                            "ap_max": 82
                        },
                        "16": {
                            "ap_min": 86,
                            "ap_max": 90
                        },
                        "17": {
                            "ap_min": 94,
                            "ap_max": 98
                        },
                        "18": {
                            "ap_min": 106,
                            "ap_max": 110
                        },
                        "19": {
                            "ap_min": 114,
                            "ap_max": 118
                        },
                        "20": {
                            "ap_min": 122,
                            "ap_max": 126
                        }
                    }
                }
            },
            "valkyrie" :{
                "Yuria Longsword": {
                    "set": "Yuria",
                    "ap_min": 16,
                    "ap_max": 21,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {
                        "dmgth": 5
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 20,
                            "ap_max": 25
                        },
                        "2": {
                            "ap_min": 23,
                            "ap_max": 28
                        },
                        "3": {
                            "ap_min": 26,
                            "ap_max": 31
                        },
                        "4": {
                            "ap_min": 28,
                            "ap_max": 33
                        },
                        "5": {
                            "ap_min": 30,
                            "ap_max": 35
                        },
                        "6": {
                            "ap_min": 33,
                            "ap_max": 38
                        },
                        "7": {
                            "ap_min": 36,
                            "ap_max": 41
                        },
                        "8": {
                            "ap_min": 40,
                            "ap_max": 45
                        },
                        "9": {
                            "ap_min": 44,
                            "ap_max": 49
                        },
                        "10": {
                            "ap_min": 48,
                            "ap_max": 53
                        },
                        "11": {
                            "ap_min": 52,
                            "ap_max": 57
                        },
                        "12": {
                            "ap_min": 56,
                            "ap_max": 61
                        },
                        "13": {
                            "ap_min": 60,
                            "ap_max": 65
                        },
                        "14": {
                            "ap_min": 64,
                            "ap_max": 69
                        },
                        "15": {
                            "ap_min": 68,
                            "ap_max": 73
                        },
                        "16": {
                            "ap_min": 76,
                            "ap_max": 81
                        },
                        "17": {
                            "ap_min": 84,
                            "ap_max": 89
                        },
                        "18": {
                            "ap_min": 96,
                            "ap_max": 101
                        },
                        "19": {
                            "ap_min": 104,
                            "ap_max": 109
                        },
                        "20": {
                            "ap_min": 112,
                            "ap_max": 117
                        }
                    }
                },
                "Styd Longsword": {
                    "set": "Styd",
                    "ap_min": 18,
                    "ap_max": 22,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {},
                    "enhancement_text": "",
                    "enhancement": {}
                },
                "Seleth Longsword": {
                    "set": "Seleth",
                    "ap_min": 16,
                    "ap_max": 21,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {
                        "dmgth": 10
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 14,
                            "ap_max": 18
                        },
                        "2": {
                            "ap_min": 17,
                            "ap_max": 21
                        },
                        "3": {
                            "ap_min": 20,
                            "ap_max": 24
                        },
                        "4": {
                            "ap_min": 22,
                            "ap_max": 26
                        },
                        "5": {
                            "ap_min": 24,
                            "ap_max": 28
                        },
                        "6": {
                            "ap_min": 27,
                            "ap_max": 31
                        },
                        "7": {
                            "ap_min": 30,
                            "ap_max": 34
                        },
                        "8": {
                            "ap_min": 34,
                            "ap_max": 38
                        },
                        "9": {
                            "ap_min": 38,
                            "ap_max": 42
                        },
                        "10": {
                            "ap_min": 42,
                            "ap_max": 46
                        },
                        "11": {
                            "ap_min": 46,
                            "ap_max": 50
                        },
                        "12": {
                            "ap_min": 50,
                            "ap_max": 54
                        },
                        "13": {
                            "ap_min": 54,
                            "ap_max": 58
                        },
                        "14": {
                            "ap_min": 58,
                            "ap_max": 62
                        },
                        "15": {
                            "ap_min": 62,
                            "ap_max": 66
                        },
                        "16": {
                            "ap_min": 70,
                            "ap_max": 74
                        },
                        "17": {
                            "ap_min": 78,
                            "ap_max": 82
                        },
                        "18": {
                            "ap_min": 90,
                            "ap_max": 94
                        },
                        "19": {
                            "ap_min": 98,
                            "ap_max": 102
                        },
                        "20": {
                            "ap_min": 106,
                            "ap_max": 110
                        }
                    }
                },
                "Rosar Longsword": {
                    "set": "Rosar",
                    "ap_min": 17,
                    "ap_max": 22,
                    "rarity": "uncommon",
                    "gems": 2,
                    "item_effects": {},
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 21,
                            "ap_max": 26
                        },
                        "2": {
                            "ap_min": 24,
                            "ap_max": 29
                        },
                        "3": {
                            "ap_min": 27,
                            "ap_max": 32
                        },
                        "4": {
                            "ap_min": 29,
                            "ap_max": 34
                        },
                        "5": {
                            "ap_min": 31,
                            "ap_max": 36
                        },
                        "6": {
                            "ap_min": 34,
                            "ap_max": 39
                        },
                        "7": {
                            "ap_min": 37,
                            "ap_max": 42
                        },
                        "8": {
                            "ap_min": 41,
                            "ap_max": 46
                        },
                        "9": {
                            "ap_min": 45,
                            "ap_max": 50
                        },
                        "10": {
                            "ap_min": 49,
                            "ap_max": 54
                        },
                        "11": {
                            "ap_min": 53,
                            "ap_max": 58
                        },
                        "12": {
                            "ap_min": 57,
                            "ap_max": 62
                        },
                        "13": {
                            "ap_min": 61,
                            "ap_max": 66
                        },
                        "14": {
                            "ap_min": 65,
                            "ap_max": 70
                        },
                        "15": {
                            "ap_min": 69,
                            "ap_max": 74
                        },
                        "16": {
                            "ap_min": 77,
                            "ap_max": 82
                        },
                        "17": {
                            "ap_min": 85,
                            "ap_max": 90
                        },
                        "18": {
                            "ap_min": 97,
                            "ap_max": 102
                        },
                        "19": {
                            "ap_min": 105,
                            "ap_max": 110
                        },
                        "20": {
                            "ap_min": 113,
                            "ap_max": 118
                        }
                    }
                },
                "Raell Longsword": {
                    "set": "Raell",
                    "ap_min": 14,
                    "ap_max": 18,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {
                        "dmgaes": 5,
                        "acc": 3,
                        "hp": -100,
                        "special": "Max HP -100 & 5% chance to regain 10 HP on attack."
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 18,
                            "ap_max": 22
                        },
                        "2": {
                            "ap_min": 21,
                            "ap_max": 25
                        },
                        "3": {
                            "ap_min": 24,
                            "ap_max": 28
                        },
                        "4": {
                            "ap_min": 26,
                            "ap_max": 30
                        },
                        "5": {
                            "ap_min": 28,
                            "ap_max": 32
                        },
                        "6": {
                            "ap_min": 31,
                            "ap_max": 35
                        },
                        "7": {
                            "ap_min": 34,
                            "ap_max": 38
                        },
                        "8": {
                            "ap_min": 38,
                            "ap_max": 42
                        },
                        "9": {
                            "ap_min": 42,
                            "ap_max": 46
                        },
                        "10": {
                            "ap_min": 46,
                            "ap_max": 50
                        },
                        "11": {
                            "ap_min": 50,
                            "ap_max": 54
                        },
                        "12": {
                            "ap_min": 54,
                            "ap_max": 58
                        },
                        "13": {
                            "ap_min": 58,
                            "ap_max": 62
                        },
                        "14": {
                            "ap_min": 62,
                            "ap_max": 66
                        },
                        "15": {
                            "ap_min": 66,
                            "ap_max": 70
                        },
                        "16": {
                            "ap_min": 74,
                            "ap_max": 78
                        },
                        "17": {
                            "ap_min": 82,
                            "ap_max": 86
                        },
                        "18": {
                            "ap_min": 94,
                            "ap_max": 98
                        },
                        "19": {
                            "ap_min": 102,
                            "ap_max": 106
                        },
                        "20": {
                            "ap_min": 110,
                            "ap_max": 114
                        }
                    }
                },
                "Krea Longsword": {
                    "set": "Krea",
                    "ap_min": 17,
                    "ap_max": 19,
                    "rarity": "uncommon",
                    "gems": 2,
                    "item_effects": {},
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 21,
                            "ap_max": 23
                        },
                        "2": {
                            "ap_min": 24,
                            "ap_max": 26
                        },
                        "3": {
                            "ap_min": 27,
                            "ap_max": 29
                        },
                        "4": {
                            "ap_min": 29,
                            "ap_max": 31
                        },
                        "5": {
                            "ap_min": 31,
                            "ap_max": 33
                        },
                        "6": {
                            "ap_min": 34,
                            "ap_max": 36
                        },
                        "7": {
                            "ap_min": 37,
                            "ap_max": 39
                        },
                        "8": {
                            "ap_min": 41,
                            "ap_max": 43
                        },
                        "9": {
                            "ap_min": 45,
                            "ap_max": 47
                        },
                        "10": {
                            "ap_min": 49,
                            "ap_max": 51
                        },
                        "11": {
                            "ap_min": 53,
                            "ap_max": 55
                        },
                        "12": {
                            "ap_min": 57,
                            "ap_max": 59
                        },
                        "13": {
                            "ap_min": 61,
                            "ap_max": 63
                        },
                        "14": {
                            "ap_min": 65,
                            "ap_max": 67
                        },
                        "15": {
                            "ap_min": 69,
                            "ap_max": 71
                        },
                        "16": {
                            "ap_min": 77,
                            "ap_max": 79
                        },
                        "17": {
                            "ap_min": 85,
                            "ap_max": 87
                        },
                        "18": {
                            "ap_min": 97,
                            "ap_max": 99
                        },
                        "19": {
                            "ap_min": 105,
                            "ap_max": 107
                        },
                        "20": {
                            "ap_min": 113,
                            "ap_max": 115
                        }
                    }
                },
                "Kalis Longsword": {
                    "set": "Kalis",
                    "ap_min": 13,
                    "ap_max": 27,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {},
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 17,
                            "ap_max": 31
                        },
                        "2": {
                            "ap_min": 20,
                            "ap_max": 34
                        },
                        "3": {
                            "ap_min": 23,
                            "ap_max": 37
                        },
                        "4": {
                            "ap_min": 25,
                            "ap_max": 39
                        },
                        "5": {
                            "ap_min": 27,
                            "ap_max": 41
                        },
                        "6": {
                            "ap_min": 30,
                            "ap_max": 44
                        },
                        "7": {
                            "ap_min": 33,
                            "ap_max": 47
                        },
                        "8": {
                            "ap_min": 37,
                            "ap_max": 51
                        },
                        "9": {
                            "ap_min": 41,
                            "ap_max": 55
                        },
                        "10": {
                            "ap_min": 45,
                            "ap_max": 59
                        },
                        "11": {
                            "ap_min": 49,
                            "ap_max": 63
                        },
                        "12": {
                            "ap_min": 53,
                            "ap_max": 67
                        },
                        "13": {
                            "ap_min": 57,
                            "ap_max": 71
                        },
                        "14": {
                            "ap_min": 61,
                            "ap_max": 75
                        },
                        "15": {
                            "ap_min": 65,
                            "ap_max": 79
                        },
                        "16": {
                            "ap_min": 73,
                            "ap_max": 87
                        },
                        "17": {
                            "ap_min": 81,
                            "ap_max": 95
                        },
                        "18": {
                            "ap_min": 93,
                            "ap_max": 107
                        },
                        "19": {
                            "ap_min": 101,
                            "ap_max": 115
                        },
                        "20": {
                            "ap_min": 109,
                            "ap_max": 123
                        }
                    }
                },
                "Elsh Longsword": {
                    "set": "Elsh",
                    "ap_min": 10,
                    "ap_max": 14,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {
                        "dmgaes": 5,
                        "acc": 3,
                        "wgt": -25,
                        "special": "Weight Limit -25 LT & 5% chance to heal 5 HP on attack."
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 14,
                            "ap_max": 18
                        },
                        "2": {
                            "ap_min": 17,
                            "ap_max": 21
                        },
                        "3": {
                            "ap_min": 20,
                            "ap_max": 24
                        },
                        "4": {
                            "ap_min": 22,
                            "ap_max": 26
                        },
                        "5": {
                            "ap_min": 24,
                            "ap_max": 28
                        },
                        "6": {
                            "ap_min": 27,
                            "ap_max": 31
                        },
                        "7": {
                            "ap_min": 30,
                            "ap_max": 34
                        },
                        "8": {
                            "ap_min": 34,
                            "ap_max": 38
                        },
                        "9": {
                            "ap_min": 38,
                            "ap_max": 42
                        },
                        "10": {
                            "ap_min": 42,
                            "ap_max": 46
                        },
                        "11": {
                            "ap_min": 46,
                            "ap_max": 50
                        },
                        "12": {
                            "ap_min": 50,
                            "ap_max": 54
                        },
                        "13": {
                            "ap_min": 54,
                            "ap_max": 58
                        },
                        "14": {
                            "ap_min": 58,
                            "ap_max": 62
                        },
                        "15": {
                            "ap_min": 62,
                            "ap_max": 66
                        },
                        "16": {
                            "ap_min": 70,
                            "ap_max": 74
                        },
                        "17": {
                            "ap_min": 78,
                            "ap_max": 82
                        },
                        "18": {
                            "ap_min": 90,
                            "ap_max": 94
                        },
                        "19": {
                            "ap_min": 98,
                            "ap_max": 102
                        },
                        "20": {
                            "ap_min": 106,
                            "ap_max": 110
                        }
                    }
                },
                "Demihuman Longsword": {
                    "set": "Demihuman",
                    "ap_min": 10,
                    "ap_max": 14,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {
                        "dmgtdh": 10
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 14,
                            "ap_max": 18
                        },
                        "2": {
                            "ap_min": 17,
                            "ap_max": 21
                        },
                        "3": {
                            "ap_min": 20,
                            "ap_max": 24
                        },
                        "4": {
                            "ap_min": 22,
                            "ap_max": 26
                        },
                        "5": {
                            "ap_min": 24,
                            "ap_max": 28
                        },
                        "6": {
                            "ap_min": 27,
                            "ap_max": 31
                        },
                        "7": {
                            "ap_min": 30,
                            "ap_max": 34
                        },
                        "8": {
                            "ap_min": 34,
                            "ap_max": 38
                        },
                        "9": {
                            "ap_min": 38,
                            "ap_max": 42
                        },
                        "10": {
                            "ap_min": 42,
                            "ap_max": 46
                        },
                        "11": {
                            "ap_min": 46,
                            "ap_max": 50
                        },
                        "12": {
                            "ap_min": 50,
                            "ap_max": 54
                        },
                        "13": {
                            "ap_min": 54,
                            "ap_max": 58
                        },
                        "14": {
                            "ap_min": 58,
                            "ap_max": 62
                        },
                        "15": {
                            "ap_min": 62,
                            "ap_max": 66
                        },
                        "16": {
                            "ap_min": 70,
                            "ap_max": 74
                        },
                        "17": {
                            "ap_min": 78,
                            "ap_max": 82
                        },
                        "18": {
                            "ap_min": 90,
                            "ap_max": 94
                        },
                        "19": {
                            "ap_min": 98,
                            "ap_max": 102
                        },
                        "20": {
                            "ap_min": 106,
                            "ap_max": 110
                        }
                    }
                },
                "Basteer Longsword": {
                    "set": "Basteer",
                    "ap_min": 20,
                    "ap_max": 24,
                    "rarity": "uncommon",
                    "gems": 2,
                    "item_effects": {},
                    "enhancement_text": "",
                    "enhancement": {}
                },
                "Bares Longsword": {
                    "set": "Bares",
                    "ap_min": 11,
                    "ap_max": 15,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {
                        "dmgaes": 5
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 15,
                            "ap_max": 19
                        },
                        "2": {
                            "ap_min": 18,
                            "ap_max": 22
                        },
                        "3": {
                            "ap_min": 21,
                            "ap_max": 25
                        },
                        "4": {
                            "ap_min": 23,
                            "ap_max": 27
                        },
                        "5": {
                            "ap_min": 25,
                            "ap_max": 29
                        },
                        "6": {
                            "ap_min": 28,
                            "ap_max": 32
                        },
                        "7": {
                            "ap_min": 31,
                            "ap_max": 35
                        },
                        "8": {
                            "ap_min": 35,
                            "ap_max": 39
                        },
                        "9": {
                            "ap_min": 39,
                            "ap_max": 43
                        },
                        "10": {
                            "ap_min": 43,
                            "ap_max": 47
                        },
                        "11": {
                            "ap_min": 47,
                            "ap_max": 51
                        },
                        "12": {
                            "ap_min": 51,
                            "ap_max": 55
                        },
                        "13": {
                            "ap_min": 55,
                            "ap_max": 59
                        },
                        "14": {
                            "ap_min": 59,
                            "ap_max": 63
                        },
                        "15": {
                            "ap_min": 63,
                            "ap_max": 67
                        },
                        "16": {
                            "ap_min": 71,
                            "ap_max": 75
                        },
                        "17": {
                            "ap_min": 79,
                            "ap_max": 83
                        },
                        "18": {
                            "ap_min": 91,
                            "ap_max": 95
                        },
                        "19": {
                            "ap_min": 99,
                            "ap_max": 103
                        },
                        "20": {
                            "ap_min": 107,
                            "ap_max": 111
                        }
                    }
                },
                "Azwell Longsword": {
                    "set": "Azwell",
                    "ap_min": 14,
                    "ap_max": 18,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {
                        "acc": 5,
                        "special": "AP does not decrease in the rain."
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 18,
                            "ap_max": 22
                        },
                        "2": {
                            "ap_min": 21,
                            "ap_max": 25
                        },
                        "3": {
                            "ap_min": 24,
                            "ap_max": 28
                        },
                        "4": {
                            "ap_min": 26,
                            "ap_max": 30
                        },
                        "5": {
                            "ap_min": 28,
                            "ap_max": 32
                        },
                        "6": {
                            "ap_min": 31,
                            "ap_max": 35
                        },
                        "7": {
                            "ap_min": 34,
                            "ap_max": 38
                        },
                        "8": {
                            "ap_min": 38,
                            "ap_max": 42
                        },
                        "9": {
                            "ap_min": 42,
                            "ap_max": 46
                        },
                        "10": {
                            "ap_min": 46,
                            "ap_max": 50
                        },
                        "11": {
                            "ap_min": 50,
                            "ap_max": 54
                        },
                        "12": {
                            "ap_min": 54,
                            "ap_max": 58
                        },
                        "13": {
                            "ap_min": 58,
                            "ap_max": 62
                        },
                        "14": {
                            "ap_min": 62,
                            "ap_max": 66
                        },
                        "15": {
                            "ap_min": 66,
                            "ap_max": 70
                        },
                        "16": {
                            "ap_min": 74,
                            "ap_max": 78
                        },
                        "17": {
                            "ap_min": 82,
                            "ap_max": 86
                        },
                        "18": {
                            "ap_min": 94,
                            "ap_max": 98
                        },
                        "19": {
                            "ap_min": 102,
                            "ap_max": 106
                        },
                        "20": {
                            "ap_min": 110,
                            "ap_max": 114
                        }
                    }
                },
                "Liverto Longsword": {
                    "set": "Liverto",
                    "ap_min": 18,
                    "ap_max": 22,
                    "rarity": "rare",
                    "gems": 2,
                    "item_effects": {
                        "chr": 3
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 22,
                            "ap_max": 26
                        },
                        "2": {
                            "ap_min": 25,
                            "ap_max": 29
                        },
                        "3": {
                            "ap_min": 28,
                            "ap_max": 32
                        },
                        "4": {
                            "ap_min": 30,
                            "ap_max": 34
                        },
                        "5": {
                            "ap_min": 32,
                            "ap_max": 36
                        },
                        "6": {
                            "ap_min": 35,
                            "ap_max": 39
                        },
                        "7": {
                            "ap_min": 38,
                            "ap_max": 42
                        },
                        "8": {
                            "ap_min": 43,
                            "ap_max": 47
                        },
                        "9": {
                            "ap_min": 48,
                            "ap_max": 52
                        },
                        "10": {
                            "ap_min": 53,
                            "ap_max": 57
                        },
                        "11": {
                            "ap_min": 58,
                            "ap_max": 62
                        },
                        "12": {
                            "ap_min": 63,
                            "ap_max": 67
                        },
                        "13": {
                            "ap_min": 68,
                            "ap_max": 72
                        },
                        "14": {
                            "ap_min": 73,
                            "ap_max": 77
                        },
                        "15": {
                            "ap_min": 78,
                            "ap_max": 82
                        },
                        "16": {
                            "ap_min": 86,
                            "ap_max": 90
                        },
                        "17": {
                            "ap_min": 94,
                            "ap_max": 98
                        },
                        "18": {
                            "ap_min": 106,
                            "ap_max": 110
                        },
                        "19": {
                            "ap_min": 114,
                            "ap_max": 118
                        },
                        "20": {
                            "ap_min": 122,
                            "ap_max": 126
                        }
                    }
                },
                "Veid Longsword": {
                    "set": "Veid",
                    "ap_min": 16,
                    "ap_max": 22,
                    "rarity": "epic",
                    "gems": 2,
                    "item_effects": {
                        "acc": 5,
                        "special": "Enhancement Limit increase"
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 20,
                            "ap_max": 26
                        },
                        "2": {
                            "ap_min": 23,
                            "ap_max": 29
                        },
                        "3": {
                            "ap_min": 26,
                            "ap_max": 32
                        },
                        "4": {
                            "ap_min": 28,
                            "ap_max": 34
                        },
                        "5": {
                            "ap_min": 30,
                            "ap_max": 36
                        },
                        "6": {
                            "ap_min": 33,
                            "ap_max": 39
                        },
                        "7": {
                            "ap_min": 36,
                            "ap_max": 42
                        },
                        "8": {
                            "ap_min": 40,
                            "ap_max": 46
                        },
                        "9": {
                            "ap_min": 44,
                            "ap_max": 50
                        },
                        "10": {
                            "ap_min": 48,
                            "ap_max": 54
                        },
                        "11": {
                            "ap_min": 52,
                            "ap_max": 58
                        },
                        "12": {
                            "ap_min": 56,
                            "ap_max": 62
                        },
                        "13": {
                            "ap_min": 60,
                            "ap_max": 66
                        },
                        "14": {
                            "ap_min": 64,
                            "ap_max": 70
                        },
                        "15": {
                            "ap_min": 68,
                            "ap_max": 74
                        },
                        "16": {
                            "ap_min": 72,
                            "ap_max": 78
                        },
                        "17": {
                            "ap_min": 76,
                            "ap_max": 82
                        },
                        "18": {
                            "ap_min": 88,
                            "ap_max": 94
                        },
                        "19": {
                            "ap_min": 92,
                            "ap_max": 98
                        },
                        "20": {
                            "ap_min": 96,
                            "ap_max": 102
                        }
                    }
                },
                "Kzarka Longsword": {
                    "set": "Kzarka",
                    "ap_min": 18,
                    "ap_max": 22,
                    "rarity": "epic",
                    "gems": 2,
                    "item_effects": {
                        "as": 3,
                        "cs": 3
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 22,
                            "ap_max": 26
                        },
                        "2": {
                            "ap_min": 25,
                            "ap_max": 29
                        },
                        "3": {
                            "ap_min": 28,
                            "ap_max": 32
                        },
                        "4": {
                            "ap_min": 30,
                            "ap_max": 34
                        },
                        "5": {
                            "ap_min": 32,
                            "ap_max": 36
                        },
                        "6": {
                            "ap_min": 35,
                            "ap_max": 39
                        },
                        "7": {
                            "ap_min": 38,
                            "ap_max": 42
                        },
                        "8": {
                            "ap_min": 43,
                            "ap_max": 47
                        },
                        "9": {
                            "ap_min": 48,
                            "ap_max": 52
                        },
                        "10": {
                            "ap_min": 53,
                            "ap_max": 57
                        },
                        "11": {
                            "ap_min": 58,
                            "ap_max": 62
                        },
                        "12": {
                            "ap_min": 63,
                            "ap_max": 67
                        },
                        "13": {
                            "ap_min": 68,
                            "ap_max": 72
                        },
                        "14": {
                            "ap_min": 73,
                            "ap_max": 77
                        },
                        "15": {
                            "ap_min": 78,
                            "ap_max": 82
                        },
                        "16": {
                            "ap_min": 86,
                            "ap_max": 90
                        },
                        "17": {
                            "ap_min": 94,
                            "ap_max": 98
                        },
                        "18": {
                            "ap_min": 106,
                            "ap_max": 110
                        },
                        "19": {
                            "ap_min": 114,
                            "ap_max": 118
                        },
                        "20": {
                            "ap_min": 122,
                            "ap_max": 126
                        }
                    }
                }
            },
            "witch" :{
                "Yuria Staff": {
                    "set": "Yuria",
                    "ap_min": 16,
                    "ap_max": 21,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {
                        "dmgth": 5
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 20,
                            "ap_max": 25
                        },
                        "2": {
                            "ap_min": 23,
                            "ap_max": 28
                        },
                        "3": {
                            "ap_min": 26,
                            "ap_max": 31
                        },
                        "4": {
                            "ap_min": 28,
                            "ap_max": 33
                        },
                        "5": {
                            "ap_min": 30,
                            "ap_max": 35
                        },
                        "6": {
                            "ap_min": 33,
                            "ap_max": 38
                        },
                        "7": {
                            "ap_min": 36,
                            "ap_max": 41
                        },
                        "8": {
                            "ap_min": 40,
                            "ap_max": 45
                        },
                        "9": {
                            "ap_min": 44,
                            "ap_max": 49
                        },
                        "10": {
                            "ap_min": 48,
                            "ap_max": 53
                        },
                        "11": {
                            "ap_min": 52,
                            "ap_max": 57
                        },
                        "12": {
                            "ap_min": 56,
                            "ap_max": 61
                        },
                        "13": {
                            "ap_min": 60,
                            "ap_max": 65
                        },
                        "14": {
                            "ap_min": 64,
                            "ap_max": 69
                        },
                        "15": {
                            "ap_min": 68,
                            "ap_max": 73
                        },
                        "16": {
                            "ap_min": 76,
                            "ap_max": 81
                        },
                        "17": {
                            "ap_min": 84,
                            "ap_max": 89
                        },
                        "18": {
                            "ap_min": 96,
                            "ap_max": 101
                        },
                        "19": {
                            "ap_min": 104,
                            "ap_max": 109
                        },
                        "20": {
                            "ap_min": 112,
                            "ap_max": 117
                        }
                    }
                },
                "Styd Staff": {
                    "set": "Styd",
                    "ap_min": 18,
                    "ap_max": 22,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {},
                    "enhancement_text": "",
                    "enhancement": {}
                },
                "Seleth Staff": {
                    "set": "Seleth",
                    "ap_min": 16,
                    "ap_max": 21,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {
                        "dmgth": 10
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 14,
                            "ap_max": 18
                        },
                        "2": {
                            "ap_min": 17,
                            "ap_max": 21
                        },
                        "3": {
                            "ap_min": 20,
                            "ap_max": 24
                        },
                        "4": {
                            "ap_min": 22,
                            "ap_max": 26
                        },
                        "5": {
                            "ap_min": 24,
                            "ap_max": 28
                        },
                        "6": {
                            "ap_min": 27,
                            "ap_max": 31
                        },
                        "7": {
                            "ap_min": 30,
                            "ap_max": 34
                        },
                        "8": {
                            "ap_min": 34,
                            "ap_max": 38
                        },
                        "9": {
                            "ap_min": 38,
                            "ap_max": 42
                        },
                        "10": {
                            "ap_min": 42,
                            "ap_max": 46
                        },
                        "11": {
                            "ap_min": 46,
                            "ap_max": 50
                        },
                        "12": {
                            "ap_min": 50,
                            "ap_max": 54
                        },
                        "13": {
                            "ap_min": 54,
                            "ap_max": 58
                        },
                        "14": {
                            "ap_min": 58,
                            "ap_max": 62
                        },
                        "15": {
                            "ap_min": 62,
                            "ap_max": 66
                        },
                        "16": {
                            "ap_min": 70,
                            "ap_max": 74
                        },
                        "17": {
                            "ap_min": 78,
                            "ap_max": 82
                        },
                        "18": {
                            "ap_min": 90,
                            "ap_max": 94
                        },
                        "19": {
                            "ap_min": 98,
                            "ap_max": 102
                        },
                        "20": {
                            "ap_min": 106,
                            "ap_max": 110
                        }
                    }
                },
                "Rosar Staff": {
                    "set": "Rosar",
                    "ap_min": 17,
                    "ap_max": 22,
                    "rarity": "uncommon",
                    "gems": 2,
                    "item_effects": {},
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 21,
                            "ap_max": 26
                        },
                        "2": {
                            "ap_min": 24,
                            "ap_max": 29
                        },
                        "3": {
                            "ap_min": 27,
                            "ap_max": 32
                        },
                        "4": {
                            "ap_min": 29,
                            "ap_max": 34
                        },
                        "5": {
                            "ap_min": 31,
                            "ap_max": 36
                        },
                        "6": {
                            "ap_min": 34,
                            "ap_max": 39
                        },
                        "7": {
                            "ap_min": 37,
                            "ap_max": 42
                        },
                        "8": {
                            "ap_min": 41,
                            "ap_max": 46
                        },
                        "9": {
                            "ap_min": 45,
                            "ap_max": 50
                        },
                        "10": {
                            "ap_min": 49,
                            "ap_max": 54
                        },
                        "11": {
                            "ap_min": 53,
                            "ap_max": 58
                        },
                        "12": {
                            "ap_min": 57,
                            "ap_max": 62
                        },
                        "13": {
                            "ap_min": 61,
                            "ap_max": 66
                        },
                        "14": {
                            "ap_min": 65,
                            "ap_max": 70
                        },
                        "15": {
                            "ap_min": 69,
                            "ap_max": 74
                        },
                        "16": {
                            "ap_min": 77,
                            "ap_max": 82
                        },
                        "17": {
                            "ap_min": 85,
                            "ap_max": 90
                        },
                        "18": {
                            "ap_min": 97,
                            "ap_max": 102
                        },
                        "19": {
                            "ap_min": 105,
                            "ap_max": 110
                        },
                        "20": {
                            "ap_min": 113,
                            "ap_max": 118
                        }
                    }
                },
                "Raell Staff": {
                    "set": "Raell",
                    "ap_min": 14,
                    "ap_max": 18,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {
                        "dmgaes": 5,
                        "acc": 3,
                        "hp": -100,
                        "special": "Max HP -100 & 5% chance to regain 10 HP on attack."
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 18,
                            "ap_max": 22
                        },
                        "2": {
                            "ap_min": 21,
                            "ap_max": 25
                        },
                        "3": {
                            "ap_min": 24,
                            "ap_max": 28
                        },
                        "4": {
                            "ap_min": 26,
                            "ap_max": 30
                        },
                        "5": {
                            "ap_min": 28,
                            "ap_max": 32
                        },
                        "6": {
                            "ap_min": 31,
                            "ap_max": 35
                        },
                        "7": {
                            "ap_min": 34,
                            "ap_max": 38
                        },
                        "8": {
                            "ap_min": 38,
                            "ap_max": 42
                        },
                        "9": {
                            "ap_min": 42,
                            "ap_max": 46
                        },
                        "10": {
                            "ap_min": 46,
                            "ap_max": 50
                        },
                        "11": {
                            "ap_min": 50,
                            "ap_max": 54
                        },
                        "12": {
                            "ap_min": 54,
                            "ap_max": 58
                        },
                        "13": {
                            "ap_min": 58,
                            "ap_max": 62
                        },
                        "14": {
                            "ap_min": 62,
                            "ap_max": 66
                        },
                        "15": {
                            "ap_min": 66,
                            "ap_max": 70
                        },
                        "16": {
                            "ap_min": 74,
                            "ap_max": 78
                        },
                        "17": {
                            "ap_min": 82,
                            "ap_max": 86
                        },
                        "18": {
                            "ap_min": 94,
                            "ap_max": 98
                        },
                        "19": {
                            "ap_min": 102,
                            "ap_max": 106
                        },
                        "20": {
                            "ap_min": 110,
                            "ap_max": 114
                        }
                    }
                },
                "Krea Staff": {
                    "set": "Krea",
                    "ap_min": 17,
                    "ap_max": 19,
                    "rarity": "uncommon",
                    "gems": 2,
                    "item_effects": {},
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 21,
                            "ap_max": 23
                        },
                        "2": {
                            "ap_min": 24,
                            "ap_max": 26
                        },
                        "3": {
                            "ap_min": 27,
                            "ap_max": 29
                        },
                        "4": {
                            "ap_min": 29,
                            "ap_max": 31
                        },
                        "5": {
                            "ap_min": 31,
                            "ap_max": 33
                        },
                        "6": {
                            "ap_min": 34,
                            "ap_max": 36
                        },
                        "7": {
                            "ap_min": 37,
                            "ap_max": 39
                        },
                        "8": {
                            "ap_min": 41,
                            "ap_max": 43
                        },
                        "9": {
                            "ap_min": 45,
                            "ap_max": 47
                        },
                        "10": {
                            "ap_min": 49,
                            "ap_max": 51
                        },
                        "11": {
                            "ap_min": 53,
                            "ap_max": 55
                        },
                        "12": {
                            "ap_min": 57,
                            "ap_max": 59
                        },
                        "13": {
                            "ap_min": 61,
                            "ap_max": 63
                        },
                        "14": {
                            "ap_min": 65,
                            "ap_max": 67
                        },
                        "15": {
                            "ap_min": 69,
                            "ap_max": 71
                        },
                        "16": {
                            "ap_min": 77,
                            "ap_max": 79
                        },
                        "17": {
                            "ap_min": 85,
                            "ap_max": 87
                        },
                        "18": {
                            "ap_min": 97,
                            "ap_max": 99
                        },
                        "19": {
                            "ap_min": 105,
                            "ap_max": 107
                        },
                        "20": {
                            "ap_min": 113,
                            "ap_max": 115
                        }
                    }
                },
                "Kalis Staff": {
                    "set": "Kalis",
                    "ap_min": 13,
                    "ap_max": 27,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {},
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 17,
                            "ap_max": 31
                        },
                        "2": {
                            "ap_min": 20,
                            "ap_max": 34
                        },
                        "3": {
                            "ap_min": 23,
                            "ap_max": 37
                        },
                        "4": {
                            "ap_min": 25,
                            "ap_max": 39
                        },
                        "5": {
                            "ap_min": 27,
                            "ap_max": 41
                        },
                        "6": {
                            "ap_min": 30,
                            "ap_max": 44
                        },
                        "7": {
                            "ap_min": 33,
                            "ap_max": 47
                        },
                        "8": {
                            "ap_min": 37,
                            "ap_max": 51
                        },
                        "9": {
                            "ap_min": 41,
                            "ap_max": 55
                        },
                        "10": {
                            "ap_min": 45,
                            "ap_max": 59
                        },
                        "11": {
                            "ap_min": 49,
                            "ap_max": 63
                        },
                        "12": {
                            "ap_min": 53,
                            "ap_max": 67
                        },
                        "13": {
                            "ap_min": 57,
                            "ap_max": 71
                        },
                        "14": {
                            "ap_min": 61,
                            "ap_max": 75
                        },
                        "15": {
                            "ap_min": 65,
                            "ap_max": 79
                        },
                        "16": {
                            "ap_min": 73,
                            "ap_max": 87
                        },
                        "17": {
                            "ap_min": 81,
                            "ap_max": 95
                        },
                        "18": {
                            "ap_min": 93,
                            "ap_max": 107
                        },
                        "19": {
                            "ap_min": 101,
                            "ap_max": 115
                        },
                        "20": {
                            "ap_min": 109,
                            "ap_max": 123
                        }
                    }
                },
                "Elsh Staff": {
                    "set": "Elsh",
                    "ap_min": 10,
                    "ap_max": 14,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {
                        "dmgaes": 5,
                        "acc": 3,
                        "wgt": -25,
                        "special": "Weight Limit -25 LT & 5% chance to heal 5 HP on attack."
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 14,
                            "ap_max": 18
                        },
                        "2": {
                            "ap_min": 17,
                            "ap_max": 21
                        },
                        "3": {
                            "ap_min": 20,
                            "ap_max": 24
                        },
                        "4": {
                            "ap_min": 22,
                            "ap_max": 26
                        },
                        "5": {
                            "ap_min": 24,
                            "ap_max": 28
                        },
                        "6": {
                            "ap_min": 27,
                            "ap_max": 31
                        },
                        "7": {
                            "ap_min": 30,
                            "ap_max": 34
                        },
                        "8": {
                            "ap_min": 34,
                            "ap_max": 38
                        },
                        "9": {
                            "ap_min": 38,
                            "ap_max": 42
                        },
                        "10": {
                            "ap_min": 42,
                            "ap_max": 46
                        },
                        "11": {
                            "ap_min": 46,
                            "ap_max": 50
                        },
                        "12": {
                            "ap_min": 50,
                            "ap_max": 54
                        },
                        "13": {
                            "ap_min": 54,
                            "ap_max": 58
                        },
                        "14": {
                            "ap_min": 58,
                            "ap_max": 62
                        },
                        "15": {
                            "ap_min": 62,
                            "ap_max": 66
                        },
                        "16": {
                            "ap_min": 70,
                            "ap_max": 74
                        },
                        "17": {
                            "ap_min": 78,
                            "ap_max": 82
                        },
                        "18": {
                            "ap_min": 90,
                            "ap_max": 94
                        },
                        "19": {
                            "ap_min": 98,
                            "ap_max": 102
                        },
                        "20": {
                            "ap_min": 106,
                            "ap_max": 110
                        }
                    }
                },
                "Demihuman Staff": {
                    "set": "Demihuman",
                    "ap_min": 10,
                    "ap_max": 14,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {
                        "dmgtdh": 10
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 14,
                            "ap_max": 18
                        },
                        "2": {
                            "ap_min": 17,
                            "ap_max": 21
                        },
                        "3": {
                            "ap_min": 20,
                            "ap_max": 24
                        },
                        "4": {
                            "ap_min": 22,
                            "ap_max": 26
                        },
                        "5": {
                            "ap_min": 24,
                            "ap_max": 28
                        },
                        "6": {
                            "ap_min": 27,
                            "ap_max": 31
                        },
                        "7": {
                            "ap_min": 30,
                            "ap_max": 34
                        },
                        "8": {
                            "ap_min": 34,
                            "ap_max": 38
                        },
                        "9": {
                            "ap_min": 38,
                            "ap_max": 42
                        },
                        "10": {
                            "ap_min": 42,
                            "ap_max": 46
                        },
                        "11": {
                            "ap_min": 46,
                            "ap_max": 50
                        },
                        "12": {
                            "ap_min": 50,
                            "ap_max": 54
                        },
                        "13": {
                            "ap_min": 54,
                            "ap_max": 58
                        },
                        "14": {
                            "ap_min": 58,
                            "ap_max": 62
                        },
                        "15": {
                            "ap_min": 62,
                            "ap_max": 66
                        },
                        "16": {
                            "ap_min": 70,
                            "ap_max": 74
                        },
                        "17": {
                            "ap_min": 78,
                            "ap_max": 82
                        },
                        "18": {
                            "ap_min": 90,
                            "ap_max": 94
                        },
                        "19": {
                            "ap_min": 98,
                            "ap_max": 102
                        },
                        "20": {
                            "ap_min": 106,
                            "ap_max": 110
                        }
                    }
                },
                "Basteer Staff": {
                    "set": "Basteer",
                    "ap_min": 20,
                    "ap_max": 24,
                    "rarity": "uncommon",
                    "gems": 2,
                    "item_effects": {},
                    "enhancement_text": "",
                    "enhancement": {}
                },
                "Bares Staff": {
                    "set": "Bares",
                    "ap_min": 11,
                    "ap_max": 15,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {
                        "dmgaes": 5
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 15,
                            "ap_max": 19
                        },
                        "2": {
                            "ap_min": 18,
                            "ap_max": 22
                        },
                        "3": {
                            "ap_min": 21,
                            "ap_max": 25
                        },
                        "4": {
                            "ap_min": 23,
                            "ap_max": 27
                        },
                        "5": {
                            "ap_min": 25,
                            "ap_max": 29
                        },
                        "6": {
                            "ap_min": 28,
                            "ap_max": 32
                        },
                        "7": {
                            "ap_min": 31,
                            "ap_max": 35
                        },
                        "8": {
                            "ap_min": 35,
                            "ap_max": 39
                        },
                        "9": {
                            "ap_min": 39,
                            "ap_max": 43
                        },
                        "10": {
                            "ap_min": 43,
                            "ap_max": 47
                        },
                        "11": {
                            "ap_min": 47,
                            "ap_max": 51
                        },
                        "12": {
                            "ap_min": 51,
                            "ap_max": 55
                        },
                        "13": {
                            "ap_min": 55,
                            "ap_max": 59
                        },
                        "14": {
                            "ap_min": 59,
                            "ap_max": 63
                        },
                        "15": {
                            "ap_min": 63,
                            "ap_max": 67
                        },
                        "16": {
                            "ap_min": 71,
                            "ap_max": 75
                        },
                        "17": {
                            "ap_min": 79,
                            "ap_max": 83
                        },
                        "18": {
                            "ap_min": 91,
                            "ap_max": 95
                        },
                        "19": {
                            "ap_min": 99,
                            "ap_max": 103
                        },
                        "20": {
                            "ap_min": 107,
                            "ap_max": 111
                        }
                    }
                },
                "Azwell Staff": {
                    "set": "Azwell",
                    "ap_min": 14,
                    "ap_max": 18,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {
                        "acc": 5,
                        "special": "AP does not decrease in the rain."
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 18,
                            "ap_max": 22
                        },
                        "2": {
                            "ap_min": 21,
                            "ap_max": 25
                        },
                        "3": {
                            "ap_min": 24,
                            "ap_max": 28
                        },
                        "4": {
                            "ap_min": 26,
                            "ap_max": 30
                        },
                        "5": {
                            "ap_min": 28,
                            "ap_max": 32
                        },
                        "6": {
                            "ap_min": 31,
                            "ap_max": 35
                        },
                        "7": {
                            "ap_min": 34,
                            "ap_max": 38
                        },
                        "8": {
                            "ap_min": 38,
                            "ap_max": 42
                        },
                        "9": {
                            "ap_min": 42,
                            "ap_max": 46
                        },
                        "10": {
                            "ap_min": 46,
                            "ap_max": 50
                        },
                        "11": {
                            "ap_min": 50,
                            "ap_max": 54
                        },
                        "12": {
                            "ap_min": 54,
                            "ap_max": 58
                        },
                        "13": {
                            "ap_min": 58,
                            "ap_max": 62
                        },
                        "14": {
                            "ap_min": 62,
                            "ap_max": 66
                        },
                        "15": {
                            "ap_min": 66,
                            "ap_max": 70
                        },
                        "16": {
                            "ap_min": 74,
                            "ap_max": 78
                        },
                        "17": {
                            "ap_min": 82,
                            "ap_max": 86
                        },
                        "18": {
                            "ap_min": 94,
                            "ap_max": 98
                        },
                        "19": {
                            "ap_min": 102,
                            "ap_max": 106
                        },
                        "20": {
                            "ap_min": 110,
                            "ap_max": 114
                        }
                    }
                },
                "Liverto Staff": {
                    "set": "Liverto",
                    "ap_min": 18,
                    "ap_max": 22,
                    "rarity": "rare",
                    "gems": 2,
                    "item_effects": {
                        "chr": 3
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 22,
                            "ap_max": 26
                        },
                        "2": {
                            "ap_min": 25,
                            "ap_max": 29
                        },
                        "3": {
                            "ap_min": 28,
                            "ap_max": 32
                        },
                        "4": {
                            "ap_min": 30,
                            "ap_max": 34
                        },
                        "5": {
                            "ap_min": 32,
                            "ap_max": 36
                        },
                        "6": {
                            "ap_min": 35,
                            "ap_max": 39
                        },
                        "7": {
                            "ap_min": 38,
                            "ap_max": 42
                        },
                        "8": {
                            "ap_min": 43,
                            "ap_max": 47
                        },
                        "9": {
                            "ap_min": 48,
                            "ap_max": 52
                        },
                        "10": {
                            "ap_min": 53,
                            "ap_max": 57
                        },
                        "11": {
                            "ap_min": 58,
                            "ap_max": 62
                        },
                        "12": {
                            "ap_min": 63,
                            "ap_max": 67
                        },
                        "13": {
                            "ap_min": 68,
                            "ap_max": 72
                        },
                        "14": {
                            "ap_min": 73,
                            "ap_max": 77
                        },
                        "15": {
                            "ap_min": 78,
                            "ap_max": 82
                        },
                        "16": {
                            "ap_min": 86,
                            "ap_max": 90
                        },
                        "17": {
                            "ap_min": 94,
                            "ap_max": 98
                        },
                        "18": {
                            "ap_min": 106,
                            "ap_max": 110
                        },
                        "19": {
                            "ap_min": 114,
                            "ap_max": 118
                        },
                        "20": {
                            "ap_min": 122,
                            "ap_max": 126
                        }
                    }
                },
                "Veid Staff": {
                    "set": "Veid",
                    "ap_min": 16,
                    "ap_max": 22,
                    "rarity": "epic",
                    "gems": 2,
                    "item_effects": {
                        "acc": 5,
                        "special": "Enhancement Limit increase"
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 20,
                            "ap_max": 26
                        },
                        "2": {
                            "ap_min": 23,
                            "ap_max": 29
                        },
                        "3": {
                            "ap_min": 26,
                            "ap_max": 32
                        },
                        "4": {
                            "ap_min": 28,
                            "ap_max": 34
                        },
                        "5": {
                            "ap_min": 30,
                            "ap_max": 36
                        },
                        "6": {
                            "ap_min": 33,
                            "ap_max": 39
                        },
                        "7": {
                            "ap_min": 36,
                            "ap_max": 42
                        },
                        "8": {
                            "ap_min": 40,
                            "ap_max": 46
                        },
                        "9": {
                            "ap_min": 44,
                            "ap_max": 50
                        },
                        "10": {
                            "ap_min": 48,
                            "ap_max": 54
                        },
                        "11": {
                            "ap_min": 52,
                            "ap_max": 58
                        },
                        "12": {
                            "ap_min": 56,
                            "ap_max": 62
                        },
                        "13": {
                            "ap_min": 60,
                            "ap_max": 66
                        },
                        "14": {
                            "ap_min": 64,
                            "ap_max": 70
                        },
                        "15": {
                            "ap_min": 68,
                            "ap_max": 74
                        },
                        "16": {
                            "ap_min": 72,
                            "ap_max": 78
                        },
                        "17": {
                            "ap_min": 76,
                            "ap_max": 82
                        },
                        "18": {
                            "ap_min": 88,
                            "ap_max": 94
                        },
                        "19": {
                            "ap_min": 92,
                            "ap_max": 98
                        },
                        "20": {
                            "ap_min": 96,
                            "ap_max": 102
                        }
                    }
                },
                "Kzarka Staff": {
                    "set": "Kzarka",
                    "ap_min": 18,
                    "ap_max": 22,
                    "rarity": "epic",
                    "gems": 2,
                    "item_effects": {
                        "cs": 3
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 22,
                            "ap_max": 26
                        },
                        "2": {
                            "ap_min": 25,
                            "ap_max": 29
                        },
                        "3": {
                            "ap_min": 28,
                            "ap_max": 32
                        },
                        "4": {
                            "ap_min": 30,
                            "ap_max": 34
                        },
                        "5": {
                            "ap_min": 32,
                            "ap_max": 36
                        },
                        "6": {
                            "ap_min": 35,
                            "ap_max": 39
                        },
                        "7": {
                            "ap_min": 38,
                            "ap_max": 42
                        },
                        "8": {
                            "ap_min": 43,
                            "ap_max": 47
                        },
                        "9": {
                            "ap_min": 48,
                            "ap_max": 52
                        },
                        "10": {
                            "ap_min": 53,
                            "ap_max": 57
                        },
                        "11": {
                            "ap_min": 58,
                            "ap_max": 62
                        },
                        "12": {
                            "ap_min": 63,
                            "ap_max": 67
                        },
                        "13": {
                            "ap_min": 68,
                            "ap_max": 72
                        },
                        "14": {
                            "ap_min": 73,
                            "ap_max": 77
                        },
                        "15": {
                            "ap_min": 78,
                            "ap_max": 82
                        },
                        "16": {
                            "ap_min": 86,
                            "ap_max": 90
                        },
                        "17": {
                            "ap_min": 94,
                            "ap_max": 98
                        },
                        "18": {
                            "ap_min": 106,
                            "ap_max": 110
                        },
                        "19": {
                            "ap_min": 114,
                            "ap_max": 118
                        },
                        "20": {
                            "ap_min": 122,
                            "ap_max": 126
                        }
                    }
                }
            }
        },
        "secondary-weapons": {
            "berserker" :{
                "Theos Ornamental Knot": {
                    "set": "Theos",
                    "ap_min": 0,
                    "ap_max": 0,
                    "dp": 7,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {
                        "ev": 1,
                        "dr": 5,
                        "hp": 50
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "dp": 8
                        },
                        "2": {
                            "dp": 9
                        },
                        "3": {
                            "dp": 10
                        },
                        "4": {
                            "dp": 11
                        },
                        "5": {
                            "dp": 12
                        },
                        "6": {
                            "dp": 13
                        },
                        "7": {
                            "dp": 14
                        },
                        "8": {
                            "dp": 15
                        },
                        "9": {
                            "dp": 16
                        },
                        "10": {
                            "dp": 17
                        },
                        "11": {
                            "dp": 18
                        },
                        "12": {
                            "dp": 19
                        },
                        "13": {
                            "dp": 20
                        },
                        "14": {
                            "dp": 21
                        },
                        "15": {
                            "dp": 22
                        },
                        "16": {
                            "ap_min": 1,
                            "ap_max": 1,
                            "dp": 24
                        },
                        "17": {
                            "ap_min": 2,
                            "ap_max": 2,
                            "dp": 26
                        },
                        "18": {
                            "ap_min": 3,
                            "ap_max": 3,
                            "dp": 31
                        },
                        "19": {
                            "ap_min": 4,
                            "ap_max": 4,
                            "dp": 33
                        },
                        "20": {
                            "ap_min": 5,
                            "ap_max": 5,
                            "dp": 35
                        }
                    }
                },
                "Saiyer Ornamental Knot": {
                    "set": "Saiyer",
                    "ap_min": 1,
                    "ap_max": 3,
                    "dp": 4,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {
                        "acc": 5,
                        "ev": 2,
                        "dr": 2
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "dp": 5
                        },
                        "2": {
                            "dp": 6
                        },
                        "3": {
                            "dp": 7
                        },
                        "4": {
                            "dp": 8
                        },
                        "5": {
                            "dp": 9
                        },
                        "6": {
                            "dp": 10
                        },
                        "7": {
                            "dp": 11
                        },
                        "8": {
                            "dp": 12
                        },
                        "9": {
                            "dp": 13
                        },
                        "10": {
                            "dp": 14
                        },
                        "11": {
                            "dp": 15
                        },
                        "12": {
                            "dp": 16
                        },
                        "13": {
                            "dp": 17
                        },
                        "14": {
                            "dp": 18
                        },
                        "15": {
                            "dp": 19
                        },
                        "16": {
                            "ap_min": 2,
                            "ap_max": 4,
                            "dp": 21
                        },
                        "17": {
                            "ap_min": 3,
                            "ap_max": 5,
                            "dp": 23
                        },
                        "18": {
                            "ap_min": 4,
                            "ap_max": 6,
                            "dp": 28
                        },
                        "19": {
                            "ap_min": 5,
                            "ap_max": 7,
                            "dp": 30
                        },
                        "20": {
                            "ap_min": 6,
                            "ap_max": 8,
                            "dp": 32
                        }
                    }
                },
                "Rosar Ornamental Knot": {
                    "set": "Rosar",
                    "ap_min": 1,
                    "ap_max": 4,
                    "dp": 4,
                    "rarity": "uncommon",
                    "gems": 2,
                    "item_effects": {},
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 1,
                            "ap_max": 4,
                            "dp": 5
                        },
                        "2": {
                            "ap_min": 1,
                            "ap_max": 4,
                            "dp": 6
                        },
                        "3": {
                            "ap_min": 1,
                            "ap_max": 4,
                            "dp": 7
                        },
                        "4": {
                            "ap_min": 1,
                            "ap_max": 4,
                            "dp": 8
                        },
                        "5": {
                            "ap_min": 1,
                            "ap_max": 4,
                            "dp": 9
                        },
                        "6": {
                            "ap_min": 1,
                            "ap_max": 4,
                            "dp": 10
                        },
                        "7": {
                            "ap_min": 1,
                            "ap_max": 4,
                            "dp": 11
                        },
                        "8": {
                            "ap_min": 1,
                            "ap_max": 4,
                            "dp": 12
                        },
                        "9": {
                            "ap_min": 1,
                            "ap_max": 4,
                            "dp": 13
                        },
                        "10": {
                            "ap_min": 1,
                            "ap_max": 4,
                            "dp": 14
                        },
                        "11": {
                            "ap_min": 1,
                            "ap_max": 4,
                            "dp": 15
                        },
                        "12": {
                            "ap_min": 1,
                            "ap_max": 4,
                            "dp": 16
                        },
                        "13": {
                            "ap_min": 1,
                            "ap_max": 4,
                            "dp": 17
                        },
                        "14": {
                            "ap_min": 1,
                            "ap_max": 4,
                            "dp": 18
                        },
                        "15": {
                            "ap_min": 1,
                            "ap_max": 4,
                            "dp": 19
                        },
                        "16": {
                            "ap_min": 2,
                            "ap_max": 5,
                            "dp": 21
                        },
                        "17": {
                            "ap_min": 3,
                            "ap_max": 6,
                            "dp": 23
                        },
                        "18": {
                            "ap_min": 4,
                            "ap_max": 7,
                            "dp": 28
                        },
                        "19": {
                            "ap_min": 5,
                            "ap_max": 8,
                            "dp": 30
                        },
                        "20": {
                            "ap_min": 6,
                            "ap_max": 9,
                            "dp": 32
                        }
                    }
                },
                "Oros Ornamental Knot": {
                    "set": "Oros",
                    "ap_min": 4,
                    "ap_max": 6,
                    "dp": 4,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {
                        "ev": 1,
                        "dr": 3
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 5,
                            "ap_max": 7
                        },
                        "2": {
                            "ap_min": 5,
                            "ap_max": 8
                        },
                        "3": {
                            "ap_min": 5,
                            "ap_max": 9
                        },
                        "4": {
                            "ap_min": 5,
                            "ap_max": 10
                        },
                        "5": {
                            "ap_min": 6,
                            "ap_max": 11
                        },
                        "6": {
                            "ap_min": 6,
                            "ap_max": 12
                        },
                        "7": {
                            "ap_min": 6,
                            "ap_max": 13
                        },
                        "8": {
                            "ap_min": 6,
                            "ap_max": 14
                        },
                        "9": {
                            "ap_min": 6,
                            "ap_max": 15
                        },
                        "10": {
                            "ap_min": 7,
                            "ap_max": 16
                        },
                        "11": {
                            "ap_min": 7,
                            "ap_max": 17
                        },
                        "12": {
                            "ap_min": 7,
                            "ap_max": 18
                        },
                        "13": {
                            "ap_min": 7,
                            "ap_max": 19
                        },
                        "14": {
                            "ap_min": 7,
                            "ap_max": 20
                        },
                        "15": {
                            "ap_min": 8,
                            "ap_max": 21
                        },
                        "16": {
                            "ap_min": 11,
                            "ap_max": 24
                        },
                        "17": {
                            "ap_min": 14,
                            "ap_max": 27
                        },
                        "18": {
                            "ap_min": 20,
                            "ap_max": 33
                        },
                        "19": {
                            "ap_min": 23,
                            "ap_max": 36
                        },
                        "20": {
                            "ap_min": 26,
                            "ap_max": 39
                        }
                    }
                },
                "Krea Ornamental Knot": {
                    "set": "Krea",
                    "ap_min": 4,
                    "ap_max": 6,
                    "dp": 4,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {},
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 5,
                            "ap_max": 7
                        },
                        "2": {
                            "ap_min": 5,
                            "ap_max": 8
                        },
                        "3": {
                            "ap_min": 5,
                            "ap_max": 9
                        },
                        "4": {
                            "ap_min": 5,
                            "ap_max": 10
                        },
                        "5": {
                            "ap_min": 6,
                            "ap_max": 11
                        },
                        "6": {
                            "ap_min": 6,
                            "ap_max": 12
                        },
                        "7": {
                            "ap_min": 6,
                            "ap_max": 13
                        },
                        "8": {
                            "ap_min": 6,
                            "ap_max": 14
                        },
                        "9": {
                            "ap_min": 6,
                            "ap_max": 15
                        },
                        "10": {
                            "ap_min": 7,
                            "ap_max": 16
                        },
                        "11": {
                            "ap_min": 7,
                            "ap_max": 17
                        },
                        "12": {
                            "ap_min": 7,
                            "ap_max": 18
                        },
                        "13": {
                            "ap_min": 7,
                            "ap_max": 19
                        },
                        "14": {
                            "ap_min": 7,
                            "ap_max": 20
                        },
                        "15": {
                            "ap_min": 8,
                            "ap_max": 21
                        },
                        "16": {
                            "ap_min": 9,
                            "ap_max": 22,
                            "dp": 5
                        },
                        "17": {
                            "ap_min": 10,
                            "ap_max": 23,
                            "dp": 6
                        },
                        "18": {
                            "ap_min": 14,
                            "ap_max": 27,
                            "dp": 7
                        },
                        "19": {
                            "ap_min": 15,
                            "ap_max": 28,
                            "dp": 8
                        },
                        "20": {
                            "ap_min": 16,
                            "ap_max": 29,
                            "dp": 9
                        }
                    }
                },
                "Nouver Ornamental Knot": {
                    "set": "Nouver",
                    "ap_min": 6,
                    "ap_max": 8,
                    "rarity": "epic",
                    "gems": 2,
                    "item_effects": {
                        "ar": 10
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 7,
                            "ap_max": 9
                        },
                        "2": {
                            "ap_min": 8,
                            "ap_max": 10
                        },
                        "3": {
                            "ap_min": 9,
                            "ap_max": 11
                        },
                        "4": {
                            "ap_min": 10,
                            "ap_max": 12
                        },
                        "5": {
                            "ap_min": 11,
                            "ap_max": 13
                        },
                        "6": {
                            "ap_min": 12,
                            "ap_max": 14
                        },
                        "7": {
                            "ap_min": 13,
                            "ap_max": 15
                        },
                        "8": {
                            "ap_min": 14,
                            "ap_max": 16
                        },
                        "9": {
                            "ap_min": 15,
                            "ap_max": 17
                        },
                        "10": {
                            "ap_min": 16,
                            "ap_max": 18
                        },
                        "11": {
                            "ap_min": 18,
                            "ap_max": 20
                        },
                        "12": {
                            "ap_min": 20,
                            "ap_max": 22
                        },
                        "13": {
                            "ap_min": 22,
                            "ap_max": 24
                        },
                        "14": {
                            "ap_min": 24,
                            "ap_max": 26
                        },
                        "15": {
                            "ap_min": 26,
                            "ap_max": 28
                        },
                        "16": {
                            "ap_min": 29,
                            "ap_max": 31
                        },
                        "17": {
                            "ap_min": 32,
                            "ap_max": 34
                        },
                        "18": {
                            "ap_min": 38,
                            "ap_max": 40
                        },
                        "19": {
                            "ap_min": 41,
                            "ap_max": 43
                        },
                        "20": {
                            "ap_min": 44,
                            "ap_max": 46
                        }
                    }
                }
            },
            "ranger" :{
                "Steel Dagger": {
                    "set": "Steel",
                    "ap_min": 6,
                    "ap_max": 6,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {},
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 7,
                            "ap_max": 7
                        },
                        "2": {
                            "ap_min": 8,
                            "ap_max": 8
                        },
                        "3": {
                            "ap_min": 9,
                            "ap_max": 9
                        },
                        "4": {
                            "ap_min": 10,
                            "ap_max": 10
                        },
                        "5": {
                            "ap_min": 11,
                            "ap_max": 11
                        },
                        "6": {
                            "ap_min": 12,
                            "ap_max": 12
                        },
                        "7": {
                            "ap_min": 13,
                            "ap_max": 13
                        },
                        "8": {
                            "ap_min": 14,
                            "ap_max": 14
                        },
                        "9": {
                            "ap_min": 15,
                            "ap_max": 15
                        },
                        "10": {
                            "ap_min": 16,
                            "ap_max": 16
                        },
                        "11": {
                            "ap_min": 17,
                            "ap_max": 17
                        },
                        "12": {
                            "ap_min": 18,
                            "ap_max": 18
                        },
                        "13": {
                            "ap_min": 19,
                            "ap_max": 19
                        },
                        "14": {
                            "ap_min": 20,
                            "ap_max": 20
                        },
                        "15": {
                            "ap_min": 21,
                            "ap_max": 21
                        },
                        "16": {
                            "ap_min": 24,
                            "ap_max": 24
                        },
                        "17": {
                            "ap_min": 27,
                            "ap_max": 27
                        },
                        "18": {
                            "ap_min": 33,
                            "ap_max": 33
                        },
                        "19": {
                            "ap_min": 36,
                            "ap_max": 36
                        },
                        "20": {
                            "ap_min": 39,
                            "ap_max": 39
                        }
                    }
                },
                "Rosar Dagger": {
                    "set": "Rosar",
                    "ap_min": 1,
                    "ap_max": 4,
                    "dp": 4,
                    "rarity": "uncommon",
                    "gems": 2,
                    "item_effects": {},
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "dp": 5
                        },
                        "2": {
                            "dp": 6
                        },
                        "3": {
                            "dp": 7
                        },
                        "4": {
                            "dp": 8
                        },
                        "5": {
                            "dp": 9
                        },
                        "6": {
                            "dp": 10
                        },
                        "7": {
                            "dp": 11
                        },
                        "8": {
                            "dp": 12
                        },
                        "9": {
                            "dp": 13
                        },
                        "10": {
                            "dp": 14
                        },
                        "11": {
                            "dp": 15
                        },
                        "12": {
                            "dp": 16
                        },
                        "13": {
                            "dp": 17
                        },
                        "14": {
                            "dp": 18
                        },
                        "15": {
                            "dp": 19
                        },
                        "16": {
                            "ap_min": 2,
                            "ap_max": 5,
                            "dp": 21
                        },
                        "17": {
                            "ap_min": 3,
                            "ap_max": 6,
                            "dp": 23
                        },
                        "18": {
                            "ap_min": 4,
                            "ap_max": 7,
                            "dp": 28
                        },
                        "19": {
                            "ap_min": 5,
                            "ap_max": 8,
                            "dp": 30
                        },
                        "20": {
                            "ap_min": 6,
                            "ap_max": 9,
                            "dp": 32
                        }
                    }
                },
                "Parrying Dagger": {
                    "set": "Parrying",
                    "ap_min": 3,
                    "ap_max": 3,
                    "dp": 3,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {
                        "ev": 3,
                        "hp": 50
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 3,
                            "ap_max": 3,
                            "dp": 4
                        },
                        "2": {
                            "ap_min": 3,
                            "ap_max": 3,
                            "dp": 5
                        },
                        "3": {
                            "ap_min": 3,
                            "ap_max": 3,
                            "dp": 6
                        },
                        "4": {
                            "ap_min": 3,
                            "ap_max": 3,
                            "dp": 7
                        },
                        "5": {
                            "ap_min": 3,
                            "ap_max": 3,
                            "dp": 8
                        },
                        "6": {
                            "ap_min": 3,
                            "ap_max": 3,
                            "dp": 9
                        },
                        "7": {
                            "ap_min": 3,
                            "ap_max": 3,
                            "dp": 10
                        },
                        "8": {
                            "ap_min": 3,
                            "ap_max": 3,
                            "dp": 11
                        },
                        "9": {
                            "ap_min": 3,
                            "ap_max": 3,
                            "dp": 12
                        },
                        "10": {
                            "ap_min": 3,
                            "ap_max": 3,
                            "dp": 13
                        },
                        "11": {
                            "ap_min": 3,
                            "ap_max": 3,
                            "dp": 14
                        },
                        "12": {
                            "ap_min": 3,
                            "ap_max": 3,
                            "dp": 15
                        },
                        "13": {
                            "ap_min": 3,
                            "ap_max": 3,
                            "dp": 16
                        },
                        "14": {
                            "ap_min": 3,
                            "ap_max": 3,
                            "dp": 17
                        },
                        "15": {
                            "ap_min": 3,
                            "ap_max": 3,
                            "dp": 18
                        },
                        "16": {
                            "ap_min": 4,
                            "ap_max": 4,
                            "dp": 20
                        },
                        "17": {
                            "ap_min": 5,
                            "ap_max": 5,
                            "dp": 22
                        },
                        "18": {
                            "ap_min": 6,
                            "ap_max": 6,
                            "dp": 27
                        },
                        "19": {
                            "ap_min": 7,
                            "ap_max": 7,
                            "dp": 29
                        },
                        "20": {
                            "ap_min": 8,
                            "ap_max": 8,
                            "dp": 31
                        }
                    }
                },
                "Krea Dagger": {
                    "set": "Krea",
                    "ap_min": 1,
                    "ap_max": 3,
                    "dp": 4,
                    "rarity": "uncommon",
                    "gems": 2,
                    "item_effects": {},
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "dp": 5
                        },
                        "2": {
                            "dp": 6
                        },
                        "3": {
                            "dp": 7
                        },
                        "4": {
                            "dp": 8
                        },
                        "5": {
                            "dp": 9
                        },
                        "6": {
                            "dp": 10
                        },
                        "7": {
                            "dp": 11
                        },
                        "8": {
                            "dp": 12
                        },
                        "9": {
                            "dp": 13
                        },
                        "10": {
                            "dp": 14
                        },
                        "11": {
                            "dp": 15
                        },
                        "12": {
                            "dp": 16
                        },
                        "13": {
                            "dp": 17
                        },
                        "14": {
                            "dp": 18
                        },
                        "15": {
                            "dp": 19
                        },
                        "16": {
                            "ap_min": 2,
                            "ap_max": 4,
                            "dp": 21
                        },
                        "17": {
                            "ap_min": 3,
                            "ap_max": 5,
                            "dp": 23
                        },
                        "18": {
                            "ap_min": 4,
                            "ap_max": 6,
                            "dp": 28
                        },
                        "19": {
                            "ap_min": 5,
                            "ap_max": 7,
                            "dp": 30
                        },
                        "20": {
                            "ap_min": 6,
                            "ap_max": 8,
                            "dp": 32
                        }
                    }
                },
                "Bronze Dagger": {
                    "set": "Bronze",
                    "ap_min": 3,
                    "ap_max": 3,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {
                        "acc": 5
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {},
                        "2": {},
                        "3": {},
                        "4": {},
                        "5": {},
                        "6": {},
                        "7": {},
                        "8": {},
                        "9": {},
                        "10": {},
                        "11": {},
                        "12": {},
                        "13": {},
                        "14": {},
                        "15": {},
                        "16": {
                            "ap_min": 4,
                            "ap_max": 4
                        },
                        "17": {
                            "ap_min": 5,
                            "ap_max": 5
                        },
                        "18": {
                            "ap_min": 9,
                            "ap_max": 9
                        },
                        "19": {
                            "ap_min": 10,
                            "ap_max": 10
                        },
                        "20": {
                            "ap_min": 11,
                            "ap_max": 11
                        }
                    }
                },
                "Nouver Dagger": {
                    "set": "Nouver",
                    "ap_min": 6,
                    "ap_max": 8,
                    "rarity": "epic",
                    "gems": 2,
                    "item_effects": {
                        "ar": 10
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 7,
                            "ap_max": 9
                        },
                        "2": {
                            "ap_min": 8,
                            "ap_max": 10
                        },
                        "3": {
                            "ap_min": 9,
                            "ap_max": 11
                        },
                        "4": {
                            "ap_min": 10,
                            "ap_max": 12
                        },
                        "5": {
                            "ap_min": 11,
                            "ap_max": 13
                        },
                        "6": {
                            "ap_min": 12,
                            "ap_max": 14
                        },
                        "7": {
                            "ap_min": 13,
                            "ap_max": 15
                        },
                        "8": {
                            "ap_min": 14,
                            "ap_max": 16
                        },
                        "9": {
                            "ap_min": 15,
                            "ap_max": 17
                        },
                        "10": {
                            "ap_min": 16,
                            "ap_max": 18
                        },
                        "11": {
                            "ap_min": 18,
                            "ap_max": 20
                        },
                        "12": {
                            "ap_min": 20,
                            "ap_max": 22
                        },
                        "13": {
                            "ap_min": 22,
                            "ap_max": 24
                        },
                        "14": {
                            "ap_min": 24,
                            "ap_max": 26
                        },
                        "15": {
                            "ap_min": 26,
                            "ap_max": 28
                        },
                        "16": {
                            "ap_min": 29,
                            "ap_max": 31
                        },
                        "17": {
                            "ap_min": 32,
                            "ap_max": 34
                        },
                        "18": {
                            "ap_min": 38,
                            "ap_max": 40
                        },
                        "19": {
                            "ap_min": 41,
                            "ap_max": 43
                        },
                        "20": {
                            "ap_min": 44,
                            "ap_max": 46
                        }
                    }
                }
            },
            "sorceress" :{
                "Rosar Talisman": {
                    "set": "Rosar",
                    "ap_min": 1,
                    "ap_max": 4,
                    "dp": 4,
                    "rarity": "uncommon",
                    "gems": 2,
                    "item_effects": {},
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "dp": 5
                        },
                        "2": {
                            "dp": 6
                        },
                        "3": {
                            "dp": 7
                        },
                        "4": {
                            "dp": 8
                        },
                        "5": {
                            "dp": 9
                        },
                        "6": {
                            "dp": 10
                        },
                        "7": {
                            "dp": 11
                        },
                        "8": {
                            "dp": 12
                        },
                        "9": {
                            "dp": 13
                        },
                        "10": {
                            "dp": 14
                        },
                        "11": {
                            "dp": 15
                        },
                        "12": {
                            "dp": 16
                        },
                        "13": {
                            "dp": 17
                        },
                        "14": {
                            "dp": 18
                        },
                        "15": {
                            "dp": 19
                        },
                        "16": {
                            "ap_min": 2,
                            "ap_max": 5,
                            "dp": 21
                        },
                        "17": {
                            "ap_min": 3,
                            "ap_max": 6,
                            "dp": 23
                        },
                        "18": {
                            "ap_min": 4,
                            "ap_max": 7,
                            "dp": 28
                        },
                        "19": {
                            "ap_min": 5,
                            "ap_max": 8,
                            "dp": 30
                        },
                        "20": {
                            "ap_min": 6,
                            "ap_max": 9,
                            "dp": 32
                        }
                    }
                },
                "Rhik Talisman": {
                    "set": "Rhik",
                    "ap_min": 0,
                    "ap_max": 0,
                    "dp": 3,
                    "rarity": "uncommon",
                    "gems": 2,
                    "item_effects": {
                        "ev": 3,
                        "hp": 50
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "dp": 4
                        },
                        "2": {
                            "dp": 5
                        },
                        "3": {
                            "dp": 6
                        },
                        "4": {
                            "dp": 7
                        },
                        "5": {
                            "dp": 8
                        },
                        "6": {
                            "dp": 9
                        },
                        "7": {
                            "dp": 10
                        },
                        "8": {
                            "dp": 11
                        },
                        "9": {
                            "dp": 12
                        },
                        "10": {
                            "dp": 13
                        },
                        "11": {
                            "dp": 14
                        },
                        "12": {
                            "dp": 15
                        },
                        "13": {
                            "dp": 16
                        },
                        "14": {
                            "dp": 17
                        },
                        "15": {
                            "dp": 18
                        },
                        "16": {
                            "ap_min": 1,
                            "ap_max": 1,
                            "dp": 20
                        },
                        "17": {
                            "ap_min": 2,
                            "ap_max": 2,
                            "dp": 22
                        },
                        "18": {
                            "ap_min": 3,
                            "ap_max": 3,
                            "dp": 27
                        },
                        "19": {
                            "ap_min": 4,
                            "ap_max": 4,
                            "dp": 29
                        },
                        "20": {
                            "ap_min": 5,
                            "ap_max": 5,
                            "dp": 31
                        }
                    }
                },
                "Krea Talisman": {
                    "set": "Krea",
                    "ap_min": 1,
                    "ap_max": 3,
                    "dp": 4,
                    "rarity": "uncommon",
                    "gems": 2,
                    "item_effects": {},
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "dp": 5
                        },
                        "2": {
                            "dp": 6
                        },
                        "3": {
                            "dp": 7
                        },
                        "4": {
                            "dp": 8
                        },
                        "5": {
                            "dp": 9
                        },
                        "6": {
                            "dp": 10
                        },
                        "7": {
                            "dp": 11
                        },
                        "8": {
                            "dp": 12
                        },
                        "9": {
                            "dp": 13
                        },
                        "10": {
                            "dp": 14
                        },
                        "11": {
                            "dp": 15
                        },
                        "12": {
                            "dp": 16
                        },
                        "13": {
                            "dp": 17
                        },
                        "14": {
                            "dp": 18
                        },
                        "15": {
                            "dp": 19
                        },
                        "16": {
                            "ap_min": 2,
                            "ap_max": 4,
                            "dp": 21
                        },
                        "17": {
                            "ap_min": 3,
                            "ap_max": 5,
                            "dp": 23
                        },
                        "18": {
                            "ap_min": 4,
                            "ap_max": 6,
                            "dp": 28
                        },
                        "19": {
                            "ap_min": 5,
                            "ap_max": 7,
                            "dp": 30
                        },
                        "20": {
                            "ap_min": 6,
                            "ap_max": 8,
                            "dp": 32
                        }
                    }
                },
                "Jubre Talisman": {
                    "set": "Jubre",
                    "ap_min": 6,
                    "ap_max": 8,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {},
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 7,
                            "ap_max": 9
                        },
                        "2": {
                            "ap_min": 8,
                            "ap_max": 10
                        },
                        "3": {
                            "ap_min": 9,
                            "ap_max": 11
                        },
                        "4": {
                            "ap_min": 10,
                            "ap_max": 12
                        },
                        "5": {
                            "ap_min": 11,
                            "ap_max": 13
                        },
                        "6": {
                            "ap_min": 12,
                            "ap_max": 14
                        },
                        "7": {
                            "ap_min": 13,
                            "ap_max": 15
                        },
                        "8": {
                            "ap_min": 14,
                            "ap_max": 16
                        },
                        "9": {
                            "ap_min": 15,
                            "ap_max": 17
                        },
                        "10": {
                            "ap_min": 16,
                            "ap_max": 18
                        },
                        "11": {
                            "ap_min": 17,
                            "ap_max": 19
                        },
                        "12": {
                            "ap_min": 18,
                            "ap_max": 20
                        },
                        "13": {
                            "ap_min": 19,
                            "ap_max": 21
                        },
                        "14": {
                            "ap_min": 20,
                            "ap_max": 22
                        },
                        "15": {
                            "ap_min": 21,
                            "ap_max": 23
                        },
                        "16": {
                            "ap_min": 23,
                            "ap_max": 25
                        },
                        "17": {
                            "ap_min": 25,
                            "ap_max": 27
                        },
                        "18": {
                            "ap_min": 30,
                            "ap_max": 32
                        },
                        "19": {
                            "ap_min": 32,
                            "ap_max": 34
                        },
                        "20": {
                            "ap_min": 34,
                            "ap_max": 36
                        }
                    }
                },
                "Helrick Talisman": {
                    "set": "Helrick",
                    "ap_min": 3,
                    "ap_max": 3,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {
                        "acc": 5
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {},
                        "2": {},
                        "3": {},
                        "4": {},
                        "5": {},
                        "6": {},
                        "7": {},
                        "8": {},
                        "9": {},
                        "10": {},
                        "11": {},
                        "12": {},
                        "13": {},
                        "14": {},
                        "15": {},
                        "16": {
                            "ap_min": 4,
                            "ap_max": 4
                        },
                        "17": {
                            "ap_min": 5,
                            "ap_max": 5
                        },
                        "18": {
                            "ap_min": 9,
                            "ap_max": 9
                        },
                        "19": {
                            "ap_min": 10,
                            "ap_max": 10
                        },
                        "20": {
                            "ap_min": 11,
                            "ap_max": 11
                        }
                    }
                },
                "Nouver Talisman": {
                    "set": "Nouver",
                    "ap_min": 3,
                    "ap_max": 3,
                    "rarity": "epic",
                    "gems": 2,
                    "item_effects": {
                        "ar": 10
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 7,
                            "ap_max": 9
                        },
                        "2": {
                            "ap_min": 8,
                            "ap_max": 10
                        },
                        "3": {
                            "ap_min": 9,
                            "ap_max": 11
                        },
                        "4": {
                            "ap_min": 10,
                            "ap_max": 12
                        },
                        "5": {
                            "ap_min": 11,
                            "ap_max": 13
                        },
                        "6": {
                            "ap_min": 12,
                            "ap_max": 14
                        },
                        "7": {
                            "ap_min": 13,
                            "ap_max": 15
                        },
                        "8": {
                            "ap_min": 14,
                            "ap_max": 16
                        },
                        "9": {
                            "ap_min": 15,
                            "ap_max": 17
                        },
                        "10": {
                            "ap_min": 16,
                            "ap_max": 18
                        },
                        "11": {
                            "ap_min": 18,
                            "ap_max": 20
                        },
                        "12": {
                            "ap_min": 20,
                            "ap_max": 22
                        },
                        "13": {
                            "ap_min": 22,
                            "ap_max": 24
                        },
                        "14": {
                            "ap_min": 24,
                            "ap_max": 26
                        },
                        "15": {
                            "ap_min": 26,
                            "ap_max": 28
                        },
                        "16": {
                            "ap_min": 29,
                            "ap_max": 31
                        },
                        "17": {
                            "ap_min": 32,
                            "ap_max": 34
                        },
                        "18": {
                            "ap_min": 38,
                            "ap_max": 40
                        },
                        "19": {
                            "ap_min": 41,
                            "ap_max": 43
                        },
                        "20": {
                            "ap_min": 44,
                            "ap_max": 46
                        }
                    }
                }
            },
            "tamer" :{
                "Rosar Trinket": {
                    "set": "Rosar",
                    "ap_min": 1,
                    "ap_max": 4,
                    "dp": 4,
                    "rarity": "uncommon",
                    "gems": 2,
                    "item_effects": {},
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "dp": 5
                        },
                        "2": {
                            "dp": 6
                        },
                        "3": {
                            "dp": 7
                        },
                        "4": {
                            "dp": 8
                        },
                        "5": {
                            "dp": 9
                        },
                        "6": {
                            "dp": 10
                        },
                        "7": {
                            "dp": 11
                        },
                        "8": {
                            "dp": 12
                        },
                        "9": {
                            "dp": 13
                        },
                        "10": {
                            "dp": 14
                        },
                        "11": {
                            "dp": 15
                        },
                        "12": {
                            "dp": 16
                        },
                        "13": {
                            "dp": 17
                        },
                        "14": {
                            "dp": 18
                        },
                        "15": {
                            "dp": 19
                        },
                        "16": {
                            "ap_min": 2,
                            "ap_max": 5,
                            "dp": 21
                        },
                        "17": {
                            "ap_min": 3,
                            "ap_max": 6,
                            "dp": 23
                        },
                        "18": {
                            "ap_min": 4,
                            "ap_max": 7,
                            "dp": 28
                        },
                        "19": {
                            "ap_min": 5,
                            "ap_max": 8,
                            "dp": 30
                        },
                        "20": {
                            "ap_min": 6,
                            "ap_max": 9,
                            "dp": 32
                        }
                    }
                },
                "Needle Trinket": {
                    "set": "Needle",
                    "ap_min": 6,
                    "ap_max": 8,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {},
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 7,
                            "ap_max": 9
                        },
                        "2": {
                            "ap_min": 8,
                            "ap_max": 10
                        },
                        "3": {
                            "ap_min": 9,
                            "ap_max": 11
                        },
                        "4": {
                            "ap_min": 10,
                            "ap_max": 12
                        },
                        "5": {
                            "ap_min": 11,
                            "ap_max": 13
                        },
                        "6": {
                            "ap_min": 12,
                            "ap_max": 14
                        },
                        "7": {
                            "ap_min": 13,
                            "ap_max": 15
                        },
                        "8": {
                            "ap_min": 14,
                            "ap_max": 16
                        },
                        "9": {
                            "ap_min": 15,
                            "ap_max": 17
                        },
                        "10": {
                            "ap_min": 16,
                            "ap_max": 18
                        },
                        "11": {
                            "ap_min": 17,
                            "ap_max": 19
                        },
                        "12": {
                            "ap_min": 18,
                            "ap_max": 20
                        },
                        "13": {
                            "ap_min": 19,
                            "ap_max": 21
                        },
                        "14": {
                            "ap_min": 20,
                            "ap_max": 22
                        },
                        "15": {
                            "ap_min": 21,
                            "ap_max": 23
                        },
                        "16": {
                            "ap_min": 24,
                            "ap_max": 26
                        },
                        "17": {
                            "ap_min": 27,
                            "ap_max": 29
                        },
                        "18": {
                            "ap_min": 33,
                            "ap_max": 35
                        },
                        "19": {
                            "ap_min": 36,
                            "ap_max": 38
                        },
                        "20": {
                            "ap_min": 39,
                            "ap_max": 41
                        }
                    }
                },
                "Krea Trinket": {
                    "set": "Krea",
                    "ap_min": 1,
                    "ap_max": 3,
                    "dp": 4,
                    "rarity": "uncommon",
                    "gems": 2,
                    "item_effects": {},
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "dp": 5
                        },
                        "2": {
                            "dp": 6
                        },
                        "3": {
                            "dp": 7
                        },
                        "4": {
                            "dp": 8
                        },
                        "5": {
                            "dp": 9
                        },
                        "6": {
                            "dp": 10
                        },
                        "7": {
                            "dp": 11
                        },
                        "8": {
                            "dp": 12
                        },
                        "9": {
                            "dp": 13
                        },
                        "10": {
                            "dp": 14
                        },
                        "11": {
                            "dp": 15
                        },
                        "12": {
                            "dp": 16
                        },
                        "13": {
                            "dp": 17
                        },
                        "14": {
                            "dp": 18
                        },
                        "15": {
                            "dp": 19
                        },
                        "16": {
                            "ap_min": 2,
                            "ap_max": 4,
                            "dp": 21
                        },
                        "17": {
                            "ap_min": 3,
                            "ap_max": 5,
                            "dp": 23
                        },
                        "18": {
                            "ap_min": 4,
                            "ap_max": 6,
                            "dp": 28
                        },
                        "19": {
                            "ap_min": 5,
                            "ap_max": 7,
                            "dp": 30
                        },
                        "20": {
                            "ap_min": 6,
                            "ap_max": 8,
                            "dp": 32
                        }
                    }
                },
                "Incense Trinket": {
                    "set": "Incense",
                    "ap_min": 3,
                    "ap_max": 3,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {
                        "acc": 5
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 3,
                            "ap_max": 3
                        },
                        "2": {
                            "ap_min": 3,
                            "ap_max": 3
                        },
                        "3": {
                            "ap_min": 3,
                            "ap_max": 3
                        },
                        "4": {
                            "ap_min": 3,
                            "ap_max": 3
                        },
                        "5": {
                            "ap_min": 3,
                            "ap_max": 3
                        },
                        "6": {
                            "ap_min": 3,
                            "ap_max": 3
                        },
                        "7": {
                            "ap_min": 3,
                            "ap_max": 3
                        },
                        "8": {
                            "ap_min": 3,
                            "ap_max": 3
                        },
                        "9": {
                            "ap_min": 3,
                            "ap_max": 3
                        },
                        "10": {
                            "ap_min": 3,
                            "ap_max": 3
                        },
                        "11": {
                            "ap_min": 3,
                            "ap_max": 3
                        },
                        "12": {
                            "ap_min": 3,
                            "ap_max": 3
                        },
                        "13": {
                            "ap_min": 3,
                            "ap_max": 3
                        },
                        "14": {
                            "ap_min": 3,
                            "ap_max": 3
                        },
                        "15": {
                            "ap_min": 3,
                            "ap_max": 3
                        },
                        "16": {
                            "ap_min": 4,
                            "ap_max": 4
                        },
                        "17": {
                            "ap_min": 5,
                            "ap_max": 5
                        },
                        "18": {
                            "ap_min": 9,
                            "ap_max": 9
                        },
                        "19": {
                            "ap_min": 10,
                            "ap_max": 10
                        },
                        "20": {
                            "ap_min": 11,
                            "ap_max": 11
                        }
                    }
                },
                "Blade Trinket": {
                    "set": "Blade",
                    "ap_min": 0,
                    "ap_max": 0,
                    "dp": 3,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {
                        "ev": 3,
                        "hp": 50
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "dp": 4
                        },
                        "2": {
                            "dp": 5
                        },
                        "3": {
                            "dp": 6
                        },
                        "4": {
                            "dp": 7
                        },
                        "5": {
                            "dp": 8
                        },
                        "6": {
                            "dp": 9
                        },
                        "7": {
                            "dp": 10
                        },
                        "8": {
                            "dp": 11
                        },
                        "9": {
                            "dp": 12
                        },
                        "10": {
                            "dp": 13
                        },
                        "11": {
                            "dp": 14
                        },
                        "12": {
                            "dp": 15
                        },
                        "13": {
                            "dp": 16
                        },
                        "14": {
                            "dp": 17
                        },
                        "15": {
                            "dp": 18
                        },
                        "16": {
                            "ap_min": 1,
                            "ap_max": 1,
                            "dp": 20
                        },
                        "17": {
                            "ap_min": 2,
                            "ap_max": 2,
                            "dp": 22
                        },
                        "18": {
                            "ap_min": 3,
                            "ap_max": 3,
                            "dp": 27
                        },
                        "19": {
                            "ap_min": 4,
                            "ap_max": 4,
                            "dp": 29
                        },
                        "20": {
                            "ap_min": 5,
                            "ap_max": 5,
                            "dp": 31
                        }
                    }
                },
                "Nouver Trinket": {
                    "set": "Nouver",
                    "ap_min": 6,
                    "ap_max": 8,
                    "rarity": "epic",
                    "gems": 2,
                    "item_effects": {
                        "ar": 10
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 7,
                            "ap_max": 9
                        },
                        "2": {
                            "ap_min": 8,
                            "ap_max": 10
                        },
                        "3": {
                            "ap_min": 9,
                            "ap_max": 11
                        },
                        "4": {
                            "ap_min": 10,
                            "ap_max": 12
                        },
                        "5": {
                            "ap_min": 11,
                            "ap_max": 13
                        },
                        "6": {
                            "ap_min": 12,
                            "ap_max": 14
                        },
                        "7": {
                            "ap_min": 13,
                            "ap_max": 15
                        },
                        "8": {
                            "ap_min": 14,
                            "ap_max": 16
                        },
                        "9": {
                            "ap_min": 15,
                            "ap_max": 17
                        },
                        "10": {
                            "ap_min": 16,
                            "ap_max": 18
                        },
                        "11": {
                            "ap_min": 18,
                            "ap_max": 20
                        },
                        "12": {
                            "ap_min": 20,
                            "ap_max": 22
                        },
                        "13": {
                            "ap_min": 22,
                            "ap_max": 24
                        },
                        "14": {
                            "ap_min": 24,
                            "ap_max": 26
                        },
                        "15": {
                            "ap_min": 26,
                            "ap_max": 28
                        },
                        "16": {
                            "ap_min": 29,
                            "ap_max": 31
                        },
                        "17": {
                            "ap_min": 32,
                            "ap_max": 34
                        },
                        "18": {
                            "ap_min": 38,
                            "ap_max": 40
                        },
                        "19": {
                            "ap_min": 41,
                            "ap_max": 43
                        },
                        "20": {
                            "ap_min": 44,
                            "ap_max": 46
                        }
                    }
                }
            },
            "valkyrie" :{
                "Vangertz Shield": {
                    "set": "Vangertz",
                    "ap_min": 1,
                    "ap_max": 3,
                    "dp": 4,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {
                        "acc": 5,
                        "ev": 2,
                        "dr": 2
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "dp": 5
                        },
                        "2": {
                            "dp": 6
                        },
                        "3": {
                            "dp": 7
                        },
                        "4": {
                            "dp": 8
                        },
                        "5": {
                            "dp": 9
                        },
                        "6": {
                            "dp": 10
                        },
                        "7": {
                            "dp": 11
                        },
                        "8": {
                            "dp": 12
                        },
                        "9": {
                            "dp": 13
                        },
                        "10": {
                            "dp": 14
                        },
                        "11": {
                            "dp": 15
                        },
                        "12": {
                            "dp": 16
                        },
                        "13": {
                            "dp": 17
                        },
                        "14": {
                            "dp": 18
                        },
                        "15": {
                            "dp": 19
                        },
                        "16": {
                            "ap_min": 2,
                            "ap_max": 4,
                            "dp": 20
                        },
                        "17": {
                            "ap_min": 3,
                            "ap_max": 5,
                            "dp": 21
                        },
                        "18": {
                            "ap_min": 4,
                            "ap_max": 6,
                            "dp": 25
                        },
                        "19": {
                            "ap_min": 5,
                            "ap_max": 7,
                            "dp": 26
                        },
                        "20": {
                            "ap_min": 6,
                            "ap_max": 8,
                            "dp": 27
                        }
                    }
                },
                "Rosar Shield": {
                    "set": "Rosar",
                    "ap_min": 1,
                    "ap_max": 4,
                    "dp": 4,
                    "rarity": "uncommon",
                    "gems": 2,
                    "item_effects": {},
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "dp": 5
                        },
                        "2": {
                            "dp": 6
                        },
                        "3": {
                            "dp": 7
                        },
                        "4": {
                            "dp": 8
                        },
                        "5": {
                            "dp": 9
                        },
                        "6": {
                            "dp": 10
                        },
                        "7": {
                            "dp": 11
                        },
                        "8": {
                            "dp": 12
                        },
                        "9": {
                            "dp": 13
                        },
                        "10": {
                            "dp": 14
                        },
                        "11": {
                            "dp": 15
                        },
                        "12": {
                            "dp": 16
                        },
                        "13": {
                            "dp": 17
                        },
                        "14": {
                            "dp": 18
                        },
                        "15": {
                            "dp": 19
                        },
                        "16": {
                            "ap_min": 2,
                            "ap_max": 5,
                            "dp": 21
                        },
                        "17": {
                            "ap_min": 3,
                            "ap_max": 6,
                            "dp": 23
                        },
                        "18": {
                            "ap_min": 4,
                            "ap_max": 7,
                            "dp": 28
                        },
                        "19": {
                            "ap_min": 5,
                            "ap_max": 8,
                            "dp": 30
                        },
                        "20": {
                            "ap_min": 6,
                            "ap_max": 9,
                            "dp": 32
                        }
                    }
                },
                "Krea Shield": {
                    "set": "Krea",
                    "ap_min": 1,
                    "ap_max": 3,
                    "dp": 4,
                    "rarity": "uncommon",
                    "gems": 2,
                    "item_effects": {},
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "dp": 5
                        },
                        "2": {
                            "dp": 6
                        },
                        "3": {
                            "dp": 7
                        },
                        "4": {
                            "dp": 8
                        },
                        "5": {
                            "dp": 9
                        },
                        "6": {
                            "dp": 10
                        },
                        "7": {
                            "dp": 11
                        },
                        "8": {
                            "dp": 12
                        },
                        "9": {
                            "dp": 13
                        },
                        "10": {
                            "dp": 14
                        },
                        "11": {
                            "dp": 15
                        },
                        "12": {
                            "dp": 16
                        },
                        "13": {
                            "dp": 17
                        },
                        "14": {
                            "dp": 18
                        },
                        "15": {
                            "dp": 19
                        },
                        "16": {
                            "ap_min": 2,
                            "ap_max": 4,
                            "dp": 21
                        },
                        "17": {
                            "ap_min": 3,
                            "ap_max": 5,
                            "dp": 23
                        },
                        "18": {
                            "ap_min": 4,
                            "ap_max": 6,
                            "dp": 28
                        },
                        "19": {
                            "ap_min": 5,
                            "ap_max": 7,
                            "dp": 30
                        },
                        "20": {
                            "ap_min": 6,
                            "ap_max": 8,
                            "dp": 32
                        }
                    }
                },
                "Kite Shield": {
                    "set": "Kite",
                    "ap_min": 0,
                    "ap_max": 0,
                    "dp": 7,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {
                        "ev": 2,
                        "dr": 5,
                        "hp": 50
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "dp": 8
                        },
                        "2": {
                            "dp": 9
                        },
                        "3": {
                            "dp": 10
                        },
                        "4": {
                            "dp": 11
                        },
                        "5": {
                            "dp": 12
                        },
                        "6": {
                            "dp": 13
                        },
                        "7": {
                            "dp": 14
                        },
                        "8": {
                            "dp": 15
                        },
                        "9": {
                            "dp": 16
                        },
                        "10": {
                            "dp": 17
                        },
                        "11": {
                            "dp": 18
                        },
                        "12": {
                            "dp": 19
                        },
                        "13": {
                            "dp": 20
                        },
                        "14": {
                            "dp": 21
                        },
                        "15": {
                            "dp": 22
                        },
                        "16": {
                            "ap_min": 1,
                            "ap_max": 1,
                            "dp": 24
                        },
                        "17": {
                            "ap_min": 2,
                            "ap_max": 2,
                            "dp": 26
                        },
                        "18": {
                            "ap_min": 3,
                            "ap_max": 3,
                            "dp": 31
                        },
                        "19": {
                            "ap_min": 4,
                            "ap_max": 4,
                            "dp": 33
                        },
                        "20": {
                            "ap_min": 5,
                            "ap_max": 5,
                            "dp": 35
                        }
                    }
                },
                "Axion Shield": {
                    "set": "Axion",
                    "ap_min": 4,
                    "ap_max": 6,
                    "dp": 4,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {
                        "ev": 1,
                        "dr": 3
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 5,
                            "ap_max": 7
                        },
                        "2": {
                            "ap_min": 5,
                            "ap_max": 8
                        },
                        "3": {
                            "ap_min": 5,
                            "ap_max": 9
                        },
                        "4": {
                            "ap_min": 5,
                            "ap_max": 10
                        },
                        "5": {
                            "ap_min": 6,
                            "ap_max": 11
                        },
                        "6": {
                            "ap_min": 6,
                            "ap_max": 12
                        },
                        "7": {
                            "ap_min": 6,
                            "ap_max": 13
                        },
                        "8": {
                            "ap_min": 6,
                            "ap_max": 14
                        },
                        "9": {
                            "ap_min": 6,
                            "ap_max": 15
                        },
                        "10": {
                            "ap_min": 7,
                            "ap_max": 16
                        },
                        "11": {
                            "ap_min": 7,
                            "ap_max": 17
                        },
                        "12": {
                            "ap_min": 7,
                            "ap_max": 18
                        },
                        "13": {
                            "ap_min": 7,
                            "ap_max": 19
                        },
                        "14": {
                            "ap_min": 7,
                            "ap_max": 20
                        },
                        "15": {
                            "ap_min": 8,
                            "ap_max": 21
                        },
                        "16": {
                            "ap_min": 11,
                            "ap_max": 24
                        },
                        "17": {
                            "ap_min": 14,
                            "ap_max": 27
                        },
                        "18": {
                            "ap_min": 20,
                            "ap_max": 33
                        },
                        "19": {
                            "ap_min": 23,
                            "ap_max": 36
                        },
                        "20": {
                            "ap_min": 26,
                            "ap_max": 39
                        }
                    }
                },
                "Nouver Shield": {
                    "set": "Nouver",
                    "ap_min": 6,
                    "ap_max": 8,
                    "rarity": "epic",
                    "gems": 2,
                    "item_effects": {
                        "ar": 10
                    },
                    "enhancement_text": "",
                    "enhancement": {
                        "1": {
                            "ap_min": 7,
                            "ap_max": 9
                        },
                        "2": {
                            "ap_min": 8,
                            "ap_max": 10
                        },
                        "3": {
                            "ap_min": 9,
                            "ap_max": 11
                        },
                        "4": {
                            "ap_min": 10,
                            "ap_max": 12
                        },
                        "5": {
                            "ap_min": 11,
                            "ap_max": 13
                        },
                        "6": {
                            "ap_min": 12,
                            "ap_max": 14
                        },
                        "7": {
                            "ap_min": 13,
                            "ap_max": 15
                        },
                        "8": {
                            "ap_min": 14,
                            "ap_max": 16
                        },
                        "9": {
                            "ap_min": 15,
                            "ap_max": 17
                        },
                        "10": {
                            "ap_min": 16,
                            "ap_max": 18
                        },
                        "11": {
                            "ap_min": 18,
                            "ap_max": 20
                        },
                        "12": {
                            "ap_min": 20,
                            "ap_max": 22
                        },
                        "13": {
                            "ap_min": 22,
                            "ap_max": 24
                        },
                        "14": {
                            "ap_min": 24,
                            "ap_max": 26
                        },
                        "15": {
                            "ap_min": 26,
                            "ap_max": 28
                        },
                        "16": {
                            "ap_min": 29,
                            "ap_max": 31
                        },
                        "17": {
                            "ap_min": 32,
                            "ap_max": 34
                        },
                        "18": {
                            "ap_min": 38,
                            "ap_max": 40
                        },
                        "19": {
                            "ap_min": 41,
                            "ap_max": 43
                        },
                        "20": {
                            "ap_min": 44,
                            "ap_max": 46
                        }
                    }
                }
            }
        }
    },
    init: function() {
        this.items["main-weapons"].warrior = this.items["main-weapons"].valkyrie;
        this.items["main-weapons"].wizard = this.items["main-weapons"].witch;

        this.items["secondary-weapons"].warrior = this.items["secondary-weapons"].valkyrie;
        this.items["secondary-weapons"].witch = this.items["secondary-weapons"].ranger;
        this.items["secondary-weapons"].wizard = this.items["secondary-weapons"].ranger;
    }
};

// a small "hack", but hey it works. 
BDOdatabase.init();