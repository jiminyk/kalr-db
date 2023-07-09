migrate((db) => {
  const collection = new Collection({
    "id": "6jrifwqfn4urlbh",
    "created": "2023-07-09 03:54:26.459Z",
    "updated": "2023-07-09 03:54:26.459Z",
    "name": "legends",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rju4fwhq",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "sxzwwd6l",
        "name": "rarity",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Legendary",
            "Rare",
            "Uncommon",
            "Common"
          ]
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("6jrifwqfn4urlbh");

  return dao.deleteCollection(collection);
})
