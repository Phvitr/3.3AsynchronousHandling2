async function getDivision(a,b) {
    if (b !== 0) return a/b;
    return new Error(`Lỗi rồi bạn ơi, là do bạn chưa làm chủ được sức mạnh của mình đấy!`);
}

async function f() {
    try {
        let result = await getDivision(2,0);
        console.log(result);
    }
    catch (err) {
        console.log(err);
    }
}
f();