class AddFirstNameToUsers < ActiveRecord::Migration
  def up
  	add_column :users, :first_name, :string, :limit => 70, :null => false, :default => "" 
  end

  def down
  	remove_column :users, :first_name
  end
end
