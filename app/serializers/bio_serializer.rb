class BioSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :phone, :email, :linkedin
  has_one :user
end
