@application.attributes.each do |key, value|
  json.set!(key, value) unless key == "created_at" || key == "updated_at"
end

[
  :previous_addresses,
  :employers, 
  :other_incomes,
  :banks, 
  :debts, 
  :emergencies, 
  :references, 
  :cars
].each do |link|
  json.set! link do
    json.array! @application.send(link)
  end
end
