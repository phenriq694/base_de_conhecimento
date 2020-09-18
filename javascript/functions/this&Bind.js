const person = {
  saudation: 'Good Morning!',
  talk() {
    console.log(this.saudation)
  }
}

// Output: Good Morning!
person.talk()

// Output: Undefined
const talk = person.talk
talk()

// Output: Good Morning!
const personTalk = person.talk.bind(person)
personTalk()