#! node

// http://jsfiddle.net/k8u4op00/2/

// PROBLEM //

/*
In the card game poker, a hand consists of five cards and are ranked, from
lowest to highest, in the following way:

High Card: Highest value card.
One Pair: Two cards of the same value.
Two Pairs: Two different pairs.
Three of a Kind: Three cards of the same value.
Straight: All cards are consecutive values.
Flush: All cards of the same suit.
Full House: Three of a kind and a pair.
Four of a Kind: Four cards of the same value.
Straight Flush: All cards are consecutive values of same suit.
Royal Flush: Ten, Jack, Queen, King, Ace, in same suit.
The cards are valued in the order:
2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, Ace.

If two players have the same ranked hands then the rank made up of the highest
value wins; for example, a pair of eights beats a pair of fives (see example 1
below). But if two ranks tie, for example, both players have a pair of queens,
then highest cards in each hand are compared (see example 4 below); if the
highest cards tie then the next highest cards are compared, and so on.

The file, poker.txt, contains one-thousand random hands dealt to two players.
Each line of the file contains ten cards (separated by a single space): the
first five are Player 1's cards and the last five are Player 2's cards. You can
assume that all hands are valid (no invalid characters or repeated cards), each
player's hand is in no specific order, and in each hand there is a clear winner.

How many hands does Player 1 win?
*/

// HELPERS //

Object.prototype.vals=function(){var t=this;return Object.keys(t).map(function(k){return t[k]})}

Array.prototype.chunk=function(n){var a=[],i=0;while(i<this.length){a.push(this.slice(i,i+n));i+=n}return a}
Array.prototype.group=function(f){return this.reduce(function(g,i){var k=f(i);g[k]=g[k]||[];g[k].push(i);return g},{})}
Array.prototype.find=function(f){for(var i=0;i<this.length;i++)if(f(this[i]))return this[i]}
Array.prototype.all=function(f){for(var i=0;i<this.length;)if(!f(this[i++]))return !1;return !0}

// ANSWER //

function determineCardValue(card) {
  switch (card) {
    case "T" : return 10;
    case "J" : return 11;
    case "Q" : return 12;
    case "K" : return 13;
    case "A" : return 14;
    default : return Number(card);
  }
}

function hasStraight(cards) {
  var value = cards[0].value;
  for (var i = 1; i < cards.length; i++) {
    value--;
    if (cards[i].value !== value)
      return false;
  }
  return true;
}

function determineHandType(cards) {
  var isFlush = cards.all(function(c){return c.suit == cards[0].suit});
  var isStraight = hasStraight(cards);

  if (isFlush && isStraight) {
    if (cards[0].value == 14)
      return { value: 9 };

    return { value: 8, breakerValue: cards[0].value };
  }

  var groups = cards.group(function(c){return c.value}).vals();
  if (groups.length == 2) {
    var fourOfAKind = groups.find(function(g){return g.length == 4});
    if (fourOfAKind)
      return { value: 7, breakerValue: fourOfAKind[0].value };

    var threeOfAKind = groups.find(function(g){return g.length == 3});
    var pair = groups.find(function(g){return g.length == 2});
    return { value: 6, breakerValue: (threeOfAKind[0].value << 4) + pair[0].value };
  }

  if (isFlush)
    return { value: 5 };

  if (isStraight)
    return { value: 4, breakerValue: cards[0].value };

  if (groups.length == 3) {
    var threeOfAKind = groups.find(function(g){return g.length == 3});
    if (threeOfAKind)
      return { value: 3, breakerValue: threeOfAKind[0].value };

    var pairValues = groups.filter(function(g){return g.length == 2}).map(function(p){return p[0].value}).sort(function(a,b){return b-a;});
    return { value: 2, breakerValue: (pairValues[0] << 4) + pairValues[1] };
  }

  if (groups.length == 4) {
    var pair = groups.find(function(g){return g.length == 2});
    return { value: 1, breakerValue: pair[0].value };
  }

  return { value: 0 };
}

function determineHandValue(cards) {
  return cards.reduce(function(s,c,i){return s + (c.value << ((5 - i) * 4))},0);
}

function parseCard(cardString) {
  var card = cardString.split('');
  var value = determineCardValue(card[0]);
  var suit = card[1];
  return { value: value, suit: suit };
}

function parseHand(hand) {
  var cards = hand.map(parseCard).sort(function(a, b){return b.value - a.value;});
  var type = determineHandType(cards);
  var value = determineHandValue(cards);
  return { type: type, value: value };
}

function countWinningHands(hands) {
  var winningHands = 0;
  for (var handIndex = 0; handIndex < hands.length; handIndex++) {
    var hand = hands[handIndex].chunk(5);
    var p1Hand = parseHand(hand[0]);
    var p2Hand = parseHand(hand[1]);

    if (p1Hand.type.value < p2Hand.type.value)
      continue;

    if (p1Hand.type.value == p2Hand.type.value)
      if (p1Hand.type.breakerValue < p2Hand.type.breakerValue)
        continue;
      else if (p1Hand.type.breakerValue == p2Hand.type.breakerValue
            && p1Hand.value < p2Hand.value)
        continue;

    winningHands++;
  }

  return winningHands;
}

var result = countWinningHands(hands);

console.log(result);

// 376
