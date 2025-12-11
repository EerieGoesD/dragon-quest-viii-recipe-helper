// ---------------- DATA ----------------

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
    { category: "Weapon", result: "Erdrick's Sword", ingredients: ["Ye Olde Sword of Erdrick", "Liquid metal sword", "Orichalcum"] },
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
    { category: "Weapon", result: "Megaton hammer", ingredients: ["Über war hammer", "Conquerer's axe", "Orichalcum"] },
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
    { category: "Accessory", result: "Titan belt", ingredients: ["Leather kilt", "Strength ring"] }
];

const STORAGE_KEYS = {
    inventory: "dq8_alchemy_inventory_v1",
    created: "dq8_alchemy_created_v1"
};

// Map result -> recipe for quick lookup
const recipeByResult = {};
recipes.forEach(r => {
    recipeByResult[r.result] = r;
});

// ---------------- HELPERS ----------------

function getAllItemsFromRecipes() {
    const set = new Set();
    recipes.forEach(r => {
        set.add(r.result);
        r.ingredients.forEach(i => set.add(i));
    });
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

// ---------------- BUILD UI ----------------

function buildInventory() {
    const container = document.getElementById("inventory-list");
    const items = getAllItemsFromRecipes();

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
            updateSummary();
        });
        tdCreated.appendChild(cb);
        tr.appendChild(tdCreated);

        tbody.appendChild(tr);
    });
}

// ---------------- UPDATE / RENDER ----------------

function updateCraftable() {
    const inv = getInventorySet();
    let craftableCount = 0;

    const rows = document.querySelectorAll("#recipes-body tr");
    rows.forEach(tr => {
        const result = tr.dataset.result;
        const recipe = recipeByResult[result];
        const cell = tr.querySelector(".craftable-cell");

        const canCraft = recipe.ingredients.every(ing => inv.has(ing));

        if (canCraft) {
            craftableCount++;
            tr.classList.add("craftable-row");
            cell.textContent = "Yes";
            cell.classList.remove("craftable-no");
            cell.classList.add("craftable-yes");
        } else {
            tr.classList.remove("craftable-row");
            cell.textContent = "No";
            cell.classList.add("craftable-no");
            cell.classList.remove("craftable-yes");
        }
    });

    const craftableSummary = document.getElementById("craftable-summary");
    craftableSummary.textContent = `${craftableCount} / ${recipes.length} recipes craftable.`;

    // Also fill craftable table
    const craftableBody = document.getElementById("craftable-body");
    craftableBody.innerHTML = "";
    recipes.forEach(r => {
        const canCraft = r.ingredients.every(ing => inv.has(ing));
        if (!canCraft) return;

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
    });

    updateSummary();
}

function renderCreatedStyles() {
    document.querySelectorAll("#recipes-body tr").forEach(tr => {
        const result = tr.dataset.result;
        const cb = tr.querySelector(".recipe-created");
        if (cb && cb.checked) {
            tr.classList.add("created-row");
        } else {
            tr.classList.remove("created-row");
        }
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
            if (recipe) {
                created.push(recipe);
            }
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

    overall.textContent = `${createdCount} / ${total} recipes created – ${craftableCount} / ${total} recipes currently craftable`;
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

    const combined = { inventory: inventoryState, created: createdState };
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

            document.querySelectorAll(".inventory-checkbox").forEach(cb => {
                cb.checked = !!inventory[cb.dataset.item];
            });
            document.querySelectorAll(".recipe-created").forEach(cb => {
                cb.checked = !!created[cb.dataset.result];
            });

            saveInventory();
            saveCreated();
            updateCraftable();
            renderCreatedStyles();
            updateCreatedList();
            updateSummary();
            alert("Progress imported successfully.");
        } catch (err) {
            console.error(err);
            alert("Failed to import progress. Check the file format.");
        }
    };
    reader.readAsText(file);
}

// ---------------- INIT ----------------

document.addEventListener("DOMContentLoaded", () => {
    buildInventory();
    buildRecipesTable();

    // Load saved state
    loadInventoryState();
    loadCreatedState();

    // Initial renders
    updateCraftable();
    renderCreatedStyles();
    updateCreatedList();
    updateSummary();

    // Export / import events
    const exportBtn = document.getElementById("export-state-btn");
    if (exportBtn) {
        exportBtn.addEventListener("click", exportProgress);
    }
    const importInput = document.getElementById("import-state-input");
    if (importInput) {
        importInput.addEventListener("change", e => {
            const file = e.target.files[0];
            importProgress(file);
            // Reset input so you can re-import the same file if needed
            e.target.value = "";
        });
    }
});
