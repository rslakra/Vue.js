const CommerceWebApp = {

    /**
     * Data function data returns the deck of data.
     * @returns
     */
    data() {
        return {
            deckName: 'Welcome to The e-commerce Application!',
            // you can avoid using the repeated key/value if they are same as here
            // flashCards: flashCards
            flashCards,
            index: 0,
            isFlipped: false,
            moreDetailsUrl: 'https://vuejs.org/guide/quick-start.html',
            userName: "Username"
        };
    },

    /**
     * Holds methods
     */
    methods: {

        /**
         * Displays the previous card (just decrease the index to next)
         */
        moveCards(change) {
            // console.log("moveCards(" + change + "), index:" + this.index);
            // validate the index is under the bounds when moving.
            if (this.flashCards[this.index + change]) {
                this.index += change;
                this.isFlipped = false;
            }
        },
    }

};