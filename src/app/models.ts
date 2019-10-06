export interface SKU {
    itemId: string;
    name: string;
    unitPrice: number;
    image: string;
  };
  
export interface LineItem {
sku: SKU,
quantity: number;
}

// Coming from the database
export const INVENTORY: SKU[] = [
{
    itemId: 'abc',
    name: 'Acorn Squash',
    unitPrice: 1,
    image: 'assets/fruits/acorn_squash.png',
},
{
    itemId: 'def',
    name: 'Broccoli',
    unitPrice: 3,
    image: 'assets/fruits/broccoli.png',
},
{
    itemId: 'ghi',
    name: 'Celery',
    unitPrice: 0.5,
    image: 'assets/fruits/celery.png',
},
{
    itemId: 'jkl',
    name: 'Potato',
    unitPrice: 0.7,
    image: 'assets/fruits/potato.png',
},
{
    itemId: 'mno',
    name: 'Sugar Snap',
    unitPrice: 2,
    image: 'assets/fruits/sugar_snap.png',
},
{
    itemId: 'pqr',
    name: 'Tomato',
    unitPrice: 0.7,
    image: 'assets/fruits/tomato.png',
},
{
    itemId: 'stu',
    name: 'Zucchini',
    unitPrice: 2,
    image: 'assets/fruits/zucchini.png',
}
];
