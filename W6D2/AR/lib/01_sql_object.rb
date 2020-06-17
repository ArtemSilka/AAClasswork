require_relative 'db_connection'
require 'active_support/inflector'
# NB: the attr_accessor we wrote in phase 0 is NOT used in the rest
# of this project. It was only a warm up.

class SQLObject
  def self.columns
    return @columns if @columns
    results = DBConnection.execute2(<<-SQL)
      SELECT
        *
      FROM
        #{self.table_name}
      SQL
      
      @columns = results.first.map(&:to_sym)
  end

  def self.finalize!
    self.columns.each do |col_name|
      define_method(col_name) do
        self.attributes[col_name]
      end
    end

    self.columns.each do |col_name|
      define_method("#{col_name}=") do |value|
        self.attributes[col_name] = value
      end
    end
  end

  def self.table_name=(table_name)
    @table_name = table_name
  end

  def self.table_name
    @table_name || self.name.tableize
  end

  def self.all
    # results = DBConnection.execute(<<-SQL)
    #   SELECT
    #     #{@table_name}.*
    #   FROM
    #     {@table_name}
    # SQL
    
    # parse_all(results)
  end

  def self.parse_all(results)
  #   results.map {|result| self.new(result)}
  # end

  # def self.find(id)
  #   results = DBConnection.execute(<<-SQL, id)
  #     SELECT
  #       {@table_name}.*
  #     FROM
  #       {@table_name}
  #     WHERE
  #       {@table_name}.id = ?;
  #   SQL

  #   parse_all(results).first
  end

  def initialize(params = {})
    methods = []
    params.each do |attr_name, value|
      if self.class.columns.include?(attr_name.to_sym)
        methods << attr_name.to_sym
      else
        raise "unknown attribute '#{attr_name}'"
      end
    end
  end

  def attributes
    @attributes ||= {}
  end

  def attribute_values
    # ...
  end

  def insert
    # ...
  end

  def update
    # ...
  end

  def save
    # ...
  end
end
