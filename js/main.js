// ---------------- RECIPE DATA ----------------

// Equipment recipes (Weapon / Armour / Shield / Headgear / Accessory)
// + Item recipes (Cheese / Medicine / Item)
const recipes = [
  // Weapons
  { category: "Weapon", result: "Assassin's dagger", ingredients: ["Eagle dagger", "Poison needle"] },
  { category: "Weapon", result: "Bandit axe", ingredients: ["Battle axe", "Thief's Key"] },
  { category: "Weapon", result: "Beast talon", ingredients: ["Beast claws", "Ethereal stone"] },
  { category: "Weapon", result: "Blizzard blade", ingredients: ["Bastard sword", "Icicle dirk", "Cold cheese"] },
  { category: "Weapon", result: "Cheiron's bow", ingredients: ["Eros' bow", "Power shield"] },
  { category: "Weapon", result: "Cobra claw", ingredients: ["Fire claw", "Devil's tail"] },
  { category: "Weapon", result: "Copper sword", ingredients: ["Bronze knife", "Bronze knife"] },
  { category: "Weapon", result: "Demon spear", ingredients: ["Battle fork", "Poison needle", "Devil's tail"] },
  { category: "Weapon", result: "Demon whip", ingredients: ["Scourge whip", "Devil's tail"] },
  { category: "Weapon", result: "Double-edged sword", ingredients: ["Über double-edge", "Devil's tail"] },
  { category: "Weapon", result: "Dragon slayer", ingredients: ["Dragonsbane", "Mighty armlet"] },
  { category: "Weapon", result: "Dragonlord claw", ingredients: ["Dragon claws", "Ethereal stone"] },
  { category: "Weapon", result: "Dragontail whip", ingredients: ["Snakeskin whip", "Dragon's scale", "Dragon's scale"] },
  { category: "Weapon", result: "Dragovian king sword", ingredients: ["Dragovian sword", "Liquid metal sword"] },
  { category: "Weapon", result: "Erdrick's sword", ingredients: ["Ye Olde Sword of Erdrick", "Liquid metal sword", "Orichalcum"] },
  { category: "Weapon", result: "Eros' bow", ingredients: ["Hunter's bow", "Garter"] },
  { category: "Weapon", result: "Falcon knife", ingredients: ["Slime earrings", "Tough guy tattoo", "Agility ring"] },
  { category: "Weapon", result: "Fallen angel rapier", ingredients: ["Holy silver rapier", "Devil's tail", "Wing of bat"] },
  { category: "Weapon", result: "Fire claw", ingredients: ["Iron claw", "Flametang boomerang"] },
  { category: "Weapon", result: "Flametang boomerang", ingredients: ["Swallowtail", "Flame shield"] },
  { category: "Weapon", result: "Golden axe", ingredients: ["Iron axe", "Gold nugget"] },
  { category: "Weapon", result: "Hell scythe", ingredients: ["Steel scythe", "Poison moth knife", "Hades' helm"] },
  { category: "Weapon", result: "Holy lance", ingredients: ["Long spear", "Gold rosary"] },
  { category: "Weapon", result: "Holy silver rapier", ingredients: ["Templar's sword", "Holy talisman"] },
  { category: "Weapon", result: "Hunter's bow", ingredients: ["Cypress stick", "Cypress stick", "Strength ring"] },
  { category: "Weapon", result: "Imp knife", ingredients: ["Assassin's dagger", "Devil's tail"] },
  { category: "Weapon", result: "Iron axe", ingredients: ["Farmer's scythe", "Farmer's scythe"] },
  { category: "Weapon", result: "Iron lance", ingredients: ["Cypress stick", "Dagger"] },
  { category: "Weapon", result: "King axe", ingredients: ["Golden axe", "Slime crown"] },
  { category: "Weapon", result: "King cobra claw", ingredients: ["Cobra claw", "Hades' helm"] },
  { category: "Weapon", result: "Leather whip", ingredients: ["Devil's tail", "Saint's ashes"] },
  { category: "Weapon", result: "Liquid metal sword", ingredients: ["Rusty old sword", "Slime crown", "Orichalcum"] },
  { category: "Weapon", result: "Long spear", ingredients: ["Cypress stick", "Cypress stick", "Iron lance"] },
  { category: "Weapon", result: "Lunar fan", ingredients: ["Stellar fan", "Full moon ring", "Gold rosary"] },
  { category: "Weapon", result: "Magma staff", ingredients: ["Wizard's staff", "Rockbomb shard", "Rockbomb shard"] },
  { category: "Weapon", result: "Megaton hammer", ingredients: ["Über war hammer", "Conqueror's axe", "Orichalcum"] },
  { category: "Weapon", result: "Mercury's rapier", ingredients: ["Fallen angel rapier", "Mercury's bandana", "Mercury's bandana"] },
  { category: "Weapon", result: "Metal king spear", ingredients: ["Metal wing boomerang", "Holy lance"] },
  { category: "Weapon", result: "Metal wing boomerang", ingredients: ["Razor wing boomerang", "Metal king spear"] },
  { category: "Weapon", result: "Moon axe", ingredients: ["Golden axe", "Moon's mercy"] },
  { category: "Weapon", result: "Odin's bow", ingredients: ["Cheiron's bow", "Eros' bow", "Great bow"] },
  { category: "Weapon", result: "Peacock fan", ingredients: ["Iron fan", "Hermes' hat"] },
  { category: "Weapon", result: "Razor wing boomerang", ingredients: ["Edged boomerang", "Wing of bat", "Steel scythe"] },
  { category: "Weapon", result: "Reinforced boomerang", ingredients: ["Boomerang", "Iron nail"] },
  { category: "Weapon", result: "Rusty old sword", ingredients: ["Liquid metal sword", "Mystifying mixture", "Cowpat"] },
  { category: "Weapon", result: "Sandstorm spear", ingredients: ["Partisan", "Saint's ashes"] },
  { category: "Weapon", result: "Scourge whip", ingredients: ["Demon whip", "Saint's ashes"] },
  { category: "Weapon", result: "Shamshir of light", ingredients: ["Shimmering dress", "Rune staff", "Light shield"] },
  { category: "Weapon", result: "Sledgehammer", ingredients: ["Giant mallet", "Iron helmet", "Iron helmet"] },
  { category: "Weapon", result: "Snakeskin whip", ingredients: ["Leather whip", "Scale shield"] },
  { category: "Weapon", result: "Solar fan", ingredients: ["Lunar fan", "Flame shield", "Magma staff"] },
  { category: "Weapon", result: "Staff of antimagic", ingredients: ["Wizard's staff", "Rune staff"] },
  { category: "Weapon", result: "Staff of resurrection", ingredients: ["Rune staff", "Life bracer", "Yggdrasil leaf"] },
  { category: "Weapon", result: "Stellar fan", ingredients: ["Rainbow fan", "Highly-strung cheese", "Silver tiara"] },
  { category: "Weapon", result: "Stone axe", ingredients: ["Stone hardhat", "Cypress stick"] },
  { category: "Weapon", result: "Über double-edge", ingredients: ["Double-edged sword", "Saint's ashes", "Saint's ashes"] },
  { category: "Weapon", result: "Über falcon blade", ingredients: ["Falcon blade", "Meteorite bracer"] },
  { category: "Weapon", result: "Über miracle sword", ingredients: ["Miracle sword", "Life bracer"] },
  { category: "Weapon", result: "Über war hammer", ingredients: ["War hammer", "Mighty armlet"] },
  { category: "Weapon", result: "Zombie slayer", ingredients: ["Zombiesbane", "Holy talisman"] },

  // Armour / Clothing
  { category: "Armour", result: "Angel's robe", ingredients: ["Flowing dress", "Magical skirt"] },
  { category: "Armour", result: "Bandit mail", ingredients: ["Heavy armour", "Bandit axe", "Bandit's grass skirt"] },
  { category: "Armour", result: "Boxers", ingredients: ["Bandit's grass skirt", "Bandana"] },
  { category: "Armour", result: "Bronze armour", ingredients: ["Chain mail", "Bronze shield"] },
  { category: "Armour", result: "Bunny suit", ingredients: ["Silk bustier", "Bunny tail"] },
  { category: "Armour", result: "Chain mail", ingredients: ["Wayfarer's clothes", "Chain whip"] },
  { category: "Armour", result: "Crimson robe", ingredients: ["Sage's robe", "Magic water", "Nook grass"] },
  { category: "Armour", result: "Dancer's mail", ingredients: ["Silver mail", "Dancer's costume"] },
  { category: "Armour", result: "Dark robe", ingredients: ["Cloak of evasion", "Wing of bat", "Devil's tail"] },
  { category: "Armour", result: "Divine bustier", ingredients: ["Dangerous bustier", "Shimmering dress"] },
  { category: "Armour", result: "Dogsbody's vest", ingredients: ["Bandit mail", "Plain clothes", "Coral hairpin"] },
  { category: "Armour", result: "Dragon mail", ingredients: ["Silver mail", "Dragon's scale", "Dragon's scale"] },
  { category: "Armour", result: "Fur poncho", ingredients: ["Magic beast hide", "Magic beast hide"] },
  { category: "Armour", result: "Gigant armour", ingredients: ["Bandit mail", "Mighty armlet", "Mighty armlet"] },
  { category: "Armour", result: "Hexlet's skirt", ingredients: ["Magical skirt", "Imp knife", "Mystifying mixture"] },
  { category: "Armour", result: "Iron cuirass", ingredients: ["Iron shield", "Iron shield"] },
  { category: "Armour", result: "Leather armour", ingredients: ["Wayfarer's clothes", "Magic beast hide"] },
  { category: "Armour", result: "Leather dress", ingredients: ["Dancer's costume", "Magic beast hide"] },
  { category: "Armour", result: "Leather kilt", ingredients: ["Boxers", "Magic beast hide"] },
  { category: "Armour", result: "Magical skirt", ingredients: ["Bandit's grass skirt", "Magical hat", "Magical mace"] },
  { category: "Armour", result: "Magic armour", ingredients: ["Full plate armour", "Prayer ring", "Ruby of protection"] },
  { category: "Armour", result: "Metal king armour", ingredients: ["Liquid metal armour", "Slime crown", "Orichalcum"] },
  { category: "Armour", result: "Mirror armour", ingredients: ["Silver mail", "Mirror shield", "Mirror shield"] },
  { category: "Armour", result: "Nitid tutu", ingredients: ["Spangled dress", "Dancer's costume", "Life bracer"] },
  { category: "Armour", result: "Oriental warrior wear", ingredients: ["Flowing dress", "Crimson robe", "Lunar fan"] },
  { category: "Armour", result: "Platinum mail", ingredients: ["Zombie mail", "Saint's ashes"] },
  { category: "Armour", result: "Princess's robe", ingredients: ["Angel's robe", "Gold rosary", "Shimmering dress"] },
  { category: "Armour", result: "Robe of serenity", ingredients: ["Cloak of evasion", "Boxers"] },
  { category: "Armour", result: "Sage's robe", ingredients: ["Magic vestment", "Scholar's cap"] },
  { category: "Armour", result: "Scale armour", ingredients: ["Leather armour", "Dragon's scale"] },
  { category: "Armour", result: "Shimmering dress", ingredients: ["Spangled dress", "Ruby of protection", "Gold bracer"] },
  { category: "Armour", result: "Silver cuirass", ingredients: ["Iron cuirass", "Silver platter", "Silver platter"] },
  { category: "Armour", result: "Spiked armour", ingredients: ["Magic armour", "Edged boomerang"] },
  { category: "Armour", result: "Templar's uniform", ingredients: ["Wayfarer's clothes", "Templar's shield"] },
  { category: "Armour", result: "Über sacred armour", ingredients: ["Sacred armour", "Ruby of protection", "Recovery ring"] },
  { category: "Armour", result: "Wayfarer's clothes", ingredients: ["Plain clothes", "Plain clothes"] },
  { category: "Armour", result: "Zombie mail", ingredients: ["Silver mail", "Zombiesbane"] },

  // Shields
  { category: "Shield", result: "Big bad boss shield", ingredients: ["Big boss shield", "Goddess shield", "Mild cheese"] },
  { category: "Shield", result: "Bronze shield", ingredients: ["Leather shield", "Bronze knife"] },
  { category: "Shield", result: "Dragon shield", ingredients: ["Steel shield", "Dragon's scale", "Dragon's scale"] },
  { category: "Shield", result: "Flame shield", ingredients: ["Magic shield", "Flametang boomerang"] },
  { category: "Shield", result: "Goddess shield", ingredients: ["Thanatos' shield", "Saint's ashes"] },
  { category: "Shield", result: "Ice shield", ingredients: ["Magic shield", "Icicle dirk"] },
  { category: "Shield", result: "Leather shield", ingredients: ["Pot lid", "Magic beast hide"] },
  { category: "Shield", result: "Magic shield", ingredients: ["Steel shield", "Prayer ring", "Ruby of protection"] },
  { category: "Shield", result: "Metal king shield", ingredients: ["Ruinous shield", "Saint's ashes", "Orichalcum"] },
  { category: "Shield", result: "Power shield", ingredients: ["Magic shield", "Strength ring", "Cured cheese"] },
  { category: "Shield", result: "Ruinous shield", ingredients: ["Metal king shield", "Devil's tail"] },
  { category: "Shield", result: "Saintess shield", ingredients: ["Mirror shield", "White shield", "Holy water"] },
  { category: "Shield", result: "Scale shield", ingredients: ["Leather shield", "Dragon's scale"] },
  { category: "Shield", result: "Silver shield", ingredients: ["Mirror shield", "Amor seco essence", "Magic water"] },
  { category: "Shield", result: "Templar's shield", ingredients: ["Iron shield", "Templar's uniform"] },
  { category: "Shield", result: "Thanatos' shield", ingredients: ["Goddess shield", "Devil's tail"] },
  { category: "Shield", result: "White shield", ingredients: ["Light shield", "Fresh milk", "Fresh milk"] },

  // Headgear
  { category: "Headgear", result: "Bronze helmet", ingredients: ["Stone hardhat", "Bronze knife", "Bronze knife"] },
  { category: "Headgear", result: "Bunny ears", ingredients: ["Hairband", "Bunny tail"] },
  { category: "Headgear", result: "Dogsbody's hood", ingredients: ["Coral hairpin", "Bandana", "Tough guy tattoo"] },
  { category: "Headgear", result: "Feathered cap", ingredients: ["Leather hat", "Chimaera wing"] },
  { category: "Headgear", result: "Fur hood", ingredients: ["Feathered cap", "Fur poncho"] },
  { category: "Headgear", result: "Golden tiara", ingredients: ["Thinking cap", "Gold nugget", "Silver tiara"] },
  { category: "Headgear", result: "Hades' helm", ingredients: ["Mythril helm", "Devil's tail"] },
  { category: "Headgear", result: "Happy hat", ingredients: ["Feathered cap", "Elevating shoes"] },
  { category: "Headgear", result: "Hermes' hat", ingredients: ["Feathered cap", "Mercury's bandana"] },
  { category: "Headgear", result: "Hexlet's hat", ingredients: ["Magical hat", "Thinking cap", "Mystifying mixture"] },
  { category: "Headgear", result: "Kunoichi headband", ingredients: ["Iron headgear", "Mercury's bandana"] },
  { category: "Headgear", result: "Mercury's bandana", ingredients: ["Bandana", "Agility ring"] },
  { category: "Headgear", result: "Mythril helm", ingredients: ["Hades' helm", "Saint's ashes"] },
  { category: "Headgear", result: "Phantom mask", ingredients: ["Iron headgear", "Dark robe"] },
  { category: "Headgear", result: "Pointy hat", ingredients: ["Leather hat", "Iron nail"] },
  { category: "Headgear", result: "Raging bull helm", ingredients: ["Mythril helm", "Cowpat", "Fresh milk"] },
  { category: "Headgear", result: "Scholar's cap", ingredients: ["Magical hat", "Scholar's specs"] },
  { category: "Headgear", result: "Silver tiara", ingredients: ["Coral hairpin", "Silver platter"] },
  { category: "Headgear", result: "Skull helm", ingredients: ["Sun crown", "Devil's tail"] },
  { category: "Headgear", result: "Stone hardhat", ingredients: ["Stone axe", "Pointy hat"] },
  { category: "Headgear", result: "Sun crown", ingredients: ["Skull helm", "Saint's ashes"] },
  { category: "Headgear", result: "Thinking cap", ingredients: ["Scholar's cap", "Iron headgear"] },
  { category: "Headgear", result: "Turban", ingredients: ["Bandana", "Bandana"] },

  // Accessories
  { category: "Accessory", result: "Agility ring", ingredients: ["Prayer ring", "Seed of agility"] },
  { category: "Accessory", result: "Catholicon ring", ingredients: ["Full moon ring", "Ring of truth", "Ring of immunity"] },
  { category: "Accessory", result: "Elevating shoes", ingredients: ["Fishnet stockings", "Happy hat"] },
  { category: "Accessory", result: "Full moon ring", ingredients: ["Gold ring", "Poison moth knife"] },
  { category: "Accessory", result: "Goddess ring", ingredients: ["Recovery ring", "Orichalcum"] },
  { category: "Accessory", result: "Holy talisman", ingredients: ["Tough guy tattoo", "Holy water", "Gold rosary"] },
  { category: "Accessory", result: "Life bracer", ingredients: ["Recovery ring", "Gold bracer"] },
  { category: "Accessory", result: "Meteorite bracer", ingredients: ["Agility ring", "Agility ring", "Orichalcum"] },
  { category: "Accessory", result: "Mighty armlet", ingredients: ["Strength ring", "Titan belt"] },
  { category: "Accessory", result: "Prayer ring", ingredients: ["Gold ring", "Seed of magic"] },
  { category: "Accessory", result: "Recovery ring", ingredients: ["Prayer ring", "Seed of life"] },
  { category: "Accessory", result: "Ring of awakening", ingredients: ["Gold ring", "Dream blade"] },
  { category: "Accessory", result: "Ring of clarity", ingredients: ["Gold ring", "Fallen angel rapier"] },
  { category: "Accessory", result: "Ring of immunity", ingredients: ["Gold ring", "Poison needle"] },
  { category: "Accessory", result: "Ring of truth", ingredients: ["Gold ring", "Sandstorm spear"] },
  { category: "Accessory", result: "Ruby of protection", ingredients: ["Prayer ring", "Seed of resilience"] },
  { category: "Accessory", result: "Scholar's specs", ingredients: ["Ring of awakening", "Ring of clarity", "Seed of wisdom"] },
  { category: "Accessory", result: "Skull ring", ingredients: ["Sorcerer's ring", "Devil's tail"] },
  { category: "Accessory", result: "Sorcerer's ring", ingredients: ["Skull ring", "Saint's ashes", "Saint's ashes"] },
  { category: "Accessory", result: "Strength ring", ingredients: ["Prayer ring", "Seed of strength"] },
  { category: "Accessory", result: "Titan belt", ingredients: ["Leather kilt", "Strength ring"] },

  // ---------- ITEMS: CHEESE ----------
  { category: "Cheese", result: "Angel cheese", ingredients: ["Fresh milk", "Premium mould", "Yggdrasil dew"] },
  { category: "Cheese", result: "C-c-cold cheese", ingredients: ["Dragon dung", "Cold cheese", "Premium mould"] },
  { category: "Cheese", result: "Chilly cheese", ingredients: ["Cool cheese", "Waterweed mould"] },
  { category: "Cheese", result: "Chunky cheese", ingredients: ["Plain cheese", "Magic water"] },
  { category: "Cheese", result: "Cold cheese", ingredients: ["Chilly cheese", "Waterweed mould", "Waterweed mould"] },
  { category: "Cheese", result: "Cool cheese", ingredients: ["Plain cheese", "Waterweed mould"] },
  { category: "Cheese", result: "Cured cheese", ingredients: ["Fresh milk", "Premium mould", "Amor seco essence"] },
  { category: "Cheese", result: "Hard cheese", ingredients: ["Plain cheese", "Rock salt"] },
  { category: "Cheese", result: "Highly-strung cheese", ingredients: ["Super spicy cheese", "Cold cheese", "Rock salt"] },
  { category: "Cheese", result: "Mild cheese", ingredients: ["Plain cheese", "Amor seco essence"] },
  { category: "Cheese", result: "Plain cheese", ingredients: ["Fresh milk", "Rennet powder"] },
  { category: "Cheese", result: "Scorching cheese", ingredients: ["Super spicy cheese", "Premium mould", "Dragon dung"] },
  { category: "Cheese", result: "Soft cheese", ingredients: ["Fresh milk", "Rennet powder", "Rock salt"] },
  { category: "Cheese", result: "Spicy cheese", ingredients: ["Plain cheese", "Red mould"] },
  { category: "Cheese", result: "Super spicy cheese", ingredients: ["Spicy cheese", "Nook grass"] },

  // ---------- ITEMS: MEDICINE ----------
  { category: "Medicine", result: "Amor seco essence", ingredients: ["Holy water", "Strong medicine"] },
  { category: "Medicine", result: "Elfin elixir", ingredients: ["Yggdrasil dew", "Magic water"] },
  { category: "Medicine", result: "Greater panacea", ingredients: ["Special medicine", "Special medicine", "Special medicine"] },
  { category: "Medicine", result: "Lesser panacea", ingredients: ["Special medicine", "Special medicine"] },
  { category: "Medicine", result: "Magic water", ingredients: ["Holy water", "Seed of magic"] },
  { category: "Medicine", result: "Moon's mercy", ingredients: ["Moonwort bulb", "Moonwort bulb", "Moonwort bulb"] },
  { category: "Medicine", result: "Rose-root", ingredients: ["Medicinal herb", "Medicinal herb", "Medicinal herb"] },
  { category: "Medicine", result: "Rose-wort", ingredients: ["Medicinal herb", "Medicinal herb", "Moonwort bulb"] },
  { category: "Medicine", result: "Special antidote", ingredients: ["Medicinal herb", "Antidotal herb", "Antidotal herb"] },
  { category: "Medicine", result: "Special medicine", ingredients: ["Strong medicine", "Strong medicine"] },
  { category: "Medicine", result: "Strong antidote", ingredients: ["Medicinal herb", "Antidotal herb"] },
  { category: "Medicine", result: "Strong medicine", ingredients: ["Medicinal herb", "Medicinal herb"] },
  { category: "Medicine", result: "Yggdrasil dew", ingredients: ["Yggdrasil leaf", "Magic water"] },

  // ---------- ITEMS: OTHER ----------
  { category: "Item", result: "Chimaera wing", ingredients: ["Wing of bat", "Wing of bat"] },
  { category: "Item", result: "Holy water", ingredients: ["Amor seco essence", "Rock salt"] },
  { category: "Item", result: "Mystifying mixture", ingredients: ["Holy water", "Wing of bat", "Cowpat"] },
  { category: "Item", result: "Premium mould", ingredients: ["Red mould", "Waterweed mould", "Yggdrasil leaf"] },
  { category: "Item", result: "Sage's stone", ingredients: ["Gold nugget", "Orichalcum", "Yggdrasil dew"] },
  { category: "Item", result: "Thief's Key", ingredients: ["Iron nail", "Bronze knife"] },
  { category: "Item", result: "Timbrel of tension", ingredients: ["Sun crown", "Magic beast hide", "Tough guy tattoo"] }
];

// ---------------- EQUIPMENT STATS FOR OPTIMIZER ----------------

const equipmentStats = [
  // ---------- WEAPONS ----------
  // Swords
  { name: "Cypress stick", slot: "weapon", stat: 4, characters: ["Hero"] },
  { name: "Soldier's sword", slot: "weapon", stat: 8, characters: ["Hero"] },
  { name: "Stone sword", slot: "weapon", stat: 12, characters: ["Hero", "Jessica", "Red"] },
  { name: "Copper sword", slot: "weapon", stat: 13, characters: ["Hero", "Jessica", "Red"] },
  { name: "Rapier", slot: "weapon", stat: 17, characters: ["Angelo"] },
  { name: "Ye Olde Sword of Erdrick", slot: "weapon", stat: 20, characters: ["Hero", "Jessica", "Red"] },
  { name: "Steel broadsword", slot: "weapon", stat: 35, characters: ["Hero", "Jessica", "Red"] },
  { name: "Templar's sword", slot: "weapon", stat: 36, characters: ["Angelo"] },
  { name: "Falcon blade", slot: "weapon", stat: 37, characters: ["Hero", "Angelo", "Jessica", "Red"] },
  { name: "Platinum sword", slot: "weapon", stat: 40, characters: ["Hero", "Angelo", "Jessica", "Red"] },
  { name: "Dream blade", slot: "weapon", stat: 43, characters: ["Hero", "Angelo", "Jessica", "Red"] },
  { name: "Rusty old sword", slot: "weapon", stat: 45, characters: ["Hero", "Jessica", "Red"] },
  { name: "Holy silver rapier", slot: "weapon", stat: 54, characters: ["Angelo"] },
  { name: "Zombiesbane", slot: "weapon", stat: 54, characters: ["Hero", "Jessica", "Red"] },
  { name: "Über falcon blade", slot: "weapon", stat: 55, characters: ["Hero", "Angelo", "Jessica", "Red"] },
  { name: "Bastard sword", slot: "weapon", stat: 61, characters: ["Hero", "Jessica", "Red"] },
  { name: "Fallen angel rapier", slot: "weapon", stat: 61, characters: ["Angelo"] },
  { name: "Zombie slayer", slot: "weapon", stat: 65, characters: ["Hero", "Jessica", "Red"] },
  { name: "Dragonsbane", slot: "weapon", stat: 72, characters: ["Hero", "Jessica", "Red"] },
  { name: "Double-edged sword", slot: "weapon", stat: 76, characters: ["Hero", "Jessica", "Red"] },
  { name: "Über double-edge", slot: "weapon", stat: 76, characters: ["Hero", "Jessica", "Red"] },
  { name: "Mercury's rapier", slot: "weapon", stat: 78, characters: ["Angelo"] },
  { name: "Miracle sword", slot: "weapon", stat: 80, characters: ["Hero", "Jessica", "Red"] },
  { name: "Dragon slayer", slot: "weapon", stat: 83, characters: ["Hero", "Jessica", "Red"] },
  { name: "Blizzard blade", slot: "weapon", stat: 90, characters: ["Hero", "Jessica", "Red"] },
  { name: "Über miracle sword", slot: "weapon", stat: 95, characters: ["Hero", "Jessica", "Red"] },
  { name: "Hell sabre", slot: "weapon", stat: 99, characters: ["Angelo"] },
  { name: "Dragovian sword", slot: "weapon", stat: 107, characters: ["Hero"] },
  { name: "Shamshir of light", slot: "weapon", stat: 110, characters: ["Angelo"] },
  { name: "Demonsbane", slot: "weapon", stat: 116, characters: ["Angelo"] },
  { name: "Liquid metal sword", slot: "weapon", stat: 118, characters: ["Hero", "Angelo", "Jessica", "Red"] },
  { name: "Erdrick's sword", slot: "weapon", stat: 120, characters: ["Hero", "Jessica", "Red"] },
  { name: "Dragovian king sword", slot: "weapon", stat: 137, characters: ["Hero"] },

  // Boomerangs
  { name: "Boomerang", slot: "weapon", stat: 19, characters: ["Hero", "Morrie"] },
  { name: "Edged boomerang", slot: "weapon", stat: 27, characters: ["Hero", "Morrie"] },
  { name: "Reinforced boomerang", slot: "weapon", stat: 32, characters: ["Hero", "Morrie"] },
  { name: "Razor wing boomerang", slot: "weapon", stat: 42, characters: ["Hero", "Morrie"] },
  { name: "Swallowtail", slot: "weapon", stat: 53, characters: ["Hero", "Morrie"] },
  { name: "Flametang boomerang", slot: "weapon", stat: 63, characters: ["Hero", "Morrie"] },
  { name: "Black Buzzard", slot: "weapon", stat: 71, characters: ["Hero", "Morrie"] },
  { name: "Metal wing boomerang", slot: "weapon", stat: 90, characters: ["Hero", "Morrie"] },

  // Spears
  { name: "Golden gar", slot: "weapon", stat: 21, characters: ["Hero"] },
  { name: "Iron lance", slot: "weapon", stat: 24, characters: ["Hero"] },
  { name: "Long spear", slot: "weapon", stat: 30, characters: ["Hero"] },
  { name: "Holy lance", slot: "weapon", stat: 39, characters: ["Hero"] },
  { name: "Battle fork", slot: "weapon", stat: 42, characters: ["Hero"] },
  { name: "Partisan", slot: "weapon", stat: 44, characters: ["Hero"] },
  { name: "Sandstorm spear", slot: "weapon", stat: 67, characters: ["Hero"] },
  { name: "Demon spear", slot: "weapon", stat: 86, characters: ["Hero"] },
  { name: "Hero spear", slot: "weapon", stat: 100, characters: ["Hero"] },
  { name: "Metal king spear", slot: "weapon", stat: 120, characters: ["Hero"] },

  // Axes
  { name: "Stone axe", slot: "weapon", stat: 20, characters: ["Yangus"] },
  { name: "Golden axe", slot: "weapon", stat: 27, characters: ["Yangus"] },
  { name: "Iron axe", slot: "weapon", stat: 38, characters: ["Yangus"] },
  { name: "Battle axe", slot: "weapon", stat: 45, characters: ["Yangus"] },
  { name: "Bandit axe", slot: "weapon", stat: 55, characters: ["Yangus"] },
  { name: "Moon axe", slot: "weapon", stat: 60, characters: ["Yangus"] },
  { name: "King axe", slot: "weapon", stat: 80, characters: ["Yangus"] },
  { name: "Bad axe", slot: "weapon", stat: 90, characters: ["Yangus"] },
  { name: "Conqueror's axe", slot: "weapon", stat: 103, characters: ["Yangus"] },

  // Clubs / Hammers
  { name: "Oaken club", slot: "weapon", stat: 7, characters: ["Yangus", "Morrie"] },
  { name: "Giant mallet", slot: "weapon", stat: 13, characters: ["Yangus", "Morrie"] },
  { name: "Honking hammer", slot: "weapon", stat: 25, characters: ["Yangus", "Morrie"] },
  { name: "Sledgehammer", slot: "weapon", stat: 33, characters: ["Yangus", "Morrie"] },
  { name: "War hammer", slot: "weapon", stat: 51, characters: ["Yangus", "Morrie"] },
  { name: "Über war hammer", slot: "weapon", stat: 69, characters: ["Yangus", "Morrie"] },
  { name: "Megaton hammer", slot: "weapon", stat: 108, characters: ["Yangus", "Morrie"] },

  // Scythes
  { name: "Candy cane", slot: "weapon", stat: 1, characters: ["Yangus"] },
  { name: "Farmer's scythe", slot: "weapon", stat: 28, characters: ["Yangus"] },
  { name: "Steel scythe", slot: "weapon", stat: 42, characters: ["Yangus"] },
  { name: "Hell scythe", slot: "weapon", stat: 65, characters: ["Yangus"] },
  { name: "Bardiche of binding", slot: "weapon", stat: 83, characters: ["Yangus"] },
  { name: "Heavy hatchet", slot: "weapon", stat: 110, characters: ["Yangus"] },

  // Knives
  { name: "Poison needle", slot: "weapon", stat: 0, characters: ["Jessica", "Red"] },
  { name: "Bronze knife", slot: "weapon", stat: 9, characters: ["Jessica", "Red"] },
  { name: "Dagger", slot: "weapon", stat: 18, characters: ["Jessica", "Red"] },
  { name: "Poison moth knife", slot: "weapon", stat: 29, characters: ["Jessica", "Red"] },
  { name: "Falcon knife", slot: "weapon", stat: 34, characters: ["Jessica", "Red"] },
  { name: "Assassin's dagger", slot: "weapon", stat: 37, characters: ["Jessica", "Red"] },
  { name: "Eagle dagger", slot: "weapon", stat: 39, characters: ["Jessica", "Red"] },
  { name: "Icicle dirk", slot: "weapon", stat: 52, characters: ["Jessica", "Red"] },
  { name: "Imp knife", slot: "weapon", stat: 52, characters: ["Jessica", "Red"] },
  { name: "Sword breaker", slot: "weapon", stat: 56, characters: ["Jessica", "Red"] },
  { name: "Dread dagger", slot: "weapon", stat: 78, characters: ["Jessica", "Red"] },

  // Whips
  { name: "Leather whip", slot: "weapon", stat: 6, characters: ["Jessica", "Red"] },
  { name: "Thorn whip", slot: "weapon", stat: 14, characters: ["Jessica", "Red"] },
  { name: "Snakeskin whip", slot: "weapon", stat: 23, characters: ["Jessica", "Red"] },
  { name: "Chain whip", slot: "weapon", stat: 32, characters: ["Jessica", "Red"] },
  { name: "Dragontail whip", slot: "weapon", stat: 47, characters: ["Jessica", "Red"] },
  { name: "Spiked steel whip", slot: "weapon", stat: 62, characters: ["Jessica", "Red"] },
  { name: "Wizardly whip", slot: "weapon", stat: 68, characters: ["Jessica", "Red"] },
  { name: "Demon whip", slot: "weapon", stat: 72, characters: ["Jessica", "Red"] },
  { name: "Scourge whip", slot: "weapon", stat: 99, characters: ["Jessica", "Red"] },
  { name: "Gringham whip", slot: "weapon", stat: 127, characters: ["Jessica", "Red"] },

  // Staves / Maces
  { name: "Wizard's staff", slot: "weapon", stat: 15, characters: ["Angelo", "Jessica"] },
  { name: "Slime stick", slot: "weapon", stat: 22, characters: ["Jessica", "Angelo"] },
  { name: "Lightning staff", slot: "weapon", stat: 24, characters: ["Angelo", "Jessica"] },
  { name: "Magma staff", slot: "weapon", stat: 28, characters: ["Angelo", "Jessica"] },
  { name: "Rune staff", slot: "weapon", stat: 30, characters: ["Angelo", "Jessica"] },
  { name: "Staff of divine wrath", slot: "weapon", stat: 35, characters: ["Angelo", "Jessica"] },
  { name: "Staff of antimagic", slot: "weapon", stat: 41, characters: ["Angelo", "Jessica"] },
  { name: "Staff of resurrection", slot: "weapon", stat: 77, characters: ["Angelo", "Jessica"] },
  { name: "Magical mace", slot: "weapon", stat: 79, characters: ["Angelo", "Jessica"] },

  // Bows
  { name: "Short bow", slot: "weapon", stat: 23, characters: ["Angelo"] },
  { name: "Hunter's bow", slot: "weapon", stat: 30, characters: ["Angelo"] },
  { name: "Eros' bow", slot: "weapon", stat: 45, characters: ["Angelo"] },
  { name: "Cheiron's bow", slot: "weapon", stat: 63, characters: ["Angelo"] },
  { name: "Night sniper", slot: "weapon", stat: 75, characters: ["Angelo"] },
  { name: "Great bow", slot: "weapon", stat: 95, characters: ["Angelo"] },
  { name: "Odin's bow", slot: "weapon", stat: 125, characters: ["Angelo"] },

  // Flails
  { name: "Flail of fury", slot: "weapon", stat: 93, characters: ["Yangus"] },
  { name: "Flail of destruction", slot: "weapon", stat: 125, characters: ["Yangus"] },

  // ---------- ARMOUR ----------
  { name: "Dangerous bustier", slot: "armor", stat: 1, characters: ["Jessica", "Red"] },
  { name: "Jessica's outfit", slot: "armor", stat: 3, characters: ["Jessica"] },
  { name: "Plain clothes", slot: "armor", stat: 4, characters: ["All"] },
  { name: "Bandit's grass skirt", slot: "armor", stat: 5, characters: ["Yangus"] },
  { name: "Wayfarer's clothes", slot: "armor", stat: 7, characters: ["All"] },
  { name: "Boxer shorts", slot: "armor", stat: 8, characters: ["Yangus"] },
  { name: "Silk robe", slot: "armor", stat: 10, characters: ["Angelo", "Jessica", "Red"] },
  { name: "Leather armour", slot: "armor", stat: 11, characters: ["Hero", "Angelo", "Morrie"] },
  { name: "Leather kilt", slot: "armor", stat: 12, characters: ["Yangus"] },
  { name: "Templar's uniform", slot: "armor", stat: 13, characters: ["Angelo"] },
  { name: "Leather dress", slot: "armor", stat: 15, characters: ["Jessica", "Red"] },
  { name: "Scale armour", slot: "armor", stat: 17, characters: ["Hero", "Angelo", "Morrie"] },
  { name: "Chain mail", slot: "armor", stat: 20, characters: ["Yangus", "Morrie"] },
  { name: "Leather cape", slot: "armor", stat: 22, characters: ["Angelo", "Morrie"] },
  { name: "Dancer's costume", slot: "armor", stat: 23, characters: ["Jessica"] },
  { name: "Bronze armour", slot: "armor", stat: 24, characters: ["Hero"] },
  { name: "Iron cuirass", slot: "armor", stat: 25, characters: ["Yangus", "Morrie"] },
  { name: "Fur poncho", slot: "armor", stat: 29, characters: ["Yangus"] },
  { name: "Cloak of evasion", slot: "armor", stat: 29, characters: ["Angelo", "Jessica", "Red", "Morrie"] },
  { name: "Iron armour", slot: "armor", stat: 32, characters: ["Hero", "Yangus"] },
  { name: "Robe of serenity", slot: "armor", stat: 34, characters: ["Jessica", "Red"] },
  { name: "Turtle shell", slot: "armor", stat: 37, characters: ["Yangus", "Morrie"] },
  { name: "Bunny suit", slot: "armor", stat: 38, characters: ["Jessica"] },
  { name: "Full plate armour", slot: "armor", stat: 39, characters: ["Hero"] },
  { name: "Magic vestment", slot: "armor", stat: 39, characters: ["Angelo", "Jessica", "Morrie", "Red"] },
  { name: "Zombie mail", slot: "armor", stat: 42, characters: ["Angelo", "Morrie"] },
  { name: "Silver cuirass", slot: "armor", stat: 44, characters: ["Yangus", "Morrie"] },
  { name: "Silk bustier", slot: "armor", stat: 44, characters: ["Jessica", "Red"] },
  { name: "Spangled dress", slot: "armor", stat: 46, characters: ["Jessica", "Red"] },
  { name: "Posh waistcoat", slot: "armor", stat: 48, characters: ["Angelo"] },
  { name: "Silver mail", slot: "armor", stat: 50, characters: ["Hero", "Angelo"] },
  { name: "Magic bikini", slot: "armor", stat: 50, characters: ["Jessica", "Red"] },
  { name: "Heavy armour", slot: "armor", stat: 52, characters: ["Yangus"] },
  { name: "Sage's robe", slot: "armor", stat: 55, characters: ["Angelo"] },
  { name: "Magical skirt", slot: "armor", stat: 55, characters: ["Jessica", "Red"] },
  { name: "Magic armour", slot: "armor", stat: 55, characters: ["Hero", "Angelo", "Morrie"] },
  { name: "Dancer's mail", slot: "armor", stat: 57, characters: ["Angelo", "Red"] },
  { name: "Flowing dress", slot: "armor", stat: 59, characters: ["Jessica", "Angelo", "Red"] },
  { name: "Dragon mail", slot: "armor", stat: 60, characters: ["Hero", "Yangus", "Morrie"] },
  { name: "Velvet cape", slot: "armor", stat: 60, characters: ["Angelo", "Morrie"] },
  { name: "Shimmering dress", slot: "armor", stat: 67, characters: ["Jessica", "Red"] },
  { name: "Spiked armour", slot: "armor", stat: 68, characters: ["Hero", "Yangus", "Morrie"] },
  { name: "Platinum mail", slot: "armor", stat: 72, characters: ["Hero", "Angelo"] },
  { name: "Angel's robe", slot: "armor", stat: 73, characters: ["Angelo", "Jessica", "Red", "Morrie"] },
  { name: "Bandit mail", slot: "armor", stat: 80, characters: ["Yangus"] },
  { name: "Crimson robe", slot: "armor", stat: 82, characters: ["Angelo", "Jessica", "Morrie"] },
  { name: "Sacred armour", slot: "armor", stat: 84, characters: ["Hero", "Angelo", "Morrie"] },
  { name: "Dark robe", slot: "armor", stat: 87, characters: ["Yangus", "Morrie"] },
  { name: "Mirror armour", slot: "armor", stat: 92, characters: ["Hero", "Angelo"] },
  { name: "Princess's robe", slot: "armor", stat: 94, characters: ["Jessica", "Red"] },
  { name: "Gigant armour", slot: "armor", stat: 95, characters: ["Yangus"] },
  { name: "Liquid metal armour", slot: "armor", stat: 101, characters: ["All"] },
  { name: "Dragon robe", slot: "armor", stat: 103, characters: ["Angelo", "Jessica", "Morrie", "Red"] },
  { name: "Divine bustier", slot: "armor", stat: 105, characters: ["Jessica", "Red"] },
  { name: "Dragovian armour", slot: "armor", stat: 110, characters: ["Hero"] },
  { name: "Metal king armour", slot: "armor", stat: 120, characters: ["All"] },

  // ---------- SHIELDS ----------
  { name: "Pot lid", slot: "shield", stat: 2, characters: ["Yangus", "Jessica", "Red", "Morrie"] },
  { name: "Leather shield", slot: "shield", stat: 4, characters: ["Hero", "Yangus", "Angelo", "Red", "Morrie"] },
  { name: "Scale shield", slot: "shield", stat: 7, characters: ["All"] },
  { name: "Silver platter", slot: "shield", stat: 8, characters: ["Jessica", "Red"] },
  { name: "Bronze shield", slot: "shield", stat: 10, characters: ["Hero", "Yangus"] },
  { name: "Kitty shield", slot: "shield", stat: 12, characters: ["Angelo", "Jessica", "Red"] },
  { name: "Templar's shield", slot: "shield", stat: 14, characters: ["Angelo"] },
  { name: "Iron shield", slot: "shield", stat: 15, characters: ["Hero", "Yangus"] },
  { name: "Light shield", slot: "shield", stat: 17, characters: ["All"] },
  { name: "Steel shield", slot: "shield", stat: 22, characters: ["Hero", "Yangus", "Morrie"] },
  { name: "White shield", slot: "shield", stat: 24, characters: ["Angelo", "Jessica", "Red"] },
  { name: "Magic shield", slot: "shield", stat: 27, characters: ["Hero", "Angelo", "Morrie"] },
  { name: "Dragon shield", slot: "shield", stat: 30, characters: ["Hero", "Yangus", "Morrie"] },
  { name: "Ice shield", slot: "shield", stat: 33, characters: ["Hero", "Angelo", "Red"] },
  { name: "Flame shield", slot: "shield", stat: 34, characters: ["Yangus", "Jessica", "Morrie"] },
  { name: "Bone shield", slot: "shield", stat: 36, characters: ["Yangus"] },
  { name: "Power shield", slot: "shield", stat: 38, characters: ["Hero", "Yangus", "Angelo"] },
  { name: "Mirror shield", slot: "shield", stat: 43, characters: ["Hero", "Angelo", "Morrie"] },
  { name: "Ogre shield", slot: "shield", stat: 45, characters: ["Hero", "Yangus"] },
  { name: "Saintess shield", slot: "shield", stat: 46, characters: ["Jessica", "Red"] },
  { name: "Silver shield", slot: "shield", stat: 48, characters: ["Hero", "Yangus", "Angelo", "Morrie"] },
  { name: "Big boss shield", slot: "shield", stat: 50, characters: ["Yangus"] },
  { name: "Ruinous shield", slot: "shield", stat: 50, characters: ["Hero", "Yangus", "Angelo", "Morrie"] },
  { name: "Thanatos' shield", slot: "shield", stat: 55, characters: ["Hero", "Yangus", "Angelo", "Morrie"] },
  { name: "Goddess shield", slot: "shield", stat: 55, characters: ["Angelo", "Jessica", "Red"] },
  { name: "Dragovian shield", slot: "shield", stat: 60, characters: ["Hero"] },
  { name: "Metal king shield", slot: "shield", stat: 65, characters: ["All"] },

  // ---------- HELMETS ----------
  { name: "Bandana", slot: "helmet", stat: 1, characters: ["Hero"] },
  { name: "Leather hat", slot: "helmet", stat: 3, characters: ["All"] },
  { name: "Hairband", slot: "helmet", stat: 5, characters: ["Jessica", "Red"] },
  { name: "Pointy hat", slot: "helmet", stat: 7, characters: ["Yangus", "Morrie"] },
  { name: "Turban", slot: "helmet", stat: 8, characters: ["Hero", "Yangus"] },
  { name: "Feathered cap", slot: "helmet", stat: 9, characters: ["All"] },
  { name: "Bunny ears", slot: "helmet", stat: 14, characters: ["Jessica"] },
  { name: "Stone hardhat", slot: "helmet", stat: 15, characters: ["Yangus"] },
  { name: "Iron helmet", slot: "helmet", stat: 16, characters: ["Hero", "Angelo"] },
  { name: "Fur hood", slot: "helmet", stat: 18, characters: ["Hero", "Yangus", "Red"] },
  { name: "Hermes' hat", slot: "helmet", stat: 20, characters: ["All"] },
  { name: "Coral hairpin", slot: "helmet", stat: 20, characters: ["Jessica", "Red"] },
  { name: "Slime crown", slot: "helmet", stat: 20, characters: ["Yangus", "Morrie"] },
  { name: "Bronze helmet", slot: "helmet", stat: 20, characters: ["Hero", "Angelo"] },
  { name: "Mercury's bandana", slot: "helmet", stat: 23, characters: ["Hero"] },
  { name: "Silver tiara", slot: "helmet", stat: 24, characters: ["Jessica", "Red"] },
  { name: "Iron mask", slot: "helmet", stat: 25, characters: ["Hero", "Yangus"] },
  { name: "Magical hat", slot: "helmet", stat: 25, characters: ["Jessica", "Red"] },
  { name: "Pirate's hat", slot: "helmet", stat: 30, characters: ["Hero", "Red", "Morrie"] },
  { name: "Platinum headgear", slot: "helmet", stat: 30, characters: ["Hero", "Angelo"] },
  { name: "Happy hat", slot: "helmet", stat: 31, characters: ["Angelo", "Jessica"] },
  { name: "Iron headgear", slot: "helmet", stat: 32, characters: ["Hero", "Yangus", "Morrie"] },
  { name: "Scholar's cap", slot: "helmet", stat: 33, characters: ["Angelo", "Jessica"] },
  { name: "Hades' helm", slot: "helmet", stat: 33, characters: ["Hero", "Yangus"] },
  { name: "Thinking cap", slot: "helmet", stat: 38, characters: ["Angelo", "Jessica"] },
  { name: "Mythril helm", slot: "helmet", stat: 38, characters: ["Hero", "Angelo"] },
  { name: "Raging bull helm", slot: "helmet", stat: 42, characters: ["Hero", "Yangus"] },
  { name: "Golden tiara", slot: "helmet", stat: 43, characters: ["Jessica", "Red"] },
  { name: "Great helm", slot: "helmet", stat: 45, characters: ["Hero", "Yangus"] },
  { name: "Phantom mask", slot: "helmet", stat: 48, characters: ["Angelo", "Morrie"] },
  { name: "Skull helm", slot: "helmet", stat: 49, characters: ["Yangus", "Morrie"] },
  { name: "Dragovian helmet", slot: "helmet", stat: 50, characters: ["Hero"] },
  { name: "Sun crown", slot: "helmet", stat: 52, characters: ["Hero", "Jessica", "Red", "Morrie"] },
  { name: "Metal king helm", slot: "helmet", stat: 55, characters: ["All"] },

  // ---------- ACCESSORIES ----------
  { name: "Agility ring", slot: "accessory", stats: { agility: 15 }, characters: ["All"] },
  { name: "Argon ring", slot: "accessory", stats: { attack: 20, agility: 20 }, characters: ["All"] },
  { name: "Bunny tail", slot: "accessory", stats: { agility: 2 }, characters: ["All"] },
  { name: "Catholicon ring", slot: "accessory", stats: { defence: 15 }, characters: ["All"] },
  { name: "Devil's tail", slot: "accessory", stats: { agility: 10 }, characters: ["Yangus", "Jessica", "Angelo", "Red", "Morrie"] },
  { name: "Dragon's scale", slot: "accessory", stats: { defence: 5 }, characters: ["All"] },
  { name: "Elevating shoes", slot: "accessory", stats: { agility: 5 }, characters: ["All"] },
  { name: "Fire dragon charm", slot: "accessory", stats: { defence: 5 }, characters: ["All"] },
  { name: "Fishnet stockings", slot: "accessory", stats: { defence: 8 }, characters: ["Jessica", "Red"] },
  { name: "Full moon ring", slot: "accessory", stats: { defence: 10 }, characters: ["All"] },
  { name: "Garter", slot: "accessory", stats: { defence: 6 }, characters: ["Jessica", "Red"] },
  { name: "Goddess ring", slot: "accessory", stats: { wisdom: 20 }, characters: ["All"] },
  { name: "Gold bracer", slot: "accessory", stats: { defence: 4 }, characters: ["All"] },
  { name: "Gold ring", slot: "accessory", stats: { defence: 10 }, characters: ["All"] },
  { name: "Gold rosary", slot: "accessory", stats: { wisdom: 5 }, characters: ["All"] },
  { name: "Golden slippers", slot: "accessory", stats: { defence: 1 }, characters: ["All"] },
  { name: "Gospel ring", slot: "accessory", stats: { defence: 5 }, characters: ["All"] },
  { name: "Hearty ring", slot: "accessory", stats: { defence: 1, hp: 10, mp: 10 }, characters: ["All"] },
  { name: "Holy talisman", slot: "accessory", stats: { defence: 10 }, characters: ["All"] },
  { name: "Lady's ring", slot: "accessory", stats: { defence: 2 }, characters: ["All"] },
  { name: "Light dragon charm", slot: "accessory", stats: { defence: 5 }, characters: ["All"] },
  { name: "Life bracer", slot: "accessory", stats: { defence: 5, hp: 30 }, characters: ["All"] },
  { name: "Lord's bracer", slot: "accessory", stats: { attack: 5 }, characters: ["All"] },
  { name: "Lucky pendant", slot: "accessory", stats: { defence: 8 }, characters: ["All"] },
  { name: "Metal slime earrings", slot: "accessory", stats: { agility: 5 }, characters: ["All"] },
  { name: "Meteorite bracer", slot: "accessory", stats: { agility: 50 }, characters: ["All"] },
  { name: "Mighty armlet", slot: "accessory", stats: { attack: 15 }, characters: ["All"] },
  { name: "Prayer ring", slot: "accessory", stats: { defence: 5 }, characters: ["All"] },
  { name: "Recovery ring", slot: "accessory", stats: { defence: 15 }, characters: ["All"] },
  { name: "Ring of awakening", slot: "accessory", stats: { defence: 10 }, characters: ["All"] },
  { name: "Ring of clarity", slot: "accessory", stats: { defence: 10 }, characters: ["All"] },
  { name: "Ring of immunity", slot: "accessory", stats: { defence: 10 }, characters: ["All"] },
  { name: "Ring of truth", slot: "accessory", stats: { defence: 10 }, characters: ["All"] },
  { name: "Ruby of protection", slot: "accessory", stats: { defence: 15 }, characters: ["All"] },
  { name: "Scholar's specs", slot: "accessory", stats: { wisdom: 15 }, characters: ["All"] },
  { name: "Skull ring", slot: "accessory", stats: { agility: 15 }, characters: ["Yangus", "Jessica", "Angelo", "Red", "Morrie"] },
  { name: "Slime earrings", slot: "accessory", stats: { defence: 4 }, characters: ["All"] },
  { name: "Sorcerer's ring", slot: "accessory", stats: { wisdom: 10, mp: 30 }, characters: ["All"] },
  { name: "Strength ring", slot: "accessory", stats: { attack: 5 }, characters: ["All"] },
  { name: "Templar's ring", slot: "accessory", stats: { defence: 5 }, characters: ["All"] },
  { name: "Templar Captain's ring", slot: "accessory", stats: { attack: 10, wisdom: 10 }, characters: ["All"] },
  { name: "Titan belt", slot: "accessory", stats: { attack: 10 }, characters: ["All"] },
  { name: "Tough guy tattoo", slot: "accessory", stats: { attack: 8 }, characters: ["All"] },
];

const CHARACTERS = ["Hero", "Yangus", "Jessica", "Angelo", "Morrie", "Red"];

// ---------------- STORAGE KEYS ----------------

const STORAGE_KEYS = {
  inventory: "dq8_alchemy_inventory_v1",
  created: "dq8_alchemy_created_v1",
  maxMix: "dq8_alchemy_max_mix_v1",
  accessoryPriority: "dq8_optimizer_accessory_priority_v1",
  // NEW
  jessicaSwords: "dq8_optimizer_jessica_can_equip_swords_v1"
};

// Map result -> recipe
const recipeByResult = {};
recipes.forEach(r => {
  recipeByResult[r.result] = r;
});

// ---------------- HELPERS ----------------

function isEquipmentCategory(cat) {
  return ["Weapon", "Armour", "Shield", "Headgear", "Accessory"].includes(cat);
}

function isItemCategory(cat) {
  return ["Cheese", "Medicine", "Item"].includes(cat);
}

function getAllItemsFromRecipes() {
  const set = new Set();
  recipes.forEach(r => {
    set.add(r.result);
    r.ingredients.forEach(i => set.add(i));
  });
  return Array.from(set);
}

function getAllInventoryItems() {
  const set = new Set(getAllItemsFromRecipes());
  equipmentStats.forEach(e => set.add(e.name));
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}

function saveInventory() {
  const state = {};
  document.querySelectorAll(".inventory-checkbox").forEach(cb => {
    state[cb.dataset.item] = cb.checked;
  });
  localStorage.setItem(STORAGE_KEYS.inventory, JSON.stringify(state));
}

function saveCreated() {
  const state = {};
  document.querySelectorAll(".recipe-created").forEach(cb => {
    state[cb.dataset.result] = cb.checked;
  });
  localStorage.setItem(STORAGE_KEYS.created, JSON.stringify(state));
}

function loadInventoryState() {
  const raw = localStorage.getItem(STORAGE_KEYS.inventory);
  if (!raw) return;
  try {
    const state = JSON.parse(raw);
    document.querySelectorAll(".inventory-checkbox").forEach(cb => {
      if (state[cb.dataset.item]) cb.checked = true;
    });
  } catch (e) {
    console.warn("Failed to parse inventory state", e);
  }
}

function loadCreatedState() {
  const raw = localStorage.getItem(STORAGE_KEYS.created);
  if (!raw) return;
  try {
    const state = JSON.parse(raw);
    document.querySelectorAll(".recipe-created").forEach(cb => {
      if (state[cb.dataset.result]) cb.checked = true;
    });
  } catch (e) {
    console.warn("Failed to parse created state", e);
  }
}

function getInventorySet() {
  const set = new Set();
  document.querySelectorAll(".inventory-checkbox").forEach(cb => {
    if (cb.checked) set.add(cb.dataset.item);
  });
  return set;
}

function equipmentAppliesToCharacter(eq, character) {
  if (!eq) return false;
  if (eq.characters.includes("All")) return true;
  return eq.characters.includes(character);
}

const ACCESSORY_PRIORITY_OPTIONS = ["Agility", "Attack", "Defence", "Max HP", "Max MP", "Total Stats", "Wisdom"];
const ACCESSORY_PRIORITY_TO_KEY = {
  "Agility": "agility",
  "Attack": "attack",
  "Defence": "defence",
  "Wisdom": "wisdom",
  "Max HP": "hp",
  "Max MP": "mp",
  "Total Stats": "total"
};

function getAccessoryPriority() {
  const raw = localStorage.getItem(STORAGE_KEYS.accessoryPriority);
  return ACCESSORY_PRIORITY_TO_KEY[raw] ? raw : "Total Stats";
}

function setAccessoryPriority(label) {
  const v = ACCESSORY_PRIORITY_TO_KEY[label] ? label : "Total Stats";
  localStorage.setItem(STORAGE_KEYS.accessoryPriority, v);
}

function bindAccessoryPrioritySelect() {
  const sel = document.getElementById("optimizer-accessory-priority");
  if (!sel) return;

  sel.value = getAccessoryPriority();

  if (!sel.dataset.bound) {
    sel.dataset.bound = "1";
    sel.addEventListener("change", () => {
      setAccessoryPriority(sel.value);
      runOptimizer(false);
    });
  }
}

function accessoryTotal(stats) {
  if (!stats) return 0;
  return (stats.attack || 0) + (stats.agility || 0) + (stats.defence || 0) + (stats.wisdom || 0) + (stats.hp || 0) + (stats.mp || 0);
}

function getAccessoryScore(eq, priorityLabel) {
  const key = ACCESSORY_PRIORITY_TO_KEY[priorityLabel] || "total";
  const s = eq.stats || {};
  if (key === "total") return accessoryTotal(s);
  return s[key] || 0;
}

// ---------------- NEW: JESSICA SWORDS TOGGLE ----------------

const SWORD_WEAPONS = new Set([
  "Cypress stick",
  "Soldier's sword",
  "Stone sword",
  "Copper sword",
  "Rapier",
  "Ye Olde Sword of Erdrick",
  "Steel broadsword",
  "Templar's sword",
  "Falcon blade",
  "Platinum sword",
  "Dream blade",
  "Rusty old sword",
  "Holy silver rapier",
  "Zombiesbane",
  "Über falcon blade",
  "Bastard sword",
  "Fallen angel rapier",
  "Zombie slayer",
  "Dragonsbane",
  "Double-edged sword",
  "Über double-edge",
  "Mercury's rapier",
  "Miracle sword",
  "Dragon slayer",
  "Blizzard blade",
  "Über miracle sword",
  "Hell sabre",
  "Dragovian sword",
  "Shamshir of light",
  "Demonsbane",
  "Liquid metal sword",
  "Erdrick's sword",
  "Dragovian king sword"
]);

function isSwordWeapon(eq) {
  return !!eq && eq.slot === "weapon" && SWORD_WEAPONS.has(eq.name);
}

function getJessicaCanEquipSwords() {
  const raw = localStorage.getItem(STORAGE_KEYS.jessicaSwords);
  // Default: false (until the ability is unlocked)
  if (raw === null) return false;
  return raw === "1" || raw === "true";
}

function setJessicaCanEquipSwords(v) {
  localStorage.setItem(STORAGE_KEYS.jessicaSwords, v ? "1" : "0");
}

function bindJessicaSwordsCheckbox() {
  const cb = document.getElementById("optimizer-jessica-swords");
  if (!cb) return;

  cb.checked = getJessicaCanEquipSwords();

  if (!cb.dataset.bound) {
    cb.dataset.bound = "1";
    cb.addEventListener("change", () => {
      setJessicaCanEquipSwords(cb.checked);
      runOptimizer(false);
    });
  }
}

// ---------------- MAX MIX FILTER (2 or 3) ----------------

function getMaxMixItems() {
  const raw = localStorage.getItem(STORAGE_KEYS.maxMix);
  const n = parseInt(raw || "3", 10);
  return n === 2 || n === 3 ? n : 3;
}

function setMaxMixItems(n) {
  const v = n === 2 ? 2 : 3;
  localStorage.setItem(STORAGE_KEYS.maxMix, String(v));
}

function bindMaxMixSelect() {
  const maxMixSelect = document.getElementById("max-mix-select");
  if (!maxMixSelect) return;

  // set initial UI from saved value
  maxMixSelect.value = String(getMaxMixItems());

  // bind once
  if (!maxMixSelect.dataset.bound) {
    maxMixSelect.dataset.bound = "1";
    maxMixSelect.addEventListener("change", () => {
      setMaxMixItems(parseInt(maxMixSelect.value, 10));
      updateCraftable();
    });
  }
}

// ---------------- BUILD UI ----------------

function buildInventory() {
  const container = document.getElementById("inventory-list");
  const items = getAllInventoryItems();

  items.forEach(item => {
    const label = document.createElement("label");
    label.className = "inventory-item";

    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.className = "inventory-checkbox";
    cb.dataset.item = item;
    cb.addEventListener("change", () => {
      saveInventory();
      updateCraftable();
      runOptimizer(false);
    });

    label.appendChild(cb);
    label.appendChild(document.createTextNode(" " + item));
    container.appendChild(label);
  });
}

function buildRecipesTable() {
  const tbody = document.getElementById("recipes-body");

  recipes.forEach(r => {
    const tr = document.createElement("tr");
    tr.dataset.result = r.result;
    tr.dataset.category = r.category;

    const tdCat = document.createElement("td");
    tdCat.textContent = r.category;
    tr.appendChild(tdCat);

    const tdRes = document.createElement("td");
    tdRes.textContent = r.result;
    tr.appendChild(tdRes);

    const tdIng = document.createElement("td");
    tdIng.textContent = r.ingredients.join(" + ");
    tr.appendChild(tdIng);

    const tdCraft = document.createElement("td");
    tdCraft.className = "craftable-cell craftable-no";
    tdCraft.textContent = "No";
    tr.appendChild(tdCraft);

    const tdCreated = document.createElement("td");
    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.className = "recipe-created";
    cb.dataset.result = r.result;
    cb.addEventListener("change", () => {
      saveCreated();
      renderCreatedStyles();
      updateCreatedList();
      updateCraftable();
      updateSummary();
    });
    tdCreated.appendChild(cb);
    tr.appendChild(tdCreated);

    tbody.appendChild(tr);
  });
}

// ---------------- FILTERS ----------------

function applyRecipeFilters() {
  const showEquip = document.getElementById("filter-equipment")?.checked ?? true;
  const showItems = document.getElementById("filter-items")?.checked ?? true;

  document.querySelectorAll("#recipes-body tr").forEach(tr => {
    const cat = tr.dataset.category;
    const isEquip = isEquipmentCategory(cat);
    const isItem = isItemCategory(cat);

    let show = true;
    if (isEquip && !showEquip) show = false;
    if (isItem && !showItems) show = false;

    tr.style.display = show ? "" : "none";
  });
}

// ---------------- UPDATE / RENDER ----------------

function updateCraftable() {
  const inv = getInventorySet();
  const craftableBody = document.getElementById("craftable-body");
  const craftableNCBody = document.getElementById("craftable-not-created-body");
  craftableBody.innerHTML = "";
  craftableNCBody.innerHTML = "";

  const maxMix = getMaxMixItems();
  const eligibleTotal = recipes.filter(r => r.ingredients.length <= maxMix).length;

  let craftableShownCount = 0;
  let craftableNotCreatedShownCount = 0;

  recipes.forEach(r => {
    const canCraft = r.ingredients.every(ing => inv.has(ing));
    const createdCb = document.querySelector(`.recipe-created[data-result="${CSS.escape(r.result)}"]`);
    const isCreated = createdCb ? createdCb.checked : false;

    // Update main table craftable column + highlight (always based on actual ingredients)
    const mainRow = document.querySelector(`#recipes-body tr[data-result="${CSS.escape(r.result)}"]`);
    if (mainRow) {
      const cell = mainRow.querySelector(".craftable-cell");
      if (canCraft) {
        mainRow.classList.add("craftable-row");
        cell.textContent = "Yes";
        cell.classList.remove("craftable-no");
        cell.classList.add("craftable-yes");
      } else {
        mainRow.classList.remove("craftable-row");
        cell.textContent = "No";
        cell.classList.add("craftable-no");
        cell.classList.remove("craftable-yes");
      }
    }

    // Only show in craftable tables if recipe uses <= maxMix ingredients
    if (canCraft && r.ingredients.length <= maxMix) {
      craftableShownCount++;

      const tr = document.createElement("tr");
      const tdCat = document.createElement("td");
      const tdRes = document.createElement("td");
      const tdIng = document.createElement("td");
      tdCat.textContent = r.category;
      tdRes.textContent = r.result;
      tdIng.textContent = r.ingredients.join(" + ");
      tr.appendChild(tdCat);
      tr.appendChild(tdRes);
      tr.appendChild(tdIng);
      craftableBody.appendChild(tr);

      if (!isCreated) {
        craftableNotCreatedShownCount++;
        craftableNCBody.appendChild(tr.cloneNode(true));
      }
    }
  });

  const craftableSummary = document.getElementById("craftable-summary");
  if (craftableSummary) {
    craftableSummary.textContent = `${craftableShownCount} / ${eligibleTotal} recipes craftable (max ${maxMix} items).`;
  }

  const craftableNCSummary = document.getElementById("craftable-not-created-summary");
  if (craftableNCSummary) {
    craftableNCSummary.textContent =
      `${craftableNotCreatedShownCount} craftable recipes (max ${maxMix} items) that are not yet created.`;
  }

  updateSummary();
}

function renderCreatedStyles() {
  document.querySelectorAll("#recipes-body tr").forEach(tr => {
    const cb = tr.querySelector(".recipe-created");
    if (cb && cb.checked) tr.classList.add("created-row");
    else tr.classList.remove("created-row");
  });
}

function updateCreatedList() {
  const list = document.getElementById("created-list");
  list.innerHTML = "";

  const created = [];
  document.querySelectorAll(".recipe-created").forEach(cb => {
    if (cb.checked) {
      const result = cb.dataset.result;
      const recipe = recipeByResult[result];
      if (recipe) created.push(recipe);
    }
  });

  if (created.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No recipes marked as created yet.";
    list.appendChild(li);
    return;
  }

  created.forEach(r => {
    const li = document.createElement("li");
    li.textContent = `[${r.category}] ${r.result} – ${r.ingredients.join(" + ")}`;
    list.appendChild(li);
  });
}

function updateSummary() {
  const overall = document.getElementById("overall-summary");
  const total = recipes.length;

  let createdCount = 0;
  document.querySelectorAll(".recipe-created").forEach(cb => {
    if (cb.checked) createdCount++;
  });

  let craftableCount = 0;
  document.querySelectorAll("#recipes-body .craftable-cell").forEach(cell => {
    if (cell.textContent === "Yes") craftableCount++;
  });

  if (overall) {
    overall.textContent =
      `${createdCount} / ${total} recipes created – ${craftableCount} / ${total} recipes currently craftable`;
  }
}

// ---------------- EXPORT / IMPORT ----------------

function exportProgress() {
  const inventoryState = {};
  document.querySelectorAll(".inventory-checkbox").forEach(cb => {
    inventoryState[cb.dataset.item] = cb.checked;
  });

  const createdState = {};
  document.querySelectorAll(".recipe-created").forEach(cb => {
    createdState[cb.dataset.result] = cb.checked;
  });

  const combined = {
    inventory: inventoryState,
    created: createdState,
    maxMix: getMaxMixItems(), // include (safe)
    // NEW (safe)
    accessoryPriority: getAccessoryPriority(),
    jessicaSwords: getJessicaCanEquipSwords()
  };

  const json = JSON.stringify(combined, null, 2);

  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "dq8-alchemy-progress.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  URL.revokeObjectURL(url);
}

function importProgress(file) {
  if (!file) return;

  const reader = new FileReader();
  reader.onload = e => {
    try {
      const data = JSON.parse(e.target.result);

      const inventory = data.inventory || {};
      const created = data.created || {};
      const maxMix = data.maxMix; // may be missing in older files
      const accessoryPriority = data.accessoryPriority; // optional
      const jessicaSwords = data.jessicaSwords; // optional

      document.querySelectorAll(".inventory-checkbox").forEach(cb => {
        cb.checked = !!inventory[cb.dataset.item];
      });

      document.querySelectorAll(".recipe-created").forEach(cb => {
        cb.checked = !!created[cb.dataset.result];
      });

      if (maxMix === 2 || maxMix === 3) {
        setMaxMixItems(maxMix);
        const sel = document.getElementById("max-mix-select");
        if (sel) sel.value = String(maxMix);
      }

      if (ACCESSORY_PRIORITY_TO_KEY[accessoryPriority]) {
        setAccessoryPriority(accessoryPriority);
        const sel = document.getElementById("optimizer-accessory-priority");
        if (sel) sel.value = accessoryPriority;
      }

      if (typeof jessicaSwords === "boolean") {
        setJessicaCanEquipSwords(jessicaSwords);
        const cb = document.getElementById("optimizer-jessica-swords");
        if (cb) cb.checked = jessicaSwords;
      }

      saveInventory();
      saveCreated();
      updateCraftable();
      renderCreatedStyles();
      updateCreatedList();
      updateSummary();
      runOptimizer(false);

      alert("Progress imported successfully.");
    } catch (err) {
      console.error(err);
      alert("Failed to import progress. Check the file format.");
    }
  };

  reader.readAsText(file);
}

// ---------------- EQUIPMENT OPTIMIZER ----------------

function runOptimizer(showAlertIfEmpty = true) {
  const output = document.getElementById("optimizer-output");
  if (!output) return;

  const inv = getInventorySet();
  const ownedEquip = equipmentStats.filter(e => inv.has(e.name));

  if (ownedEquip.length === 0) {
    if (showAlertIfEmpty) {
      output.innerHTML = '<p class="small-text">No equipment selected in inventory.</p>';
    }
    return;
  }

  const accessoryPriority = getAccessoryPriority();
  const jessicaCanEquipSwords = getJessicaCanEquipSwords();

  const slots = ["weapon", "armor", "shield", "helmet", "accessory"];
  const result = {};

  function scoreFor(slot, item) {
    if (!item) return -Infinity;
    if (slot === "accessory") return getAccessoryScore(item, accessoryPriority);
    return typeof item.stat === "number" ? item.stat : 0;
  }

  CHARACTERS.forEach(ch => {
    result[ch] = {};
    slots.forEach(slot => {
      let candidates = ownedEquip.filter(e => e.slot === slot && equipmentAppliesToCharacter(e, ch));

      // NEW: if Jessica can't equip swords yet, exclude swords from her weapon candidates
      if (ch === "Jessica" && slot === "weapon" && !jessicaCanEquipSwords) {
        candidates = candidates.filter(e => !isSwordWeapon(e));
      }

      if (candidates.length === 0) {
        result[ch][slot] = null;
      } else {
        const best = candidates.reduce((bestSoFar, cur) => {
          if (!bestSoFar) return cur;
          const a = scoreFor(slot, bestSoFar);
          const b = scoreFor(slot, cur);
          if (b > a) return cur;
          if (b < a) return bestSoFar;

          // tie-break: prefer higher total stats for accessories, otherwise keep existing
          if (slot === "accessory") {
            const ta = accessoryTotal(bestSoFar.stats || {});
            const tb = accessoryTotal(cur.stats || {});
            if (tb > ta) return cur;
            if (tb < ta) return bestSoFar;
          }
          return bestSoFar;
        }, null);
        result[ch][slot] = best;
      }
    });
  });

  let html = "";
  html += '<table class="table table-striped table-hover">';
  html += "<thead><tr>";
  html += "<th>Character</th>";
  html += "<th>Weapon (ATK)</th>";
  html += "<th>Armour (DEF)</th>";
  html += "<th>Shield (DEF)</th>";
  html += "<th>Helmet (DEF)</th>";
  html += `<th>Accessory (${accessoryPriority})</th>`;
  html += "</tr></thead><tbody>";

  CHARACTERS.forEach(ch => {
    const weapon = result[ch].weapon;
    const armor = result[ch].armor;
    const shield = result[ch].shield;
    const helmet = result[ch].helmet;
    const accessory = result[ch].accessory;

    html += "<tr>";
    html += `<td>${ch}</td>`;
    html += `<td>${weapon ? weapon.name + " (" + scoreFor("weapon", weapon) + ")" : "-"}</td>`;
    html += `<td>${armor ? armor.name + " (" + scoreFor("armor", armor) + ")" : "-"}</td>`;
    html += `<td>${shield ? shield.name + " (" + scoreFor("shield", shield) + ")" : "-"}</td>`;
    html += `<td>${helmet ? helmet.name + " (" + scoreFor("helmet", helmet) + ")" : "-"}</td>`;
    html += `<td>${accessory ? accessory.name + " (" + scoreFor("accessory", accessory) + ")" : "-"}</td>`;
    html += "</tr>";
  });

  html += "</tbody></table>";
  output.innerHTML = html;
}

// ---------------- INIT ----------------

document.addEventListener("DOMContentLoaded", () => {
  buildInventory();
  buildRecipesTable();

  // bind dropdown + filters (uses the HTML dropdown only)
  bindMaxMixSelect();
  bindAccessoryPrioritySelect();

  // NEW: bind Jessica swords checkbox
  bindJessicaSwordsCheckbox();

  // Load saved state
  loadInventoryState();
  loadCreatedState();

  // Bulk inventory buttons
  const tickAllBtn = document.getElementById("inventory-tick-all");
  const untickAllBtn = document.getElementById("inventory-untick-all");

  if (tickAllBtn) {
    tickAllBtn.addEventListener("click", () => {
      document.querySelectorAll(".inventory-checkbox").forEach(cb => {
        cb.checked = true;
      });
      saveInventory();
      updateCraftable();
      runOptimizer(false);
    });
  }

  if (untickAllBtn) {
    untickAllBtn.addEventListener("click", () => {
      document.querySelectorAll(".inventory-checkbox").forEach(cb => {
        cb.checked = false;
      });
      saveInventory();
      updateCraftable();
      runOptimizer(false);
    });
  }

  // Export / import events
  const exportBtn = document.getElementById("export-state-btn");
  if (exportBtn) exportBtn.addEventListener("click", exportProgress);

  const importInput = document.getElementById("import-state-input");
  if (importInput) {
    importInput.addEventListener("change", e => {
      const file = e.target.files[0];
      importProgress(file);
      e.target.value = "";
    });
  }

  // Filter events
  const filterEquip = document.getElementById("filter-equipment");
  const filterItems = document.getElementById("filter-items");
  if (filterEquip) filterEquip.addEventListener("change", applyRecipeFilters);
  if (filterItems) filterItems.addEventListener("change", applyRecipeFilters);

  // Optimizer button
  const optBtn = document.getElementById("optimizer-run-btn");
  if (optBtn) optBtn.addEventListener("click", () => runOptimizer(true));

  // Initial renders
  renderCreatedStyles();
  updateCreatedList();
  updateCraftable();
  applyRecipeFilters();
  runOptimizer(false);
});
