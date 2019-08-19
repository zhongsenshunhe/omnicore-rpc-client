const RpcClient = require('bitcoin-core')

class OmniRpcClient extends RpcClient {
  constructor(options = {
    agentOptions,
    headers,
    host,
    logger,
    network,
    password,
    port,
    ssl,
    timeout,
    username,
    version,
    wallet,
  }) {
    super(options)
  }

  /**
   * omni_setautocommit
   * flag
   */
  omni_setautocommit = function (...args) {
    return this.command('omni_setautocommit', ...args)
  }

  /**
   * omni_getactivations
   */
  omni_getactivations = function (...args) {
    return this.command('omni_getactivations', ...args)
  }

  /**
   * omni_getactivecrowdsales
   */
  omni_getactivecrowdsales = function (...args) {
    return this.command('omni_getactivecrowdsales', ...args)
  }

  /**
   * omni_getactivedexsells
   * ( address )
   */
  omni_getactivedexsells = function (...args) {
    return this.command('omni_getactivedexsells', ...args)
  }

  /**
   * omni_getallbalancesforaddress
   * "address"
   */
  omni_getallbalancesforaddress = function (...args) {
    return this.command('omni_getallbalancesforaddress', ...args)
  }

  /**
   * omni_getallbalancesforid
   * propertyid
   */
  omni_getallbalancesforid = function (...args) {
    return this.command('omni_getallbalancesforid', ...args)
  }

  /**
   * omni_getbalance
   * "address" propertyid
   */
  omni_getbalance = function (...args) {
    return this.command('omni_getbalance', ...args)
  }

  /**
   * omni_getbalanceshash
   * propertyid
   */
  omni_getbalanceshash = function (...args) {
    return this.command('omni_getbalanceshash', ...args)
  }

  /**
   * omni_getcrowdsale
   * propertyid ( verbose )
   */
  omni_getcrowdsale = function (...args) {
    return this.command('omni_getcrowdsale', ...args)
  }

  /**
   * omni_getcurrentconsensushash
   */
  omni_getcurrentconsensushash = function (...args) {
    return this.command('omni_getcurrentconsensushash', ...args)
  }

  /**
   * omni_getfeecache
   * ( propertyid )
   */
  omni_getfeecache = function (...args) {
    return this.command('omni_getfeecache', ...args)
  }

  /**
   * omni_getfeedistribution
   * distributionid
   */
  omni_getfeedistribution = function (...args) {
    return this.command('omni_getfeedistribution', ...args)
  }

  /**
   * omni_getfeedistributions
   * propertyid
   */
  omni_getfeedistributions = function (...args) {
    return this.command('omni_getfeedistributions', ...args)
  }

  /**
   * omni_getfeeshare
   * ( address ecosystem )
   */
  omni_getfeeshare = function (...args) {
    return this.command('omni_getfeeshare', ...args)
  }

  /**
   * omni_getfeetrigger
   * ( propertyid )
   */
  omni_getfeetrigger = function (...args) {
    return this.command('omni_getfeetrigger', ...args)
  }

  /**
   * omni_getgrants
   * propertyid
   */
  omni_getgrants = function (...args) {
    return this.command('omni_getgrants', ...args)
  }

  /**
   * qweqeqwe
   */
  omni_getinfo = function (...args) {
    return this.command('omni_getinfo', ...args)
  }

  /**
   * omni_getmetadexhash
   * propertyId
   */
  omni_getmetadexhash = function (...args) {
    return this.command('omni_getmetadexhash', ...args)
  }

  /**
   * omni_getorderbook
   * propertyid ( propertyid )
   */
  omni_getorderbook = function (...args) {
    return this.command('omni_getorderbook', ...args)
  }

  /**
   * omni_getpayload
   * "txid"
   */
  omni_getpayload = function (...args) {
    return this.command('omni_getpayload', ...args)
  }

  /**
   * omni_getproperty
   * propertyid
   */
  omni_getproperty = function (...args) {
    return this.command('omni_getproperty', ...args)
  }

  /**
   * omni_getseedblocks
   * startblock endblock
   */
  omni_getseedblocks = function (...args) {
    return this.command('omni_getseedblocks', ...args)
  }

  /**
   * omni_getsto
   * "txid" "recipientfilter"
   */
  omni_getsto = function (...args) {
    return this.command('omni_getsto', ...args)
  }

  /**
   * omni_gettrade
   * "txid"
   */
  omni_gettrade = function (...args) {
    return this.command('omni_gettrade', ...args)
  }

  /**
   * omni_gettradehistoryforaddress
   * "address" ( count propertyid )
   */
  omni_gettradehistoryforaddress = function (...args) {
    return this.command('omni_gettradehistoryforaddress', ...args)
  }

  /**
   * omni_gettradehistoryforpair
   * propertyid propertyid ( count )
   */
  omni_gettradehistoryforpair = function (...args) {
    return this.command('omni_gettradehistoryforpair', ...args)
  }

  /**
   * omni_gettransaction
   * "txid"
   */
  omni_gettransaction = function (...args) {
    return this.command('omni_gettransaction', ...args)
  }

  /**
   * omni_getwalletaddressbalances
   * ( includewatchonly )
   */
  omni_getwalletaddressbalances = function (...args) {
    return this.command('omni_getwalletaddressbalances', ...args)
  }

  /**
   * omni_getwalletbalances
   * ( includewatchonly )
   */
  omni_getwalletbalances = function (...args) {
    return this.command('omni_getwalletbalances', ...args)
  }

  /**
   * omni_listblocktransactions
   * firstblock lastblock
   */
  omni_listblocktransactions = function (...args) {
    return this.command('omni_listblocktransactions', ...args)
  }

  /**
   * omni_listblocktransactions
   * index
   */
  omni_listblocktransactions = function (...args) {
    return this.command('omni_listblocktransactions', ...args)
  }

  /**
   * omni_listpendingtransactions
   * ( "address" )
   */
  omni_listpendingtransactions = function (...args) {
    return this.command('omni_listpendingtransactions', ...args)
  }

  /**
   * omni_listproperties
   */
  omni_listproperties = function (...args) {
    return this.command('omni_listproperties', ...args)
  }

  /**
   * omni_listtransactions
   * ( "address" count skip startblock endblock )
   */
  omni_listtransactions = function (...args) {
    return this.command('omni_listtransactions', ...args)
  }

  /**
   * omni_createpayload_cancelalltrades
   * ecosystem
   */
  omni_createpayload_cancelalltrades = function (...args) {
    return this.command('omni_createpayload_cancelalltrades', ...args)
  }

  /**
   * omni_createpayload_canceltradesbypair
   * propertyidforsale propertiddesired
   */
  omni_createpayload_canceltradesbypair = function (...args) {
    return this.command('omni_createpayload_canceltradesbypair', ...args)
  }

  /**
   * omni_createpayload_canceltradesbyprice
   * propertyidforsale "amountforsale" propertiddesired "amountdesired"
   */
  omni_createpayload_canceltradesbyprice = function (...args) {
    return this.command('omni_createpayload_canceltradesbyprice', ...args)
  }

  /**
   * omni_createpayload_changeissuer
   * propertyid
   */
  omni_createpayload_changeissuer = function (...args) {
    return this.command('omni_createpayload_changeissuer', ...args)
  }

  /**
   * omni_createpayload_closecrowdsale
   * propertyid
   */
  omni_createpayload_closecrowdsale = function (...args) {
    return this.command('omni_createpayload_closecrowdsale', ...args)
  }

  /**
   * omni_createpayload_dexaccept
   * propertyid "amount"
   */
  omni_createpayload_dexaccept = function (...args) {
    return this.command('omni_createpayload_dexaccept', ...args)
  }

  /**
   * omni_createpayload_dexsell
   * propertyidforsale "amountforsale" "amountdesired" paymentwindow minacceptfee action
   */
  omni_createpayload_dexsell = function (...args) {
    return this.command('omni_createpayload_dexsell', ...args)
  }

  /**
   * omni_createpayload_disablefreezing
   * propertyid
   */
  omni_createpayload_disablefreezing = function (...args) {
    return this.command('omni_createpayload_disablefreezing', ...args)
  }

  /**
   * omni_createpayload_enablefreezing
   * propertyid
   */
  omni_createpayload_enablefreezing = function (...args) {
    return this.command('omni_createpayload_enablefreezing', ...args)
  }

  /**
   * omni_createpayload_freeze
   * "toaddress" propertyid amount 
   */
  omni_createpayload_freeze = function (...args) {
    return this.command('omni_createpayload_freeze', ...args)
  }

  /**
   * omni_createpayload_grant
   * propertyid "amount" ( "memo" )
   */
  omni_createpayload_grant = function (...args) {
    return this.command('omni_createpayload_grant', ...args)
  }

  /**
   * omni_createpayload_issuancecrowdsale
   * ecosystem type previousid "category" "subcategory" "name" "url" "data" propertyiddesired tokensperunit deadline earlybonus issuerpercentage
   */
  omni_createpayload_issuancecrowdsale = function (...args) {
    return this.command('omni_createpayload_issuancecrowdsale', ...args)
  }

  /**
   * omni_createpayload_issuancefixed
   * ecosystem type previousid "category" "subcategory" "name" "url" "data" "amount"
   */
  omni_createpayload_issuancefixed = function (...args) {
    return this.command('omni_createpayload_issuancefixed', ...args)
  }

  /**
   * omni_createpayload_issuancemanaged
   * ecosystem type previousid "category" "subcategory" "name" "url" "data"
   */
  omni_createpayload_issuancemanaged = function (...args) {
    return this.command('omni_createpayload_issuancemanaged', ...args)
  }

  /**
   * omni_createpayload_revoke
   * propertyid "amount" ( "memo" )
   */
  omni_createpayload_revoke = function (...args) {
    return this.command('omni_createpayload_revoke', ...args)
  }

  /**
   * omni_createpayload_sendall
   * ecosystem
   */
  omni_createpayload_sendall = function (...args) {
    return this.command('omni_createpayload_sendall', ...args)
  }

  /**
   * omni_createpayload_simplesend
   * propertyid "amount"
   */
  omni_createpayload_simplesend = function (...args) {
    return this.command('omni_createpayload_simplesend', ...args)
  }

  /**
   * omni_createpayload_sto
   * propertyid "amount" ( distributionproperty )
   */
  omni_createpayload_sto = function (...args) {
    return this.command('omni_createpayload_sto', ...args)
  }

  /**
   * omni_createpayload_trade
   * propertyidforsale "amountforsale" propertiddesired "amountdesired"
   */
  omni_createpayload_trade = function (...args) {
    return this.command('omni_createpayload_trade', ...args)
  }

  /**
   * omni_createpayload_unfreeze
   * "toaddress" propertyid amount 
   */
  omni_createpayload_unfreeze = function (...args) {
    return this.command('omni_createpayload_unfreeze', ...args)
  }

  /**
   * omni_createrawtx_change
   * "rawtx" "prevtxs" "destination" fee ( position )
   */
  omni_createrawtx_change = function (...args) {
    return this.command('omni_createrawtx_change', ...args)
  }

  /**
   * omni_createrawtx_input
   * "rawtx" "txid" n
   */
  omni_createrawtx_input = function (...args) {
    return this.command('omni_createrawtx_input', ...args)
  }

  /**
   * omni_createrawtx_multisig
   * "rawtx" "payload" "seed" "redeemkey"
   */
  omni_createrawtx_multisig = function (...args) {
    return this.command('omni_createrawtx_multisig', ...args)
  }

  /**
   * omni_createrawtx_opreturn
   * "rawtx" "payload"
   */
  omni_createrawtx_opreturn = function (...args) {
    return this.command('omni_createrawtx_opreturn', ...args)
  }

  /**
   * omni_createrawtx_reference
   * "rawtx" "destination" ( amount )
   */
  omni_createrawtx_reference = function (...args) {
    return this.command('omni_createrawtx_reference', ...args)
  }

  /**
   * omni_decodetransaction
   * "rawtx" ( "prevtxs" height )
   */
  omni_decodetransaction = function (...args) {
    return this.command('omni_decodetransaction', ...args)
  }

  /**
   * omni_funded_send
   * "fromaddress" "toaddress" propertyid "amount" "feeaddress"
   */
  omni_funded_send = function (...args) {
    return this.command('omni_funded_send', ...args)
  }

  /**
   * omni_funded_sendall
   * "fromaddress" "toaddress" ecosystem "feeaddress"
   */
  omni_funded_sendall = function (...args) {
    return this.command('omni_funded_sendall', ...args)
  }

  /**
   * omni_send
   * "fromaddress" "toaddress" propertyid "amount" ( "redeemaddress" "referenceamount" )
   */
  omni_send = function (...args) {
    return this.command('omni_send', ...args)
  }

  /**
   * omni_sendall
   * "fromaddress" "toaddress" ecosystem ( "redeemaddress" "referenceamount" )
   */
  omni_sendall = function (...args) {
    return this.command('omni_sendall', ...args)
  }

  /**
   * omni_sendcancelalltrades
   * "fromaddress" ecosystem
   */
  omni_sendcancelalltrades = function (...args) {
    return this.command('omni_sendcancelalltrades', ...args)
  }

  /**
   * omni_sendcanceltradesbypair
   * "fromaddress" propertyidforsale propertiddesired
   */
  omni_sendcanceltradesbypair = function (...args) {
    return this.command('omni_sendcanceltradesbypair', ...args)
  }

  /**
   * omni_sendcanceltradesbyprice
   * "fromaddress" propertyidforsale "amountforsale" propertiddesired "amountdesired"
   */
  omni_sendcanceltradesbyprice = function (...args) {
    return this.command('omni_sendcanceltradesbyprice', ...args)
  }

  /**
   * omni_sendchangeissuer
   * "fromaddress" "toaddress" propertyid
   */
  omni_sendchangeissuer = function (...args) {
    return this.command('omni_sendchangeissuer', ...args)
  }

  /**
   * omni_sendclosecrowdsale
   * "fromaddress" propertyid
   */
  omni_sendclosecrowdsale = function (...args) {
    return this.command('omni_sendclosecrowdsale', ...args)
  }

  /**
   * omni_senddexaccept
   * "fromaddress" "toaddress" propertyid "amount" ( override )
   */
  omni_senddexaccept = function (...args) {
    return this.command('omni_senddexaccept', ...args)
  }

  /**
   * omni_senddexsell
   * "fromaddress" propertyidforsale "amountforsale" "amountdesired" paymentwindow minacceptfee action
   */
  omni_senddexsell = function (...args) {
    return this.command('omni_senddexsell', ...args)
  }

  /**
   * omni_senddisablefreezing
   * "fromaddress" propertyid
   */
  omni_senddisablefreezing = function (...args) {
    return this.command('omni_senddisablefreezing', ...args)
  }

  /**
   * omni_sendenablefreezing
   * "fromaddress" propertyid
   */
  omni_sendenablefreezing = function (...args) {
    return this.command('omni_sendenablefreezing', ...args)
  }

  /**
   * omni_sendfreeze
   * "fromaddress" "toaddress" propertyid amount 
   */
  omni_sendfreeze = function (...args) {
    return this.command('omni_sendfreeze', ...args)
  }

  /**
   * omni_sendgrant
   * "fromaddress" "toaddress" propertyid "amount" ( "memo" )
   */
  omni_sendgrant = function (...args) {
    return this.command('omni_sendgrant', ...args)
  }

  /**
   * omni_sendissuancecrowdsale
   * "fromaddress" ecosystem type previousid "category" "subcategory" "name" "url" "data" propertyiddesired tokensperunit deadline ( earlybonus issuerpercentage )
   */
  omni_sendissuancecrowdsale = function (...args) {
    return this.command('omni_sendissuancecrowdsale', ...args)
  }

  /**
   * omni_sendissuancefixed
   * "fromaddress" ecosystem type previousid "category" "subcategory" "name" "url" "data" "amount"
   */
  omni_sendissuancefixed = function (...args) {
    return this.command('omni_sendissuancefixed', ...args)
  }

  /**
   * omni_sendissuancemanaged
   * "fromaddress" ecosystem type previousid "category" "subcategory" "name" "url" "data"
   */
  omni_sendissuancemanaged = function (...args) {
    return this.command('omni_sendissuancemanaged', ...args)
  }

  /**
   * omni_sendrawtx
   * "fromaddress" "rawtransaction" ( "referenceaddress" "redeemaddress" "referenceamount" )
   */
  omni_sendrawtx = function (...args) {
    return this.command('omni_sendrawtx', ...args)
  }

  /**
   * omni_sendrevoke
   * "fromaddress" propertyid "amount" ( "memo" )
   */
  omni_sendrevoke = function (...args) {
    return this.command('omni_sendrevoke', ...args)
  }

  /**
   * omni_sendsto
   * "fromaddress" propertyid "amount" ( "redeemaddress" distributionproperty )
   */
  omni_sendsto = function (...args) {
    return this.command('omni_sendsto', ...args)
  }

  /**
   * omni_sendtrade
   * "fromaddress" propertyidforsale "amountforsale" propertiddesired "amountdesired"
   */
  omni_sendtrade = function (...args) {
    return this.command('omni_sendtrade', ...args)
  }

  /**
   * omni_sendunfreeze
   * "fromaddress" "toaddress" propertyid amount 
   */
  omni_sendunfreeze = function (...args) {
    return this.command('omni_sendunfreeze', ...args)
  }
}

module.exports = OmniRpcClient
