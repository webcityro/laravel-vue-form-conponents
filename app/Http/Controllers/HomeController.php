<?php

namespace FC\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller {

	public function __construct() {
		$this->middleware('auth');
	}

	public function index() {
		return view('hone');
	}
}
