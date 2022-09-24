/**
 * @param {string[]} messages
 * @param {string[]} senders
 * @return {string}
 */
var largestWordCount = function (messages, senders) {
	const senderWordCount = {};
	let max = 0,
		maxSender = "",
		wordCount;
	for (let i = 0; i < messages.length; i++) {
		wordCount = messages[i].split(" ").length;
		senderWordCount[senders[i]]
			? (senderWordCount[senders[i]] += wordCount)
			: (senderWordCount[senders[i]] = wordCount);
		if (senderWordCount[senders[i]] >= max) {
			max === senderWordCount[senders[i]]
				? maxSender < senders[i] && (maxSender = senders[i])
				: (maxSender = senders[i]);
			max = senderWordCount[senders[i]];
		}
	}
	return maxSender;
};
