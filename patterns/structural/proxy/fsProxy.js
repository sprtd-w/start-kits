class FileSystemProxy {
    constructor(fs) {
        this.fs = fs;
    }

    readFile(path, format, cb) {
        const fileExtenstion = path.split('.').pop() || '';
        if(fileExtenstion.toLowerCase() === 'exe') {
            return cb(
                new Error('Executable file')
            );
        }

        this.fs.readFile(path, format, (error, data) => {
            if (error) {
                console.log(error);
                return cb(error);
            }

            return cb(null, data);
        });
    }

}

module.exports = FileSystemProxy;