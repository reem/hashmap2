var searchIndex = {};
searchIndex['hashmap2'] = {"items":[[0,"","hashmap2","",null,null],[3,"HashMap","","A hash map implementation which uses linear probing with Robin\nHood bucket stealing.",null,null],[3,"Iter","","HashMap iterator.",null,null],[3,"IterMut","","HashMap mutable values iterator.",null,null],[3,"IntoIter","","HashMap move iterator.",null,null],[3,"Keys","","HashMap keys iterator.",null,null],[3,"Values","","HashMap values iterator.",null,null],[3,"Drain","","HashMap drain iterator.",null,null],[3,"OccupiedEntry","","A view into a single occupied location in a HashMap.",null,null],[3,"VacantEntry","","A view into a single empty location in a HashMap.",null,null],[3,"RandomState","","`RandomState` is the default state for `HashMap` types.",null,null],[4,"Entry","","A view into a single location in a map, which may be vacant or occupied.",null,null],[13,"Occupied","","An occupied Entry.",0,null],[13,"Vacant","","A vacant Entry.",0,null],[11,"clone","","",1,{"inputs":[{"name":"hashmap"}],"output":{"name":"hashmap"}}],[11,"new","","Creates an empty HashMap.",1,{"inputs":[{"name":"hashmap"}],"output":{"name":"hashmap"}}],[11,"with_capacity","","Creates an empty hash map with the given initial capacity.",1,{"inputs":[{"name":"hashmap"},{"name":"usize"}],"output":{"name":"hashmap"}}],[11,"with_hash_state","","Creates an empty hashmap which will use the given hasher to hash keys.",1,{"inputs":[{"name":"hashmap"},{"name":"s"}],"output":{"name":"hashmap"}}],[11,"with_capacity_and_hash_state","","Creates an empty HashMap with space for at least `capacity`\nelements, using `hasher` to hash the keys.",1,{"inputs":[{"name":"hashmap"},{"name":"usize"},{"name":"s"}],"output":{"name":"hashmap"}}],[11,"capacity","","Returns the number of elements the map can hold without reallocating.",1,{"inputs":[{"name":"hashmap"}],"output":{"name":"usize"}}],[11,"reserve","","Reserves capacity for at least `additional` more elements to be inserted\nin the `HashMap`. The collection may reserve more space to avoid\nfrequent reallocations.",1,{"inputs":[{"name":"hashmap"},{"name":"usize"}],"output":null}],[11,"shrink_to_fit","","Shrinks the capacity of the map as much as possible. It will drop\ndown as much as possible while maintaining the internal rules\nand possibly leaving some space in accordance with the resize policy.",1,{"inputs":[{"name":"hashmap"}],"output":null}],[11,"keys","","An iterator visiting all keys in arbitrary order.\nIterator element type is `&'a K`.",1,{"inputs":[{"name":"hashmap"}],"output":{"name":"keys"}}],[11,"values","","An iterator visiting all values in arbitrary order.\nIterator element type is `&'a V`.",1,{"inputs":[{"name":"hashmap"}],"output":{"name":"values"}}],[11,"iter","","An iterator visiting all key-value pairs in arbitrary order.\nIterator element type is `(&'a K, &'a V)`.",1,{"inputs":[{"name":"hashmap"}],"output":{"name":"iter"}}],[11,"iter_mut","","An iterator visiting all key-value pairs in arbitrary order,\nwith mutable references to the values.\nIterator element type is `(&'a K, &'a mut V)`.",1,{"inputs":[{"name":"hashmap"}],"output":{"name":"itermut"}}],[11,"entry","","Gets the given key's corresponding entry in the map for in-place manipulation.",1,{"inputs":[{"name":"hashmap"},{"name":"k"}],"output":{"name":"entry"}}],[11,"entry2","","Gets the given key's corresponding entry in the map for in-place\nmanipulation. Only copies the key if a new entry is inserted.",1,{"inputs":[{"name":"hashmap"},{"name":"r"}],"output":{"name":"entry"}}],[11,"len","","Returns the number of elements in the map.",1,{"inputs":[{"name":"hashmap"}],"output":{"name":"usize"}}],[11,"is_empty","","Returns true if the map contains no elements.",1,{"inputs":[{"name":"hashmap"}],"output":{"name":"bool"}}],[11,"drain","","Clears the map, returning all key-value pairs as an iterator. Keeps the\nallocated memory for reuse.",1,{"inputs":[{"name":"hashmap"}],"output":{"name":"drain"}}],[11,"clear","","Clears the map, removing all key-value pairs. Keeps the allocated memory\nfor reuse.",1,{"inputs":[{"name":"hashmap"}],"output":null}],[11,"get","","Returns a reference to the value corresponding to the key.",1,{"inputs":[{"name":"hashmap"},{"name":"q"}],"output":{"name":"option"}}],[11,"contains_key","","Returns true if the map contains a value for the specified key.",1,{"inputs":[{"name":"hashmap"},{"name":"q"}],"output":{"name":"bool"}}],[11,"get_mut","","Returns a mutable reference to the value corresponding to the key.",1,{"inputs":[{"name":"hashmap"},{"name":"q"}],"output":{"name":"option"}}],[11,"insert","","Inserts a key-value pair into the map.",1,{"inputs":[{"name":"hashmap"},{"name":"k"},{"name":"v"}],"output":{"name":"option"}}],[11,"remove","","Removes a key from the map, returning the value at the key if the key\nwas previously in the map.",1,{"inputs":[{"name":"hashmap"},{"name":"q"}],"output":{"name":"option"}}],[11,"take","","Removes a key from the map, returning the (key, value) tuple at the key\nif the key was previously in the map.",1,{"inputs":[{"name":"hashmap"},{"name":"q"}],"output":{"name":"option"}}],[11,"eq","","",1,{"inputs":[{"name":"hashmap"},{"name":"hashmap"}],"output":{"name":"bool"}}],[11,"fmt","","",1,{"inputs":[{"name":"hashmap"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"default","","",1,{"inputs":[{"name":"hashmap"}],"output":{"name":"hashmap"}}],[11,"index","","",1,{"inputs":[{"name":"hashmap"},{"name":"q"}],"output":{"name":"v"}}],[11,"clone","","",2,{"inputs":[{"name":"iter"}],"output":{"name":"iter"}}],[11,"clone","","",3,{"inputs":[{"name":"keys"}],"output":{"name":"keys"}}],[11,"clone","","",4,{"inputs":[{"name":"values"}],"output":{"name":"values"}}],[11,"into_iter","","Creates a consuming iterator, that is, one that moves each key-value\npair out of the map in arbitrary order. The map cannot be used after\ncalling this.",1,{"inputs":[{"name":"hashmap"}],"output":{"name":"intoiter"}}],[11,"next","","",2,{"inputs":[{"name":"iter"}],"output":{"name":"option"}}],[11,"size_hint","","",2,null],[11,"len","","",2,{"inputs":[{"name":"iter"}],"output":{"name":"usize"}}],[11,"next","","",5,{"inputs":[{"name":"itermut"}],"output":{"name":"option"}}],[11,"size_hint","","",5,null],[11,"len","","",5,{"inputs":[{"name":"itermut"}],"output":{"name":"usize"}}],[11,"next","","",6,{"inputs":[{"name":"intoiter"}],"output":{"name":"option"}}],[11,"size_hint","","",6,null],[11,"len","","",6,{"inputs":[{"name":"intoiter"}],"output":{"name":"usize"}}],[11,"next","","",3,{"inputs":[{"name":"keys"}],"output":{"name":"option"}}],[11,"size_hint","","",3,null],[11,"len","","",3,{"inputs":[{"name":"keys"}],"output":{"name":"usize"}}],[11,"next","","",4,{"inputs":[{"name":"values"}],"output":{"name":"option"}}],[11,"size_hint","","",4,null],[11,"len","","",4,{"inputs":[{"name":"values"}],"output":{"name":"usize"}}],[11,"next","","",7,{"inputs":[{"name":"drain"}],"output":{"name":"option"}}],[11,"size_hint","","",7,null],[11,"len","","",7,{"inputs":[{"name":"drain"}],"output":{"name":"usize"}}],[11,"key","","Returns the entry key",0,{"inputs":[{"name":"entry"}],"output":{"name":"k"}}],[11,"or_insert","","Ensures a value is in the entry by inserting the default if empty, and returns\na mutable reference to the value in the entry.",0,{"inputs":[{"name":"entry"},{"name":"v"}],"output":{"name":"v"}}],[11,"or_insert_with","","Ensures a value is in the entry by inserting the result of the default function if empty,\nand returns a mutable reference to the value in the entry.",0,{"inputs":[{"name":"entry"},{"name":"f"}],"output":{"name":"v"}}],[11,"get","","Gets a reference to the value in the entry.",8,{"inputs":[{"name":"occupiedentry"}],"output":{"name":"v"}}],[11,"get_mut","","Gets a mutable reference to the value in the entry.",8,{"inputs":[{"name":"occupiedentry"}],"output":{"name":"v"}}],[11,"into_mut","","Converts the OccupiedEntry into a mutable reference to the value in the entry\nwith a lifetime bound to the map itself",8,{"inputs":[{"name":"occupiedentry"}],"output":{"name":"v"}}],[11,"insert","","Sets the value of the entry, and returns the entry's old value",8,{"inputs":[{"name":"occupiedentry"},{"name":"v"}],"output":{"name":"v"}}],[11,"remove","","Takes the value out of the entry, and returns it",8,{"inputs":[{"name":"occupiedentry"}],"output":{"name":"v"}}],[11,"key","","Gets a reference to the entry key",8,{"inputs":[{"name":"occupiedentry"}],"output":{"name":"k"}}],[11,"insert","","Sets the value of the entry with the VacantEntry's key,\nand returns a mutable reference to it",9,{"inputs":[{"name":"vacantentry"},{"name":"v"}],"output":{"name":"v"}}],[11,"key","","Gets a reference to the entry key",9,{"inputs":[{"name":"vacantentry"}],"output":{"name":"k"}}],[11,"from_iter","","",1,{"inputs":[{"name":"hashmap"},{"name":"t"}],"output":{"name":"hashmap"}}],[11,"extend","","",1,{"inputs":[{"name":"hashmap"},{"name":"t"}],"output":null}],[11,"extend","","",1,{"inputs":[{"name":"hashmap"},{"name":"t"}],"output":null}],[11,"clone","","",10,{"inputs":[{"name":"randomstate"}],"output":{"name":"randomstate"}}],[11,"new","","Constructs a new `RandomState` that is initialized with random keys.",10,{"inputs":[{"name":"randomstate"}],"output":{"name":"randomstate"}}],[11,"hasher","","",10,{"inputs":[{"name":"randomstate"}],"output":{"name":"siphasher"}}],[11,"default","","",10,{"inputs":[{"name":"randomstate"}],"output":{"name":"randomstate"}}]],"paths":[[4,"Entry"],[3,"HashMap"],[3,"Iter"],[3,"Keys"],[3,"Values"],[3,"IterMut"],[3,"IntoIter"],[3,"Drain"],[3,"OccupiedEntry"],[3,"VacantEntry"],[3,"RandomState"]]};
initSearch(searchIndex);
