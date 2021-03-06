import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
    showModal: function(name, model) {
      this.render(name, {
        into: 'application',
        outlet: 'modal',
        model: model
      });
    },
    removeModal: function() {
      this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    }
  },
  model() {
    this.store.push('game', {id: 1, title: 'Alchemist', description: 'In Alchemists, two to four budding alchemists compete to discover the secrets of their mystical art. Points can be earned in various ways, but most points are earned by publishing theories – correct theories, that is — and therein lies the problem. The game is played in six rounds. At the beginning of the round, players choose their play order. Those who choose to play later get more rewards. Players declare all their actions by placing cubes on the various action spaces, then each action space is evaluated in order. Players gain knowledge by mixing ingredients and testing the results using a smartphone app (iOS, Android, and also Windows) that randomizes the rules of alchemy for each new game. And if the alchemists are longing for something even more special, they can always buy magical artifacts to get an extra push. There are 9 of them (different for each game) and they are not only very powerful, but also very expensive. But money means nothing, when there\'s academic pride at stake! And the possession of these artifacts will definitely earn you some reputation too. Players can also earn money by selling potions of questionable quality to adventurers, but money is just a means to an end. The alchemists don\'t want riches, after all. They want respect, and respect usually comes from publishing theories.', image: 'alchemist.png'});
    this.store.push('game', {id: 2, title: 'Betrayal at House on the Hill', description: 'Betrayal at House on the Hill quickly builds suspense and excitement as players explore a haunted mansion of their own design, encountering spirits and frightening omens that foretell their fate. With an estimated one hour playing time, Betrayal at House on the Hill is ideal for parties, family gatherings or casual fun with friends. Betrayal at House on the Hill is a tile game that allows players to build their own haunted house room by room, tile by tile, creating a new thrilling game board every time. The game is designed for three to six people, each of whom plays one of six possible characters. Secretly, one of the characters betrays the rest of the party, and the innocent members of the party must defeat the traitor in their midst before it’s too late! Betrayal at House on the Hill will appeal to any game player who enjoys a fun, suspenseful, and strategic game. Betrayal at House on the Hill includes detailed game pieces, including character cards, pre-painted plastic figures, and special tokens, all of which help create a spooky atmosphere and streamline game play.', image: 'betrayal.jpg'});
    this.store.push('game', {id: 3, title: 'Rattle, Battle, Grab the Loot', description: 'Rattle, Battle, Grab the Loot takes the fun of rolling dice and combines it with a rich scenario deck to make each game play differently. Each round, the players battle it out with merchant vessels and other ships, trying to grab as much loot as possible. One player takes dice from all the players, rattles them in their hand, then tosses them into the game box to resolve the battle. Where your dice land in the box, in addition to the symbols rolled, determines the results of the battle, then players claim their loot. Players may now return to port to upgrade their ship, hire new crew, or give their goods to the Pirate King for his favor.', image: 'rattlebattle.jpg'});

    this.store.push('ownedGame', {id: 1, game: 1});
  }
});