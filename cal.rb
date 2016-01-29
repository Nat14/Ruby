class Die
  def initialize
    roll
  end

  def roll
    @number = 1+rand(6)
  end

  def showing
    @number
  end
end


# puts Die.new.showing
dice = [Die.new, Die.new]
dice.each do |x|
  puts x.roll
  puts x.showing
end