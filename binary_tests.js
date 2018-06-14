const find_max = require('./find_max');

// ----BINARY TEST---- //
let max;
let nbnode = {value: 7};
let proba = 1;
let test = 10;

while (test)
{
	let tree;
	tree = new_tree(tree, nbnode, proba);
	max = find_max.find_max(tree);
	display_tree(tree, 1);
	console.log('Value du max : ' + max + '\n');
	test--;
}

// ----CREATION OF A RANDOM TREE---- //

function init_node(val){
	this.value = val;
	this.left  = null;
	this.right = null;
}

function decrement_nb(nb){
	nb.value--;
	return (1);
}

function create_node(){
	return (new init_node(Math.floor(Math.random() * 200) - 100));
}

function init_tree(tree_root, nbnode, proba){
	let node;

	if (nbnode.value > 1)
	{
		if (tree_root == null)
		{
			node = create_node();
			tree_root = node;
		}
		if (!tree_root.left && Math.random() < proba && decrement_nb(nbnode) && nbnode.value)
			tree_root.left = create_node();
		if (!tree_root.right && Math.random() < proba && nbnode.value && decrement_nb(nbnode) && nbnode.value)
			tree_root.right = create_node();
		if (tree_root.left && nbnode.value)
			tree_root.left = init_tree(tree_root.left, nbnode, proba / 2);
		if (tree_root.right && nbnode.value)
			tree_root.right = init_tree(tree_root.right, nbnode, proba / 2);
	}
	return (tree_root);
}

function new_tree(tree_root, nbnode, proba){
	let tmp;

	tmp = {value: nbnode.value};
	while (tmp.value > 1)
		tree_root = init_tree(tree_root, tmp, proba);
	return (tree_root);
}

function display_tree(node, index){
	console.log('Level : ' + index + ' Node\'s value : ' + node.value);
	if (node.left)
	{
		console.log('Left-side');
		display_tree(node.left, index + 1);
	}
	if (node.right)
	{
		console.log('Right-side');
		display_tree(node.right, index + 1);
	}
}
