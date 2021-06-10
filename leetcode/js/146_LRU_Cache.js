/**
 * LRU最少使用策略  选择最近最久未使用的页面予以淘汰。该算法赋予每个页面一个访问字段，
 * 用来记录一个页面自上次被访问以来所经历的时间 t，当须淘汰一个页面时，选择现有页面中其 t 值最大的，
 * 即最近最少使用的页面予以淘汰。
 * 
 https://leetcode-cn.com/problems/lru-cache/
 */

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.store = capacity
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {

};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */