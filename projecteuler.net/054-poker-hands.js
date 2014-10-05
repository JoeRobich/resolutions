#! node

// http://jsfiddle.net/k8u4op00/1/

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

Object.prototype.keys=function(){return Object.keys(this);}
Object.prototype.vals=function(){var t=this;return t.keys().map(function(k){return t[k]})}

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
    // Royal flush
    if (cards[0].value == 14)
      return { value: 9 };

    // Straigh flush
    return { value: 8, highCardValue: cards[0].value };
  }

  var groups = cards.group(function(c){return c.value}).vals();
  if (groups.length == 2) {
    // Four of a kind
    var fourOfAKind = groups.find(function(g){return g.length == 4});
    if (fourOfAKind)
      return { value: 7, fourOfAKindValue: fourOfAKind[0].value };

    // Full house
    var threeOfAKind = groups.find(function(g){return g.length == 3});
    var pair = groups.find(function(g){return g.length == 2});
    return { value: 6, threeOfAKindValue: threeOfAKind[0].value, pairValue: pair[0].value };
  }

  if (isFlush)
    return { value: 5 };

  if (isStraight)
    return { value: 4, highCardValue: cards[0].value };

  if (groups.length == 3) {
    // Three of a kind
    var threeOfAKind = groups.find(function(g){return g.length == 3});
    if (threeOfAKind)
      return { value: 3, threeOfAKindValue: threeOfAKind[0].value };

    // Two pairs
    var pairs = groups.filter(function(g){return g.length == 2});
      return { value: 2, pairValues: pairs.map(function(p){return p[0].value}).sort(function(a,b){return b-a;}) };
  }

  if (groups.length == 4) {
    // One Pair
    var pair = groups.find(function(g){return g.length == 2});
    return { value: 1, pairValue: pair[0].value };
  }

  // High card
  return { value: 0 };
}

function parseHand(hand) {
  var cards = [];
  for (var cardIndex = 0; cardIndex < hand.length; cardIndex++) {
    var card = hand[cardIndex].split('');
    var value = determineCardValue(card[0]);
    var suit = card[1];
    cards.push({ value: value, suit: suit });
  }
  cards = cards.sort(function(a, b){return b.value - a.value;});
  var handType = determineHandType(cards);
  return { type: handType, cards: cards };
}

function countWinningHands(hands) {
  var winningHands = 0;
  for (var handIndex = 0; handIndex < hands.length; handIndex++) {
    var hand = hands[handIndex].chunk(5);

    var p1Hand = parseHand(hand[0]);
    var p2Hand = parseHand(hand[1]);

    if (p1Hand.type.value > p2Hand.type.value) {
      winningHands++;
    }
    else if (p1Hand.type.value == p2Hand.type.value) {
      if (p1Hand.type.value == 8) {
        if (p1Hand.type.highCardValue > p2Hand.type.highCardValue) {
          winningHands++;
          continue;
        }
        else if (p1Hand.type.highCardValue < p2Hand.type.highCardValue) {
          continue;
        }
      }
      else if (p1Hand.type.value == 7) {
        if (p1Hand.type.fourOfAKindValue > p2Hand.type.fourOfAKindValue) {
          winningHands++;
          continue;
        }
        else if (p1Hand.type.fourOfAKindValue < p2Hand.type.foundOfAKindValue) {
          continue;
        }
      }
      else if (p1Hand.type.value == 6) {
        if (p1Hand.type.threeOfAKindValue > p2Hand.type.threeOfAKindValue){
          winningHands++;
          continue
        }
        else if (p1Hand.type.threeOfAKindValue == p2Hand.type.threeOfAKindValue) {
          if (p1Hand.type.pairValue > p2Hand.type.pairValue) {
            winningHands++;
            continue;
          }
          else if (p1Hand.type.pairValue < p2Hand.type.pairValue) {
            continue;
          }
        }
        else if (p1Hand.type.threeOfAKindValue < p2Hand.type.threeOfAKindValue) {
          continue;
        }
      }
      else if (p1Hand.type.value == 4) {
        if (p1Hand.type.highCardValue > p2Hand.type.highCardValue) {
          winningHands++;
          continue;
        }
        else if (p1Hand.type.highCardValue < p2Hand.type.highCardValue) {
          continue;
        }
      }
      else if (p1Hand.type.value == 3) {
        if (p1Hand.type.threeOfAKindValue > p2Hand.type.threeOfAKindValue) {
          winningHands++;
          continue;
        }
        else if (p1Hand.type.threeOfAKindValue < p2Hand.type.threeOfAKindValue) {
          continue;
        }
      }
      else if (p1Hand.type.value == 2) {
        if (p1Hand.type.pairValues[0] > p2Hand.type.pairValues[0]){
          winningHands++;
          continue
        }
        else if (p1Hand.type.pairValues[0] == p2Hand.type.pairValues[0]) {
          if (p1Hand.type.pairValues[1] > p2Hand.type.pairValues[1]) {
            winningHands++;
            continue;
          }
          else if (p1Hand.type.pairValues[1] < p2Hand.type.pairValues[1]) {
            continue;
          }
        }
        else if (p1Hand.type.pairValues[0] < p2Hand.type.pairValues[0]) {
          continue;
        }
      }
      else if (p1Hand.type.value == 1) {
        if (p1Hand.type.pairValue > p2Hand.type.pairValue) {
          winningHands++;
          continue;
        }
        else if (p1Hand.type.pairValue < p2Hand.type.pairValue) {
          continue;
        }
      }

      // compare high cards
      for (var cardIndex = 0; cardIndex < 5; cardIndex++) {
        if (p1Hand.cards[cardIndex].value > p2Hand.cards[cardIndex].value) {
          winningHands++;
          break;
        }
        else if (p1Hand.cards[cardIndex].value < p2Hand.cards[cardIndex].value) {
          break;
        }
      }
    }
  }

  return winningHands;
}

var result = countWinningHands(hands);

console.log(result);

// 376
