/*Question B -- Web Crawler: I wrote a crawler that visits web pages,
stores a few keywords in a database, and follows links to other
web pages. I noticed that my crawler was wasting a lot of time visiting
the same pages over and over, so I made a set, "visited",
where I'm storing URLs I've already visited.
Now the crawler only visits a URL if it hasn't already been visited.
Let’s see if we can make this crawler use less memory. See if you can
come up with a data structure better than a hash that just stores
the entire URL. How can we trim down the amount of space taken up by
"visited"? Explain in words and implement your solution.*/

//*********************** MY ANSWER ***********************************


/*A trie is a more efficient data structure than a set object for
saving many URLS, because you won't waste memory by repeating key
paths (prefixes). Think of a website called cat.com. What if you
wanted to crawl websites that had something to do with cats?
How many websites use the path www.cat in their URL? The answer
is "many." Think of www.cat.com, www.cat.com/food, www.caturday.com,
www.catgifs.com, and the list goes on...*/

/*Instead of wasting ram storing "www.cat" many times in a row, we can
use a trie data structure to branch off prefixes. Therefore, we store
www.cat ONLY once as a prefix and '/food,'' 'urday.com,' etc, all
become seperate branches in the tree.*/

//*** class Node ****

/*Each character in the URL will represent a node in the trie and each node
points to the next character in the URL (aka it's children). We will
create an empty object to store each "child," since each URL character
(or object key) can have many branches or "children" as it's object value.
Basically each character in a url is an node object key that points to
another object as it's value aka the next URL character (an object that
is nested within another object).
Here is a crude representation:
this.root = {"c"}:{"a"}:{"t"}, end:true}*/

/*In our node class constructor, we create a boolean value "end" and set it
to false. This boolean value will determine the end of a URL,
otherwise we won't be able to determine whether a path like
"www.cat.com" exists on it's own in as a valid url. */

class Node {
  constructor() {
    this.children = new Map();
    this.end = false;
  }
}

// In the trie data structure, our root is the first character of the url
//(or first node). We create a new node and set it to the root

class Trie {
  constructor() {
    this.root = new Node();
  }

//  A function to add a new URL to the 'visited' data structure
  save(url) {
    // we create a "pointer" node that starts at the root.
    let currentNode = this.root;

     // we iterate through each character in the URL
    for (let i=0; i<url.length; i++) {
      let currentChar = url[i];

      // if the current node does not point to the
      // current character of the URL, we create a new node and set it
      //as a "child" or "value" of the current node 'children' key.
      if (!currentNode.children.has(currentChar)){
        currentNode.children.set(currentChar, new Node())
      }
  // we set the current pointer to the next node or url character in the trie.
      currentNode = currentNode.children.get(currentChar)
    }

  // At the end of the iteration, we reach the end of the URL, so we set that
  //current node's end property boolean value to true since it is the terminal node.
    currentNode.end = true;
  }


// we create a function to check if we have a specific URL already saved in our
//visited set. With this function, we can search for specific URLS that our
//crawler has already visited.
  search(url) {
    // we set the pointer node to the root.
    let currentNode = this.root;

// we iterate through each character of the URL
    for (let char of url) {

// if the current node does not point to the next character in the URL,
//we know that URL does not exist in our visited set,
 //so we automatically return false,
      if (!currentNode.children.has(char)){
        return false
      } else {

      // otherwise we repeat the process, by changing our pointer
      //"current node" to the next node (it's child) and
      //continuing to check each node in the trie and each character in the URL
        currentNode = currentNode.children.get(char)
      }
    }

    // Once we iteriate through the URL to see if each node exists in the
    //tree, we check to see if it's a valid URL by returning whether the
    //last node is the "end of the URL," if it's not the end of the URL,
    //then false is returned rather than true.
    return currentNode.end
  }
}

//var testing = new Trie();
//console.log(testing)
//testing.save('www.dog.com')
//console.log(testing)
//testing.save('www.nat.com')
//console.log(testing)
//testing.save('www.nob.com')
//console.log(testing)
//testing.save('www.noba.com')
//console.log(testing.search('www.noba/bodylotion'))
//testing.save('www.noba.com/bodylotion')
//console.log(testing.search('www.noba.com/bodylotion'))
//console.log(testing.search('www.no'))
//console.log(testing.search('www.nob.com'))







