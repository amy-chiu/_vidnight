class AddLastNameToUsers < ActiveRecord::Migration
  def up
  	add_column :users, :last_name, :string, :limit => 70, :null => false, :default => ""
  end

  def down
  	remove_column :users, :last_name
  end
end
