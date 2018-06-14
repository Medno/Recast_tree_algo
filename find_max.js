module.exports.find_max = find_max;

function find_max(node){
	let max;
	let tmp;

	if (isNaN(max))
		max = node.value;
	if (node.value > max)
		max = node.value;
	if (node.left != null && max < (tmp = find_max(node.left)))
		max = tmp;
	if (node.right != null && max < (tmp = find_max(node.right)))
		max = tmp;
	return (max);
}