def decodeHuff(root, s):
	#Enter Your Code Here
    #Enter Your Code Here
    def is_leaf(r):
        return r.right == None and r.left == None
    
    cur = root
    res = ''
    for dig in s:
        if dig == '0':
            if is_leaf(cur.left):
                res += cur.left.data
                cur = root
            else:
                cur = cur.left
        else:
            if is_leaf(cur.right):
                res += cur.right.data
                cur = root
            else:
                cur = cur.right
    print (res)