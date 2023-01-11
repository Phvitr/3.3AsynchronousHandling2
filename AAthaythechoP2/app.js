async function onMyBirthdayAsync(isGokuSick) {
    if (!isGokuSick) return 2;
    throw new Error("Kamehameha")
}

async function f() {
    try {
        let result = await onMyBirthdayAsync(true);
        console.log(`i have learned ${result}`)
    }
    catch (err) {
        console.log(err)
    }
    finally {
        console.log(`SuperSaiyan`)
    }
}
f();