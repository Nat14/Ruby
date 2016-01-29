class Computer
    @@users = {}
    def initialize(username, password)
        @username = username
        @password = password
        @files = {}
        @@users[username] = password
    end
    
    def create(filename)
        @filename = filename
        @time = Time.now
        @files[filename] = @time
        puts "New file craeted"
    end
    
    def Computer.get_users
        return @@users
    end
end
my_computer = Computer.new("xx", "1233")
my_computer = Computer.new("rr", "ee33")
my_computer.create("a.doc")

puts Computer.get_users